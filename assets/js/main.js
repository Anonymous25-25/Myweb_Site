document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }

  const currentYearSpan = document.querySelectorAll('.current-year');
  currentYearSpan.forEach((span) => {
    span.textContent = new Date().getFullYear();
  });

  const typewriterElements = document.querySelectorAll('.typewriter');

  const runTypewriter = (element) => {
    const text = element.getAttribute('data-text') || '';
    if (!text) return;
    element.textContent = '';
    let index = 0;

    const type = () => {
      element.textContent = text.slice(0, index + 1);
      index += 1;
      if (index < text.length) {
        setTimeout(type, 80);
      }
    };

    type();
  };

  typewriterElements.forEach((el, idx) => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => runTypewriter(el), idx * 200);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
    } else {
      setTimeout(() => runTypewriter(el), idx * 200);
    }
  });

  const counters = document.querySelectorAll('[data-count]');

  const startCounter = (element) => {
    const targetValue = parseFloat(element.dataset.count);
    if (Number.isNaN(targetValue)) {
      return;
    }
    const original = element.textContent.trim();
    const suffix = original.replace(/[0-9.,\s]/g, '');
    const duration = 2000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * targetValue);
      element.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${Math.round(targetValue)}${suffix}`;
      }
    };

    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.7 });

    counters.forEach((counter) => observer.observe(counter));
  } else {
    counters.forEach((counter, idx) => setTimeout(() => startCounter(counter), idx * 150));
  }

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const statusText = contactForm.querySelector('.form-status');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name')?.toString().trim();
      const email = formData.get('email')?.toString().trim();
      const message = formData.get('message')?.toString().trim();

      if (!name || !email || !message) {
        if (statusText) {
          statusText.textContent = 'Please complete the required fields before transmitting.';
          statusText.style.color = 'var(--warning)';
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (statusText) {
          statusText.textContent = 'Provide a valid operator email address.';
          statusText.style.color = 'var(--warning)';
        }
        return;
      }

      if (statusText) {
        statusText.textContent = 'Message encrypted and queued for secure delivery.';
        statusText.style.color = 'var(--success)';
      }

      contactForm.reset();
    });
  }

  const revealElements = document.querySelectorAll('.service-card, .article-card, .tool-card, .writeup-card, .value-card, .stat-card, .panel, .gallery-item');

  const reveal = (element) => {
    element.classList.add('is-visible');
  };

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    revealElements.forEach((element) => {
      element.classList.add('reveal');
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element, idx) => {
      element.classList.add('reveal');
      setTimeout(() => reveal(element), idx * 120);
    });
  }
});
