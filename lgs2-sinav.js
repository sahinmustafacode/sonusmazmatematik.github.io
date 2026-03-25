// =====================================================
// LGS SERİ 8 — SORULAR VE CEVAP ANAHTARI
// =====================================================
const SORULAR_S8 = [
  {
    soru: "Bir televizyon kanalında reklamlar her 15 dakikada bir, başka bir kanalda ise her 20 dakikada bir yayınlanmaktadır. İki kanal saat 18:00'de aynı anda reklam verdi. Bu iki kanal bir sonraki ortak reklamı saat kaçta verir?",
    secenekler: ["18:45", "19:00", "19:15", "19:30"],
    cevap: 1
  },
  {
    soru: "Bir atölyede 48 cm, 72 cm ve 96 cm uzunluğunda üç ip vardır. Hiç artık kalmadan eşit uzunluktaki parçalara kesilecek ve mümkün olan en az sayıda parça elde edilecektir. Kaç parça elde edilir?",
    secenekler: ["7", "8", "9", "10"],
    cevap: 2
  },
  {
    soru: "Bir bilgisayarın işlem hızı 2⁵ × 4³ birim, bellek kapasitesi ise 8² birimdir. Bu oran (işlem hızı ÷ bellek kapasitesi) kaçtır?",
    secenekler: ["2", "8", "32", "64"],
    cevap: 2
  },
  {
    soru: "Dünya ile Güneş arasındaki mesafe yaklaşık 1,5 × 10⁸ km'dir. Işık hızı 3 × 10⁵ km/s'dir. Güneş'ten çıkan ışık Dünya'ya kaç saniyede ulaşır? (Bilimsel gösterimle)",
    secenekler: ["5 × 10² s", "5 × 10³ s", "4,5 × 10² s", "0,5 × 10³ s"],
    cevap: 0
  },
  {
    soru: "Bir mimar üç odanın tavan köşe uzunluklarını hesapladı: Birinci oda √50 cm, ikinci oda √32 cm, üçüncü oda √18 cm. √50 + √32 − √18 ifadesinin değeri kaçtır?",
    secenekler: ["4√2", "5√2", "6√2", "√64"],
    cevap: 2
  },
  {
    soru: "Bir tarladaki büyük kare parsel 75 m², küçük kare parsel 48 m² alana sahiptir. Büyük parselin kenar uzunluğunun küçük parselin kenar uzunluğuna oranı kaçtır?",
    secenekler: ["5/4", "√5/4", "5/√48", "√75/48"],
    cevap: 0
  },
  {
    soru: "Bir inşaat şantiyesinde kare zemin kaplamasının alanı 45 m² olarak ölçüldü. √45 sayısı hangi iki tam sayı arasındadır ve bu sayı rasyonel midir?",
    secenekler: ["5 ile 6 arasında, rasyonel", "6 ile 7 arasında, irrasyonel", "6 ile 7 arasında, rasyonel", "7 ile 8 arasında, irrasyonel"],
    cevap: 1
  },
  {
    gorsel: `<div style="margin:18px 0;background:#f8f8f6;border:1px solid #e0ddd6;border-radius:8px;padding:16px;">
<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;text-align:center;margin-bottom:12px;">İhracat Daire Grafiği</div>
<svg viewBox="0 0 280 220" width="100%" style="display:block;max-width:320px;margin:0 auto;">
  <!-- cx=140 cy=110 r=90 -->
  <!-- Almanya %40 = 144° → 0° den 144° ye (saat 12'den başla) -->
  <!-- 0°: x=140, y=20 -->
  <!-- 144°: x=140+90*sin(144°)=140+52.9=192.9, y=110-90*cos(144°)=110+72.8=182.8 -->
  <path d="M140,110 L140,20 A90,90 0 0,1 192.9,182.8 Z" fill="rgba(30,58,110,.8)" stroke="#fff" stroke-width="2"/>
  <text x="175" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="white">Almanya</text>
  <text x="175" y="115" text-anchor="middle" font-size="11" fill="rgba(255,255,255,.9)">%40 · 144°</text>
  <!-- Fransa %25 = 90° → 144° den 234° ye -->
  <!-- 234°: x=140+90*sin(234°)=140-72.8=67.2, y=110-90*cos(234°)=110+52.9=162.9 -->
  <path d="M140,110 L192.9,182.8 A90,90 0 0,1 67.2,162.9 Z" fill="rgba(140,30,30,.8)" stroke="#fff" stroke-width="2"/>
  <text x="105" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="white">Fransa</text>
  <text x="105" y="192" text-anchor="middle" font-size="11" fill="rgba(255,255,255,.9)">%25 · <tspan fill="#ffd700" font-weight="900">?°</tspan></text>
  <!-- Diğer %35 = 126° → 234° den 360° ye -->
  <!-- 360°=0°: x=140, y=20 -->
  <path d="M140,110 L67.2,162.9 A90,90 0 0,1 140,20 Z" fill="rgba(26,80,58,.8)" stroke="#fff" stroke-width="2"/>
  <text x="115" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="white">Diğer</text>
  <text x="115" y="76" text-anchor="middle" font-size="11" fill="rgba(255,255,255,.9)">%35 · 126°</text>
</svg>
</div>`,
    soru: "Bir şirketin ihracatının %40'ı Almanya'ya, %25'i Fransa'ya, %35'i diğer ülkelere yapılmaktadır. Bu veriler daire grafiğiyle gösterildiğinde Fransa dilimine karşılık gelen merkez açısı kaç derecedir?",
    secenekler: ["80°", "90°", "100°", "126°"],
    cevap: 1
  },
  {
    gorsel: `<div style="margin:18px 0;background:#f8f8f6;border:1px solid #e0ddd6;border-radius:8px;padding:16px;">
<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;text-align:center;margin-bottom:12px;">Aylık Kitap Ödünç Alma (adet)</div>
<svg viewBox="0 0 300 170" width="100%" style="display:block;">
  <line x1="42" y1="20" x2="42" y2="140" stroke="#333" stroke-width="1.5"/>
  <line x1="42" y1="140" x2="280" y2="140" stroke="#333" stroke-width="1.5"/>
  <text x="36" y="143" text-anchor="end" font-size="10" fill="#555">0</text>
  <text x="36" y="107" text-anchor="end" font-size="10" fill="#555">30</text>
  <text x="36" y="74" text-anchor="end" font-size="10" fill="#555">60</text>
  <text x="36" y="41" text-anchor="end" font-size="10" fill="#555">90</text>
  <line x1="42" y1="107" x2="280" y2="107" stroke="#eee" stroke-width="1"/>
  <line x1="42" y1="74" x2="280" y2="74" stroke="#eee" stroke-width="1"/>
  <line x1="42" y1="41" x2="280" y2="41" stroke="#eee" stroke-width="1"/>
  <rect x="58" y="41" width="55" height="99" rx="2" fill="rgba(30,58,110,.7)" stroke="#1e3a6e" stroke-width="1"/>
  <text x="85" y="37" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a6e">90</text>
  <text x="85" y="156" text-anchor="middle" font-size="11" fill="#333">Roman</text>
  <rect x="145" y="74" width="55" height="66" rx="2" fill="rgba(120,30,30,.7)" stroke="#7a1e1e" stroke-width="1"/>
  <text x="172" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#7a1e1e">60</text>
  <text x="172" y="156" text-anchor="middle" font-size="11" fill="#333">Bilim</text>
  <rect x="220" y="107" width="55" height="33" rx="2" fill="rgba(26,80,58,.7)" stroke="#1a5030" stroke-width="1"/>
  <text x="247" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#1a5030">30</text>
  <text x="247" y="156" text-anchor="middle" font-size="11" fill="#333">Şiir</text>
</svg>
</div>`,
    soru: "Bir okul kütüphanesinde bir ayda ödünç alınan kitap sayıları: Roman 90, Bilim 60, Şiir 30. Bu veriler daire grafiğine aktarıldığında Roman dilimine karşılık gelen merkez açısı kaç derecedir?",
    secenekler: ["120°", "150°", "162°", "180°"],
    cevap: 3
  },
  {
    soru: "Bir tombala çantasında 1'den 24'e kadar numaralı eşit büyüklükte 24 bilye vardır. Gözler kapalı bir bilye çekiliyor. Çekilen bilyenin numarasının 3'ün katı olmaması olasılığı kaçtır?",
    secenekler: ["1/3", "2/3", "1/4", "3/4"],
    cevap: 1
  },
  {
    soru: "Bir dikdörtgen bahçenin uzunluğu (3x − 2) metre, genişliği (2x + 5) metredir. x = 3 için bahçenin alanı kaç m²'dir?",
    secenekler: ["55 m²", "66 m²", "77 m²", "88 m²"],
    cevap: 2
  },
  {
    soru: "Bir market kasiyeri 101 × 99 işlemini hesap makinesi olmadan yapmak istiyor. a² − b² özdeşliğini kullanan kasiyer ne bulur?",
    secenekler: ["9 800", "9 899", "9 999", "10 001"],
    cevap: 2
  },
  {
    soru: "Bir babanın yaşı, çocuğunun yaşından 30 fazladır. 5 yıl sonra babanın yaşı, çocuğunun yaşının tam 2 katı olacaktır. Çocuğun şu anki yaşı kaçtır?",
    secenekler: ["20", "25", "28", "30"],
    cevap: 1
  },
  {
    soru: "Bir su deposu 1/4 oranında doludur. Depoya 30 litre daha su eklendiğinde deponun tam 1/2'si dolmaktadır. Bu su deposunun kapasitesi kaç litredir?",
    secenekler: ["90 L", "100 L", "120 L", "150 L"],
    cevap: 2
  },
  {
    soru: "Selin, parasının 2/5'ini kitaba, 1/3'ünü kırtasiyeye harcıyor. Geriye 16 TL kalıyor. Selin'in başlangıçta kaç TL'si vardır?",
    secenekler: ["40 TL", "48 TL", "60 TL", "80 TL"],
    cevap: 2
  },
  {
    soru: "Bir fabrikada sabah vardiyasında (3x − 5) adet, öğleden sonra vardiyasında (2x + 7) adet ürün üretilmektedir. Sabah vardiyasının üretimi öğleden sonrakinden kesinlikle daha fazla olması gerekiyor. x için en küçük pozitif tam sayı değeri kaçtır?",
    secenekler: ["12", "13", "14", "15"],
    cevap: 1
  },
  {
    soru: "Bir çatı kirişinin üçgen kesitindeki açılar 2x°, (3x − 10)° ve (x + 40)° olarak ölçüldü. Bu üçgenin en büyük açısı kaç derecedir ve üçgen hangi türdendir?",
    secenekler: ["65° — ikizkenar dar açılı", "65° — çeşitkenar dar açılı", "65° — geniş açılı", "70° — ikizkenar dar açılı"],
    cevap: 0
  },
  {
    gorsel: `<div style="margin:18px 0;background:#f8f8f6;border:1px solid #e0ddd6;border-radius:8px;padding:16px;">
<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#999;text-align:center;margin-bottom:12px;">Saha Şeması</div>
<svg viewBox="0 0 300 140" width="100%" style="display:block;">
  <rect x="30" y="20" width="200" height="90" fill="rgba(26,80,58,.08)" stroke="#1a5030" stroke-width="1.5" stroke-dasharray="5,4"/>
  <rect x="30" y="98" width="12" height="12" fill="none" stroke="#1a5030" stroke-width="1.5"/>
  <circle cx="30" cy="110" r="5" fill="#c8a040" stroke="#fff" stroke-width="1.5"/>
  <text x="15" y="128" font-size="10" fill="#c8a040" font-weight="700">Bayrak</text>
  <circle cx="230" cy="20" r="5" fill="#1a5030" stroke="#fff" stroke-width="1.5"/>
  <text x="215" y="15" font-size="10" fill="#1a5030" font-weight="700">Kale</text>
  <line x1="30" y1="110" x2="230" y2="110" stroke="#1a5030" stroke-width="2"/>
  <text x="130" y="128" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="13" fill="#1a5030">40 m</text>
  <line x1="230" y1="110" x2="230" y2="20" stroke="#1a5030" stroke-width="2"/>
  <text x="248" y="70" font-family="Georgia,serif" font-style="italic" font-size="13" fill="#1a5030">9 m</text>
  <line x1="30" y1="110" x2="230" y2="20" stroke="#c8a040" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="115" y="58" font-family="Georgia,serif" font-style="italic" font-size="13" fill="#c8a040" font-weight="700" text-anchor="middle">d = ?</text>
</svg>
</div>`,
    soru: "Bir futbol sahasında köşe bayrağından kaleye yatay mesafe 40 m, dikey mesafe 9 m'dir. Bayrak ile kale arasındaki doğrudan mesafe kaç metredir?",
    secenekler: ["39 m", "40 m", "41 m", "49 m"],
    cevap: 2
  },
  {
    soru: "Bir peyzaj mimarı iki benzer üçgen çiçek tarhı tasarladı. Küçük tarhın alanı 20 m², iki tarh arasındaki benzerlik oranı 2 : 5'tir. Büyük tarhın alanı kaç m²'dir?",
    secenekler: ["50 m²", "80 m²", "125 m²", "200 m²"],
    cevap: 2
  },
  {
    soru: "a = √3 + √2 ve b = √3 − √2 verilmektedir. a² − b² ifadesinin değeri kaçtır?",
    secenekler: ["1", "2", "4√6", "2√6"],
    cevap: 2
  }
];

