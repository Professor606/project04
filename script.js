const content = {
    en: {
        lang: 'en', dir: 'ltr', title: 'Ahmad Essam Abu Laban | Penetration Tester & Bug Bounty Hunter — Jordan',
        description: 'Cybersecurity student from Jordan focused on offensive security, penetration testing, vulnerability disclosure, and cloud infrastructure. Open to internships.',
        nav: { about: 'About', projects: 'Projects', achievements: 'Achievements', switch: 'عربي' },
        hero: { badge: 'Cybersecurity & Cloud Student', hi: "Hi, I'm", name: 'Ahmad Essam Abu Laban', tagline: 'Passionate about offensive security, penetration testing, and cloud infrastructure. Discovering vulnerabilities and building secure, dynamic applications.', contact: 'Contact Me', linkedin: 'LinkedIn', github: 'GitHub' },
        about: { title: 'About Me', highlight: 'Cybersecurity & Cloud Computing student', before: 'Motivated ', after: ' with hands-on experience in web application security testing, vulnerability disclosure, and cloud deployments. Discovered and responsibly disclosed a critical IDOR vulnerability in a live university system, winning a bug bounty award. Skilled in offensive security techniques, Linux administration, and full-stack web development.' },
        journey: { title: 'My Journey', education: 'Education', university: 'Ajloun National University', degree: 'B.Sc. in Cybersecurity and Cloud Computing', location: 'Ajloun, Jordan', graduation: 'Expected Graduation: 2028', courseworkLabel: 'Relevant Coursework', coursework: 'Network Security, Cloud Architecture, Web Application Security, Operating Systems, Python, JavaScript, C++, Cryptography, Data Structures and Algorithms, Database Systems, Artificial Intelligence' },
        skills: {
            title: 'Technical Skills', categories: [
                { title: 'Security & Tools', skills: ['Web App Pentesting', 'Vulnerability Assessment', 'OSINT', 'Burp Suite', 'OWASP Top 10', 'Evil Twin', 'Captive Portal'] },
                { title: 'Cloud & Systems', skills: ['AWS EC2', 'Linux Admin (Ubuntu/Debian)', 'VPS Configuration', 'Networking', 'Troubleshooting'] },
                { title: 'Development', skills: ['JavaScript', 'Python', 'Node.js', 'Express.js', 'Next.js', 'HTML/CSS', 'Git', 'GitHub', 'REST APIs'] }
            ]
        },
        projects: {
            title: 'Key Projects', items: [
                { title: 'project00 - Linux & Git/Github', link: 'https://github.com/Professor606/discovery-web-piscine', bullets: ['Learned the fundamentals of Linux command-line interface and Git version control system.'      ] },
                { title: 'project01 - HTML', link: 'https://github.com/Professor606/project01', bullets: ['Learned the basics of HTML and its application in web development.'] },
                { title: 'project02 - CSS', link: 'https://github.com/Professor606/project02', bullets: ['Learned the fundamentals of CSS and its application in web development.'] },
                { title: 'project03 - JavaScript', link: 'https://github.com/Professor606/project03', bullets: ['Learned the basics of JavaScript and its application in web development.', 'Built a simple todo app using HTML, CSS, and JavaScript.'] },
                { title: 'PingPoint — Web-Based HTTP Client', link: 'https://github.com/Professor606/PingPoint', bullets: ['Engineered a lightweight, purely web-based HTTP client to test APIs, craft custom requests, and analyze responses directly from the browser without desktop installation dependencies.', 'Implemented a clear UI for executing complete HTTP methods (GET, POST, PUT, DELETE, PATCH), injecting custom headers/parameters, and rendering real-time response bodies with metric timings using vanilla HTML, CSS, and JavaScript.'] },
                { title: 'Web Fingerprinting & Client Data Exposure Audit', link: 'https://github.com/Professor606/web-fingerprinting', bullets: ['Built a full-stack web application (Node.js, Express.js) that demonstrates data collectable from a single link click, including IP-based geolocation, screen resolution and color depth, and platform/OS information.', 'Highlighted real-world privacy risks in web tracking and browser fingerprinting for security awareness.'] },
                { title: 'Network Security Simulation — Evil Twin & Captive Portal', link: 'https://github.com/Professor606/Evil-Twin-Captive-Portal', bullets: ['Engineered a controlled lab using hostapd, dnsmasq, and a custom Node.js captive portal to simulate Evil Twin attacks and WPA2 handshake capture.', 'Documented network segmentation weaknesses and proposed mitigation strategies for enterprise Wi-Fi security.'] },
                { title: 'OpenClaw — AI Personal Productivity Assistant', link: '', bullets: ['Deployed an AI-powered assistant on AWS EC2 for automated task scheduling, daily workflow optimization, health tracking, and real-time data retrieval.', 'Integrated API services and built custom automation pipelines to streamline personal productivity.'] }
            ]
        },
        achievements: {
            title: 'Achievements', items: [
                { title: 'Responsible Disclosure', org: 'ANU Moodle LMS', date: '2026', text: 'Discovered and responsibly disclosed a critical stored XSS vulnerability (CVSS 9.0+) in a live university LMS that could have exposed sensitive academic records and enabled unauthorized grade manipulation.' },
                { title: 'Responsible Disclosure', org: 'ANU SIS Portal', date: '2025', text: 'Discovered and responsibly disclosed a critical IDOR vulnerability (CVSS 8.5) in a live university system that could have exposed the personal data of thousands of students.' },
                { title: 'Bug Bounty Winner', org: 'ANU', date: '2025', text: 'Identified a critical authentication bypass vulnerability during a university competition, earning a $100 bounty award.' },
                { title: 'TryHackMe Advent of Cyber', org: 'TryHackMe', date: '2025', text: 'Completed all 24 daily challenges spanning SOC operations, web exploitation, log analysis, and digital forensics.' },
                { title: 'HackTheBox University CTF 2025', org: 'HackTheBox', date: '2025', text: 'Placed 370th out of 1,014 competing teams in the global university-tier CTF competition.' }
            ]
        },
        languages: { title: 'Languages', items: [{ flag: '🇯🇴', name: 'Arabic', level: 'Native' }, { flag: '🇬🇧', name: 'English', level: 'Advanced (C1)' }] },
        footer: { name: 'Ahmad Essam Abu Laban', rights: 'All rights reserved.' }
    },
    ar: {
        lang: 'ar', dir: 'rtl', title: 'أحمد عصام أبو لبن | مختبر اختراق وصائد ثغرات — الأردن',
        description: 'طالب أمن سيبراني من الأردن، مهتم بالأمن الهجومي واختبار الاختراق والإفصاح عن الثغرات والحوسبة السحابية. متاح لفرص التدريب.',
        nav: { about: 'عنّي', projects: 'المشاريع', achievements: 'الإنجازات', switch: 'English' },
        hero: { badge: 'طالب أمن سيبراني وحوسبة سحابية', hi: 'مرحباً، أنا', name: 'أحمد عصام أبو لبن', tagline: 'شغوف بالأمن الهجومي، واختبار اختراق المواقع، والبنية التحتية السحابية. أكتشف الثغرات وأبني تطبيقات آمنة.', contact: 'تواصل معي', linkedin: 'لينكد إن', github: 'GitHub' },
        about: { title: 'عنّي', highlight: 'طالب في الأمن السيبراني والحوسبة السحابية', before: '', after: ' لديه خبرة عملية في اختبار أمان تطبيقات الويب والإفصاح عن الثغرات والنشر السحابي. اكتشف وأفصح بمسؤولية عن ثغرة IDOR حرجة في نظام جامعي حي وفاز بجائزة مكافأة. يمتلك مهارات في الأمن الهجومي وإدارة Linux وتطوير الويب الشامل.' },
        journey: { title: 'مسيرتي', education: 'التعليم', university: 'جامعة عجلون الوطنية', degree: 'بكالوريوس في الأمن السيبراني والحوسبة السحابية', location: 'عجلون، الأردن', graduation: 'التخرج المتوقع: 2028', courseworkLabel: 'المواد الدراسية ذات الصلة', coursework: 'أمن الشبكات، هندسة السحابة، أمان تطبيقات الويب، أنظمة التشغيل، Python، JavaScript، التشفير، هياكل البيانات والخوارزميات، قواعد البيانات، الذكاء الاصطناعي' },
        skills: {
            title: 'المهارات التقنية', categories: [
                { title: 'الأمن والأدوات', skills: ['اختبار أمان تطبيقات الويب', 'تقييم الثغرات', 'OSINT', 'Burp Suite', 'OWASP Top 10', 'Evil Twin', 'Captive Portal'] },
                { title: 'السحابة والأنظمة', skills: ['AWS EC2', 'إدارة Linux (Ubuntu/Debian)', 'إعداد VPS', 'الشبكات', 'استكشاف الأعطال'] },
                { title: 'التطوير', skills: ['JavaScript', 'Python', 'Node.js', 'Express.js', 'Next.js', 'HTML/CSS', 'Git', 'GitHub', 'REST APIs'] }
            ]
        },
        projects: {
            title: 'المشاريع الرئيسية', items: [
                { title: 'المشروع 00 - Linux و Git/GitHub', link: 'https://github.com/Professor606/discovery-web-piscine', bullets: ['تعلمت أساسيات واجهة سطر الأوامر في Linux ونظام التحكم بالإصدارات Git.'] },
{ title: 'المشروع 01 - HTML', link: 'https://github.com/Professor606/project01', bullets: ['تعلمت أساسيات HTML وتطبيقاتها في تطوير الويب.'] },
{ title: 'المشروع 02 - CSS', link: 'https://github.com/Professor606/project02', bullets: ['تعلمت أساسيات CSS وتطبيقاتها في تطوير الويب.'] },
{ title: 'المشروع 03 - JavaScript', link: 'https://github.com/Professor606/project03', bullets: ['تعلمت أساسيات JavaScript وتطبيقاتها في تطوير الويب.', 'أنشأت تطبيقًا بسيطًا لقائمة المهام (To-Do) باستخدام HTML وCSS وJavaScript.'] },
                { title: 'تدقيق بصمة الويب وكشف بيانات الزائر', link: 'https://github.com/Professor606/web-fingerprinting', bullets: ['بنى تطبيق ويب متكاملاً (Node.js وExpress.js) يوضح البيانات القابلة للجمع بنقرة واحدة، ومنها الموقع عبر IP ودقة الشاشة ومعلومات المنصة ونظام التشغيل.', 'سلّط الضوء على مخاطر الخصوصية في تتبع الويب وبصمة المتصفح للتوعية الأمنية.'] },
                { title: 'محاكاة أمان الشبكات — Evil Twin', link: 'https://github.com/Professor606/Evil-Twin-Captive-Portal', bullets: ['بنى بيئة مختبرية محكومة باستخدام hostapd وdnsmasq وبوابة Node.js لمحاكاة هجمات Evil Twin والتقاط مصافحة WPA2.', 'وثّق نقاط ضعف تجزئة الشبكة واقترح استراتيجيات تخفيف لأمان Wi-Fi المؤسسي.'] },
                { title: 'OpenClaw — مساعد شخصي بالذكاء الاصطناعي', link: '', bullets: ['نشر مساعداً ذكياً على AWS EC2 لجدولة المهام وتحسين سير العمل وتتبع الصحة واسترجاع البيانات في الوقت الفعلي.', 'دمج خدمات API وبنى خطوط أتمتة مخصصة لتبسيط الإنتاجية الشخصية.'] }
            ]
        },
        achievements: {
            title: 'الإنجازات', items: [
                { title: 'الإفصاح المسؤول عن ثغرة', org: 'نظام Moodle في جامعة عجلون الوطنية', date: '2026', text: 'اكتشف وأفصح بمسؤولية عن ثغرة XSS مخزنة حرجة (CVSS 9.0+) في نظام إدارة تعلم جامعي نشط، كان من الممكن أن تكشف سجلات أكاديمية حساسة وتسمح بتعديل العلامات دون تصريح.' },
                { title: 'الإفصاح المسؤول عن ثغرة', org: 'بوابة SIS في جامعة عجلون الوطنية', date: '2025', text: 'اكتشف وأفصح بمسؤولية عن ثغرة IDOR حرجة (CVSS 8.5) في نظام جامعي حي كان يمكنها كشف البيانات الشخصية لآلاف الطلاب.' },
                { title: 'الفوز بمكافأة اكتشاف ثغرة', org: 'جامعة عجلون الوطنية', date: '2025', text: 'حدّد ثغرة تجاوز للمصادقة خلال مسابقة جامعية وفاز بمكافأة قدرها 100 دولار.' },
                { title: 'TryHackMe Advent of Cyber', org: 'TryHackMe', date: '2025', text: 'أكمل التحديات اليومية الأربعة والعشرين في عمليات SOC واستغلال الويب وتحليل السجلات والتحقيق الجنائي الرقمي.' },
                { title: 'HackTheBox University CTF 2025', org: 'HackTheBox', date: '2025', text: 'حصل على المركز 370 من بين 1,014 فريقاً في مسابقة CTF العالمية للجامعات.' }
            ]
        },
        languages: { title: 'اللغات', items: [{ flag: '🇯🇴', name: 'العربية', level: 'اللغة الأم' }, { flag: '🇬🇧', name: 'الإنجليزية', level: 'متقدم (C1)' }] },
        footer: { name: 'أحمد عصام أبو لبن', rights: 'جميع الحقوق محفوظة.' }
    }
};

