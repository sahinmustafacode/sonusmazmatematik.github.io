import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="footer-logo" />
            <span className="footer-name">Sonuşmaz Matematik</span>
            <p>Her seviyede matematik eğitimi için güvenilir adres.</p>
          </div>
          <div className="footer-links">
            <h4>Sayfalar</h4>
            <ul>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/ders-notlari">Ders Notları</Link></li>
              <li><Link href="/videolar">Videolar</Link></li>
              <li><Link href="/deneme">Online Deneme</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Seviyeler</h4>
            <ul>
              <li><Link href="/deneme">LGS</Link></li>
              <li><Link href="/deneme">Ortaokul</Link></li>
              <li><Link href="/deneme">Lise</Link></li>
              <li><Link href="/deneme">TYT / AYT</Link></li>
              <li><Link href="/deneme">KPSS</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Sosyal Medya</h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/@sonuşmazmatematik" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sonuşmaz Matematik. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
