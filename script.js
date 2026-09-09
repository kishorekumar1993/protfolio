/* =============================================
   PORTFOLIO SCRIPT — S. Kishore Kumar
   Technical Lead & Insurance / Flutter Architect
============================================= */

'use strict';

// ───── PROJECT DATA REPOSITORY (INSURANCE FIRST) ─────
const PROJECTS_DATA = {
    beema: {
        title: 'Beema Insurance Platform & FinTech Ecosystem',
        category: 'Insurance & FinTech Core (Primary Flagship)',
        icon: '<i class="fas fa-umbrella" style="color:#10b981"></i>',
        company: 'Behind Force Tech Solution · Chennai, India',
        role: 'Technical Lead / Insurance Architect',
        overview: 'End-to-end digital insurance platform catering to B2C customers and B2B broker networks across health, motor, and term insurance policies. Powered by high-speed actuarial calculation engines and instant digital issuance.',
        metrics: [
            { val: '100K+', lbl: 'Policies Processed' },
            { val: '2.5x', lbl: 'Faster Issuance Rate' },
            { val: '4.8★', lbl: 'User Rating' },
            { val: '30%+', lbl: 'Growth in Digital Sales' }
        ],
        architecture: [
            'Clean Architecture with isolated Domain, Data, and Presentation layers for zero-leakage business rules.',
            'Multi-tenant configuration enabling rapid white-labeling for institutional bank and broker partners.',
            'Hybrid JavaScript-Flutter Web bridge for PCI-DSS compliant secure checkout.',
            'Offline-first caching and real-time policy synchronizer with bank-grade encryption.'
        ],
        modules: [
            '<strong>Dynamic Premium Calculation Engine:</strong> Real-time actuarial quote generation engine evaluating user risk parameters and multi-vehicle/health modifiers.',
            '<strong>OCR Automated KYC Onboarding:</strong> In-app document scanning and automatic identity verification for instant approval.',
            '<strong>Multi-Tier Policy Lifecycle Management:</strong> Instant digital endorsement, renewal processing, and certificate generation.',
            '<strong>Broker & Agent Distribution Portal:</strong> Complete lead pipeline tracking, commission reconciliation, and conversion funnels.',
            '<strong>Secure Multi-Gateway Payment Bridges:</strong> High-security payment tokenization, split payouts, and automated recurring payment schedules.'
        ],
        tech: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC Pattern', 'REST APIs', 'OCR KYC Engine', 'Payment Gateways', 'FinTech Security', 'PDF Engine']
    },
    hrms: {
        title: 'Enterprise HRMS & Workforce Suite',
        category: 'Enterprise Workforce Platform',
        icon: '<i class="fas fa-users-gear" style="color:#6366f1"></i>',
        company: 'Behind Force Tech Solution · Chennai, India',
        role: 'Technical Lead & Flutter Architect',
        overview: 'A robust, multi-tenant enterprise HRMS mobile and web platform engineered to automate end-to-end human capital workflows for 5,000+ distributed workforce personnel.',
        metrics: [
            { val: '5,000+', lbl: 'Active Employees' },
            { val: '60%', lbl: 'Faster Payroll Cycles' },
            { val: '99.9%', lbl: 'Uptime & Sync Reliability' }
        ],
        architecture: [
            'Built on Flutter Clean Architecture with strict separation into Domain, Data, and Presentation layers.',
            'State management orchestrated with BLoC (Business Logic Component) pattern for predictable state transitions.',
            'Offline-first synchronization with SQLite local storage and background worker cloud reconciliation.',
            'Secure cryptographic token handling and AES-256 encrypted local credential cache.'
        ],
        modules: [
            '<strong>Geo-Fenced Biometric Attendance:</strong> High-precision GPS perimeter validation with live camera selfie capture and mock-location detection.',
            '<strong>Automated Payroll Calculation Engine:</strong> Dynamic computation of base pay, overtime, allowances, tax deductions (TDS, PF, ESI), and automated encrypted PDF payslip generation.',
            '<strong>Multi-Tier Leave & Shift Approvals:</strong> Hierarchical approval workflows with real-time push notifications (FCM) and calendar syncing.',
            '<strong>Performance Appraisal & KPI Tracking:</strong> Goal setting, quarterly review cycles, 360-degree feedback, and executive analytics.',
            '<strong>Role-Based Access Control (RBAC):</strong> Granular permissions tailored for Super Admin, HR Execs, Line Managers, and Field Employees.'
        ],
        tech: ['Flutter', 'Clean Architecture', 'BLoC Pattern', 'Dart', 'REST APIs', 'Geo-Fencing SDK', 'Biometric Auth', 'PDF Engine', 'SQLite', 'Firebase FCM']
    },
    oqic: {
        title: 'OQIC Medical Healthcare Claims App',
        category: 'Healthcare FinTech & Insurance',
        icon: '<i class="fas fa-heartbeat" style="color:#06b6d4"></i>',
        company: 'Behind Force Tech Solution · Chennai, India',
        role: 'Technical Lead',
        overview: 'Comprehensive medical insurance app delivering real-time claim adjudication, provider network discovery, and cashless hospital validation.',
        metrics: [
            { val: '70%', lbl: 'Paperless Claims' },
            { val: 'Instant', lbl: 'Cashless Approvals' },
            { val: '500+', lbl: 'Hospital Network Links' }
        ],
        architecture: [
            'MVVM Architecture integrated with reactive Firebase services.',
            'Camera document capture with auto-edge detection for medical bill uploads.'
        ],
        modules: [
            '<strong>Provider Directory & Geolocation:</strong> Map-based hospital lookup with cashless eligibility indicators.',
            '<strong>Digital Health Card:</strong> Encrypted QR code representation of insurance policy for instant hospital admission.',
            '<strong>Live Claim Status Adjudication:</strong> Step-by-step progress tracker for reimbursement approvals.'
        ],
        tech: ['Flutter', 'MVVM', 'Firebase', 'Google Maps SDK', 'Document Scanner', 'REST APIs']
    },
    goodnews: {
        title: 'My Good News Healthcare Suite',
        category: 'Healthcare & Wellness AI',
        icon: '<i class="fas fa-baby" style="color:#f472b6"></i>',
        company: 'Revenup · Chennai, India',
        role: 'Flutter Developer',
        overview: 'Integrated women’s health application incorporating predictive ovulation calculations, AI medical symptom checker, and personalized workout routines.',
        metrics: [
            { val: '3 Apps', lbl: 'Unified Ecosystem' },
            { val: '4.7★', lbl: 'App Store Rating' }
        ],
        architecture: [
            'Modular micro-features sharing a unified user authentication and health metric core.'
        ],
        modules: [
            '<strong>Fertility Analysis App:</strong> Algorithmic cycle predictions with visual health heatmaps.',
            '<strong>AI Medical Check App:</strong> Conversational symptom evaluation and doctor discovery.',
            '<strong>Fitness Tracker:</strong> Activity logging with tailored dietary advice.'
        ],
        tech: ['Flutter', 'Google Maps API', 'AI Analytics', 'Camera API', 'HealthKit / Google Fit']
    },
    neuma: {
        title: 'Neuma – BLE Health Wearable App',
        category: 'IoT & Medical Wearables',
        icon: '<i class="fas fa-brain" style="color:#ec4899"></i>',
        company: 'Indium Software · Chennai, India',
        role: 'Senior Software Engineer',
        overview: 'High-precision Bluetooth Low Energy application that connects to medical diagnostic devices for real-time vital signs monitoring.',
        metrics: [
            { val: '10K+', lbl: 'Play Store Downloads' },
            { val: '0%', lbl: 'Packet Loss on BLE Stream' },
            { val: '60fps', lbl: 'Live Graph Telemetry' }
        ],
        architecture: [
            'Custom BLE 4.0/5.0 communication manager with auto-reconnection and byte-stream checksum validation.',
            'Background GATT server communication for continuous data logging.'
        ],
        modules: [
            '<strong>Real-Time Vital Graphs:</strong> Smooth 60fps telemetry visualization.',
            '<strong>Anomaly Detection Alerts:</strong> Instant notifications when readings breach medical thresholds.'
        ],
        tech: ['Flutter', 'BLE 4.0/5.0', 'GATT Protocol', 'Firebase', 'Clean Architecture', 'Charts Engine']
    },
    crm: {
        title: 'Enterprise CRM & Financial System',
        category: 'Insurance Sales & Operations',
        icon: '<i class="fas fa-chart-line" style="color:#f59e0b"></i>',
        company: 'Behind Force Tech Solution · Chennai, India',
        role: 'Technical Lead',
        overview: 'High-performance Customer Relationship Management platform tailored for insurance sales forces, featuring lead pipelines, renewal management, and financial forecasting.',
        metrics: [
            { val: '40%', lbl: 'Boost in Lead Conversion' },
            { val: '25%', lbl: 'Higher Renewal Retention' }
        ],
        architecture: [
            'GetX state management and dependency injection architecture for ultra-responsive UI responsiveness.',
            'Optimized local caching for rapid customer search across 100K+ records.'
        ],
        modules: [
            '<strong>360° Customer Profile:</strong> Unified timeline of interactions, policies, claims, and payment records.',
            '<strong>Automated Renewal Reminders:</strong> Multi-channel notification dispatch via WhatsApp, SMS, and Email.',
            '<strong>Commission & Incentive Tracker:</strong> Real-time earnings breakdown and target tracking.'
        ],
        tech: ['Flutter', 'GetX', 'REST APIs', 'Payment Bridge', 'Push Notifications', 'Data Visualization']
    },
    agri: {
        title: 'Smart Agriculture IoT Dashboard',
        category: 'AgriTech & IoT Systems',
        icon: '<i class="fas fa-seedling" style="color:#00f5d4"></i>',
        company: 'Freelance IoT Solution',
        role: 'Mobile Lead',
        overview: 'Mobile telemetry and remote actuator controller for smart agricultural sensor stations monitoring soil moisture, climate, and irrigation.',
        metrics: [
            { val: '35%', lbl: 'Water Resource Savings' },
            { val: 'Live', lbl: 'Sensor Telemetry' }
        ],
        architecture: [
            'Event-driven communication with MQTT and Firebase Realtime Database for instant state synchronization.'
        ],
        modules: [
            '<strong>Farm Zone Management:</strong> Multi-zone soil moisture and temperature tracking.',
            '<strong>Automated Valve Control:</strong> Schedule-based and sensor-triggered irrigation actuators.'
        ],
        tech: ['Flutter', 'IoT Sensors', 'Firebase Realtime DB', 'MQTT Protocol', 'Push Alerts']
    },
    revochamp: {
        title: 'Revochamp Platform & DevTools',
        category: 'Web & Developer Productivity',
        icon: '<i class="fas fa-globe" style="color:#60a5fa"></i>',
        company: 'Independent Project',
        role: 'Founder & Full-Stack Architect',
        overview: 'A high-performance modern developer learning ecosystem and boilerplate code generation suite built for high organic discovery.',
        metrics: [
            { val: '100', lbl: 'Lighthouse Score' },
            { val: '<1s', lbl: 'First Contentful Paint' }
        ],
        architecture: [
            'Next.js App Router utilizing Hybrid Static Site Generation (SSG) and Server-Side Rendering (SSR).',
            'Automated schema generation (JSON-LD) for enhanced SEO visibility.'
        ],
        modules: [
            '<strong>Automated Code Generators:</strong> Rapid scaffolding of Flutter Clean Architecture folders and API clients.',
            '<strong>Technical Knowledgebase:</strong> Markdown-powered articles with syntax highlighting and rich interactive demos.'
        ],
        tech: ['Next.js', 'React.js', 'TypeScript', 'SSR/SSG', 'JSON-LD SEO', 'Node.js']
    }
};

