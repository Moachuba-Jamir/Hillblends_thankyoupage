document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.documentElement.classList.add('reduce-motion');
  }

  // Stagger the entrance of each revealed section.
  const revealEls = document.querySelectorAll('[data-reveal]');
  revealEls.forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${i * 90}ms`);
  });

  requestAnimationFrame(() => {
    document.body.classList.add('is-ready');
  });

  // Tactile ripple feedback when a contact button is pressed.
  const buttons = document.querySelectorAll('.contact-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('pointerdown', (e) => {
      if (reduceMotion) return;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.4;
      const x = (e.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2;
      const y = (e.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'contact-btn__ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Keep the copyright year current without editing the HTML each year.
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
