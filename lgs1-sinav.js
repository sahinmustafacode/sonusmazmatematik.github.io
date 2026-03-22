// =====================================================
// LGS 1. DÖNEM DENEMESİ — SORULAR VE CEVAP ANAHTARI
// =====================================================
const SORULAR = [
  {
    konu: "Çarpanlar ve Katlar", zorluk: "Orta",
    soru: "Bir fabrika, ürettiği ürünleri kutulara eşit sayıda paketleyecektir. Kutularda hiç boşluk kalmadan paketlenebilecek ürün sayısı 300'den büyük, 400'den küçük bir tam sayıdır. Bu ürün sayısı 12'ye, 15'e ve 18'e tam bölünebilmektedir. Buna göre bu koşulu sağlayan kaç farklı ürün sayısı vardır?",
    secenekler: ["1", "2", "3", "4"],
    cevap: 0
  },
  {
    konu: "Çarpanlar ve Katlar", zorluk: "Zor",
    soru: "Üç basamaklı bir doğal sayının asal çarpanlarına ayrılmış hali 2ᵃ · 3ᵇ · 7 biçimindedir. Bu sayının tam bölenlerinin sayısı 18'dir. a + b değerinin alabileceği tüm değerlerin toplamı kaçtır?",
    secenekler: ["3", "4", "5", "6"],
    cevap: 1
  },
  {
    konu: "EBOB / EKOK", zorluk: "Orta",
    soru: "Ahmet'in 3 farklı ip parçası vardır. İplerin uzunlukları sırasıyla 84 cm, 126 cm ve 210 cm'dir. Ahmet bu ipleri, hiç artık kalmayacak şekilde eşit uzunluktaki parçalara kesmek istemektedir. Elde edilebilecek en az toplam parça sayısı kaçtır?",
    secenekler: ["8 parça", "9 parça", "10 parça", "12 parça"],
    cevap: 2
  },
  {
    konu: "EBOB / EKOK", zorluk: "Zor",
    soru: "İki pozitif tam sayının EBOB'u 12, EKOK'u ise 360'tır. Bu iki sayıdan büyük olanı, küçük olanın 3 katından 12 fazladır. İki sayının toplamı kaçtır?",
    secenekler: ["144", "156", "168", "180"],
    cevap: 1
  },
  {
    konu: "Üslü İfadeler", zorluk: "Orta",
    soru: "Bir virüs, her saat kendini 2 katına çıkaracak biçimde çoğalmaktadır. Sabah 08:00'de 3 virüs ile başlayan bir deney aynı günün 20:00'sine kadar sürmektedir. Deney sonundaki virüs sayısı 3 · 2ᵏ biçiminde ifade edildiğinde k kaçtır?",
    secenekler: ["10", "11", "12", "13"],
    cevap: 2
  },
  {
    konu: "Üslü İfadeler", zorluk: "Zor",
    soru: "2ˣ = 5 olduğu bilinmektedir. Buna göre 8ˣ · 4⁻ˣ ifadesinin değeri kaçtır?",
    secenekler: ["5", "10", "25", "50"],
    cevap: 0
  },
  {
    konu: "Üslü İfadeler", zorluk: "Zor",
    soru: "Dünya'nın kütlesi yaklaşık 6 × 10²⁴ kg, bir protonun kütlesi ise yaklaşık 2 × 10⁻²⁷ kg'dır. Dünya'nın kütlesi bir protonun kütlesinin yaklaşık kaç katıdır?",
    secenekler: ["3 × 10⁵¹", "4 × 10⁵⁰", "3 × 10⁵⁰", "4 × 10⁵¹"],
    cevap: 0
  },
  {
    konu: "Kareköklü İfadeler", zorluk: "Orta",
    soru: "Bir fotoğrafçı, dikdörtgen bir fotoğrafı karşılaştırmalı olarak büyütmek istiyor. Küçük fotoğrafın alanı √180 cm², büyük fotoğrafın alanı ise küçük fotoğrafın alanının √5 katıdır. Büyük fotoğrafın alanı kaç cm²'dir?",
    secenekler: ["30 cm²", "√900 cm²", "30√5 cm²", "√180 + √5 cm²"],
    cevap: 0
  },
  {
    konu: "Kareköklü İfadeler", zorluk: "Zor",
    soru: "Bir bahçenin çevresi (4√3 + 2√12) metredir. Bahçe, eşit kenar uzunluğuna sahip bir eşkenar dörtgen biçimindedir. Bahçenin bir kenar uzunluğu kaç metredir?",
    secenekler: ["√3 + √12", "2√3", "4√3", "√3 + √4"],
    cevap: 1
  },
  {
    konu: "Kareköklü İfadeler", zorluk: "Zor",
    soru: "Dikdörtgen bahçenin kısa kenarı √48 metre, uzun kenarı √75 metredir. Bahçenin ortasından uzun kenara paralel, genişliği d metre olan bir yol geçmektedir. Her iki bölgenin alanlarının toplamı 20√3 m² olduğuna göre d kaç metredir?",
    secenekler: ["√3 m", "2√3 − 2 m", "4√3 − 4 m", "2 m"],
    cevap: 2
  },
  {
    konu: "Olasılık", zorluk: "Orta",
    soru: "Bir torbada 4 kırmızı, 3 mavi, 5 sarı top vardır. Mert, gözleri kapalı torbanın içinden bir top çekiyor, rengini not edip geri koyuyor. Bunu iki kez yapıyor. İki çekimde de aynı renkte top gelme olasılığı kaçtır?",
    secenekler: ["25/72", "50/144", "5/18", "1/3"],
    cevap: 0
  },
  {
    konu: "Olasılık", zorluk: "Zor",
    soru: "Bir sınıfta 30 öğrenci vardır. 18'i matematik, 15'i fen dersini sevmektedir. 7 öğrenci ise her iki dersi de sevmektedir. Rastgele seçilen bir öğrencinin en az bir dersi sevme olasılığı ile hiçbir dersi sevmeme olasılığının farkı kaçtır?",
    secenekler: ["17/30", "4/5", "13/15", "11/15"],
    cevap: 3
  },
  {
    konu: "Olasılık", zorluk: "Zor",
    soru: "Bir zarın yüzlerindeki sayılar 1, 2, 3, 4, 5, 6'dır. Bu zar iki kez atılıyor. Gelen sayıların toplamının 8 veya daha büyük olma olasılığı kaçtır?",
    secenekler: ["5/12", "7/18", "13/36", "5/36"],
    cevap: 0
  },
  {
    konu: "Veri Analizi", zorluk: "Orta",
    soru: "6 öğrencinin notları: Ali 72, Buse 85, Can 90, Defne 68, Ege x, Fatma 79'dur. 6 öğrencinin not ortalaması 80 olduğuna göre, 6 notun medyanı kaçtır?",
    secenekler: ["79", "82", "82,5", "85"],
    cevap: 1
  },
  {
    konu: "Veri Analizi", zorluk: "Zor",
    soru: "Bir mağazanın ilk 4 günlük satışları sırasıyla 120, 95, 140, 105 adettir. Yönetici 5 günlük ortalamanın en az 115 olmasını istiyor. 5. günün satışı en az kaç adet olmalıdır?",
    secenekler: ["100 adet", "110 adet", "115 adet", "120 adet"],
    cevap: 2
  },
  {
    konu: "Veri Analizi", zorluk: "Zor",
    soru: "Veri kümesi: 5, 8, a, 12, b, 15, 9. Bu 7 verinin modu 8, medyanı 9 olduğuna göre a + b değerinin alabileceği en büyük değer kaçtır?",
    secenekler: ["25", "26", "27", "28"],
    cevap: 2
  },
  {
    konu: "Cebirsel İfadeler", zorluk: "Orta",
    soru: "Bir su deposu dolmaya başladığında vanadan saatte x litre su akmaktadır. Depo 3 saatte tamamen dolmaktadır. Aynı depo başka bir vanayla 4 saatte doluyor. Her iki vana aynı anda açılırsa toplam kullanılan su 240 litredir. Birinci vanadan saatte kaç litre su akmaktadır?",
    secenekler: ["x = 80 L/saat", "x = 60 L/saat", "x = 100 L/saat", "x = 120 L/saat"],
    cevap: 0
  },
  {
    konu: "Cebirsel İfadeler", zorluk: "Zor",
    soru: "x + y = 7 ve xy = 10 olduğu bilinmektedir. x² + y² ile x/y + y/x değerlerinin toplamı kaçtır?",
    secenekler: ["31,9", "319/10", "32", "145/5"],
    cevap: 1
  },
  {
    konu: "Özdeşlikler", zorluk: "Zor",
    soru: "Bir karenin kenar uzunluğu a'dan (a + 3)'e çıkarılıyor. Yeni karenin alanı, eski karenin alanından 51 birim² fazladır. a kaçtır?",
    secenekler: ["7", "8", "9", "6"],
    cevap: 0
  },
  {
    konu: "Özdeşlikler", zorluk: "★ Özel",
    soru: "a − b = 4 ve a² − b² = 60 olduğuna göre; a² + 2ab + b² ifadesinin değeri kaçtır?",
    secenekler: ["182,25", "225", "196", "210,25"],
    cevap: 1
  }
];