// =====================================================
// SINAV MOTORU — LGS SERİ 8
// =====================================================
const HARFLER_S8 = ['A', 'B', 'C', 'D'];
let mevcutSoru_s8 = 0;
let cevaplar_s8 = new Array(20).fill(null);
let kalanSure_s8 = 50 * 60; // 50 dakika (gösterilen 45 dk, ama 50'de bitiyor)
let gosterilen_sure = 45 * 60;
let timerInterval_s8 = null;
let ogrenciAdi_s8 = '';
let baslangicZaman_s8 = null;

function showScreen_s8(id) {
  document.querySelectorAll('.sinav-screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  window.scrollTo(0, 0);
}

function sinaviBaslat_s8() {
  const ad = document.getElementById('ogrenciAd_s8').value.trim();
  const soyad = document.getElementById('ogrenciSoyad_s8').value.trim();
  const err = document.getElementById('isimError_s8');
  if (!ad || !soyad) { err.style.display = 'block'; return; }
  ogrenciAdi_s8 = ad + ' ' + soyad;
  err.style.display = 'none';
  mevcutSoru_s8 = 0;
  cevaplar_s8 = new Array(20).fill(null);
  kalanSure_s8 = 50 * 60;
  gosterilen_sure = 45 * 60;
  baslangicZaman_s8 = Date.now();
  paletOlustur_s8();
  soruGoster_s8();
  showScreen_s8('screen-exam-s8');
  zamanlayiciBaslat_s8();
}

function zamanlayiciBaslat_s8() {
  clearInterval(timerInterval_s8);
  zamanlayiciGuncelle_s8();
  timerInterval_s8 = setInterval(() => {
    kalanSure_s8--;
    gosterilen_sure = Math.max(0, gosterilen_sure - 1);
    zamanlayiciGuncelle_s8();
    if (kalanSure_s8 <= 0) {
      clearInterval(timerInterval_s8);
      sinaviBitir_s8();
    }
  }, 1000);
}

function zamanlayiciGuncelle_s8() {
  const el = document.getElementById('sinavTimer_s8');
  // Öğrenciye 45 dakika göster
  const dk = Math.floor(gosterilen_sure / 60);
  const sn = gosterilen_sure % 60;
  el.textContent = `${String(dk).padStart(2,'0')}:${String(sn).padStart(2,'0')}`;
  el.classList.toggle('uyari', gosterilen_sure <= 120);
}

function soruGoster_s8() {
  const s = SORULAR_S8[mevcutSoru_s8];
  const toplam = SORULAR_S8.length;

  document.getElementById('soruMeta_s8').textContent = `Soru ${mevcutSoru_s8 + 1} / ${toplam}`;
  document.getElementById('soruText_s8').textContent = s.soru;
  document.getElementById('sinav-progress_s8').textContent = `${mevcutSoru_s8 + 1} / ${toplam}`;
  document.getElementById('sinavBarFill_s8').style.width = `${((mevcutSoru_s8 + 1) / toplam) * 100}%`;

  const eskiGorsel = document.getElementById('soruGorsel_s8');
  if (eskiGorsel) eskiGorsel.remove();
  if (s.gorsel) {
    const gorselDiv = document.createElement('div');
    gorselDiv.id = 'soruGorsel_s8';
    gorselDiv.innerHTML = s.gorsel;
    const soruTextEl = document.getElementById('soruText_s8');
    soruTextEl.parentNode.insertBefore(gorselDiv, soruTextEl);
  }

  const secEl = document.getElementById('soruSecenekler_s8');
  secEl.innerHTML = '';
  s.secenekler.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'secenek-btn' + (cevaplar_s8[mevcutSoru_s8] === i ? ' secili' : '');
    btn.innerHTML = `<span class="secenek-harf">${HARFLER_S8[i]}</span>${opt}`;
    btn.onclick = () => secenekSec_s8(i);
    secEl.appendChild(btn);
  });

  document.getElementById('btnOnceki_s8').disabled = mevcutSoru_s8 === 0;
  const btnS = document.getElementById('btnSonraki_s8');
  if (mevcutSoru_s8 === toplam - 1) {
    btnS.textContent = 'Bitir ✓';
    btnS.onclick = sinaviBitir_s8;
  } else {
    btnS.textContent = 'Sonraki →';
    btnS.onclick = sonrakiSoru_s8;
  }
  paletGuncelle_s8();
}

