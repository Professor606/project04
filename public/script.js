// ── Your details (change them here, not inside the page code) ───────────────
const EMAIL = 'ahmadessam3300@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/ellprofessor';
const GITHUB_URL = 'https://github.com/Professor606';
const LOCATION = 'Amman, Jordan';
// Path to your CV. Leave it '' to hide the "Download CV" button.
const RESUME_URL = 'assets/Ahmad-Essam-Abu-Laban-Resume.pdf';

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
            skills: 'Skills',
            projects: 'Projects',
            achievements: 'Achievements',
            journey: 'Journey',
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
            photoAlt: 'Portrait of Ahmad Essam Abu Laban',
            stats: [
                { value: '8.3', label: 'CVSS score, script execution flaw in a live LMS' },
                { value: '7.1', label: 'CVSS score, IDOR exposing 15,000+ users' },
                { value: '370 / 1,014', label: 'Team rank, HackTheBox University CTF 2025' },
                { value: '24 / 24', label: 'TryHackMe Advent of Cyber challenges completed' }
            ],
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
                        'Vulnerability Research & Reporting',
                        'Authentication & Access Control'
                    ]
                },
                {
                    title: 'Development',
                    skills: [
                        'JavaScript',
                        'Node.js',
                        'Express.js',
                        'HTML/CSS',
                        'Git',
                        'GitHub',
                        'REST APIs',
                        'TypeScript'
                    ]
                },
                {
                    title: 'Cloud & Systems',
                    skills: [
                        'AWS EC2',
                        'Linux (Ubuntu/Debian)',
                        'Networking',
                        'SSH',
                        'Docker'
                    ]
                }
            ]
        },
        projects: {
            title: 'Key Projects',
            featuredLabel: 'Featured',
            items: [
                {
                    title: 'Nexus MCP',
                    featured: true,
                    tags: ['TypeScript', 'Node.js', 'MCP', 'AST validation'],
                    link: 'https://github.com/professor606/nexus-mcp',
                    bullets: [
                        'Developed a high-performance Model Context Protocol (MCP) server for security professionals, integrating AI assistants with industry-standard penetration testing and bug bounty tools.',
                        'Implemented profile-based toolsets, smart chaining for multi-tool workflows, and AI-driven suggestions to optimize context windows and enhance security assessment efficiency.',
                        'Engineered robust security controls, including explicit opt-in requirements and AST-based validation for high-risk exploit tools to mitigate arbitrary remote code execution (RCE) risks.'
                    ]
                },
                {
                    title: 'PingPoint — Web-Based HTTP Client',
                    tags: ['HTML', 'CSS', 'JavaScript'],
                    link: 'https://github.com/Professor606/PingPoint',
                    bullets: [
                        'Engineered a lightweight, purely web-based HTTP client to test APIs, craft custom requests, and analyze responses directly from the browser without desktop installation dependencies.',
                        'Implemented a clear UI for executing complete HTTP methods (GET, POST, PUT, DELETE, PATCH), injecting custom headers/parameters, and rendering real-time response bodies with metric timings using vanilla HTML, CSS, and JavaScript.'
                    ]
                },
                {
                    title: 'Web Fingerprinting & Client Data Exposure Audit',
                    tags: ['Node.js', 'Express.js'],
                    link: 'https://github.com/Professor606/web-fingerprinting',
                    bullets: [
                        'Built a full-stack web application (Node.js, Express.js) that demonstrates the extent of user data collectable from a single link click, including IP-based geolocation, screen resolution and color depth, and platform/OS information.',
                        'Highlighted real-world privacy risks in web tracking and browser fingerprinting for security awareness.'
                    ]
                },
                {
                    title: 'Network Security Simulation — Evil Twin & Captive Portal',
                    tags: ['hostapd', 'dnsmasq', 'Node.js'],
                    link: 'https://github.com/Professor606/Evil-Twin-Captive-Portal',
                    bullets: [
                        'Engineered a controlled lab environment using hostapd, dnsmasq, and a custom Node.js captive portal to simulate Evil Twin attacks and WPA2 handshake capture.',
                        'Documented network segmentation weaknesses and proposed mitigation strategies for enterprise Wi-Fi security.'
                    ]
                },
                {
                    title: 'OpenClaw — AI Personal Productivity Assistant',
                    tags: ['AWS EC2', 'APIs', 'Automation'],
                    bullets: [
                        'Deployed an AI-powered assistant on AWS EC2 for automated task scheduling, daily workflow optimization, health tracking, and real-time data retrieval.',
                        'Integrated API services and built custom automation pipelines to streamline personal productivity.'
                    ]
                },
                {
                    title: '42 Linux & Git Fundamentals',
                    tags: ['Linux', 'Ubuntu', 'Git', 'GitHub', 'SSH', 'Bash'],
                    link: 'https://github.com/professor606/discovery-web-piscine',
                    bullets: [
                        'Practiced Linux command-line operations and file system navigation in Ubuntu.',
                        'Used Git and GitHub for version control, repository management, and collaboration.',
                        'Explored SSH and essential development workflows.'
                    ]
                },
                {
                    title: '42 HTML Fundamentals',
                    tags: ['HTML5', 'Semantic HTML', 'Web Development'],
                    link: 'https://github.com/professor606/project01',
                    bullets: [
                        'Built web page structures using HTML and semantic elements.',
                        'Practiced organizing content, links, images, and common page components.',
                        'Applied fundamental principles of accessible web content.'
                    ]
                },
                {
                    title: '42 CSS Styling & Layout',
                    tags: ['CSS3', 'Web Design', 'Responsive Design'],
                    link: 'https://github.com/professor606/project02',
                    bullets: [
                        'Styled web pages using CSS selectors, properties, and layout techniques.',
                        'Practiced controlling spacing, typography, colors, and element positioning.',
                        'Explored responsive styling for different screen sizes.'
                    ]
                },
                {
                    title: '42 JavaScript Programming',
                    tags: ['JavaScript', 'Programming Fundamentals', 'DOM'],
                    link: 'https://github.com/professor606/project03',
                    bullets: [
                        'Practiced JavaScript fundamentals, including variables, functions, and control flow.',
                        'Applied programming logic to solve practical exercises.',
                        'Explored DOM manipulation and interactive web page behavior.'
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
                    icon: 'shield',
                    description: 'Discovered and responsibly disclosed a  high-severity Cross-Context Script Execution vulnerability (CVSS 8.3) in a live Learning Management System (LMS), potentially enabling unauthorized access to sensitive user information and grade manipulation.'
                },
                {
                    title: 'Responsible Disclosure',
                    org: 'Student Information System (SIS) Portal',
                    date: '2025',
                    icon: 'shield',
                    description: 'Discovered and responsibly disclosed a high-severity Insecure Direct Object Reference (IDOR) vulnerability (CVSS 7.1) in a live Student Information System (SIS), potentially exposing sensitive information belonging to 15,000+ users.',
                    link: 'https://github.com/Professor606/vulnerability-writeups/tree/main/2025/Web-Applications/IDOR-Student-Portal',
                    linkLabel: 'Write-up'
                },
                {
                    title: 'Bug Bounty Winner',
                    org: 'ANU',
                    date: '2025',
                    icon: 'award',
                    description: 'Identified a high-severity authentication bypass vulnerability during a university competition, earning a $100 bounty award.'
                },
                {
                    title: 'TryHackMe Advent of Cyber',
                    org: 'TryHackMe',
                    date: '2025',
                    icon: 'terminal',
                    description: 'Completed all 24 daily challenges spanning SOC operations, web exploitation, log analysis, and digital forensics.'
                },
                {
                    title: 'HackTheBox University CTF 2025',
                    org: 'HackTheBox',
                    date: '2025',
                    icon: 'flag',
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
            location: 'Ajloun, Jordan',
            training: {
                label: 'Training',
                title: 'Web Development & Web Security',
                provider: '42 School',
                description: 'Hands-on training in web development and web security through practical projects, peer-to-peer learning, and problem-solving.',
                tags: [
                    'Web Development',
                    'Web Security',
                    'JavaScript',
                    'Linux',
                    'Git & GitHub',
                    'Project-Based Learning'
                ],
                date: 'Sep 2026 - Dec 2026'
            }
        },
        languages: {
            title: 'Languages',
            items: [
                { glyph: 'أ', name: 'Arabic', level: 'Native' },
                { glyph: 'Aa', name: 'English', level: 'Advanced' }
            ]
        },
        hobbies: {
            title: 'Hobbies & Interests',
            items: [
                {
                    icon: 'code',
                    title: 'Building Side Projects',
                    text: 'I enjoy turning ideas into working projects, experimenting with new technologies, and building tools that solve practical problems.'
                },
                {
                    icon: 'shield',
                    title: 'Web Security & Research',
                    text: 'I enjoy exploring web application vulnerabilities, solving security challenges, and experimenting with tools to understand how systems can be secured.'
                },
                {
                    icon: 'dumbbell',
                    title: 'Calisthenics & Strength',
                    text: 'I train with bodyweight exercises, work toward advanced skills like muscle-ups and front lever, and help build Gravity, a calisthenics community focused on training and progress.'
                },
                {
                    icon: 'users',
                    title: 'Community & Collaboration',
                    text: 'I enjoy learning with others, exchanging technical knowledge, working on projects together, and helping turn shared interests into something bigger.'
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
            success: 'Opening your email app with your message…',
            copyEmail: 'Copy email',
            copied: 'Copied'
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
            skills: 'المهارات',
            projects: 'المشاريع',
            achievements: 'الإنجازات',
            journey: 'مسيرتي',
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
            photoAlt: 'صورة أحمد عصام أبو لبن',
            stats: [
                { value: '8.3', label: 'تقييم CVSS لثغرة تنفيذ سكربت في نظام LMS فعلي' },
                { value: '7.1', label: 'تقييم CVSS لثغرة IDOR تمس أكثر من 15,000 مستخدم' },
                { value: '370 / 1,014', label: 'ترتيب الفريق في HackTheBox University CTF 2025' },
                { value: '24 / 24', label: 'تحديات TryHackMe Advent of Cyber المكتملة' }
            ],
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
                        'المصادقة والتحكم في الوصول'
                    ]
                },
                {
                    title: 'تطوير البرمجيات',
                    skills: [
                        'JavaScript',
                        'Node.js',
                        'Express.js',
                        'HTML/CSS',
                        'Git',
                        'GitHub',
                        'REST APIs',
                        'TypeScript'
                    ]
                },
                {
                    title: 'الأنظمة والخدمات السحابية',
                    skills: [
                        'AWS EC2',
                        'إدارة أنظمة لينكس (Ubuntu/Debian)',
                        'الشبكات',
                        'SSH',
                        'Docker'
                    ]
                }
            ]
        },
        projects: {
            title: 'أبرز المشاريع',
            featuredLabel: 'مشروع مميز',
            items: [
                {
                    title: 'Nexus MCP',
                    featured: true,
                    tags: ['TypeScript', 'Node.js', 'MCP', 'AST validation'],
                    link: 'https://github.com/professor606/nexus-mcp',
                    bullets: [
                        'طورت خادم بروتوكول سياق النموذج (MCP) عالي الأداء للمتخصصين في الأمن، يربط مساعدي الذكاء الاصطناعي بأدوات اختبار الاختراق وصيد الثغرات المعتمدة في المجال.',
                        'نفذت مجموعات أدوات قائمة على الملفات التعريفية، وسلسلة ذكية لتنفيذ مهام متعددة الأدوات، واقتراحات مدعومة بالذكاء الاصطناعي لتحسين نافذة السياق ورفع كفاءة التقييم الأمني.',
                        'بنيت ضوابط أمنية متينة، منها اشتراط الموافقة الصريحة والتحقق المبني على شجرة البنية المجردة (AST) لأدوات الاستغلال عالية الخطورة، للحد من مخاطر تنفيذ الشيفرة عن بعد (RCE).'
                    ]
                },
                {
                    title: 'PingPoint — عميل HTTP قائم على الويب',
                    tags: ['HTML', 'CSS', 'JavaScript'],
                    link: 'https://github.com/Professor606/PingPoint',
                    bullets: [
                        'صممت عميل HTTP خفيف الوزن يعمل بالكامل على الويب لاختبار واجهات برمجة التطبيقات (APIs)، وصياغة طلبات مخصصة، وتحليل الاستجابات مباشرة من المتصفح دون الحاجة لتثبيت برامج على سطح المكتب.',
                        'طورت واجهة مستخدم واضحة لتنفيذ طرق HTTP بالكامل (GET، POST، PUT، DELETE، PATCH)، وإدخال ترويسات/مُعاملات مخصصة، وعرض نصوص الاستجابة في الوقت الفعلي مع مقاييس زمنية باستخدام تقنيات HTML و CSS و JavaScript الأساسية.'
                    ]
                },
                {
                    title: 'تدقيق البصمة الرقمية للويب وكشف بيانات العميل',
                    tags: ['Node.js', 'Express.js'],
                    link: 'https://github.com/Professor606/web-fingerprinting',
                    bullets: [
                        'بنيت تطبيق ويب متكامل (Node.js، Express.js) يوضح حجم بيانات المستخدم التي يمكن جمعها من خلال نقرة واحدة على رابط، بما في ذلك الموقع الجغرافي بناءً على عنوان IP، دقة الشاشة وعمق الألوان، ومعلومات نظام التشغيل والمنصة.',
                        'سلطت الضوء على مخاطر الخصوصية في العالم الحقيقي المرتبطة بتتبع الويب والبصمة الرقمية للمتصفح (Browser Fingerprinting) بهدف التوعية الأمنية.'
                    ]
                },
                {
                    title: 'محاكاة أمن الشبكات — التوأم الشرير (Evil Twin) والبوابة المقيدة',
                    tags: ['hostapd', 'dnsmasq', 'Node.js'],
                    link: 'https://github.com/Professor606/Evil-Twin-Captive-Portal',
                    bullets: [
                        'صممت بيئة معملية مسيطر عليها باستخدام hostapd و dnsmasq وبوابة مقيدة مخصصة (Captive Portal) مبنية بـ Node.js لمحاكاة هجمات التوأم الشرير والتقاط مصافحة WPA2.',
                        'وثقت نقاط الضعف في تجزئة الشبكات واقترحت استراتيجيات تخفيف لتعزيز أمان شبكات Wi-Fi في بيئات العمل المؤسسية.'
                    ]
                },
                {
                    title: 'OpenClaw — مساعد شخصي بالذكاء الاصطناعي للإنتاجية',
                    tags: ['AWS EC2', 'APIs', 'Automation'],
                    bullets: [
                        'نشرت مساعداً ذكياً مدعوماً بالذكاء الاصطناعي على خوادم AWS EC2 لجدولة المهام تلقائياً، وتحسين سير العمل اليومي، وتتبع الصحة، واسترجاع البيانات في الوقت الفعلي.',
                        'دمجت خدمات واجهات برمجة التطبيقات (APIs) وبنيت مسارات أتمتة مخصصة لتبسيط وزيادة الإنتاجية الشخصية.'
                    ]
                },
                {
                    title: 'أساسيات لينكس وGit',
                    tags: ['Linux', 'Ubuntu', 'Git', 'GitHub', 'SSH', 'Bash'],
                    link: 'https://github.com/professor606/discovery-web-piscine',
                    bullets: [
                        'التدرّب على استخدام سطر الأوامر في لينكس والتنقّل بين الملفات والمجلدات في بيئة أوبونتو.',
                        'استخدام Git وGitHub لإدارة الإصدارات، وتنظيم المستودعات البرمجية، والتعاون في تطوير المشاريع.',
                        'التعرّف على SSH وأساسيات العمل ضمن بيئات التطوير البرمجية.'
                    ]
                },
                {
                    title: 'أساسيات HTML',
                    tags: ['HTML5', 'Semantic HTML', 'Web Development'],
                    link: 'https://github.com/professor606/project01',
                    bullets: [
                        'إنشاء هياكل صفحات الويب باستخدام HTML والعناصر الدلالية.',
                        'التدرّب على تنظيم محتوى الصفحات وإضافة الروابط والصور والعناصر الأساسية.',
                        'تطبيق المبادئ الأساسية لتحسين إمكانية الوصول إلى محتوى الويب.'
                    ]
                },
                {
                    title: 'تنسيق صفحات الويب باستخدام CSS',
                    tags: ['CSS3', 'Web Design', 'Responsive Design'],
                    link: 'https://github.com/professor606/project02',
                    bullets: [
                        'تنسيق صفحات الويب باستخدام محددات CSS وخصائصها وأساليب تخطيط العناصر.',
                        'التحكّم في المسافات والخطوط والألوان ومواضع العناصر داخل الصفحات.',
                        'التعرّف على أساليب التصميم المتجاوب لتناسب صفحات الويب أحجام الشاشات المختلفة.'
                    ]
                },
                {
                    title: 'البرمجة باستخدام JavaScript',
                    tags: ['JavaScript', 'Programming Fundamentals', 'DOM'],
                    link: 'https://github.com/professor606/project03',
                    bullets: [
                        'التدرّب على أساسيات JavaScript، بما في ذلك المتغيرات والدوال وهياكل التحكم.',
                        'تطبيق المنطق البرمجي لحل تمارين ومشكلات عملية.',
                        'التعرّف على كيفية التعامل مع نموذج كائنات المستند (DOM) وإنشاء تفاعلات داخل صفحات الويب.'
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
                    icon: 'shield',
                    description: 'اكتشفت وأبلغت بشكل مسؤول عن ثغرة (Cross-Context Script Execution) حرجة بتقييم (CVSS 8.3) في نظام إدارة تعلم (LMS) فعلي، والتي كان من الممكن أن تسمح بالوصول غير المصرح به لمعلومات المستخدمين الحساسة والتلاعب بالدرجات.'
                },
                {
                    title: 'اكتشاف وإبلاغ مسؤول (Responsible Disclosure)',
                    org: 'بوابة نظام معلومات الطلاب (SIS)',
                    date: '2025',
                    icon: 'shield',
                    description: 'اكتشفت وأبلغت بشكل مسؤول عن ثغرة (IDOR) حرجة بتقييم (CVSS 7.1) في نظام معلومات طلاب (SIS) فعلي، والتي كان من الممكن أن تؤدي إلى كشف معلومات حساسة لأكثر من 15,000 مستخدم.'
                },
                {
                    title: 'فائز بمكافأة اكتشاف ثغرات (Bug Bounty)',
                    org: 'جامعة عجلون الوطنية (ANU)',
                    date: '2025',
                    icon: 'award',
                    description: 'اكتشفت ثغرة حرجة لتجاوز المصادقة أثناء مسابقة جامعية، مما أهّلني للحصول على مكافأة مالية بقيمة 100 دولار.'
                },
                {
                    title: 'تحديات (TryHackMe Advent of Cyber)',
                    org: 'TryHackMe',
                    date: '2025',
                    icon: 'terminal',
                    description: 'أكملت جميع التحديات اليومية الأربعة والعشرين والتي شملت عمليات مركز العمليات الأمنية (SOC)، واستغلال ثغرات الويب، وتحليل السجلات، التحقيق الجنائي الرقمي.'
                },
                {
                    title: 'مسابقة اختراق الجامعات (HackTheBox University CTF)',
                    org: 'HackTheBox',
                    date: '2025',
                    icon: 'flag',
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
            location: 'عجلون، الأردن',
            training: {
                label: 'التدريب',
                title: 'تطوير الويب وأمن تطبيقات الويب',
                provider: 'مدرسة 42',
                description: 'تدريب عملي في تطوير الويب وأمن تطبيقاته، من خلال المشاريع التطبيقية، والتعلّم التشاركي بين المتدربين، وتنمية مهارات حل المشكلات.',
                tags: [
                    'تطوير الويب',
                    'أمن تطبيقات الويب',
                    'جافاسكريبت',
                    'لينكس',
                    'Git وGitHub',
                    'التعلّم القائم على المشاريع'
                ],
                date: 'سبتمبر 2026 - ديسمبر 2026'
            }
        },
        languages: {
            title: 'اللغات',
            items: [
                { glyph: 'أ', name: 'العربية', level: 'اللغة الأم' },
                { glyph: 'Aa', name: 'الإنجليزية', level: 'متقدم' }
            ]
        },
        hobbies: {
            title: 'الهوايات والاهتمامات',
            items: [
                {
                    icon: 'code',
                    title: 'تطوير المشاريع الشخصية',
                    text: 'أستمتع بتحويل الأفكار إلى مشاريع عملية، وتجربة تقنيات جديدة، وبناء أدوات تساعد على حل مشكلات حقيقية.'
                },
                {
                    icon: 'shield',
                    title: 'أمن الويب والبحث الأمني',
                    text: 'أستمتع باستكشاف ثغرات تطبيقات الويب، وحل التحديات الأمنية، وتجربة الأدوات لفهم كيفية اكتشاف الثغرات وتحسين أمان الأنظمة.'
                },
                {
                    icon: 'dumbbell',
                    title: 'الكاليستنكس وتطوير القوة',
                    text: 'أمارس تمارين وزن الجسم وأسعى إلى إتقان مهارات متقدمة مثل المصل أب والفرونت ليفر، وأساهم في بناء Gravity، وهو مجتمع يهتم بالكاليستنكس والتدريب والتطور المستمر.'
                },
                {
                    icon: 'users',
                    title: 'المجتمع والعمل الجماعي',
                    text: 'أستمتع بالتعلّم مع الآخرين، وتبادل المعرفة التقنية، والعمل على المشاريع المشتركة، وتحويل الاهتمامات والأفكار المشتركة إلى إنجازات ملموسة.'
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
            success: 'جارٍ فتح تطبيق البريد مع رسالتك…',
            copyEmail: 'نسخ البريد',
            copied: 'تم النسخ'
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

// ── Icons: small inline SVGs that follow the text colour (Lucide style) ─────
const ICONS = {
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    download: '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
    arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    dumbbell: '<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
};

function icon(name, size = 22) {
    return `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;
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
    themeButton.innerHTML = icon(isLight ? 'moon' : 'sun', 18);
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
    ? `<a class="hero-btn primary" href="${esc(RESUME_URL)}" download>${icon('download', 18)}${esc(t.hero.resume)}</a>`
    : '';
    const contactStyle = RESUME_URL ? 'secondary' : 'primary';
    const stats = list(t.hero.stats, (stat) => `
    <div class="stat"><dt>${esc(stat.value)}</dt><dd>${esc(stat.label)}</dd></div>`);

    return `
    <header class="container hero" id="top">
    <div class="hero-inner">
    <div class="hero-content">
    <p class="hero-terminal enter" aria-hidden="true"><span class="prompt">$</span><span class="cmd">whoami</span><span class="caret"></span></p>
    <div class="hero-badge enter enter-delay-1">${esc(t.hero.badge)}</div>
    <h1 class="enter enter-delay-2">${esc(t.hero.hi)}<br><span class="gradient-text">${esc(t.hero.name)}</span></h1>
    <p class="hero-tagline enter enter-delay-3">${esc(t.hero.tagline)}</p>
    <div class="hero-buttons enter enter-delay-3">
    ${cvButton}
    <a class="hero-btn ${contactStyle}" href="mailto:${EMAIL}">${esc(t.hero.contact)}</a>
    <a class="hero-btn secondary" href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">${esc(t.hero.linkedin)}</a>
    <a class="hero-btn secondary" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">${esc(t.hero.github)}</a>
    </div>
    <dl class="hero-stats enter enter-delay-3">${stats}</dl>
    </div>
    <img class="hero-avatar enter enter-delay-2" src="assets/avatar-v2.webp" alt="${esc(t.hero.photoAlt)}" width="300" height="300" decoding="async" fetchpriority="high">
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

const SKILL_ICONS = ['shield', 'cloud', 'code'];

function skillsHtml(t) {
    const cards = t.skills.categories.map((category, index) => `
    <article class="glass-panel skill-card">
    <h3>${icon(SKILL_ICONS[index] || 'code', 20)}${esc(category.title)}</h3>
    <div class="skill-list">${list(category.skills, (skill) => `<span class="pill">${esc(skill)}</span>`)}</div>
    </article>`).join('');
    return `<div class="skill-grid">${cards}</div>`;
}

function projectsHtml(t) {
    const cards = list(t.projects.items, (project) => {
        const link = project.link
        ? `<a class="pill project-link" href="${esc(project.link)}" target="_blank" rel="noopener noreferrer">GitHub${icon('arrowUpRight', 14)}</a>`
        : '';
        const featured = project.featured
        ? `<span class="featured-tag">${esc(t.projects.featuredLabel)}</span>`
        : '';
        const tags = project.tags
        ? `<div class="tag-row">${list(project.tags, (tag) => `<span class="tag">${esc(tag)}</span>`)}</div>`
        : '';
        return `
        <article class="glass-panel project-card${project.featured ? ' featured' : ''}">
        <div class="project-top"><div>${featured}<h3>${esc(project.title)}</h3></div>${link}</div>
        <ul>${list(project.bullets, (bullet) => `<li>${esc(bullet)}</li>`)}</ul>
        ${tags}
        </article>`;
    });
    return `<div class="project-grid">${cards}</div>`;
}

function achievementsHtml(t) {
    const cards = list(t.achievements.items, (item) => {
        const link = item.link
        ? `<a class="pill achievement-link" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">${esc(item.linkLabel)}${icon('arrowUpRight', 14)}</a>`
        : '';
        return `
        <article class="glass-panel achievement">
        <div class="achievement-icon" aria-hidden="true">${icon(item.icon || 'award', 22)}</div>
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
    const tr = j.training;
    return `
    <div class="journey-inner">
    <h3 class="subheading">${icon('cap', 24)}${esc(j.educationLabel)}</h3>
    <div class="timeline-item">
    <article class="glass-panel education-panel">
    <div class="education-top">
    <div><h3>${esc(j.university)}</h3><h4>${esc(j.degree)}</h4></div>
    <div class="education-meta"><div>${esc(j.graduation)}</div><div>${esc(j.location)}</div></div>
    </div>
    </article>
    </div>

    <h3 class="subheading">${icon('terminal', 24)}${esc(tr.label)}</h3>
    <div class="timeline-item">
    <article class="glass-panel education-panel training-panel">
    <div class="education-top">
    <div><h3>${esc(tr.title)}</h3><h4>${esc(tr.provider)}</h4></div>
    ${tr.date ? `<div class="education-meta">${esc(tr.date)}</div>` : ''}
    </div>
    <p>${esc(tr.description)}</p>
    <div class="skill-list">${list(tr.tags, (tag) => `<span class="pill">${esc(tag)}</span>`)}</div>
    </article>
    </div>
    </div>`;
}

function hobbiesHtml(t) {
    const cards = list(t.hobbies.items, (item) => `
    <article class="glass-panel hobby-card">
    <div class="hobby-emoji" aria-hidden="true">${icon(item.icon, 26)}</div>
    <h3>${esc(item.title)}</h3>
    <p>${esc(item.text)}</p>
    </article>`);
    return `<div class="hobby-grid">${cards}</div>`;
}

function languagesHtml(t) {
    const cards = list(t.languages.items, (item) => `
    <article class="glass-panel language-card">
    <div class="language-flag" aria-hidden="true">${esc(item.glyph)}</div>
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
    <li>${icon('mail', 18)}<a href="mailto:${EMAIL}">${EMAIL}</a><button class="copy-btn" type="button" data-email-copy>${esc(c.copyEmail)}</button></li>
    <li>${icon('globe', 18)}<a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer">${LINKEDIN_URL.replace('https://', '')}</a></li>
    <li>${icon('mapPin', 18)}<span>${LOCATION}</span></li>
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
    if (!form) return;

    const status = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        const data = new FormData(form);

        const payload = {
            name: data.get('name').trim(),
            email: data.get('email').trim(),
            subject: data.get('subject').trim(),
            message: data.get('message').trim()
        };

        status.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || 'Failed to send message.');
            }

            status.textContent = activeLanguage === 'ar'
                ? 'تم إرسال رسالتك بنجاح!'
                : 'Message sent successfully!';

            form.reset();
        } catch (error) {
            console.error('Contact form error:', error);

            status.textContent = activeLanguage === 'ar'
                ? 'فشل إرسال الرسالة. حاول مرة أخرى.'
                : 'Failed to send message. Please try again.';
        } finally {
            submitButton.disabled = false;
        }
    });

    // Keep the existing copy-email functionality
    const copyButton = document.querySelector('[data-email-copy]');

    copyButton?.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);

            copyButton.textContent = t.contact.copied;

            setTimeout(() => {
                copyButton.textContent = t.contact.copyEmail;
            }, 2000);
        } catch {
            // The mailto link remains available as a fallback.
        }
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

// ── Your photo: if the image file is missing, show your initials instead ───

function setUpHeroAvatar() {
    const avatar = document.querySelector('.hero-avatar');
    if (!avatar) return;

    const showInitials = () => {
        const fallback = document.createElement('div');
        fallback.className = 'hero-avatar hero-avatar--fallback';
        fallback.setAttribute('aria-hidden', 'true');
        fallback.textContent = 'AE';
        avatar.replaceWith(fallback);
    };

    avatar.addEventListener('error', showInitials, { once: true });
    if (avatar.complete && avatar.naturalWidth === 0) showInitials();
}

// ── Nav: highlight the link of the section you are reading ──────────────────

let navObserver;

function highlightNavOnScroll() {
    navObserver?.disconnect();
    if (!('IntersectionObserver' in window)) return;

    const links = new Map();
    document.querySelectorAll('.nav-item').forEach((link) => {
        links.set(link.getAttribute('href').slice(1), link);
    });

    navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((link, id) => {
                    const isCurrent = id === entry.target.id;
                    link.classList.toggle('active', isCurrent);
                    if (isCurrent) link.setAttribute('aria-current', 'true');
                    else link.removeAttribute('aria-current');
                });
            });
        },
        { rootMargin: '-40% 0px -55% 0px' }
    );

    ['top', 'languages', ...links.keys()].forEach((id) => {
        const section = document.getElementById(id);
        if (section) navObserver.observe(section);
    });
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
        setUpHeroAvatar();
        highlightNavOnScroll();
}

// ── Remembered choices (language & theme) ───────────────────────────────────

function getSavedLanguage() {
    const urlLanguage = new URLSearchParams(location.search).get('lang');
    if (urlLanguage === 'ar' || location.pathname.endsWith('/ar')) return 'ar';
    if (localStorage.getItem('portfolio-language') === 'ar') return 'ar';
    return 'en';
}

function getSavedTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
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
