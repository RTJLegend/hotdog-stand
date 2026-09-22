import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { NEWS, findPost } from "@/lib/content";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: "Not found | Gold Star Dogs" };
  return { title: `${post.title} | Gold Star Dogs News`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const others = NEWS.filter((n) => n.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "56px 20px 48px", maxWidth: 800 }}>
        <Reveal>
          <p style={{ margin: "0 0 8px" }}>
            <Link href="/news">News</Link> / {post.tag}
          </p>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)", lineHeight: 1 }}>{post.title}</h1>
          <p style={{ fontSize: 14 }}>{post.date} · 2 min read</p>
        </Reveal>
        <Reveal>
          <div style={{ marginTop: 16, display: "grid", gap: 4 }}>
            {post.body.map((para, i) => (
              <p key={i} style={{ fontSize: 18, maxWidth: "64ch" }}>{para}</p>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <Link className="btn" href="/order">
              Order ahead
            </Link>
            <Link className="btn btn-secondary" href="/news">
              All news
            </Link>
          </div>
        </Reveal>
        {others.length > 0 && (
          <section style={{ marginTop: 40 }}>
            <Reveal>
              <h2>MORE NEWS</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
                {others.map((o) => (
                  <Link key={o.slug} href={`/news/${o.slug}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
                    <strong>{o.title}</strong>
                    <p style={{ margin: "8px 0 0", fontSize: 14 }}>{o.date}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
