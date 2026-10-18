require('dotenv').config();

const crypto = require('crypto');
const express = require('express');
const { Bot, GrammyError } = require('grammy');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

// Behind Vercel / Nginx / Cloudflare, set TRUST_PROXY=1 so req.ip is the real client IP.
// If you run directly on the internet, leave it unset (otherwise IPs can be spoofed).
if (process.env.TRUST_PROXY) {
    app.set('trust proxy', Number(process.env.TRUST_PROXY) || process.env.TRUST_PROXY);
}
app.disable('x-powered-by');

// ---------------------------------------------------------------------------
// Basic hardening
// ---------------------------------------------------------------------------
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Small body limit: a contact form never needs more than a few KB.
app.use(express.json({ limit: '10kb' }));
app.use(express.static('public'));

// ---------------------------------------------------------------------------
// Telegram bot
// ---------------------------------------------------------------------------
const bot = BOT_TOKEN ? new Bot(BOT_TOKEN) : null;

if (bot) {
    bot.command('start', async (ctx) => {
        await ctx.reply('Hello! The bot is running.');
    });

    bot.command('help', async (ctx) => {
        await ctx.reply('Available commands:\n/start - Start the bot\n/help - Show help');
    });

    bot.catch((err) => {
        console.error('Bot error:', err.message);
    });
} else {
    console.warn('Telegram bot disabled: missing BOT_TOKEN environment variable.');
}

// ---------------------------------------------------------------------------
// Rate limiter (in-memory sliding window, no extra dependencies)
// ---------------------------------------------------------------------------
function createRateLimiter({ windowMs, max, message, keyGenerator = (req) => req.ip }) {
    const hits = new Map(); // key -> array of timestamps

    // Periodic cleanup so the map can't grow forever.
    setInterval(() => {
        const now = Date.now();
        for (const [key, stamps] of hits) {
            const fresh = stamps.filter((t) => now - t < windowMs);
            if (fresh.length) hits.set(key, fresh);
            else hits.delete(key);
        }
    }, Math.min(windowMs, 60 * 1000)).unref();

    return (req, res, next) => {
        const now = Date.now();
        const key = keyGenerator(req);
        const stamps = (hits.get(key) || []).filter((t) => now - t < windowMs);

        if (stamps.length >= max) {
            const retryAfter = Math.max(1, Math.ceil((stamps[0] + windowMs - now) / 1000));
            res.setHeader('Retry-After', retryAfter);
            return res.status(429).json({
                success: false,
                error: message || 'Too many requests. Please try again later.',
                retryAfter
            });
        }

        stamps.push(now);
        hits.set(key, stamps);
        next();
    };
}

// Layer 1: burst protection per IP (3 submissions / 10 minutes)
const perIpShort = createRateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 3,
    message: 'You are sending messages too quickly. Please wait a few minutes.'
});

// Layer 2: daily cap per IP (10 submissions / 24 hours)
const perIpDaily = createRateLimiter({
    windowMs: 24 * 60 * 60 * 1000,
    max: 10,
    message: 'Daily message limit reached. Please try again tomorrow.'
});

// Layer 3: global cap so a botnet can't flood your Telegram chat (40 / hour total)
const globalLimit = createRateLimiter({
    windowMs: 60 * 60 * 1000,
    max: 40,
    keyGenerator: () => 'global',
    message: 'The contact form is temporarily busy. Please try again later.'
});

// ---------------------------------------------------------------------------
// Validation / sanitization
// ---------------------------------------------------------------------------
const LIMITS = {
    name: { min: 2, max: 80 },
    email: { min: 5, max: 254 },
    subject: { min: 3, max: 120 },
    message: { min: 10, max: 2000 }
};

const MAX_LINKS = 2;
const MIN_FILL_TIME_MS = 3000; // humans don't fill a form in under 3s
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;

// Invisible / control / bidi-override characters used for spoofing and spam.
const INVISIBLE_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200D\u2060\uFEFF\u202A-\u202E\u2066-\u2069]/g;

const EMAIL_REGEX = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/;

const DISPOSABLE_DOMAINS = new Set([
    'mailinator.com', 'guerrillamail.com', '10minutemail.com', 'tempmail.com',
    'temp-mail.org', 'yopmail.com', 'trashmail.com', 'sharklasers.com',
    'getnada.com', 'throwawaymail.com'
]);

const SPAM_PATTERNS = [
    /\b(viagra|cialis|casino|crypto\s*giveaway|forex\s*signals?|seo\s*services?|backlinks?)\b/i,
    /\b(earn|make)\s+\$?\d+[\d,]*\s*(per|a|\/)\s*(day|week|hour)\b/i,
    /\bclick\s+here\b.*\bhttps?:\/\//i
];