const main = document.querySelector('#main-content');
const languageButton = document.querySelector('.language-switch');
const copy = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

function section(id, title, inner, extraClass = '') {
    return `<section class="container section reveal ${extraClass}" id="${id}"><div class="section-heading"><h2 class="gradient-text">${title}</h2></div>${inner}</section>`;
}

function render(lang) {
    const t = content[lang];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.description;
    document.querySelectorAll('[data-copy]').forEach((element) => {
        const keys = element.dataset.copy.split('.');
        element.textContent = keys.reduce((value, key) => value[key], t);
    });
    languageButton.textContent = t.nav.switch;
    languageButton.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');

    const skills = t.skills.categories.map((category) => `
		<article class="glass-panel skill-card"><h3>${copy(category.title)}</h3><div class="skill-list">${category.skills.map((skill) => `<span class="pill">${copy(skill)}</span>`).join('')}</div></article>`).join('');
    const projects = t.projects.items.map((project) => `
		<article class="glass-panel project-card"><div class="project-top"><h3>${copy(project.title)}</h3>${project.link ? `<a class="pill project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ''}</div><ul>${project.bullets.map((bullet) => `<li>${copy(bullet)}</li>`).join('')}</ul></article>`).join('');
    const achievements = t.achievements.items.map((item) => `
		<article class="glass-panel achievement"><div class="achievement-icon" aria-hidden="true">🏆</div><div><h3>${copy(item.title)} <span>— ${copy(item.org)} (${copy(item.date)})</span></h3><p>${copy(item.text)}</p></div></article>`).join('');
    const languages = t.languages.items.map((item) => `
		<article class="glass-panel language-card"><div class="language-flag" aria-hidden="true">${item.flag}</div><h3>${copy(item.name)}</h3><p>${copy(item.level)}</p></article>`).join('');

    main.innerHTML = `
		<header class="container hero"><div class="hero-content">
			<div class="hero-badge enter enter-delay-1">${copy(t.hero.badge)}</div>
			<h1 class="enter enter-delay-2">${copy(t.hero.hi)}<br><span class="gradient-text">${copy(t.hero.name)}</span></h1>
			<p class="hero-tagline enter enter-delay-3">${copy(t.hero.tagline)}</p>
			<div class="hero-buttons enter enter-delay-3">
				<a class="hero-btn primary" href="mailto:ahmadessam3300@gmail.com">${copy(t.hero.contact)}</a>
				<a class="hero-btn secondary" href="https://linkedin.com/in/ellprofessor" target="_blank" rel="noopener noreferrer">${copy(t.hero.linkedin)}</a>
				<a class="hero-btn secondary" href="https://github.com/Professor606" target="_blank" rel="noopener noreferrer">${copy(t.hero.github)}</a>
			</div>
		</div></header>
		${section('about', copy(t.about.title), `<div class="glass-panel about-panel"><p>${copy(t.about.before)}<strong>${copy(t.about.highlight)}</strong>${copy(t.about.after)}</p></div>`)}
		${section('journey', copy(t.journey.title), `<div class="journey-inner"><h3 class="subheading"><span aria-hidden="true">🎓</span>${copy(t.journey.education)}</h3><div class="timeline-item"><article class="glass-panel education-panel"><div class="education-top"><div><h3>${copy(t.journey.university)}</h3><h4>${copy(t.journey.degree)}</h4></div><div class="education-meta"><div>${copy(t.journey.graduation)}</div><div>${copy(t.journey.location)}</div></div></div><ul class="coursework"><li><strong>${copy(t.journey.courseworkLabel)}: </strong>${copy(t.journey.coursework)}</li></ul></article></div></div>`)}
		${section('skills', copy(t.skills.title), `<div class="skill-grid">${skills}</div>`)}
		${section('projects', copy(t.projects.title), `<div class="project-grid">${projects}</div>`)}
		${section('achievements', copy(t.achievements.title), `<div class="achievement-list">${achievements}</div>`)}
		${section('languages', copy(t.languages.title), `<div class="language-grid">${languages}</div>`)}`;

    document.querySelector('#year').textContent = new Date().getFullYear();
    document.body.classList.add('js-ready');
    observeSections();
}

function observeSections() {
    const sections = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        sections.forEach((element) => element.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    sections.forEach((element) => observer.observe(element));
}

function currentLanguage() {
    const queryLanguage = new URLSearchParams(location.search).get('lang');
    return queryLanguage === 'ar' || location.pathname.endsWith('/ar') || localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en';
}

let activeLanguage = currentLanguage();
render(activeLanguage);
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
