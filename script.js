/* NexLock — Interactive Scripts */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initNavDropdown();
  initSmoothScroll();
  initScrollReveal();
  initContactForm();
  initHeaderShadow();
  initLockDemo();
});

/* Theme Toggle */
function initTheme() {
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  const savedTheme = localStorage.getItem('nexlock-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  toggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('nexlock-theme', next);
  });
}

/* Mobile Menu */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    hamburger?.setAttribute('aria-expanded', 'true');
    hamburger?.setAttribute('aria-label', 'Close menu');
    mobileMenu?.classList.add('is-open');
    mobileMenu?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger?.setAttribute('aria-expanded', 'false');
    hamburger?.setAttribute('aria-label', 'Open menu');
    mobileMenu?.classList.remove('is-open');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('is-open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/* Smooth Scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* Scroll Reveal */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((el) => {
    const delay = el.getAttribute('data-delay');
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -80px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* Header shadow on scroll */
function initHeaderShadow() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Contact Form */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  const demoMessage = document.querySelector('.demo-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('#name');
    const messageInput = form.querySelector('#message');
    const nameError = nameInput?.closest('.form-group')?.querySelector('.error-message');
    const messageError = messageInput?.closest('.form-group')?.querySelector('.error-message');

    if (!nameInput || !messageInput || !nameError || !messageError || !demoMessage) return;

    nameInput.classList.remove('error');
    messageInput.classList.remove('error');
    nameError.textContent = '';
    messageError.textContent = '';
    demoMessage.hidden = true;

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      messageError.textContent = 'Please enter a message.';
      isValid = false;
    }

    if (!isValid) return;

    demoMessage.hidden = false;
    demoMessage.scrollIntoView({ behavior: 'smooth' });
    form.reset();
  });
}

/* Desktop Nav Dropdown */
function initNavDropdown() {
  const dropdown = document.querySelector('.nav-dropdown');
  if (!dropdown) return;

  const toggle = dropdown.querySelector('.nav-dropdown-toggle');
  const menu = dropdown.querySelector('.nav-dropdown-menu');
  if (!toggle || !menu) return;

  const open = () => {
    dropdown.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    dropdown.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) close();
    else open();
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      open();
      const first = menu.querySelector('a');
      if (first) first.focus();
    }
  });
}

/* Lock Demo */
function initLockDemo() {
  const lockDemo = document.getElementById('lockDemo');
  const fpSensor = document.getElementById('fpSensor');
  const lockDemoStatus = document.getElementById('lockDemoStatus');
  const lockShackle = document.getElementById('lockShackle');

  if (!lockDemo || !fpSensor || !lockDemoStatus || !lockShackle) return;

  const lockOpenTransform = 'rotate(-28 42 112)';
  const lockClosedTransform = 'rotate(0 42 112)';

  function unlockDemo() {
    lockDemo.classList.add('is-unlocked');
    lockDemoStatus.textContent = 'UNLOCKED';
    lockShackle.setAttribute('transform', lockOpenTransform);
  }

  function lockDemoFn() {
    lockDemo.classList.remove('is-unlocked');
    lockDemoStatus.textContent = 'LOCKED';
    lockShackle.setAttribute('transform', lockClosedTransform);
  }

  fpSensor.addEventListener('mouseenter', unlockDemo);
  fpSensor.addEventListener('mouseleave', lockDemoFn);

  fpSensor.addEventListener('focus', unlockDemo);
  fpSensor.addEventListener('blur', lockDemoFn);

  fpSensor.addEventListener(
    'touchstart',
    () => {
      if (lockDemo.classList.contains('is-unlocked')) {
        lockDemoFn();
      } else {
        unlockDemo();
      }
    },
    { passive: true }
  );

  lockDemoFn();
}
