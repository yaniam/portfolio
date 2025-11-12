// ==================== //
// Mobile Navigation Toggle
// ==================== //
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== //
// Navbar Scroll Effect
// ==================== //
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ==================== //
// Active Navigation Link
// ==================== //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== //
// Smooth Scroll for Safari
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==================== //
// Contact Form Handling
// ==================== //
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Here you would typically send the data to a backend service
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);

    // Reset form
    contactForm.reset();

    // In a real application, you might want to integrate with services like:
    // - Netlify Forms (add data-netlify="true" to form element)
    // - FormSpree
    // - EmailJS
    // - Your own backend API
});

// ==================== //
// Intersection Observer for Animations
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== //
// Typing Effect for Hero (Optional Enhancement)
// ==================== //
const roles = [
    'Machine Learning Engineer',
    'Data Engineering Specialist',
    'AI Developer',
    'MLOps Engineer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const heroSubtitle = document.querySelector('.hero-subtitle');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        heroSubtitle.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, timeout);
}

// Uncomment the line below to enable the typing effect
// setTimeout(typeEffect, 1000);

// ==================== //
// Dynamic Year in Footer
// ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2024', year);
    }
});

// ==================== //
// Lazy Loading for Images (if you add images later)
// ==================== //
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== //
// Add Particle Background Effect (Optional)
// ==================== //
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(255, 255, 255, 0.5);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
        `;
        hero.appendChild(particle);
    }
}

// Uncomment to enable particle effect
// createParticles();

// ==================== //
// Performance: Debounce Scroll Events
// ==================== //
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events for better performance
window.addEventListener('scroll', debounce(() => {
    // Your scroll logic here
}));

console.log('%c Portfolio Website Loaded Successfully! 🚀', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%c Built with ❤️ for Machine Learning & Data Engineering', 'color: #8b5cf6; font-size: 12px;');

(function () {
    const KEY = 'theme';
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const icon = btn?.querySelector('i');
  
    // Determine starting theme (saved > OS preference > light)
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startTheme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(startTheme);
  
    // Toggle on click
    btn?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
      localStorage.setItem(KEY, next);
    });
  
    function setTheme(mode) {
      root.setAttribute('data-theme', mode);
      if (!icon) return;
      if (mode === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.title = 'Switch to light mode';
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        btn.setAttribute('aria-label', 'Switch to dark mode');
        btn.title = 'Switch to dark mode';
      }
    }
  })();
  