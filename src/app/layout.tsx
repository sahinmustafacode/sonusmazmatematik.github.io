import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sonuşmaz Matematik',
  description: 'Her seviyede matematik eğitimi için güvenilir adres.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main style={{ paddingTop: '68px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
