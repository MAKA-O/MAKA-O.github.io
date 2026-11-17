(() => {
  'use strict';

  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const scrim = document.querySelector('.menu-scrim');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktopQuery = window.matchMedia('(min-width: 900px)');

  /* Current year (footer fallback is 2026) */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Mobile menu */
  const setMenu = (open, returnFocus = false) => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    body.classList.toggle('nav-open', open);
    if (returnFocus) toggle.focus();
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenu(false));
    });

    if (scrim) scrim.addEventListener('click', () => setMenu(false));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && body.classList.contains('nav-open')) {
        setMenu(false, true);
      }
    });

    desktopQuery.addEventListener('change', (event) => {
      if (event.matches) setMenu(false);
    });
  }

  /* Header state + active nav link */
  const navLinks = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  let activeId = '';

  const updateNav = () => {
    const marker = window.scrollY + window.innerHeight * 0.38;
    let currentId = '';

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) currentId = section.id;
    });

    if (currentId === activeId) return;
    activeId = currentId;

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    updateNav();
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateNav, { passive: true });

  /* Scroll reveal */
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const showAll = () => revealItems.forEach((item) => item.classList.add('is-visible'));

  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    showAll();
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));

    reduceMotion.addEventListener('change', (event) => {
      if (event.matches) {
        observer.disconnect();
        showAll();
      }
    });
  }
})();
