import * as THREE from 'three';
// Netlify redeploy tweak
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
// EVA-01 Three.js Viewer
// ==================== //
const modelCanvas = document.getElementById('model-viewer');
const modelOverlay = document.getElementById('model-overlay');

if (modelCanvas) {
    const viewer = modelCanvas.closest('.model-viewer');
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0.8, 1.6, 4.2);

    const renderer = new THREE.WebGLRenderer({
        canvas: modelCanvas,
        antialias: true,
        alpha: true
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.minDistance = 2;
    controls.maxDistance = 9;

    const hemi = new THREE.HemisphereLight(0xffffff, 0x1a1a25, 1.1);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(6, 10, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    scene.add(keyLight);

    const loader = new GLTFLoader().setPath('evangelion-unit_01nanoblock/');
    loader.load(
        'scene.gltf',
        (gltf) => {
            const model = gltf.scene;
            normalizeModel(model);
            scene.add(model);

            if (modelOverlay) {
                modelOverlay.classList.add('hidden');
            }
        },
        undefined,
        (error) => {
            console.error('Failed to load Evangelion Unit-01 model:', error);
            if (modelOverlay) {
                const message = modelOverlay.querySelector('p');
                if (message) {
                    message.textContent = 'Unable to load Evangelion Unit-01';
                }
            }
        }
    );

    function normalizeModel(model) {
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const maxAxis = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxAxis;
        model.scale.setScalar(scale);

        const finalHeight = size.y * scale;
        const yLift = finalHeight * 0.4;
        model.position.y += yLift;

        const targetY = finalHeight * 0.1;
        controls.target.set(0, targetY, 0);
        camera.position.set(1, targetY + finalHeight * 0.18, 5.6);
        camera.updateProjectionMatrix();
        controls.update();
    }

    function resizeRenderer() {
        if (!viewer) return;
        const width = Math.max(viewer.clientWidth || viewer.offsetWidth || 240, 240);
        const ratio = 4 / 3;
        let height = viewer.clientHeight || viewer.offsetHeight;
        if (!height) {
            height = width * ratio;
        }
        height = Math.max(height, width * ratio);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    resizeRenderer();
    window.addEventListener('resize', resizeRenderer);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
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
