(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.getAttribute('data-nav') === current) link.classList.add('active');
  });

  const modal = document.getElementById('payment-modal');
  const productText = document.getElementById('modal-product');
  const productLine = document.getElementById('modal-product-line');
  const priceText = document.getElementById('modal-price');
  const quoteLink = document.getElementById('modal-quote-link');
  const emailLink = document.getElementById('modal-email-link');
  const whatsappLink = document.getElementById('modal-whatsapp-link');

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-pay]').forEach(btn => btn.addEventListener('click', () => {
    if (!modal) return;
    const product = btn.dataset.product || 'Digital service';
    const price = btn.dataset.price || 'Custom price';
    if (productText) productText.textContent = product;
    if (productLine) productLine.textContent = product;
    if (priceText) priceText.textContent = price;
    const query = new URLSearchParams({ service: product, price });
    if (quoteLink) quoteLink.href = `quote.html?${query.toString()}`;
    if (emailLink) emailLink.href = `mailto:rootwavetechnologies@gmail.com?subject=${encodeURIComponent(`Invoice request: ${product} (${price})`)}&body=${encodeURIComponent(`Hello Rootwave Technologies,\n\nI would like to request an invoice for ${product} at ${price}.\n\nName:\nCountry:\nWebsite or reference link:\nAdditional details:`)}`;
    if (whatsappLink) whatsappLink.href = `https://wa.me/254715996223?text=${encodeURIComponent(`Hello Rootwave Technologies, I would like to request ${product} at ${price}.`)}`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close')?.focus();
  }));
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const params = new URLSearchParams(location.search);
  const service = params.get('service');
  const price = params.get('price');
  const select = document.getElementById('service-select');
  const priceInput = document.getElementById('selected-price');
  if (service && select) {
    const options = [...select.querySelectorAll('option')];
    let match = options.find(o => o.textContent.trim().toLowerCase() === service.toLowerCase());
    if (!match) {
      const otherGroup = select.querySelector('optgroup[label="Other"]') || select;
      match = document.createElement('option');
      match.textContent = service;
      match.value = service;
      otherGroup.appendChild(match);
    }
    select.value = match.value || match.textContent;
  }
  if (price && priceInput) priceInput.value = price;

  const search = document.getElementById('service-search');
  const cards = [...document.querySelectorAll('[data-service-card]')];
  const noResults = document.getElementById('no-service-results');
  let activeFilter = 'all';
  const applyFilters = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
      const textMatch = !term || card.textContent.toLowerCase().includes(term);
      const visible = categoryMatch && textMatch;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    if (noResults) noResults.hidden = shown !== 0;
  };
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
    applyFilters();
  }));
  search?.addEventListener('input', applyFilters);

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      }), { threshold: .08 })
    : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
})();