// =====================================================
// SINAV MOTORU
// =====================================================
const HARFLER = ['A', 'B', 'C', 'D'];
let mevcutSoru = 0;
let cevaplar = new Array(20).fill(null);
let kalanSure = 40 * 60;
let timerInterval = null;
let ogrenciAdi = '';

function showScreen(id) {
  document.querySelectorAll('.sinav-screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  window.scrollTo(0, 0);
}

function sinaviBaslat() {
  const ad = document.getElementById('ogrenciAd').value.trim();
  const soyad = document.getElementById('ogrenciSoyad').value.trim();
  const err = document.getElementById('isimError');

  if (!ad || !soyad) {
    err.style.display = 'block';
    return;
  }

  ogrenciAdi = ad + ' ' + soyad;
  err.style.display = 'none';
  mevcutSoru = 0;
  cevaplar = new Array(20).fill(null);
  kalanSure = 40 * 60;

  paletOlustur();
  soruGoster();
  showScreen('screen-exam');
  zamanlayiciBaslat();
}

function zamanlayiciBaslat() {
  clearInterval(timerInterval);
  zamanlayiciGuncelle();
  timerInterval = setInterval(() => {
    kalanSure--;
    zamanlayiciGuncelle();
    if (kalanSure <= 0) {
      clearInterval(timerInterval);
      sinaviBitir();
    }
  }, 1000);
}

function zamanlayiciGuncelle() {
  const dk = Math.floor(kalanSure / 60);
  const sn = kalanSure % 60;
  const el = document.getElementById('sinavTimer');
  el.textContent = `${String(dk).padStart(2,'0')}:${String(sn).padStart(2,'0')}`;
  el.classList.toggle('uyari', kalanSure <= 120);
}

function soruGoster() {
  const s = SORULAR[mevcutSoru];
  const toplam = SORULAR.length;

  document.getElementById('soruMeta').textContent = `Soru ${mevcutSoru + 1} · ${s.konu} · ${s.zorluk}`;
  document.getElementById('soruText').textContent = s.soru;
  document.getElementById('sinav-progress').textContent = `${mevcutSoru + 1} / ${toplam}`;
  document.getElementById('sinavBarFill').style.width = `${((mevcutSoru + 1) / toplam) * 100}%`;

  const secEl = document.getElementById('soruSecenekler');
  secEl.innerHTML = '';
  s.secenekler.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'secenek-btn' + (cevaplar[mevcutSoru] === i ? ' secili' : '');
    btn.innerHTML = `<span class="secenek-harf">${HARFLER[i]}</span>${opt}`;
    btn.onclick = () => secenekSec(i);
    secEl.appendChild(btn);
  });

  document.getElementById('btnOnceki').disabled = mevcutSoru === 0;
  const btnS = document.getElementById('btnSonraki');
  if (mevcutSoru === toplam - 1) {
    btnS.textContent = 'Bitir ✓';
    btnS.onclick = sinaviBitir;
  } else {
    btnS.textContent = 'Sonraki →';
    btnS.onclick = sonrakiSoru;
  }

  paletGuncelle();
}