// ───── TOAST NOTIFICATIONS ─────
function showToast(message, icon = 'fa-check-circle') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3100);
}

// ───── CLIPBOARD COPY TRIGGERS ─────
document.querySelectorAll('.copy-trigger, .copy-item').forEach(el => {
    el.addEventListener('click', () => {
        const textToCopy = el.getAttribute('data-copy');
        const label = el.getAttribute('data-label') || 'Text';
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied ${label} to clipboard!`, 'fa-copy');
            }).catch(() => {
                prompt(`Copy ${label}:`, textToCopy);
            });
        }
    });
});

// ───── CUSTOM CURSOR (DESKTOP ONLY) ─────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice && cursor && follower) {
    document.body.classList.add('has-custom-cursor');
    let mx = -100, my = -100, fx = -100, fy = -100;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top  = my + 'px';
    });

    (function animFollower() {
        fx += (mx - fx) * 0.15;
        fy += (my - fy) * 0.15;
        follower.style.left = fx + 'px';
        follower.style.top  = fy + 'px';
        requestAnimationFrame(animFollower);
    })();

    // Cursor scaling
    document.querySelectorAll('a, button, .project-card, .kpi-card, .social-icon, .tags span, .filter-btn, .contact-link-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(2)';
            follower.style.transform = 'translate(-50%,-50%) scale(1.4)';
            follower.style.borderColor = '#00f5d4';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%,-50%) scale(1)';
            follower.style.transform = 'translate(-50%,-50%) scale(1)';
        });
    });
}

// ───── PARTICLE CANVAS ─────
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = Math.min(80, Math.floor(window.innerWidth / 18));

    function resizeCanvas() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    function spawnParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: randomBetween(0.8, 2.2),
            dx: randomBetween(-0.25, 0.25),
            dy: randomBetween(-0.25, 0.25),
            alpha: randomBetween(0.2, 0.6),
        };
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawnParticle());

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 245, 212, ${p.alpha})`;
            ctx.fill();

            p.x += p.dx; p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });

        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 245, 212, ${0.07 * (1 - dist/110)})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(drawParticles);
    }
    drawParticles();
}

