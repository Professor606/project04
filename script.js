// ── Your details (change them here, not inside the page code) ───────────────
const EMAIL = 'ahmadessam3300@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/ellprofessor';
const GITHUB_URL = 'https://github.com/Professor606';
const LOCATION = 'Amman, Jordan';
// Path to your CV. Leave it '' to hide the "Download CV" button.
const RESUME_URL = 'assets/Ahmad-Essam-CV.pdf';

// ── Translations: all the text on the page, in English (en) and Arabic (ar) ─
const translations = {
    en: {
        dir: 'ltr',
        lang: 'en',
        meta: {
            title: 'Ahmad Essam Abu Laban | Application Security & Penetration Testing',
            description: 'Application security and penetration testing practitioner focused on web and API security, vulnerability research, security automation, and cloud infrastructure. Disclosed high-severity vulnerabilities and earned a $100 security competition award.'
        },
        nav: {
            about: 'About',
            projects: 'Projects',
            achievements: 'Achievements',
            hobbies: 'Hobbies',
            contact: 'Contact',
            switchLabel: 'عربي'
        },
        hero: {
            badge: 'Application Security & Vulnerability Research',
            hi: "Hi, I'm",
            name: 'Ahmad Essam Abu Laban',
            tagline: 'I identify web application vulnerabilities, assess security impact, and build practical tools for security testing. Combining hands-on vulnerability research with software development, automation, and cloud infrastructure.',
            resume: 'Download CV',
            contact: 'Contact Me',
            linkedin: 'LinkedIn',
            github: 'GitHub'
        },
        about: {
            title: 'About Me',
            highlight: 'Application Security & Vulnerability Research',
            bodyPre: '',
            bodyPost: ' focused on web application security, API testing, vulnerability research, and security automation. Identified and responsibly disclosed a Cross-Context Script Execution vulnerability reported at CVSS 8.3 and an IDOR vulnerability reported at CVSS 7.1 in a production information system that could expose sensitive information associated with 15,000+ users. Earned a $100 award for identifying an authentication-bypass vulnerability. Builds practical security and development tools using JavaScript, Node.js, REST APIs, and Linux, with hands-on exposure to AWS infrastructure. Brings analytical thinking, systematic troubleshooting, technical documentation, independent problem-solving, and a focus on evidence-based security findings.'
        },
        skills: {
            title: 'Technical Skills',
            categories: [
                {
                    title: 'Application Security',
                    skills: [
                        'Web Application Pentesting',
                        'API Security Testing',
                        'Vulnerability Assessment',
                        'Authentication & Access Control',
                        'Burp Suite'
                    ]
                },
                {
                    title: 'Cloud & Systems',
                    skills: [
                        'AWS EC2',
                        'Linux Admin (Ubuntu/Debian)',
                        'VPS Configuration',
                        'Networking',
                        'Troubleshooting',
                        'SSH',
                        'Docker'
                    ]
                },
                {
                    title: 'Development',
                    skills: [
                        'JavaScript',
                        'Node.js',
                        'Express.js',
                        'Next.js',
                        'HTML/CSS',
                        'Git',
                        'GitHub',
                        'REST APIs',
                        'TypeScript'
                    ]
                }
            ]
        },
        projects: {
            title: 'Key Projects',
            items: [
                {
                    title: 'Nexus MCP',
                    link: 'https://github.com/professor606/nexus-mcp',
                    bullets: [
                        'Developed a high-performance Model Context Protocol (MCP) server for security professionals, integrating AI assistants with industry-standard penetration testing and bug bounty tools.',
                        'Implemented profile-based toolsets, smart chaining for multi-tool workflows, and AI-driven suggestions to optimize context windows and enhance security assessment efficiency.',
                        'Engineered robust security controls, including explicit opt-in requirements and AST-based validation for high-risk exploit tools to mitigate arbitrary remote code execution (RCE) risks.'
                    ]
                },
                {
                    title: 'PingPoint — Web-Based HTTP Client',
                    link: 'https://github.com/Professor606/PingPoint',
                    bullets: [
                        'Engineered a lightweight, purely web-based HTTP client to test APIs, craft custom requests, and analyze responses directly from the browser without desktop installation dependencies.',
                        'Implemented a clear UI for executing complete HTTP methods (GET, POST, PUT, DELETE, PATCH), injecting custom headers/parameters, and rendering real-time response bodies with metric timings using vanilla HTML, CSS, and JavaScript.'
                    ]
                },
                {
                    title: 'Web Fingerprinting & Client Data Exposure Audit',
                    link: 'https://github.com/Professor606/web-fingerprinting',
                    bullets: [
                        'Built a full-stack web application (Node.js, Express.js) that demonstrates the extent of user data collectable from a single link click, including IP-based geolocation, screen resolution and color depth, and platform/OS information.',
                        'Highlighted real-world privacy risks in web tracking and browser fingerprinting for security awareness.'
                    ]
                },
                {
                    title: 'Network Security Simulation — Evil Twin & Captive Portal',
                    link: 'https://github.com/Professor606/Evil-Twin-Captive-Portal',
                    bullets: [
                        'Engineered a controlled lab environment using hostapd, dnsmasq, and a custom Node.js captive portal to simulate Evil Twin attacks and WPA2 handshake capture.',
                        'Documented network segmentation weaknesses and proposed mitigation strategies for enterprise Wi-Fi security.'
                    ]
                },
                {
                    title: 'OpenClaw — AI Personal Productivity Assistant',
                    bullets: [
                        'Deployed an AI-powered assistant on AWS EC2 for automated task scheduling, daily workflow optimization, health tracking, and real-time data retrieval.',
                        'Integrated API services and built custom automation pipelines to streamline personal productivity.'
                    ]
                }
            ]
        },
        achievements: {
            title: 'Achievements',
            items: [
                {
                    title: 'Responsible Disclosure',
                    org: 'Learning Management System (LMS)',
                    date: '2026',
                    description: 'Discovered and responsibly disclosed a  high-severity Cross-Context Script Execution vulnerability (CVSS 8.3) in a live Learning Management System (LMS), potentially enabling unauthorized access to sensitive user information and grade manipulation.'
                },
                {
                    title: 'Responsible Disclosure',
                    org: 'Student Information System (SIS) Portal',
                    date: '2025',
                    description: 'Discovered and responsibly disclosed a high-severity Insecure Direct Object Reference (IDOR) vulnerability (CVSS 7.1) in a live Student Information System (SIS), potentially exposing sensitive information belonging to 15,000+ users.',
                    link: 'https://github.com/Professor606/vulnerability-writeups/tree/main/2025/Web-Applications/IDOR-Student-Portal',
                    linkLabel: 'Write-up'
                },
                {
                    title: 'Bug Bounty Winner',
                    org: 'ANU',
                    date: '2025',
                    description: 'Identified a high-severity authentication bypass vulnerability during a university competition, earning a $100 bounty award.'
                },
                {
                    title: 'TryHackMe Advent of Cyber',
                    org: 'TryHackMe',
                    date: '2025',
                    description: 'Completed all 24 daily challenges spanning SOC operations, web exploitation, log analysis, and digital forensics.'
                },
                {
                    title: 'HackTheBox University CTF 2025',
                    org: 'HackTheBox',
                    date: '2025',
                    description: 'Placed 370th out of 1,014 competing teams in the global university-tier CTF competition.'
                }
            ]
        },
        journey: {
            title: 'My Journey',
            educationLabel: 'Education',
            university: 'Ajloun National University',
            degree: 'B.Sc. in Cybersecurity and Cloud Computing',
            graduation: 'Expected Graduation: 2028',
            location: 'Ajloun, Jordan'
        },
        languages: {
            title: 'Languages',
            items: [
                { flag: '🇯🇴', name: 'Arabic', level: 'Native' },
                { flag: '🇬🇧', name: 'English', level: 'Advanced' }
            ]
        },
        hobbies: {
            title: 'Hobbies & Interests',
            items: [
                {
                    icon: '💻',
                    title: 'Building and Experimenting',
                    text: 'I enjoy exploring new tools, experimenting with security labs, and turning ideas into practical side projects.'
                },
                {
                    icon: '🔐',
                    title: 'Cybersecurity Practice',
                    text: 'I like testing vulnerabilities in controlled environments, reading write-ups, and improving my offensive security workflow.'
                },
                {
                    icon: '📚',
                    title: 'Learning & Reading',
                    text: 'I spend time reading technical articles, learning from open-source communities, and staying current on cloud and security trends.'
                },
                {
                    icon: '🏃',
                    title: 'Outdoors & Movement',
                    text: 'I value balance through hiking, walking, and staying active to stay creative and focused.'
                }
            ]
        },
        contact: {
            title: 'Contact Me',
            intro: 'Have a project idea, research inquiry, or collaboration opportunity? I’d love to hear from you.',
            infoTitle: 'Let’s connect',
            infoText: 'Whether it’s a security discussion, development idea, or internship opportunity, I’m open to meaningful conversations.',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            send: 'Send Message',
            success: 'Thanks! Your message has been prepared and can be sent through your email client.'
        },
        footer: { name: 'Ahmad Essam Abu Laban', rights: 'All rights reserved.' }
    },
    ar: {
        dir: 'rtl',
        lang: 'ar',
        meta: {
            title: 'أحمد عصام أبو لبن | أمن التطبيقات واختبار الاختراق',
            description: 'ممارس في مجال أمن التطبيقات واختبار الاختراق، أركز على أمن الويب وواجهات برمجة التطبيقات (API)، وبحوث الثغرات، وأتمتة المهام الأمنية، والبنية التحتية السحابية. اكتشفت وأبلغت عن ثغرات أمنية عالية الخطورة وحصلت على جائزة بقيمة 100 دولار في إحدى المسابقات الأمنية.'
        },
        nav: {
            about: 'نبذة عني',
            projects: 'المشاريع',
            achievements: 'الإنجازات',
            hobbies: 'الهوايات',
            contact: 'التواصل',
            switchLabel: 'English'
        },
        hero: {
            badge: 'أمن التطبيقات وبحوث الثغرات',
            hi: 'مرحباً، أنا',
            name: 'أحمد عصام أبو لبن',
            tagline: 'أعمل على اكتشاف ثغرات تطبيقات الويب، وتقييم تأثيرها الأمني، وبناء أدوات عملية لاختبار الأمان. أجمع بين الخبرة العملية في بحوث الثغرات وتطوير البرمجيات، والأتمتة، والبنية التحتية السحابية.',
            resume: 'تحميل السيرة الذاتية',
            contact: 'تواصل معي',
            linkedin: 'LinkedIn',
            github: 'GitHub'
        },
        about: {
            title: 'نبذة عني',
            highlight: 'أمن التطبيقات وبحوث الثغرات',
            bodyPre: '',
            bodyPost: ' أركز على أمن تطبيقات الويب، واختبار واجهات برمجة التطبيقات (API)، وبحوث الثغرات، والأتمتة الأمنية. قمت باكتشاف والإبلاغ المسؤول عن ثغرة (Cross-Context Script Execution) تم تقييمها بدرجة خطورة (CVSS 8.3)، وثغرة (IDOR) بدرجة (CVSS 7.1) في نظام معلوماتي حي كان من الممكن أن تؤدي إلى تسريب معلومات حساسة لأكثر من 15,000 مستخدم. حصلت على جائزة بقيمة 100 دولار لاكتشافي ثغرة تجاوز المصادقة (Authentication-bypass). أعمل على تطوير أدوات أمنية وبرمجية عملية باستخدام JavaScript و Node.js و REST APIs وأنظمة Linux، بالإضافة إلى خبرة عملية في البنية التحتية لسحابة AWS. أتميز بالتفكير التحليلي، والمنهجية في استكشاف الأخطاء وإصلاحها، والتوثيق الفني، والقدرة على حل المشكلات بشكل مستقل، مع التركيز دائماً على النتائج الأمنية المبنية على الأدلة.'
        },
        skills: {
            title: 'المهارات التقنية',
            categories: [
                {
                    title: 'أمن التطبيقات',
                    skills: [
                        'اختبار اختراق تطبيقات الويب',
                        'اختبار أمان واجهات برمجة التطبيقات (API)',
                        'تقييم الثغرات الأمنية',
                        'المصادقة والتحكم في الوصول',
                        'Burp Suite'
                    ]
                },
                {
                    title: 'الأنظمة والخدمات السحابية',
                    skills: [
                        'AWS EC2',
                        'إدارة أنظمة لينكس (Ubuntu/Debian)',
                        'إعداد الخوادم الافتراضية (VPS)',
                        'الشبكات',
                        'استكشاف الأخطاء وإصلاحها',
                        'SSH',
                        'Docker'
                    ]
                },
                {
                    title: 'تطوير البرمجيات',
                    skills: [
                        'JavaScript',
                        'Node.js',
                        'Express.js',
                        'Next.js',
                        'HTML/CSS',
                        'Git',
                        'GitHub',
                        'REST APIs',
                        'TypeScript'
                    ]
                }
            ]
        },
        projects: {
            title: 'أبرز المشاريع',
            items: [
                {
                    title: 'Nexus MCP',
                    link: 'https://github.com/professor606/nexus-mcp',
                    bullets: [
                        'طورت خادم بروتوكول سياق النموذج (MCP) عالي الأداء للمتخصصين في الأمن، يربط مساعدي الذكاء الاصطناعي بأدوات اختبار الاختراق وصيد الثغرات المعتمدة في المجال.',
                        'نفذت مجموعات أدوات قائمة على الملفات التعريفية، وسلسلة ذكية لتنفيذ مهام متعددة الأدوات، واقتراحات مدعومة بالذكاء الاصطناعي لتحسين نافذة السياق ورفع كفاءة التقييم الأمني.',
                        'بنيت ضوابط أمنية متينة، منها اشتراط الموافقة الصريحة والتحقق المبني على شجرة البنية المجردة (AST) لأدوات الاستغلال عالية الخطورة، للحد من مخاطر تنفيذ الشيفرة عن بعد (RCE).'
                    ]
                },
                {
                    title: 'PingPoint — عميل HTTP قائم على الويب',
                    link: 'https://github.com/Professor606/PingPoint',
                    bullets: [
                        'صممت عميل HTTP خفيف الوزن يعمل بالكامل على الويب لاختبار واجهات برمجة التطبيقات (APIs)، وصياغة طلبات مخصصة، وتحليل الاستجابات مباشرة من المتصفح دون الحاجة لتثبيت برامج على سطح المكتب.',
                        'طورت واجهة مستخدم واضحة لتنفيذ طرق HTTP بالكامل (GET، POST، PUT، DELETE، PATCH)، وإدخال ترويسات/مُعاملات مخصصة، وعرض نصوص الاستجابة في الوقت الفعلي مع مقاييس زمنية باستخدام تقنيات HTML و CSS و JavaScript الأساسية.'
                    ]
                },
                {
                    title: 'تدقيق البصمة الرقمية للويب وكشف بيانات العميل',
                    link: 'https://github.com/Professor606/web-fingerprinting',
                    bullets: [
                        'بنيت تطبيق ويب متكامل (Node.js، Express.js) يوضح حجم بيانات المستخدم التي يمكن جمعها من خلال نقرة واحدة على رابط، بما في ذلك الموقع الجغرافي بناءً على عنوان IP، دقة الشاشة وعمق الألوان، ومعلومات نظام التشغيل والمنصة.',
                        'سلطت الضوء على مخاطر الخصوصية في العالم الحقيقي المرتبطة بتتبع الويب والبصمة الرقمية للمتصفح (Browser Fingerprinting) بهدف التوعية الأمنية.'
                    ]
                },
                {
                    title: 'محاكاة أمن الشبكات — التوأم الشرير (Evil Twin) والبوابة المقيدة',
                    link: 'https://github.com/Professor606/Evil-Twin-Captive-Portal',
                    bullets: [
                        'صممت بيئة معملية مسيطر عليها باستخدام hostapd و dnsmasq وبوابة مقيدة مخصصة (Captive Portal) مبنية بـ Node.js لمحاكاة هجمات التوأم الشرير والتقاط مصافحة WPA2.',
                        'وثقت نقاط الضعف في تجزئة الشبكات واقترحت استراتيجيات تخفيف لتعزيز أمان شبكات Wi-Fi في بيئات العمل المؤسسية.'
                    ]
                },
                {
                    title: 'OpenClaw — مساعد شخصي بالذكاء الاصطناعي للإنتاجية',
                    bullets: [
                        'نشرت مساعداً ذكياً مدعوماً بالذكاء الاصطناعي على خوادم AWS EC2 لجدولة المهام تلقائياً، وتحسين سير العمل اليومي، وتتبع الصحة، واسترجاع البيانات في الوقت الفعلي.',
                        'دمجت خدمات واجهات برمجة التطبيقات (APIs) وبنيت مسارات أتمتة مخصصة لتبسيط وزيادة الإنتاجية الشخصية.'
                    ]
                }
            ]
        },
        achievements: {
            title: 'الإنجازات',
            items: [
                {
                    title: 'اكتشاف وإبلاغ مسؤول (Responsible Disclosure)',
                    org: 'نظام إدارة التعلم (LMS)',
                    date: '2026',
                    description: 'اكتشفت وأبلغت بشكل مسؤول عن ثغرة (Cross-Context Script Execution) حرجة بتقييم (CVSS 8.3) في نظام إدارة تعلم (LMS) فعلي، والتي كان من الممكن أن تسمح بالوصول غير المصرح به لمعلومات المستخدمين الحساسة والتلاعب بالدرجات.'
                },
                {
                    title: 'اكتشاف وإبلاغ مسؤول (Responsible Disclosure)',
                    org: 'بوابة نظام معلومات الطلاب (SIS)',
                    date: '2025',
                    description: 'اكتشفت وأبلغت بشكل مسؤول عن ثغرة (IDOR) حرجة بتقييم (CVSS 7.1) في نظام معلومات طلاب (SIS) فعلي، والتي كان من الممكن أن تؤدي إلى كشف معلومات حساسة لأكثر من 15,000 مستخدم.'
                },
                {
                    title: 'فائز بمكافأة اكتشاف ثغرات (Bug Bounty)',
                    org: 'جامعة عجلون الوطنية (ANU)',
                    date: '2025',
                    description: 'اكتشفت ثغرة حرجة لتجاوز المصادقة أثناء مسابقة جامعية، مما أهّلني للحصول على مكافأة مالية بقيمة 100 دولار.'
                },
                {
                    title: 'تحديات (TryHackMe Advent of Cyber)',
                    org: 'TryHackMe',
                    date: '2025',
                    description: 'أكملت جميع التحديات اليومية الأربعة والعشرين والتي شملت عمليات مركز العمليات الأمنية (SOC)، واستغلال ثغرات الويب، وتحليل السجلات، التحقيق الجنائي الرقمي.'
                },
                {
                    title: 'مسابقة اختراق الجامعات (HackTheBox University CTF)',
                    org: 'HackTheBox',
                    date: '2025',
                    description: 'حققت المركز 370 من أصل 1,014 فريقاً منافساً في المسابقة العالمية لالتقاط العلم (CTF) على مستوى الجامعات.'
                }
            ]
        },
        journey: {
            title: 'مسيرتي',
            educationLabel: 'التعليم',
            university: 'جامعة عجلون الوطنية',
            degree: 'بكالوريوس في الأمن السيبراني والحوسبة السحابية',
            graduation: 'سنة التخرج المتوقعة: 2028',
            location: 'عجلون، الأردن'
        },
        languages: {
            title: 'اللغات',
            items: [
                { flag: '🇯🇴', name: 'العربية', level: 'اللغة الأم' },
                { flag: '🇬🇧', name: 'الإنجليزية', level: 'متقدم' }
            ]
        },
        hobbies: {
            title: 'الهوايات والاهتمامات',
            items: [
                {
                    icon: '💻',
                    title: 'البناء والتجريب',
                    text: 'أحب استكشاف الأدوات الجديدة وتجربة مختبرات الأمان وتحويل الأفكار إلى مشاريع جانبية عملية.'
                },
                {
                    icon: '🔐',
                    title: 'ممارسة الأمان السيبراني',
                    text: 'أحب اختبار الثغرات في بيئات خاضعة للرقابة وقراءة التقارير وتحسين سير عملي في الأمن الهجومي.'
                },
                {
                    icon: '📚',
                    title: 'التعلم والقراءة',
                    text: 'أقضي وقتًا في قراءة المقالات التقنية والتعلم من المجتمعات مفتوحة المصدر ومتابعة الاتجاهات في السحابة والأمن.'
                },
                {
                    icon: '🏃',
                    title: 'الهواء الطلق والحركة',
                    text: 'أقدر التوازن من خلال المشي والرحلات الخارجية والبقاء نشيطًا للحفاظ على الإبداع والتركيز.'
                }
            ]
        },
        contact: {
            title: 'تواصل معي',
            intro: 'لديك فكرة مشروع، استفسار بحثي، أو فرصة تعاون؟ يسعدني أن أسمع منك.',
            infoTitle: 'دعنا نتواصل',
            infoText: 'سواء كانت مناقشة أمنية، فكرة تطوير، أو فرصة تدريب، فأنا دائمًا منفتح على المحادثات المفيدة.',
            name: 'الاسم',
            email: 'البريد الإلكتروني',
            subject: 'الموضوع',
            message: 'الرسالة',
            send: 'إرسال الرسالة',
            success: 'شكرًا! تم تجهيز رسالتك ويمكن إرسالها عبر عميل البريد الإلكتروني الخاص بك.'
        },
        footer: { name: 'أحمد عصام أبو لبن', rights: 'جميع الحقوق محفوظة.' }
    }
};

