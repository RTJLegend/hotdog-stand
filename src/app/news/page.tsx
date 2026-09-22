import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { NEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "News | Gold Star Dogs",
  description: "Specials, seasons, and stand announcements from Gold Star Dogs.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "56px 20px 48px" }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 12px", fontSize: 14 }}>
            FRESH FROM THE GRILL
          </p>
          <h1 style={{ fontSize: "clamp(52px,8vw,104px)", lineHeight: 0.95 }}>NEWS.</h1>
          <p style={{ maxWidth: "62ch", fontSize: 18 }}>Specials, seasons, and announcements. Short posts, no fluff, all mustard.</p>
        </Reveal>
        <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginTop: 24 }}>
          {NEWS.map((n) => (
            <Link key={n.slug} href={`/news/${n.slug}`} className="card" style={{ textDecoration: "none", color: "inherit", borderTop: "6px solid var(--mustard)" }}>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 800, letterSpacing: ".15em", color: "var(--chili)" }}>
                {n.tag.toUpperCase()} · {n.date.toUpperCase()}
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 26, margin: "8px 0" }}>{n.title.toUpperCase()}</p>
              <p style={{ margin: "0 0 8px" }}>{n.excerpt}</p>
              <p style={{ margin: 0, fontWeight: 700 }}>Read more →</p>
            </Link>
          ))}
        </RevealGroup>
      </main>
      <Footer />
    </>
  );
}