function secenekSec(i) {
  cevaplar[mevcutSoru] = i;
  soruGoster();
}

function sonrakiSoru() { if (mevcutSoru < SORULAR.length - 1) { mevcutSoru++; soruGoster(); } }
function oncekiSoru()  { if (mevcutSoru > 0) { mevcutSoru--; soruGoster(); } }

function paletOlustur() {
  const grid = document.getElementById('paletGrid');
  grid.innerHTML = '';
  SORULAR.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'palet-btn';
    btn.textContent = i + 1;
    btn.onclick = () => { mevcutSoru = i; soruGoster(); };
    grid.appendChild(btn);
  });
}

function paletGuncelle() {
  document.querySelectorAll('.palet-btn').forEach((btn, i) => {
    btn.classList.remove('cevaplandi', 'aktif');
    if (i === mevcutSoru) btn.classList.add('aktif');
    else if (cevaplar[i] !== null) btn.classList.add('cevaplandi');
  });
}

async function sinaviBitir() {
  clearInterval(timerInterval);

  let dogru = 0, yanlis = 0, bos = 0;

  SORULAR.forEach((s, i) => {
    if (cevaplar[i] === null) bos++;
    else if (cevaplar[i] === s.cevap) dogru++;
    else yanlis++;
  });

  const net = (dogru - yanlis / 4).toFixed(2);

  document.getElementById('sonucAd').textContent = ogrenciAdi;
  document.getElementById('siDogru').textContent = dogru;
  document.getElementById('siYanlis').textContent = yanlis;
  document.getElementById('siBos').textContent = bos;
  document.getElementById('siNet').textContent = net;

  const analizListe = document.getElementById('analizListe');
  analizListe.innerHTML = '';
  SORULAR.forEach((s, i) => {
    const dogru_mu = cevaplar[i] === s.cevap;
    const bos_mu = cevaplar[i] === null;
    const cls = bos_mu ? 'bos' : (dogru_mu ? 'dogru' : 'yanlis');
    const rozet = bos_mu ? 'Boş' : (dogru_mu ? 'Doğru' : `Yanlış (D: ${HARFLER[s.cevap]})`);
    const item = document.createElement('div');
    item.className = `analiz-item ${cls}`;
    item.innerHTML = `
      <span class="ai-no">${i+1}.</span>
      <span class="ai-metin">${s.konu} · ${s.zorluk}</span>
      <span class="ai-rozet">${rozet}</span>
    `;
    analizListe.appendChild(item);
  });

  showScreen('screen-result');

  // Formspree ile e-posta gönder
  const cevapMetni = SORULAR.map((s, i) => {
    const secilen = cevaplar[i] !== null ? HARFLER[cevaplar[i]] : 'BOŞ';
    const dogru_harf = HARFLER[s.cevap];
    const durum = cevaplar[i] === null ? 'Boş' : (cevaplar[i] === s.cevap ? 'Doğru' : 'Yanlış');
    return `S${i+1} (${s.konu}): Seçilen: ${secilen} | Doğru: ${dogru_harf} | ${durum}`;
  }).join('\n');

  const mesaj = `
ÖĞRENCİ: ${ogrenciAdi}
SINAV: LGS 1. Dönem Denemesi
TARİH: ${new Date().toLocaleString('tr-TR')}

SONUÇ:
Doğru: ${dogru} | Yanlış: ${yanlis} | Boş: ${bos} | Net: ${net}

CEVAP DETAYI:
${cevapMetni}
  `.trim();

  try {
    await fetch('https://formspree.io/BURAYA_FORMSPREE_ID', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _replyto: 'iletisim@sonusmazmatematik.com',
        _subject: `LGS Deneme Sonucu — ${ogrenciAdi}`,
        ogrenci: ogrenciAdi,
        sinav: 'LGS 1. Dönem Denemesi',
        sonuc: `Doğru: ${dogru} | Yanlış: ${yanlis} | Boş: ${bos} | Net: ${net}`,
        cevaplar: cevapMetni
      })
    });
  } catch(e) {
    console.log('Gönderim hatası:', e);
  }
}

function tekrarBaslat() {
  mevcutSoru = 0;
  cevaplar = new Array(20).fill(null);
  kalanSure = 40 * 60;
  paletOlustur();
  soruGoster();
  showScreen('screen-exam');
  zamanlayiciBaslat();
}