function secenekSec_s8(i) { cevaplar_s8[mevcutSoru_s8] = i; soruGoster_s8(); }
function sonrakiSoru_s8() { if (mevcutSoru_s8 < SORULAR_S8.length - 1) { mevcutSoru_s8++; soruGoster_s8(); } }
function oncekiSoru_s8()  { if (mevcutSoru_s8 > 0) { mevcutSoru_s8--; soruGoster_s8(); } }

function paletOlustur_s8() {
  const grid = document.getElementById('paletGrid_s8');
  grid.innerHTML = '';
  SORULAR_S8.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'palet-btn';
    btn.textContent = i + 1;
    btn.onclick = () => { mevcutSoru_s8 = i; soruGoster_s8(); };
    grid.appendChild(btn);
  });
}

function paletGuncelle_s8() {
  document.querySelectorAll('#paletGrid_s8 .palet-btn').forEach((btn, i) => {
    btn.classList.remove('cevaplandi', 'aktif');
    if (i === mevcutSoru_s8) btn.classList.add('aktif');
    else if (cevaplar_s8[i] !== null) btn.classList.add('cevaplandi');
  });
}

async function sinaviBitir_s8() {
  clearInterval(timerInterval_s8);
  const gecenDakika = Math.round((Date.now() - baslangicZaman_s8) / 60000);

  let dogru = 0, yanlis = 0, bos = 0;
  SORULAR_S8.forEach((s, i) => {
    if (cevaplar_s8[i] === null) bos++;
    else if (cevaplar_s8[i] === s.cevap) dogru++;
    else yanlis++;
  });
  const net = (dogru - yanlis / 4).toFixed(2);

  document.getElementById('sonucAd_s8').textContent = ogrenciAdi_s8;
  document.getElementById('siDogru_s8').textContent = dogru;
  document.getElementById('siYanlis_s8').textContent = yanlis;
  document.getElementById('siBos_s8').textContent = bos;
  document.getElementById('siNet_s8').textContent = net;

  const analizListe = document.getElementById('analizListe_s8');
  analizListe.innerHTML = '';

  // İpuçları listesi
  const ipuclari = [
    "İki periyotun aynı anda tekrarlanması → EKOK. Soru 'kaç dakika sonra' değil 'saat kaç' soruyor — bir adım daha var.",
    "'En az sayıda parça' → parça boyu en uzun → EBOB. Sonra her ipten kaç parça çıktığını topla.",
    "4 ve 8'i 2'nin kuvveti olarak yaz. Sonra tek bir 2 tabanına indir.",
    "Bölme: katsayıları böl, üsleri çıkar. Bilimsel gösterim koşulunu kontrol et: 1 ≤ |a| < 10.",
    "Her terimi a√2 biçimine getir. √a+√b ≠ √(a+b) tuzağına dikkat!",
    "√a/√b = √(a/b). Önce basitleştir — tam kare çıkıyor mu?",
    "36 < 45 < 49 → 6 < √45 < 7. 45 tam kare değil → irrasyonel.",
    "Açı = (pay/toplam) × 360. Yüzdeyi 360 ile çarp.",
    "Sütun grafiğinden daire grafiğine: önce her verinin toplama oranını bul.",
    "3'ün katı olmaması = 1 − P(3'ün katı). Tamamlayan olay!",
    "Önce x=3'ü parantez içine yaz: uzunluk ve genişliği bul, sonra çarp.",
    "101×99 = (100+1)(100−1) = 100²−1². a²−b² özdeşliği!",
    "'n yıl sonra' derken iki yaşa da n ekle.",
    "Kapasite = a. a/4 + 30 = a/2 → a/4 = 30 → a = 120.",
    "2/5 + 1/3 = 11/15. Kalan 4/15 = 16 TL → toplam 60 TL.",
    "3x−5 > 2x+7 → x > 12. 'Kesinlikle daha fazla' = sıkı eşitsizlik, x=12 geçersiz.",
    "Açılar toplamı=180°. Sonra iki açının eşit olup olmadığını kontrol et.",
    "9-40-41 özel Pisagor üçlüsü! 9²+40²=81+1600=1681=41².",
    "Alan oranı = (benzerlik oranı)². Kenar oranını alana direkt uygulama!",
    "a²−b²=(a+b)(a−b). a+b=2√3, a−b=2√2. Çarpım=4√6."
  ];

  SORULAR_S8.forEach((s, i) => {
    const dogru_mu = cevaplar_s8[i] === s.cevap;
    const bos_mu = cevaplar_s8[i] === null;
    const cls = bos_mu ? 'bos' : (dogru_mu ? 'dogru' : 'yanlis');
    const rozet = bos_mu ? 'Boş' : (dogru_mu ? 'Doğru' : `Yanlış (D: ${HARFLER_S8[s.cevap]})`);
    const item = document.createElement('div');
    item.className = `analiz-item ${cls}`;
    item.style.flexDirection = 'column';
    item.style.alignItems = 'stretch';
    item.style.cursor = 'pointer';

    const ust = document.createElement('div');
    ust.style.cssText = 'display:flex;align-items:center;gap:10px;';
    ust.innerHTML = `
      <span class="ai-no">${i+1}.</span>
      <span class="ai-metin">Soru ${i+1}</span>
      <span class="ai-rozet">${rozet}</span>
      <span style="margin-left:auto;font-size:0.72rem;color:#8a6d1e;font-weight:600;">İpucu ▾</span>
    `;
    item.appendChild(ust);

    const ipucuDiv = document.createElement('div');
    ipucuDiv.innerHTML = `<div style="margin-top:8px;padding:8px 12px;background:rgba(200,168,75,0.1);border-left:3px solid #c9a84c;border-radius:0 4px 4px 0;font-size:0.82rem;color:#5a400e;">${ipuclari[i]}</div>`;
    ipucuDiv.style.display = 'none';
    item.appendChild(ipucuDiv);

    item.addEventListener('click', () => {
      const acik = ipucuDiv.style.display !== 'none';
      ipucuDiv.style.display = acik ? 'none' : 'block';
      ust.querySelector('span:last-child').textContent = acik ? 'İpucu ▾' : 'Gizle ▴';
    });

    analizListe.appendChild(item);
  });

  showScreen_s8('screen-result-s8');

  // Formspree ile e-posta gönder
  const cevapMetni = SORULAR_S8.map((s, i) => {
    const secilen = cevaplar_s8[i] !== null ? HARFLER_S8[cevaplar_s8[i]] : 'BOŞ';
    const durum = cevaplar_s8[i] === null ? 'Boş' : (cevaplar_s8[i] === s.cevap ? 'Doğru' : 'Yanlış');
    return `S${i+1}: Seçilen: ${secilen} | Doğru: ${HARFLER_S8[s.cevap]} | ${durum}`;
  }).join('\n');

  try {
    await fetch('https://formspree.io/xdawbbzg', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: `LGS Seri 8 Sonucu — ${ogrenciAdi_s8}`,
        ogrenci: ogrenciAdi_s8,
        sinav: 'LGS Seri 8 Denemesi',
        sure: `${gecenDakika} dakika`,
        sonuc: `Doğru: ${dogru} | Yanlış: ${yanlis} | Boş: ${bos} | Net: ${net}`,
        cevaplar: cevapMetni
      })
    });
  } catch(e) { console.log('Gönderim hatası:', e); }
}

function tekrarBaslat_s8() {
  mevcutSoru_s8 = 0;
  cevaplar_s8 = new Array(20).fill(null);
  kalanSure_s8 = 50 * 60;
  gosterilen_sure = 45 * 60;
  baslangicZaman_s8 = Date.now();
  paletOlustur_s8();
  soruGoster_s8();
  showScreen_s8('screen-exam-s8');
  zamanlayiciBaslat_s8();
}
