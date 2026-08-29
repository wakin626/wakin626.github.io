/* ============================================
   TYPING EFFECT
   Cycles through an array of capabilities
   with a typewriter animation effect
============================================ */
const capabilities = [
    'Troubleshooting Networks',
    'Deploying Local Systems',
    'Optimizing Hardware & IT Infrastructure',
    'Managing Active Directory',
    'Securing Network Infrastructure'
];

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById('typing-text');

const typeSpeed = 80;
const deleteSpeed = 40;
const pauseDuration = 2000;

function typeEffect() {
    const currentText = capabilities[currentIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; typeEffect(); }, pauseDuration);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % capabilities.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? deleteSpeed : typeSpeed);
    }
}

typeEffect();


/* ============================================
   BADGE DECK INTERACTION
   Adds tilt and glow effects on hover
============================================ */
const badges = document.querySelectorAll('.badge');

badges.forEach(badge => {
    badge.addEventListener('mousemove', (e) => {
        const rect = badge.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((centerX - x) / centerX) * 5;

        badge.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });

    badge.addEventListener('click', () => {
        badge.style.transform = 'translateY(-2px) scale(0.95)';
        setTimeout(() => {
            badge.style.transform = 'translateY(-4px)';
        }, 150);
    });
});


/* ============================================
   SMOOTH SCROLL FOR NAV LINKS
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


/* ============================================
   SCROLL REVEAL ANIMATION
   Elements fade in as you scroll down
============================================ */
const revealObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, revealObserverOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});


/* ============================================
   NAVBAR VISIBILITY ON SCROLL
============================================ */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(11, 15, 23, 0.95)';
    } else {
        navbar.style.background = 'var(--glass-bg)';
    }
});


/* ============================================
   CONSOLE EASTER EGG
============================================ */
console.log('%c Welcome to my portfolio!', 'color: #00FF66; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Feel free to reach out!', 'color: #00F2FE;');


