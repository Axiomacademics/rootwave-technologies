
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.getAttribute('data-nav') === current) link.classList.add('active');
  });

  const modal = document.getElementById('payment-modal');
  const openModal = () => {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const close = modal.querySelector('.modal-close');
    if (close) close.focus();
  };
  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };
  document.querySelectorAll('[data-pay]').forEach(btn => btn.addEventListener('click', openModal));
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const params = new URLSearchParams(location.search);
  const service = params.get('service');
  const select = document.getElementById('service-select');
  if (service && select) {
    const match = [...select.options].find(o => o.text.toLowerCase() === service.toLowerCase());
    if (match) select.value = match.value;
  }

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }), { threshold: .08 })
    : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
})();