function cleanSingleLine(value) {
    return value.normalize('NFKC').replace(INVISIBLE_CHARS, '').replace(/\s+/g, ' ').trim();
}

function cleanMultiLine(value) {
    return value
        .normalize('NFKC')
        .replace(/\r\n?/g, '\n')
        .replace(INVISIBLE_CHARS, (c) => (c === '\n' ? c : ''))
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function countLinks(text) {
    return (text.match(/(https?:\/\/|www\.)\S+/gi) || []).length;
}

function hasRepeatedJunk(text) {
    // Same character 15+ times in a row, e.g. "aaaaaaaaaaaaaaaa"
    return /(.)\1{14,}/.test(text);
}

function validateContact(body) {
    const errors = {};

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return { ok: false, errors: { _form: 'Invalid request body.' } };
    }

    const raw = {};
    for (const field of ['name', 'email', 'subject', 'message']) {
        if (typeof body[field] !== 'string') {
            errors[field] = 'This field is required.';
        } else {
            raw[field] = body[field];
        }
    }
    if (Object.keys(errors).length) return { ok: false, errors };

    // Cheap pre-check before doing any normalization work on huge strings.
    for (const field of Object.keys(raw)) {
        if (raw[field].length > LIMITS[field].max * 4) {
            errors[field] = `Must be at most ${LIMITS[field].max} characters.`;
        }
    }
    if (Object.keys(errors).length) return { ok: false, errors };

    const data = {
        name: cleanSingleLine(raw.name),
        email: cleanSingleLine(raw.email).toLowerCase(),
        subject: cleanSingleLine(raw.subject),
        message: cleanMultiLine(raw.message)
    };

    for (const field of Object.keys(data)) {
        const len = data[field].length;
        if (len === 0) errors[field] = 'This field is required.';
        else if (len < LIMITS[field].min) errors[field] = `Must be at least ${LIMITS[field].min} characters.`;
        else if (len > LIMITS[field].max) errors[field] = `Must be at most ${LIMITS[field].max} characters.`;
    }

    if (!errors.email) {
        if (!EMAIL_REGEX.test(data.email) || data.email.includes('..')) {
            errors.email = 'Please enter a valid email address.';
        } else if (DISPOSABLE_DOMAINS.has(data.email.split('@')[1])) {
            errors.email = 'Disposable email addresses are not allowed.';
        }
    }

    if (!errors.name && /https?:\/\/|www\./i.test(data.name)) {
        errors.name = 'Name cannot contain links.';
    }

    if (!errors.message) {
        if (countLinks(data.message) > MAX_LINKS) {
            errors.message = `Please include at most ${MAX_LINKS} links.`;
        } else if (hasRepeatedJunk(data.message) || hasRepeatedJunk(data.subject)) {
            errors.message = 'Your message looks like spam.';
        } else if (SPAM_PATTERNS.some((re) => re.test(`${data.subject}\n${data.message}`))) {
            errors.message = 'Your message looks like spam.';
        }
    }

    return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

// Anti-bot signals (honeypot + time trap). Both are optional on the client side,
// so the current frontend keeps working until you add them.
function looksLikeBot(body) {
    // Honeypot: a hidden input named "website" that humans never fill.
    if (typeof body.website === 'string' && body.website.trim() !== '') return true;

    // Time trap: client sends the timestamp when the form was rendered as "_t".
    if (body._t !== undefined) {
        const rendered = Number(body._t);
        const age = Date.now() - rendered;
        if (!Number.isFinite(rendered) || age < MIN_FILL_TIME_MS || age > MAX_FORM_AGE_MS) {
            return true;
        }
    }
    return false;
}

// Duplicate-message detection (same sender + same text within 10 minutes).
const recentMessages = new Map(); // hash -> timestamp

setInterval(() => {
    const now = Date.now();
    for (const [hash, t] of recentMessages) {
        if (now - t > DUPLICATE_WINDOW_MS) recentMessages.delete(hash);
    }
}, 60 * 1000).unref();

function isDuplicate({ email, subject, message }) {
    const hash = crypto
        .createHash('sha256')
        .update(`${email}\n${subject}\n${message}`)
        .digest('hex');
    const seen = recentMessages.get(hash);
    if (seen && Date.now() - seen < DUPLICATE_WINDOW_MS) return true;
    recentMessages.set(hash, Date.now());
    return false;
}

// ---------------------------------------------------------------------------
// Telegram message formatting
// ---------------------------------------------------------------------------
const TIMEZONE = process.env.TIMEZONE || 'Asia/Amman';
const TELEGRAM_MAX = 4000; // hard limit is 4096; keep a safety margin

// Telegram's HTML mode only needs these three characters escaped.
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function formatTimestamp(date = new Date()) {
    try {
        return new Intl.DateTimeFormat('en-GB', {
            timeZone: TIMEZONE,
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(date);
    } catch {
        return date.toISOString();
    }
}

function buildTelegramMessage({ name, email, subject, message, ip }) {
    const build = (body) => [
        '📬 <b>New Portfolio Contact</b>',
        '',
        `👤 <b>Name:</b> ${escapeHtml(name)}`,
        `📧 <b>Email:</b> ${escapeHtml(email)}`,
        `📌 <b>Subject:</b> ${escapeHtml(subject)}`,
        '',
        '💬 <b>Message</b>',
        `<blockquote>${escapeHtml(body)}</blockquote>`,
        '',
        `🌐 <code>${escapeHtml(ip)}</code>  •  🕒 ${escapeHtml(formatTimestamp())}`
    ].join('\n');

    // Truncate the RAW text before escaping so we never cut an HTML entity in half.
    let body = message;
    let text = build(body);
    while (text.length > TELEGRAM_MAX && body.length > 0) {
        body = body.slice(0, Math.floor(body.length * 0.9)).trimEnd();
        text = build(`${body}…`);
    }
    return text;
}

function buildPlainFallback({ name, email, subject, message, ip }) {
    return [
        'New Portfolio Contact',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        `IP: ${ip}`,
        `Time: ${formatTimestamp()}`,
        '',
        'Message:',
        message
    ].join('\n').slice(0, TELEGRAM_MAX);
}

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ ok: true, bot: Boolean(bot), contactConfigured: Boolean(bot && chatId) });
});