// ───── TYPED TITLE (INSURANCE & FINTECH FIRST) ─────
const titles = [
    'Insurance & FinTech Architect',
    'Technical Lead (12+ Yrs Exp)',
    'Enterprise HRMS Specialist',
    'Healthcare & Medical App Builder',
    'IoT & BLE Ecosystems Expert',
    'Flutter & Clean Architecture Lead'
];
let titleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-title');

function typeEffect() {
    if (!typedEl) return;
    const current = titles[titleIdx];
    if (!deleting) {
        typedEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
            setTimeout(() => { deleting = true; typeEffect(); }, 2000);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
            deleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
        }
    }
    setTimeout(typeEffect, deleting ? 45 : 80);
}
typeEffect();

// ───── NAVBAR SCROLL ─────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
}, { passive: true });

// ───── MOBILE MENU ─────
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const isOpen = navLinks.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ───── ACTIVE NAV LINK ON SCROLL ─────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ───── SCROLL REVEAL & COUNTER ANIMATION ─────
function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';
    const target = parseInt(el.dataset.target, 10);
    const duration = 1500;
    const step = 16;
    const steps = duration / step;
    let current = 0;
    const inc = target / steps;
    const timer = setInterval(() => {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.round(current);
    }, step);
}

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Animate skill bars
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
            // Animate counters
            entry.target.querySelectorAll('.kpi-num, .stat-number').forEach(animateCounter);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

