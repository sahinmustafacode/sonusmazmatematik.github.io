const SINAV_AYAR = {
  tyt:      { ad: "TYT Matematik",      soruSayisi: 40, sure: 60 },
  ayt:      { ad: "AYT Matematik",      soruSayisi: 40, sure: 60 },
  lgs:      { ad: "LGS Matematik",      soruSayisi: 20, sure: 40 },
  kpss:     { ad: "KPSS Matematik",     soruSayisi: 30, sure: 40 },
  lise:     { ad: "Lise Matematik",     soruSayisi: 30, sure: 45 },
  ortaokul: { ad: "Ortaokul Matematik", soruSayisi: 20, sure: 40 }
};

let mevcutKategori = null;
let sorular = [];
let cevaplar = [];
let mevcutSoru = 0;
let kalanSure = 0;
let timerInterval = null;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  window.scrollTo(0, 0);
}

function karistir(dizi) {
  return [...dizi].sort(() => Math.random() - 0.5);
}

function startExam(kategori) {
  mevcutKategori = kategori;
  const ayar = SINAV_AYAR[kategori];
  const tumSorular = SORULAR[kategori] || [];

  // Soruları karıştır ve ayarlanan sayıda al
  const secilen = karistir(tumSorular).slice(0, ayar.soruSayisi);

  // Eğer yeterli soru yoksa elimizdekilerle devam et
  sorular = secilen;
  cevaplar = new Array(sorular.length).fill(null);
  mevcutSoru = 0;
  kalanSure = ayar.sure * 60;

  document.getElementById('examTitle').textContent = ayar.ad;
  showScreen('screen-exam');
  renderPalette();
  renderSoru();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    kalanSure--;
    updateTimerDisplay();
    if (kalanSure <= 0) {
      clearInterval(timerInterval);
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const dk = Math.floor(kalanSure / 60);
  const sn = kalanSure % 60;
  const el = document.getElementById('examTimer');
  el.textContent = `${String(dk).padStart(2,'0')}:${String(sn).padStart(2,'0')}`;
  el.classList.toggle('warning', kalanSure <= 120);
}

function renderSoru() {
  const s = sorular[mevcutSoru];
  const total = sorular.length;

  document.getElementById('qNumber').textContent = `Soru ${mevcutSoru + 1} / ${total}`;
  document.getElementById('qText').textContent = s.soru;
  document.getElementById('examProgress').textContent = `${mevcutSoru + 1} / ${total} soru`;

  const barFill = document.getElementById('examBarFill');
  barFill.style.width = `${((mevcutSoru + 1) / total) * 100}%`;

  const harfler = ['A', 'B', 'C', 'D', 'E'];
  const optsEl = document.getElementById('qOptions');
  optsEl.innerHTML = '';

  s.secenekler.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option' + (cevaplar[mevcutSoru] === i ? ' selected' : '');
    btn.innerHTML = `<span class="q-option-letter">${harfler[i]}</span>${opt}`;
    btn.onclick = () => secenekSec(i);
    optsEl.appendChild(btn);
  });

  document.getElementById('btnPrev').disabled = mevcutSoru === 0;
  const nextBtn = document.getElementById('btnNext');
  if (mevcutSoru === total - 1) {
    nextBtn.textContent = 'Bitir ✓';
    nextBtn.onclick = finishExam;
  } else {
    nextBtn.textContent = 'Sonraki →';
    nextBtn.onclick = nextQuestion;
  }

  updatePalette();
}

function secenekSec(i) {
  cevaplar[mevcutSoru] = i;
  renderSoru();
}

function nextQuestion() {
  if (mevcutSoru < sorular.length - 1) {
    mevcutSoru++;
    renderSoru();
  }
}

function prevQuestion() {
  if (mevcutSoru > 0) {
    mevcutSoru--;
    renderSoru();
  }
}

function renderPalette() {
  const grid = document.getElementById('paletteGrid');
  grid.innerHTML = '';
  sorular.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = i + 1;
    btn.onclick = () => { mevcutSoru = i; renderSoru(); };
    grid.appendChild(btn);
  });
}

function updatePalette() {
  const btns = document.querySelectorAll('.palette-btn');
  btns.forEach((btn, i) => {
    btn.classList.remove('answered', 'current');
    if (i === mevcutSoru) btn.classList.add('current');
    else if (cevaplar[i] !== null) btn.classList.add('answered');
  });
}

function finishExam() {
  clearInterval(timerInterval);

  let dogru = 0, yanlis = 0, bos = 0;
  const ayar = SINAV_AYAR[mevcutKategori];
  const harfler = ['A', 'B', 'C', 'D', 'E'];

  sorular.forEach((s, i) => {
    if (cevaplar[i] === null) bos++;
    else if (cevaplar[i] === s.cevap) dogru++;
    else yanlis++;
  });

  const net = (dogru - yanlis / 4).toFixed(2);

  document.getElementById('resultTitle').textContent = ayar.ad + ' Tamamlandı!';
  document.getElementById('resultSubtitle').textContent = `${sorular.length} soruyu ${ayar.sure} dakikada çözdünüz.`;
  document.getElementById('rsCorrect').textContent = dogru;
  document.getElementById('rsWrong').textContent = yanlis;
  document.getElementById('rsEmpty').textContent = bos;
  document.getElementById('rsScore').textContent = net;

  const analysisList = document.getElementById('analysisList');
  analysisList.innerHTML = '';
  sorular.forEach((s, i) => {
    const dogruMu = cevaplar[i] === s.cevap;
    const bosMu = cevaplar[i] === null;
    const cls = bosMu ? 'empty' : (dogruMu ? 'correct' : 'wrong');
    const badge = bosMu ? 'Boş' : (dogruMu ? 'Doğru' : `Yanlış (D: ${harfler[s.cevap]})`);
    const item = document.createElement('div');
    item.className = `analysis-item ${cls}`;
    item.innerHTML = `
      <span class="ai-num">${i + 1}.</span>
      <span class="ai-text">${s.soru.substring(0, 60)}${s.soru.length > 60 ? '...' : ''}</span>
      <span class="ai-badge">${badge}</span>
    `;
    analysisList.appendChild(item);
  });

  showScreen('screen-result');
}

function restartExam() {
  startExam(mevcutKategori);
}

function goToSelect() {
  showScreen('screen-select');
}
