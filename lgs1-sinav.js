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
    gorsel: `<div style="margin:18px 0;background:#f8f8f6;border:1px solid #e0ddd6;border-radius:8px;padding:18px 16px;">
<div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#999;text-align:center;margin-bottom:16px;">Bir Okulda Sınıflara Göre Öğrenci Dağılımı</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;">
  <div>
    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;margin-bottom:8px;">Grafik 1 — Kayıt Dönemi Öncesi</div>
    <svg viewBox="0 0 180 180" width="100%" style="display:block;">
      <circle cx="90" cy="90" r="70" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
      <!-- 6.sınıf: 120° mavi -->
      <path d="M90,90 L90,20 A70,70 0 0,1 150.6,55 Z" fill="#1a4a7a" opacity="0.85"/>
      <!-- 7.sınıf: 150° yeşil -->
      <path d="M90,90 L150.6,55 A70,70 0 0,1 55,148.1 Z" fill="#2d6e2d" opacity="0.85"/>
      <!-- 8.sınıf: 90° turuncu -->
      <path d="M90,90 L55,148.1 A70,70 0 0,1 90,20 Z" fill="#b85c00" opacity="0.85"/>
      <text x="110" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="white">6. Sınıf</text>
      <text x="115" y="78" text-anchor="middle" font-size="9" fill="white">120°</text>
      <text x="120" y="115" text-anchor="middle" font-size="10" font-weight="700" fill="white">7. Sınıf</text>
      <text x="120" y="128" text-anchor="middle" font-size="9" fill="white">150°</text>
      <text x="58" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="white">8. Sınıf</text>
      <text x="58" y="120" text-anchor="middle" font-size="9" fill="white">90°</text>
    </svg>
  </div>
  <div>
    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;margin-bottom:8px;">Grafik 2 — Kayıt Dönemi Sonrası</div>
    <svg viewBox="0 0 180 180" width="100%" style="display:block;">
      <circle cx="90" cy="90" r="70" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
      <!-- 6.sınıf: 100° -->
      <path d="M90,90 L90,20 A70,70 0 0,1 156.2,66.3 Z" fill="#1a4a7a" opacity="0.85"/>
      <!-- 7.sınıf: 160° -->
      <path d="M90,90 L156.2,66.3 A70,70 0 0,1 41.2,148.6 Z" fill="#2d6e2d" opacity="0.85"/>
      <!-- 8.sınıf: 100° -->
      <path d="M90,90 L41.2,148.6 A70,70 0 0,1 90,20 Z" fill="#b85c00" opacity="0.85"/>
      <text x="118" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="white">6. Sınıf</text>
      <text x="118" y="74" text-anchor="middle" font-size="9" fill="white">100°</text>
      <text x="118" y="118" text-anchor="middle" font-size="10" font-weight="700" fill="white">7. Sınıf</text>
      <text x="118" y="130" text-anchor="middle" font-size="9" fill="white">160°</text>
      <text x="52" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="white">8. Sınıf</text>
      <text x="52" y="124" text-anchor="middle" font-size="9" fill="white">100°</text>
    </svg>
  </div>
</div>
<div style="margin-top:12px;padding:10px 14px;background:#fdf6e3;border-left:3px solid #c9a84c;border-radius:0 4px 4px 0;font-size:13px;color:#5a400e;">
  Kayıt dönemi dışında okuldaki öğrenci sayısı değişmemiştir. Kayıt döneminde okula <strong>22 öğrenci gelmiş</strong>, <strong>2 öğrenci gitmiştir.</strong> 6. sınıfın aldığı ve verdiği öğrenci sayıları tabloda verilmiştir: <strong>Gelen: 22, Giden: 2.</strong>
</div>
</div>`,
    soru: "Grafik 1'de okuldaki toplam öğrenci sayısı 360'tır. Kayıt dönemi sonrası 8. sınıftaki öğrenci sayısı kaçtır?",
    secenekler: ["90", "95", "100", "105"],
    cevap: 2
  },
  {
    konu: "Veri Analizi", zorluk: "Orta",
    gorsel: `<div style="margin:18px 0;background:#f8f8f6;border:1px solid #e0ddd6;border-radius:8px;padding:18px 16px;">
<div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#999;text-align:center;margin-bottom:16px;">Bir Tiyatro Salonunda Koltuk ve Seyirci Dağılımı</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:center;">
  <div>
    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;margin-bottom:8px;">Grafik 1 — Toplam Koltuk Sayısı</div>
    <svg viewBox="0 0 180 180" width="100%" style="display:block;">
      <circle cx="90" cy="90" r="70" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
      <!-- Kırmızı: 120° -->
      <path d="M90,90 L90,20 A70,70 0 0,1 150.6,55 Z" fill="#7a2020" opacity="0.9"/>
      <!-- Mavi: 150° -->
      <path d="M90,90 L150.6,55 A70,70 0 0,1 55,148.1 Z" fill="#1a4a7a" opacity="0.9"/>
      <!-- Sarı: 90° -->
      <path d="M90,90 L55,148.1 A70,70 0 0,1 90,20 Z" fill="#b85c00" opacity="0.9"/>
      <text x="112" y="62" text-anchor="middle" font-size="9" font-weight="700" fill="white">Kırmızı</text>
      <text x="112" y="73" text-anchor="middle" font-size="9" fill="white">120°</text>
      <text x="118" y="118" text-anchor="middle" font-size="9" font-weight="700" fill="white">Mavi</text>
      <text x="118" y="129" text-anchor="middle" font-size="9" fill="white">150°</text>
      <text x="55" y="108" text-anchor="middle" font-size="9" font-weight="700" fill="white">Sarı</text>
      <text x="55" y="119" text-anchor="middle" font-size="9" fill="white">90°</text>
    </svg>
  </div>
  <div>
    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;margin-bottom:6px;">Grafik 2 — Dolu Koltuk Sayısı</div>
    <svg viewBox="0 0 180 160" width="100%" style="display:block;">
      <line x1="30" y1="10" x2="30" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="30" y1="130" x2="170" y2="130" stroke="#333" stroke-width="1.5"/>
      <line x1="30" y1="40" x2="170" y2="40" stroke="#eee" stroke-width="1"/>
      <line x1="30" y1="70" x2="170" y2="70" stroke="#eee" stroke-width="1"/>
      <line x1="30" y1="100" x2="170" y2="100" stroke="#eee" stroke-width="1"/>
      <text x="24" y="133" text-anchor="end" font-size="10" fill="#666">0</text>
      <text x="24" y="103" text-anchor="end" font-size="10" fill="#666">45</text>
      <text x="24" y="73" text-anchor="end" font-size="10" fill="#666">90</text>
      <text x="24" y="43" text-anchor="end" font-size="10" fill="#666">135</text>
      <!-- Kırmızı dolu: 90 koltuk → y=70 -->
      <rect x="45" y="70" width="30" height="60" fill="#7a2020" rx="3"/>
      <text x="60" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="#7a2020">90</text>
      <text x="60" y="148" text-anchor="middle" font-size="10" fill="#555">Kırmızı</text>
      <!-- Mavi dolu: 45 → y=100 -->
      <rect x="90" y="100" width="30" height="30" fill="#1a4a7a" rx="3"/>
      <text x="105" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="#1a4a7a">45</text>
      <text x="105" y="148" text-anchor="middle" font-size="10" fill="#555">Mavi</text>
      <!-- Sarı dolu: 50 → y=96 -->
      <rect x="135" y="96" width="30" height="34" fill="#b85c00" rx="3"/>
      <text x="150" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#b85c00">50</text>
      <text x="150" y="148" text-anchor="middle" font-size="10" fill="#555">Sarı</text>
    </svg>
  </div>
</div>
<div style="margin-top:12px;padding:10px 14px;background:#fdf6e3;border-left:3px solid #c9a84c;border-radius:0 4px 4px 0;font-size:13px;color:#5a400e;">
  Dolu sarı koltuk sayısı, boş kırmızı koltuk sayısının <strong>2 katıdır.</strong>
</div>
</div>`,
    soru: "Tiyatro salonundaki toplam koltuk sayısı kaçtır?",
    secenekler: ["360", "480", "540", "600"],
    cevap: 1
  },
  {
    konu: "Veri Analizi", zorluk: "Zor",
    gorsel: `<div style="margin:18px 0;background:#f8f8f6;border:1px solid #e0ddd6;border-radius:8px;padding:18px 16px;">
<div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#999;text-align:center;margin-bottom:16px;">Bir Fabrikada Çorap Üretimi ve Satışı</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start;">
  <div>
    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;margin-bottom:8px;">Grafik 1 — Üretilen Çorap Renkleri</div>
    <svg viewBox="0 0 180 180" width="100%" style="display:block;">
      <circle cx="90" cy="90" r="70" fill="#f0f0f0" stroke="#ccc" stroke-width="1"/>
      <!-- Sarı: 150° -->
      <path d="M90,90 L90,20 A70,70 0 0,1 151,125 Z" fill="#c9a84c" opacity="0.9"/>
      <!-- Mavi: 60° -->
      <path d="M90,90 L151,125 A70,70 0 0,1 116,149 Z" fill="#1a4a7a" opacity="0.9"/>
      <!-- Turuncu: 90° -->
      <path d="M90,90 L116,149 A70,70 0 0,1 20,90 Z" fill="#b85c00" opacity="0.9"/>
      <!-- Gri: 60° -->
      <path d="M90,90 L20,90 A70,70 0 0,1 90,20 Z" fill="#666" opacity="0.9"/>
      <text x="112" y="85" text-anchor="middle" font-size="9" font-weight="700" fill="white">Sarı</text>
      <text x="112" y="96" text-anchor="middle" font-size="9" fill="white">150°</text>
      <text x="145" y="140" text-anchor="middle" font-size="9" font-weight="700" fill="white">Mavi</text>
      <text x="145" y="151" text-anchor="middle" font-size="9" fill="white">60°</text>
      <text x="58" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="white">Turuncu</text>
      <text x="58" y="146" text-anchor="middle" font-size="9" fill="white">90°</text>
      <text x="45" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="white">Gri</text>
      <text x="45" y="83" text-anchor="middle" font-size="9" fill="white">60°</text>
    </svg>
  </div>
  <div>
    <div style="font-size:11px;font-weight:600;color:#555;text-align:center;margin-bottom:8px;">Tablo — Paket Türleri ve Fiyatları</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <tr style="background:#e8e4dc;">
        <th style="padding:7px 10px;border:1px solid #d0ccc4;text-align:left;">Paket Türü</th>
        <th style="padding:7px 10px;border:1px solid #d0ccc4;text-align:center;">Fiyat (TL)</th>
      </tr>
      <tr>
        <td style="padding:7px 10px;border:1px solid #d0ccc4;">Rengarenk (4 farklı renk)</td>
        <td style="padding:7px 10px;border:1px solid #d0ccc4;text-align:center;">20</td>
      </tr>
      <tr style="background:#f5f3ef;">
        <td style="padding:7px 10px;border:1px solid #d0ccc4;">Tek renk (4 aynı renk)</td>
        <td style="padding:7px 10px;border:1px solid #d0ccc4;text-align:center;">16</td>
      </tr>
    </table>
    <div style="margin-top:12px;padding:10px 14px;background:#fdf6e3;border-left:3px solid #c9a84c;border-radius:0 4px 4px 0;font-size:12px;color:#5a400e;line-height:1.6;">
      • Aynı renk iki çorap birleşerek 1 çift oluşturur.<br/>
      • 4 çiftten oluşan paketler halinde satılır.<br/>
      • Paketler ya her renkten 1'er çift (rengarenk) ya da tek renkten 4 çift içerir.<br/>
      • Bir günde toplam <strong>720 çorap</strong> üretilmektedir.
    </div>
  </div>
</div>
</div>`,
    soru: "Bu fabrikada bir günde üretilen çoraplardan elde edilebilecek en fazla gelir kaç TL'dir?",
    secenekler: ["1.440", "1.500", "1.560", "1.620"],
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
  document.getElementById('sinav-progress').textContent = `${mevcutSoru + 1} / ${toplam}`;
  document.getElementById('sinavBarFill').style.width = `${((mevcutSoru + 1) / toplam) * 100}%`;

  // Soru metni + görsel
  const soruTextEl = document.getElementById('soruText');
  soruTextEl.textContent = s.soru;

  // Görsel varsa soru metninden önce ekle
  const eskiGorsel = document.getElementById('soruGorsel');
  if (eskiGorsel) eskiGorsel.remove();
  if (s.gorsel) {
    const gorselDiv = document.createElement('div');
    gorselDiv.id = 'soruGorsel';
    gorselDiv.innerHTML = s.gorsel;
    soruTextEl.parentNode.insertBefore(gorselDiv, soruTextEl);
  }

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
    await fetch('https://formspree.io/xdawbbzg', {
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
