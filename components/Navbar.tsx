'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/ders-notlari', label: 'Ders Notları' },
  { href: '/videolar', label: 'Videolar' },
  { href: '/deneme', label: 'Online Deneme' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/logo.png" alt="Sonuşmaz Matematik" width={38} height={38} />
          <span>Sonuşmaz <strong>Matematik</strong></span>
        </Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/iletisim" className="nav-cta">İletişim</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
