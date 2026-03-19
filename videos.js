// Filtre
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    let visible = 0;
    document.querySelectorAll('.video-card').forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    document.getElementById('noResults').style.display = visible === 0 ? 'flex' : 'none';
  });
});

// Modal aç
document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.querySelector('.video-thumb').dataset.id;
    if (!id || id === 'BURAYA_VIDEO_ID') return;
    const iframe = document.getElementById('modalIframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    document.getElementById('videoModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

// Modal kapat
function closeModal() {
  document.getElementById('modalIframe').src = '';
  document.getElementById('videoModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
