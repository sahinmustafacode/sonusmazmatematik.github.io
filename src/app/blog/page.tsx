export const dynamic = 'force-dynamic';
import { client } from '@/sanity/client';
import Link from 'next/link';
import styles from './blog.module.css';

async function getPosts() {
  try {
    return await client.fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, publishedAt
    }`);
  } catch { return []; }
}

const categoryLabel: Record<string, string> = {
  lgs: 'LGS', 'tyt-ayt': 'TYT / AYT', ortaokul: 'Ortaokul', lise: 'Lise', genel: 'Genel',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>Blog</span>
          <h1>Matematik <span className="gold">Yazıları</span></h1>
          <p>Konu anlatımları, sınav tüyoları ve öğrencilere özel içerikler.</p>
        </div>
      </section>
      <section className={styles.grid_section}>
        <div className="container">
          {posts.length === 0 ? (
            <p className={styles.empty}>Henüz yazı yayınlanmadı.</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post: any) => (
                <Link href={`/blog/${post.slug.current}`} key={post._id} className={styles.card}>
                  <div className={styles.card_top}>
                    {post.category && <span className={styles.cat}>{categoryLabel[post.category] || post.category}</span>}
                    <span className={styles.date}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  {post.excerpt && <p>{post.excerpt}</p>}
                  <span className={styles.read}>Devamını oku →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