// ── Page elements ───────────────────────────────────────────────────────────
const main = document.querySelector('#main-content');
const nav = document.querySelector('.glass-nav');
const menuButton = document.querySelector('.menu-toggle');
const languageButton = document.querySelector('.language-switch');
const themeButton = document.querySelector('.theme-switch');

// ── Small helpers ───────────────────────────────────────────────────────────

// Makes text safe to put inside HTML.
function esc(text) {
    const replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return text.replace(/[&<>"']/g, (character) => replacements[character]);
}

// Turns an array into HTML: one piece of HTML per item, joined together.
function list(items, toHtml) {
    return items.map(toHtml).join('');
}

function setMenuOpen(isOpen) {
    nav.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
}

function setTheme(theme) {
    const isLight = theme === 'light';
    const label = isLight ? 'Switch to dark theme' : 'Switch to light theme';

    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
    document.querySelector('meta[name="theme-color"]').content = isLight ? '#f3f7f6' : '#0a0a0b';
    themeButton.textContent = isLight ? '☾' : '☼';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
}

// ── HTML builders (one small function per part of the page) ─────────────────

function section(id, title, innerHtml) {
    return `
    <section class="container section reveal" id="${id}">
    <div class="section-heading"><h2 class="gradient-text">${esc(title)}</h2></div>
    ${innerHtml}
    </section>`;
}

function heroHtml(t) {
    const cvButton = RESUME_URL
    ? `<a class="hero-btn primary" href="${esc(RESUME_URL)}" download>${esc(t.hero.resume)}</a>`
    : '';
    const contactStyle = RESUME_URL ? 'secondary' : 'primary';

    return `
    <header class="container hero">
    <div class="hero-content">
    <div class="hero-badge enter enter-delay-1">${esc(t.hero.badge)}</div>
    <h1 class="enter enter-delay-2">${esc(t.hero.hi)}<br><span class="gradient-text">${esc(t.hero.name)}</span></h1>
    <p class="hero-tagline enter enter-delay-3">${esc(t.hero.tagline)}</p>
    <div class="hero-buttons enter enter-delay-3">
    ${cvButton}
    <a class="hero-btn ${contactStyle}" href="mailto:${EMAIL}">${esc(t.hero.contact)}</a>
    <a class="hero-btn secondary" href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">${esc(t.hero.linkedin)}</a>
    <a class="hero-btn secondary" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">${esc(t.hero.github)}</a>
    </div>
    </div>
    </header>`;
}

function aboutHtml(t) {
    const { bodyPre, highlight, bodyPost } = t.about;
    return `
    <div class="glass-panel about-panel">
    <p>${esc(bodyPre)}<strong>${esc(highlight)}</strong>${esc(bodyPost)}</p>
    </div>`;
}

function skillsHtml(t) {
    const cards = list(t.skills.categories, (category) => `
    <article class="glass-panel skill-card">
    <h3>${esc(category.title)}</h3>
    <div class="skill-list">${list(category.skills, (skill) => `<span class="pill">${esc(skill)}</span>`)}</div>
    </article>`);
    return `<div class="skill-grid">${cards}</div>`;
}

function projectsHtml(t) {
    const cards = list(t.projects.items, (project) => {
        const link = project.link
        ? `<a class="pill project-link" href="${esc(project.link)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
        : '';
        return `
        <article class="glass-panel project-card">
        <div class="project-top"><h3>${esc(project.title)}</h3>${link}</div>
        <ul>${list(project.bullets, (bullet) => `<li>${esc(bullet)}</li>`)}</ul>
        </article>`;
    });
    return `<div class="project-grid">${cards}</div>`;
}

function achievementsHtml(t) {
    const cards = list(t.achievements.items, (item) => {
        const link = item.link
        ? `<a class="pill achievement-link" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">${esc(item.linkLabel)} ↗</a>`
        : '';
        return `
        <article class="glass-panel achievement">
        <div class="achievement-icon" aria-hidden="true">🏆</div>
        <div>
        <h3>${esc(item.title)} <span>— ${esc(item.org)} (${esc(item.date)})</span></h3>
        <p>${esc(item.description)}</p>
        ${link}
        </div>
        </article>`;
    });
    return `<div class="achievement-list">${cards}</div>`;
}

function journeyHtml(t) {
    const j = t.journey;
    return `
    <div class="journey-inner">
    <h3 class="subheading"><span aria-hidden="true">🎓</span>${esc(j.educationLabel)}</h3>
    <div class="timeline-item">
    <article class="glass-panel education-panel">
    <div class="education-top">
    <div><h3>${esc(j.university)}</h3><h4>${esc(j.degree)}</h4></div>
    <div class="education-meta"><div>${esc(j.graduation)}</div><div>${esc(j.location)}</div></div>
    </div>
    </article>
    </div>
    </div>`;
}

function hobbiesHtml(t) {
    const cards = list(t.hobbies.items, (item) => `
    <article class="glass-panel hobby-card">
    <div class="hobby-emoji" aria-hidden="true">${item.icon}</div>
    <h3>${esc(item.title)}</h3>
    <p>${esc(item.text)}</p>
    </article>`);
    return `<div class="hobby-grid">${cards}</div>`;
}

function languagesHtml(t) {
    const cards = list(t.languages.items, (item) => `
    <article class="glass-panel language-card">
    <div class="language-flag" aria-hidden="true">${item.flag}</div>
    <h3>${esc(item.name)}</h3>
    <p>${esc(item.level)}</p>
    </article>`);
    return `<div class="language-grid">${cards}</div>`;
}

function contactHtml(t) {
    const c = t.contact;
    return `
    <div class="contact-grid">
    <article class="glass-panel contact-card">
    <h3>${esc(c.infoTitle)}</h3>
    <p>${esc(c.intro)}</p>
    <ul class="contact-list">
    <li>${EMAIL}</li>
    <li>${LINKEDIN_URL.replace('https://', '')}</li>
    <li>${LOCATION}</li>
    </ul>
    </article>

    <form class="glass-panel contact-form" id="contact-form">
    <div class="form-row">
    <div class="form-field">
    <label for="contact-name">${esc(c.name)}</label>
    <input id="contact-name" name="name" type="text" required>
    </div>
    <div class="form-field">
    <label for="contact-email">${esc(c.email)}</label>
    <input id="contact-email" name="email" type="email" required>
    </div>
    </div>
    <div class="form-field">
    <label for="contact-subject">${esc(c.subject)}</label>
    <input id="contact-subject" name="subject" type="text" required>
    </div>
    <div class="form-field">
    <label for="contact-message">${esc(c.message)}</label>
    <textarea id="contact-message" name="message" required></textarea>
    </div>
    <div class="form-actions">
    <button class="form-button" type="submit">${esc(c.send)}</button>
    <span class="form-status" aria-live="polite"></span>
    </div>
    </form>
    </div>`;
}

// ── Contact form: opens the visitor's email app with the message filled in ──

function setUpContactForm(t) {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(form);
        const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;

        document.querySelector('.form-status').textContent = t.contact.success;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
        form.reset();
    });
}

