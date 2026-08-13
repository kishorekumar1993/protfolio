/* =============================================
   PORTFOLIO SCRIPT — S. Kishore Kumar
============================================= */

'use strict';

// ───── CUSTOM CURSOR ─────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = -100, my = -100, fx = -100, fy = -100;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
});

(function animFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animFollower);
})();

// Scale cursor on interactive elements
document.querySelectorAll('a, button, .project-card, .kpi-card, .social-icon, .tags span').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(2)';
        follower.style.opacity = '0.25';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        follower.style.opacity = '0.6';
    });
});

// ───── PARTICLE CANVAS ─────
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 90;

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
        r: randomBetween(0.6, 2.2),
        dx: randomBetween(-0.25, 0.25),
        dy: randomBetween(-0.25, 0.25),
        alpha: randomBetween(0.2, 0.7),
    };
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawnParticle());

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,172,254,${p.alpha})`;
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
                ctx.strokeStyle = `rgba(79,172,254,${0.08 * (1 - dist/110)})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

// ───── TYPED TITLE ─────
const titles = [
    'Technical Lead',
    'Flutter Architect',
    'FinTech Builder',
    'Clean Architecture Expert',
    'Team Leader',
];
let titleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-title');

function typeEffect() {
    if (!typedEl) return;
    const current = titles[titleIdx];
    if (!deleting) {
        typedEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
            setTimeout(() => { deleting = true; typeEffect(); }, 2200);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
            deleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
        }
    }
    setTimeout(typeEffect, deleting ? 55 : 95);
}
typeEffect();

// ───── NAVBAR SCROLL ─────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// ───── MOBILE MENU ─────
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ───── ACTIVE NAV LINK ─────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ───── SCROLL REVEAL ─────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Animate skill bars when they enter view
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
            // Animate counters
            entry.target.querySelectorAll('.kpi-num, .stat-number').forEach(animateCounter);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

// Also animate skill bars inside .skills-bars-grid on its own reveal
document.querySelectorAll('.skills-bars-grid').forEach(grid => {
    const barObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 200);
                });
                barObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    barObs.observe(grid);
});

// ───── COUNTER ANIMATION ─────
function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
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

// Observe hero stat cards separately (not inside .reveal)
const heroStats = document.querySelectorAll('.stat-number');
const heroStatObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCounter(e.target);
            heroStatObs.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });
heroStats.forEach(s => heroStatObs.observe(s));

// ───── BACK TO TOP ─────
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ───── CONTACT FORM ─────
function handleFormSubmit(e) {
    e.preventDefault();
    const btn    = document.getElementById('form-submit-btn');
    const status = document.getElementById('form-status');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    // Simulate a send (replace with real API call as needed)
    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        status.textContent = 'Thank you! I\'ll get back to you shortly.';
        status.style.color = '#43e97b';
        document.getElementById('contact-form').reset();
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            status.textContent = '';
        }, 4000);
    }, 1500);
}

// ───── SMOOTH HASH LINKS ─────
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
        window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    });
});