// Observe hero stat cards separately
document.querySelectorAll('.hero .stat-number').forEach(s => {
    const heroObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(e.target);
                heroObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    heroObs.observe(s);
});

// ───── PROJECT FILTERING ─────
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards  = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (filterVal === 'all' || cardCat === filterVal) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });
    });
});

// ───── INTERACTIVE PROJECT MODAL ─────
const modalOverlay = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalDismissBtn = document.getElementById('modal-dismiss-btn');
const modalIcon = document.getElementById('modal-icon');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalTags = document.getElementById('modal-tags');

function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !modalOverlay) return;

    modalIcon.innerHTML = data.icon;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;

    let bodyHtml = `
        <div class="modal-section">
            <p class="modal-overview"><strong>Platform Overview:</strong> ${data.overview}</p>
        </div>
    `;

    if (data.metrics && data.metrics.length > 0) {
        bodyHtml += `
            <div class="modal-metrics-grid">
                ${data.metrics.map(m => `
                    <div class="modal-metric-box">
                        <div class="metric-val">${m.val}</div>
                        <div class="metric-lbl">${m.lbl}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (data.architecture && data.architecture.length > 0) {
        bodyHtml += `
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fas fa-sitemap"></i> Architectural &amp; Engineering Highlights</h4>
                <ul class="modal-bullets">
                    ${data.architecture.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (data.modules && data.modules.length > 0) {
        bodyHtml += `
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fas fa-cubes"></i> Core Modules &amp; Business Capabilities</h4>
                <ul class="modal-bullets">
                    ${data.modules.map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    modalBody.innerHTML = bodyHtml;

    if (data.tech) {
        modalTags.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');
    } else {
        modalTags.innerHTML = '';
    }

    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Bind modal triggers
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-project');
        openProjectModal(pid);
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.view-details-btn')) return;
        const pid = card.getAttribute('data-project-id');
        if (pid) openProjectModal(pid);
    });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeProjectModal();
    });
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) {
        closeProjectModal();
    }
});

// ───── BACK TO TOP ─────
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ───── CONTACT FORM HANDLER ─────
function handleFormSubmit(e) {
    e.preventDefault();
    const btn    = document.getElementById('form-submit-btn');
    const status = document.getElementById('form-status');
    const name   = document.getElementById('cf-name').value.trim();
    const email  = document.getElementById('cf-email').value.trim();
    const sub    = document.getElementById('cf-subject').value.trim();
    const msg    = document.getElementById('cf-message').value.trim();

    if (!name || !email || !msg) {
        showToast('Please fill out all required fields.', 'fa-exclamation-triangle');
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message…';

    // Simulate sending message
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        status.textContent = `Thank you, ${name}! Your message has been sent. I'll get back to you soon.`;
        status.style.color = '#00f5d4';
        showToast('Message sent successfully!', 'fa-paper-plane');
        document.getElementById('contact-form').reset();

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            status.textContent = '';
        }, 5000);
    }, 1200);
}

// ───── SMOOTH HASH SCROLLING ─────
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const navH = 76;
        const topPos = target.getBoundingClientRect().top + window.pageYOffset - navH;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    });
});
