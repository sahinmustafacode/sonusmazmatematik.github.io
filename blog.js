// Filtre fonksiyonu
function filterPosts(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
  });
  let visible = 0;
  document.querySelectorAll('.post-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  document.getElementById('noResults').style.display = visible === 0 ? 'flex' : 'none';
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => filterPosts(btn.dataset.filter));
});

// Cevap formları — Formspree ile AJAX gönderim
document.querySelectorAll('.answer-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.af-submit');
    const success = form.querySelector('.af-success');
    btn.disabled = true;
    btn.textContent = 'Gönderiliyor...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        btn.style.display = 'none';
        success.style.display = 'block';
      } else {
        btn.disabled = false;
        btn.innerHTML = `<svg viewBox="0 0 20 20" fill="none"><path d="M3 10l14 0M13 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Gönder`;
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch {
      btn.disabled = false;
      btn.innerHTML = `<svg viewBox="0 0 20 20" fill="none"><path d="M3 10l14 0M13 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Gönder`;
      alert('Bağlantı hatası, lütfen tekrar deneyin.');
    }
  });
});
