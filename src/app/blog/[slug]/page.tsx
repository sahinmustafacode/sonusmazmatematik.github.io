export const dynamic = 'force-dynamic';
import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Comments from '@/components/Comments';
import styles from './post.module.css';

async function getPost(slug: string) {
  try {
    return await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, excerpt, category, publishedAt, body
    }`, { slug });
  } catch { return null; }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <div className="container">
          <div className={styles.meta}>
            {post.category && <span className={styles.cat}>{post.category.toUpperCase()}</span>}
            {post.publishedAt && (
              <span className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
          <div className={styles.body}>
            {post.body && <PortableText value={post.body} />}
          </div>
        </div>
      </article>
      <section className={styles.comments_section}>
        <div className="container">
          <h3>Yorumlar</h3>
          <Comments />
        </div>
      </section>
    </div>
  );
}
