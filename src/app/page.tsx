import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero_inner}>
            <span className={styles.badge}>Türkiye&apos;nin Matematik Platformu</span>
            <h1>
              Matematiği <span className="gold">Sevdiren</span><br />
              Öğretmenler
            </h1>
            <p>LGS&apos;den TYT&apos;ye, ortaokuldan KPSS&apos;ye her seviyede özgün içerik ve interaktif denemeler.</p>
            <div className={styles.hero_btns}>
              <Link href="/deneme" className="btn btn-primary">Online Deneme →</Link>
              <Link href="/ders-notlari" className="btn btn-outline">Ders Notları</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.features_grid}>
            {[
              { icon: '📝', title: 'Online Denemeler', desc: 'LGS odaklı, anlık sonuçlu ücretsiz sınavlar.' },
              { icon: '📚', title: 'Ders Notları', desc: 'PDF formatında indirilebilir konu anlatımları.' },
              { icon: '🎯', title: 'Çözümlü Sorular', desc: 'Adım adım açıklamalı soru çözümleri.' },
              { icon: '💬', title: 'Blog & Yorumlar', desc: 'Öğrencilerle etkileşimli paylaşımlar.' },
            ].map(f => (
              <div key={f.title} className={styles.feature_card}>
                <span className={styles.feature_icon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Hemen Başla</h2>
          <p>Ücretsiz deneme sınavlarıyla LGS&apos;ye hazırlan.</p>
          <Link href="/deneme" className="btn btn-primary">Denemelere Git →</Link>
        </div>
      </section>
    </div>
  );
}