/* ============================================
   SKILL CARD SPOTLIGHT EFFECT
   Tracks mouse position to create a radial
   gradient glow that follows cursor movement
============================================ */
document.querySelectorAll('[data-card]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});


/* ============================================
   TERMINAL ANIMATION SYSTEM
   Types out terminal lines with realistic
   delays and animations on scroll trigger
============================================ */
const terminalLines = [
    { type: 'command', text: '> system_status.sh --init' },
    { type: 'output', text: 'Initializing system diagnostics...', delay: 300 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> ping localhost', delay: 400 },
    { type: 'output-ok', text: '   \u2713 Connection established', delay: 300 },
    { type: 'output-ok', text: '   \u2713 Latency: <1ms', delay: 200 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> checking system uptime', delay: 400 },
    { type: 'output-ok', text: '   \u2713 Uptime: 99.9%', delay: 250 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> loading core_skills', delay: 400 },
    { type: 'output-ok', text: '   \u2713 Hardware Diagnostics: LOADED', delay: 200 },
    { type: 'output-ok', text: '   \u2713 TCP/IP & Networking: LOADED', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Active Directory: LOADED', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Windows Administration: LOADED', delay: 200 },
    { type: 'output-ok', text: '   \u2713 HTML/CSS/JS: LOADED', delay: 200 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> all systems operational', delay: 400 },
    { type: 'output-ok', text: '   \u2713 STATUS: READY', delay: 300 }
];

const toolLines = [
    { type: 'command', text: '> tech_stack.sh --list' },
    { type: 'output', text: 'Loading technology inventory...', delay: 300 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> --category operating_systems', delay: 400 },
    { type: 'output-ok', text: '   \u2713 Windows 10/11 Pro', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Windows Server (Basic Administration)', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Linux Basics (Ubuntu / Terminal Commands)', delay: 200 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> --category networking', delay: 400 },
    { type: 'output-ok', text: '   \u2713 TCP/IP, DHCP & Static IP Setup', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Router & Switch Configuration', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Network Cabling (CAT5e/CAT6 Crimping & Testing)', delay: 200 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: '> --category tools_and_admin', delay: 400 },
    { type: 'output-ok', text: '   \u2713 Active Directory (User Creation & Password Resets)', delay: 200 },
    { type: 'output-ok', text: '   \u2713 Hardware Diagnostics & PC Assembly', delay: 200 },
    { type: 'output-ok', text: '   \u2713 SQL / Database Management', delay: 200 },
    { type: 'output-ok', text: '   \u2713 HTML5, CSS3 & JavaScript', delay: 200 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output-ok', text: '   INVENTORY COMPLETE', delay: 300 }
];

const terminalBody = document.getElementById('terminal-body');
const tabs = document.querySelectorAll('.terminal-tab');
let currentLines = terminalLines;
let isTyping = false;
let hasTyped = false;

function formatLine(line) {
    const className = line.type.includes('ok') ? ' terminal-output ok' : ' terminal-output';
    if (line.type === 'command') {
        return `<div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-command">${line.text}</span></div>`;
    }
    return `<div class="terminal-line${className}">${line.text}</div>`;
}

function renderTerminal(lines) {
    terminalBody.innerHTML = '';
    terminalBody.innerHTML = '<span class="terminal-cursor"></span>';

    let totalDelay = 0;

    lines.forEach((line, index) => {
        totalDelay += line.delay || 100;

        setTimeout(() => {
            const lineEl = document.createElement('div');
            lineEl.innerHTML = formatLine(line);
            const lineContent = lineEl.firstChild;

            const cursor = terminalBody.querySelector('.terminal-cursor');
            terminalBody.insertBefore(lineContent, cursor);

            setTimeout(() => {
                lineContent.classList.add('visible');
            }, 50);

            terminalBody.scrollTop = terminalBody.scrollHeight;
        }, totalDelay);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.dataset.tab;
        currentLines = tabName === 'status' ? terminalLines : toolLines;

        hasTyped = false;
        renderTerminal(currentLines);
    });
});

const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            hasTyped = true;
            renderTerminal(currentLines);
            terminalObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

terminalObserver.observe(document.querySelector('.terminal-window'));


/* ============================================
   PROJECT FILTER TABS
   Filters project cards by category
============================================ */
const filterTabs = document.querySelectorAll('.filter-tab');
const showcaseCards = document.querySelectorAll('.showcase-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        showcaseCards.forEach(card => {
            const categories = card.dataset.category;

            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
    });
});


/* ============================================
   PROJECT MODAL SYSTEM
   Opens a glassmorphism modal with detailed
   system information for each project
============================================ */
const projectData = {
    shiftcrew: {
        tag: 'Capstone Project',
        tagClass: 'thesis',
        title: 'ShiftCrew',
        subtitle: 'Automated Shift Scheduling & Geofenced Attendance System',
        overview: 'Developed for "Tagpuan ni Konsi" crews, ShiftCrew automates weekly shift rotations and enforces location-based attendance verification. The system eliminates proxy clock-ins using GPS geofencing while providing management with real-time workforce visibility.',
        flow: ['Crew Scheduling', 'GPS Geofencing', 'Attendance Log', 'Reports Dashboard'],
        problem: 'Manual shift scheduling was time-consuming and prone to conflicts. Proxy clock-ins (buddy punching) resulted in inaccurate attendance records and payroll discrepancies. No centralized system existed for managing crew rotations.',
        tech: ['JavaScript', 'Geolocation API', 'Database Management', 'System Logic', 'GPS Verification', 'Real-time Sync']
    },
    erp: {
        tag: 'OJT / Enterprise System',
        tagClass: 'ojt',
        title: 'Enterprise ERP & Manufacturing Tracker',
        subtitle: 'Multi-Department Manufacturing & Order-to-Billing System',
        overview: 'An end-to-end workflow automation system connecting 5 key departments: PPIC (Customer PO tracking) \u2192 Production (Finished goods input) \u2192 Warehouse (Delivery logistics) \u2192 QA/QC (Quality control inspection) \u2192 Finance (Sales invoicing & billing). Each department has role-based access and real-time status tracking.',
        flow: ['PPIC (PO)', 'Production', 'Warehouse', 'QA/QC', 'Finance'],
        problem: 'Disconnected departmental workflows caused data silos, delayed order processing, and manual handoff errors. Production had no visibility into warehouse stock, and finance lacked real-time data for accurate billing.',
        tech: ['Database Architecture', 'Multi-Role Access Control', 'Workflow Logic', 'Reporting Modules', 'Department Integration', 'Audit Trail']
    },
    canteen: {
        tag: 'OJT / FinTech',
        tagClass: 'ojt',
        title: 'Smart Canteen E-Wallet System',
        subtitle: 'QR-Based Canteen Credit & Peer-to-Peer Transfer System',
        overview: 'An internal e-wallet solution allowing employees to load credits, transfer funds to peers, and scan unique QR codes for instant transactions at the company canteen. Features real-time balance updates and transaction history logging.',
        flow: ['Credit Load', 'QR Scan', 'Transaction', 'Balance Update', 'Receipt'],
        problem: 'Cash-only transactions at the company canteen caused long queues, security risks with cash handling, and no spending visibility for employees. No system existed for tracking canteen transactions or managing employee credit balances.',
        tech: ['QR Code Generation', 'QR Code Processing', 'Transaction Tracking', 'Balance Logic', 'Receipt Generation', 'User Authentication']
    },
    hr: {
        tag: 'OJT / Management System',
        tagClass: 'ojt',
        title: 'HR Operations & Logistics Manager',
        subtitle: 'HR Supplies, Attendance & Recruitment Monitoring Platform',
        overview: 'An all-in-one administrative hub that tracks office supply inventory, monitors daily employee attendance, generates system reports, and manages applicant recruitment pipelines from application to onboarding.',
        flow: ['Inventory Track', 'Attendance Log', 'Report Gen', 'Recruitment', 'Onboarding'],
        problem: 'HR operations relied on spreadsheets and paper-based tracking, leading to inventory shortages, attendance discrepancies, and lost applicant records. No centralized platform existed for managing HR workflows and generating reports.',
        tech: ['Inventory Tracking', 'Reporting Modules', 'Employee Monitoring', 'Recruitment Pipeline', 'Document Management', 'Dashboard Analytics']
    }
};

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.modal;
        const data = projectData[key];

        document.getElementById('modal-tag').textContent = data.tag;
        document.getElementById('modal-tag').className = `modal-tag ${data.tagClass}`;
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-subtitle').textContent = data.subtitle;
        document.getElementById('modal-overview').textContent = data.overview;
        document.getElementById('modal-problem').textContent = data.problem;

        const flowContainer = document.getElementById('modal-flow');
        flowContainer.innerHTML = data.flow.map((step, i) => {
            const arrow = i < data.flow.length - 1 ? '<span class="flow-arrow">\u2192</span>' : '';
            return `<span class="flow-step">${step}</span>${arrow}`;
        }).join('');

        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = data.tech.map(t =>
            `<span class="modal-tech-item">${t}</span>`
        ).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});


/* ============================================
   CONTACT FORM SUBMISSION
   Simulates terminal-style submission state
============================================ */
const contactForm = document.getElementById('contact-form');
const formSubmit = document.getElementById('form-submit');
const terminalSubmit = document.getElementById('terminal-submit');

emailjs.init("Q7zhvdu7aVplI3tK_");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    formSubmit.disabled = true;
    formSubmit.innerHTML = '<span>Sending...</span>';

    terminalSubmit.classList.add('active');
    const lines = terminalSubmit.querySelectorAll('.terminal-submit-line');

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, 400 * (index + 1));
    });

    emailjs.sendForm("service_922tb78", "template_tryit8j", e.target)
        .then(() => {
            contactForm.reset();
            formSubmit.disabled = false;
            formSubmit.innerHTML = '<span>Send Message</span><span>\u27A1</span>';

            setTimeout(() => {
                terminalSubmit.classList.remove('active');
                lines.forEach(line => line.classList.remove('visible'));
            }, 3000);
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("Failed to send message. Please try again or email directly.");
            contactForm.reset();
            formSubmit.disabled = false;
            formSubmit.innerHTML = '<span>Send Message</span><span>\u27A1</span>';

            setTimeout(() => {
                terminalSubmit.classList.remove('active');
                lines.forEach(line => line.classList.remove('visible'));
            }, 3000);
        });
});


/* ============================================
   CLIPBOARD COPY FUNCTIONALITY
   Copies email to clipboard and shows toast
============================================ */
const copyEmailCard = document.getElementById('copy-email');
const toast = document.getElementById('toast');

copyEmailCard.addEventListener('click', () => {
    const textToCopy = copyEmailCard.dataset.copy;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast();
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    });
});

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}


/* ============================================
   LIVE SYSTEM CLOCK
   Real-time clock display in footer
============================================ */
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();

    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Manila'
    };

    const timeString = now.toLocaleTimeString('en-US', options);
    clockElement.textContent = `${timeString} PST`;
}

updateClock();
setInterval(updateClock, 1000);


/* ============================================
   BACK TO TOP BUTTON
   Smooth scroll to top with visibility toggle
============================================ */
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* ============================================
   MOBILE MENU TOGGLE
   Hamburger menu for mobile navigation
============================================ */
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});
