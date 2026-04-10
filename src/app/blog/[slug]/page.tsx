export const dynamic = "force-dynamic";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Comments from "@/components/Comments";

async function getPost(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        _id, title, excerpt, category, publishedAt, body
      }`,
      { slug }
    );
  } catch { return null; }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return (
    <div style={{minHeight:"100vh",background:"#070e20",padding:"60px 0"}}>
      <div style={{maxWidth:"800px",margin:"0 auto",padding:"0 24px"}}>
        <h1 style={{fontFamily:"Playfair Display,serif",fontSize:"2.5rem",color:"#c8a84b",marginBottom:"24px"}}>{post.title}</h1>
        {post.excerpt && <p style={{color:"rgba(255,255,255,0.7)",fontSize:"1.1rem",marginBottom:"40px"}}>{post.excerpt}</p>}
        <div style={{color:"rgba(255,255,255,0.85)",lineHeight:"1.8"}}>
          {post.body && <PortableText value={post.body} />}
        </div>
        <div style={{marginTop:"64px"}}>
          <h3 style={{color:"white",fontFamily:"Playfair Display,serif",marginBottom:"24px"}}>Yorumlar</h3>
          <Comments />
        </div>
      </div>
    </div>
  );
}