// ── Scroll reveal: sections fade in the first time they enter the screen ────

function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        sections.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    sections.forEach((element) => observer.observe(element));
}

// ── Draw the whole page in one language ─────────────────────────────────────

function render(lang) {
    const t = translations[lang];

    // <html> attributes, tab title and search-engine description
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').content = t.meta.description;

    // Elements in index.html that use data-copy="nav.about", "footer.name", ...
    document.querySelectorAll('[data-copy]').forEach((element) => {
        const text = element.dataset.copy.split('.').reduce((value, key) => value?.[key], t);
        if (typeof text === 'string') element.textContent = text;
    });

        languageButton.textContent = t.nav.switchLabel;
        languageButton.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');

        main.innerHTML = [
            heroHtml(t),
            section('about', t.about.title, aboutHtml(t)),
            section('skills', t.skills.title, skillsHtml(t)),
            section('projects', t.projects.title, projectsHtml(t)),
            section('achievements', t.achievements.title, achievementsHtml(t)),
            section('journey', t.journey.title, journeyHtml(t)),
            section('hobbies', t.hobbies.title, hobbiesHtml(t)),
            section('languages', t.languages.title, languagesHtml(t)),
            section('contact', t.contact.title, contactHtml(t)),
        ].join('');

        document.querySelector('#year').textContent = new Date().getFullYear();
        document.body.classList.add('js-ready');
        revealSectionsOnScroll();
        setUpContactForm(t);
}

