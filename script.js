// ========================================
// CYBERSECURITY PORTFOLIO - MAIN SCRIPT
// Pure Vanilla JavaScript - No Libraries
// Author: Younes Boussedari
// ========================================

// ============ GLOBAL VARIABLES ============
const canvas = document.getElementById('circuitCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
let lines = [];

// ============ UTILITY FUNCTIONS ============
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============ CIRCUIT BACKGROUND ANIMATION ============
function initCircuitCanvas() {
    if (!canvas || !ctx) return;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', debounce(resizeCanvas, 250));
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(24, 209, 252, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function createParticles() {
        const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    createParticles();
    window.addEventListener('resize', debounce(createParticles, 250));
    
    // Draw circuit lines between close particles
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (150 - distance) / 150 * 0.2;
                    ctx.strokeStyle = `rgba(24, 209, 252, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();
}

// ============ NAVIGATION ============
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Sticky navbar shadow on scroll
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Active link highlighting based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============ ANIMATED COUNTERS ============
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value');
    const speed = 200; // Animation speed
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    };
    
    // Intersection Observer for triggering animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ============ TYPING ANIMATION ============
function typingAnimation(element, text, speed = 50) {
    if (!element) return;
    
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ============ SMOOTH SCROLL ============
function initSmoothScroll() {
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
}

// ============ SCROLL REVEAL ANIMATIONS ============
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.service-item, .stat-card, .tool-card, .article-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============ GLITCH EFFECT ON HOVER ============
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        const originalText = element.textContent;
        
        element.addEventListener('mouseenter', () => {
            let iterations = 0;
            const maxIterations = 10;
            
            const interval = setInterval(() => {
                element.textContent = element.textContent
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return String.fromCharCode(33 + Math.floor(Math.random() * 94));
                    })
                    .join('');
                
                iterations += 1;
                
                if (iterations > maxIterations) {
                    clearInterval(interval);
                    element.textContent = originalText;
                }
            }, 30);
        });
    });
}

// ============ TERMINAL SIMULATION ============
function initTerminal() {
    const terminal = document.querySelector('.terminal-output');
    if (!terminal) return;
    
    const commands = [
        { text: '> Initializing security scan...', delay: 0 },
        { text: '> Connecting to target...', delay: 1000 },
        { text: '> [OK] Connection established', delay: 2000 },
        { text: '> Running vulnerability assessment...', delay: 3000 },
        { text: '> [FOUND] 3 critical vulnerabilities detected', delay: 4500 },
        { text: '> Generating report...', delay: 5500 },
        { text: '> [OK] Scan complete', delay: 6500 }
    ];
    
    commands.forEach(cmd => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.textContent = cmd.text;
            terminal.appendChild(line);
            terminal.scrollTop = terminal.scrollHeight;
        }, cmd.delay);
    });
}

// ============ FORM VALIDATION ============
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--color-red)';
                } else {
                    input.style.borderColor = 'var(--color-cyan)';
                }
            });
            
            if (isValid) {
                // Form is valid - you can add your submission logic here
                console.log('Form submitted successfully');
                showNotification('Message sent successfully!', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields', 'error');
            }
        });
    });
}

// ============ NOTIFICATION SYSTEM ============
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? 'var(--color-green)' : 'var(--color-red)'};
        color: var(--bg-primary);
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ SEARCH FUNCTIONALITY ============
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        console.log('Searching for:', query);
        // Add your search logic here
    }, 300));
}

// ============ INITIALIZE ALL ============
function init() {
    // Initialize circuit background
    initCircuitCanvas();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollReveal();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize counters (if on homepage)
    if (document.querySelector('.stat-value')) {
        animateCounters();
    }
    
    // Initialize terminal (if exists)
    initTerminal();
    
    // Initialize glitch effect
    initGlitchEffect();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize search
    initSearch();
    
    console.log('%c[SYSTEM]%c Security portfolio initialized successfully', 
                'color: #00FF9C; font-weight: bold', 
                'color: #9CA3AF');
}

// ============ DOM READY ============
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============ EXPORT FOR MODULE USE ============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        typingAnimation
    };
}