// Order matters: cheap checks first, so abusers burn their quota quickly.
app.post('/api/contact', globalLimit, perIpShort, perIpDaily, async (req, res) => {
    try {
        const body = req.body || {};

        // 1) Bots: pretend success so they don't learn what tripped them.
        if (looksLikeBot(body)) {
            console.warn(`Blocked bot submission from ${req.ip}`);
            return res.json({ success: true });
        }

        // 2) Validate + sanitize.
        const result = validateContact(body);
        if (!result.ok) {
            return res.status(400).json({
                success: false,
                error: 'Please fix the highlighted fields.',
                fields: result.errors
            });
        }
        const { name, email, subject, message } = result.data;

        // 3) Duplicate protection.
        if (isDuplicate(result.data)) {
            return res.status(409).json({
                success: false,
                error: 'This message was already sent. Please wait before sending it again.'
            });
        }

        if (!bot || !chatId) {
            return res.status(503).json({
                success: false,
                error: 'The contact form is not configured yet.'
            });
        }

        // All user input is HTML-escaped inside buildTelegramMessage, so it
        // can't inject tags or links into the notification.
        const payload = { name, email, subject, message, ip: req.ip };

        try {
            await bot.api.sendMessage(chatId, buildTelegramMessage(payload), {
                parse_mode: 'HTML',
                link_preview_options: { is_disabled: true }
            });
        } catch (sendError) {
            // If Telegram rejects the formatting, still deliver the message as plain text.
            if (
                sendError instanceof GrammyError &&
                sendError.error_code === 400 &&
                /parse entities/i.test(sendError.description || '')
            ) {
                await bot.api.sendMessage(chatId, buildPlainFallback(payload));
            } else {
                throw sendError;
            }
        }

        return res.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error.message);

        // Telegram itself rate-limiting us.
        if (error instanceof GrammyError && error.error_code === 429) {
            const retryAfter = error.parameters?.retry_after || 30;
            res.setHeader('Retry-After', retryAfter);
            return res.status(503).json({
                success: false,
                error: 'Service is busy. Please try again shortly.'
            });
        }

        return res.status(500).json({
            success: false,
            error: 'Could not send your message.'
        });
    }
});

// ---------------------------------------------------------------------------
// Error handling (malformed JSON, oversized bodies)
// ---------------------------------------------------------------------------
app.use((err, req, res, next) => {
    if (err.type === 'entity.too.large') {
        return res.status(413).json({ success: false, error: 'Request is too large.' });
    }
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({ success: false, error: 'Invalid JSON.' });
    }
    console.error('Unhandled error:', err.message);
    return res.status(500).json({ success: false, error: 'Internal server error.' });
});

// ---------------------------------------------------------------------------
// Startup
// ---------------------------------------------------------------------------
// Start the Express server immediately, then the Telegram bot in the background.
async function main() {
    app.listen(PORT, () => {
        console.log(`Express server running at http://localhost:${PORT}`);
    });

    if (!bot) {
        console.log('Telegram bot not started because BOT_TOKEN is missing.');
        return;
    }

    try {
        await bot.start({
            onStart: async (botInfo) => {
                console.log(`Telegram bot @${botInfo.username} is running`);
            },
        });
    } catch (error) {
        console.error('Telegram bot failed to start:', error.message);
    }
}

main().catch(console.error);