// ── Remembered choices (language & theme) ───────────────────────────────────

function getSavedLanguage() {
    const urlLanguage = new URLSearchParams(location.search).get('lang');
    if (urlLanguage === 'ar' || location.pathname.endsWith('/ar')) return 'ar';
    if (localStorage.getItem('portfolio-language') === 'ar') return 'ar';
    return 'en';
}

function getSavedTheme() {
    return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
}

// ── Start the page and listen for clicks ────────────────────────────────────

let activeLanguage = getSavedLanguage();
setTheme(getSavedTheme());
render(activeLanguage);

// Mobile menu: open/close button, close on link click, outside click, Escape, or wider screen
menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

document.querySelectorAll('.nav-item').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
    const menuIsOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (event.key === 'Escape' && menuIsOpen) {
        setMenuOpen(false);
        menuButton.focus();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) setMenuOpen(false);
});

// Theme button
themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
});

// Language button: switch language, remember it, and keep ?lang=ar in the address bar
languageButton.addEventListener('click', () => {
    activeLanguage = activeLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('portfolio-language', activeLanguage);

    const url = new URL(location.href);
    if (activeLanguage === 'ar') url.searchParams.set('lang', 'ar');
    else url.searchParams.delete('lang');
    history.replaceState({}, '', url);

    render(activeLanguage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
