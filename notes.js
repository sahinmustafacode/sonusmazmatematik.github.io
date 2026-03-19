function filterNotes(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
  });
  applyFilters();
}

function applyFilters() {
  const activeBtn = document.querySelector('.filter-btn.active');
  const cat = activeBtn ? activeBtn.dataset.filter : 'all';
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  let visible = 0;

  document.querySelectorAll('.note-item').forEach(item => {
    const matchCat = cat === 'all' || item.dataset.cat === cat;
    const text = (item.querySelector('h4').textContent + ' ' + item.querySelector('p').textContent).toLowerCase();
    const matchSearch = !query || text.includes(query);
    const show = matchCat && matchSearch;
    item.classList.toggle('hidden', !show);
    if (show) visible++;
  });

  document.getElementById('noResults').style.display = visible === 0 ? 'flex' : 'none';
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  });
});

document.getElementById('searchInput').addEventListener('input', applyFilters);
