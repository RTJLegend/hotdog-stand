import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Stars } from "@/components/Bits";
import { Meter } from "@/components/Counters";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { REVIEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reviews | Gold Star Dogs",
  description: "4.8 stars from 2,300-plus reviews. Read what regulars say about Gold Star Dogs.",
};

const BREAKDOWN = [
  { stars: 5, pct: 78 },
  { stars: 4, pct: 15 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>REGULARS TALK</h1>
          <p style={{ maxWidth: "62ch" }}>
            4.8 out of 5 across Google and Yelp, from more than 2,300 reviews. Here is a sample, unedited except for
            the occasional typo fix.
          </p>
        </Reveal>

        <Reveal>
          <div className="card" style={{ marginTop: 24, maxWidth: 560 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 48, margin: 0 }}>
              4.8<span style={{ fontSize: 20, color: "var(--chili)" }}> / 5</span>
            </p>
            {BREAKDOWN.map((b) => (
              <div key={b.stars} style={{ display: "flex", alignItems: "center", gap: 8, margin: "6px 0" }}>
                <span style={{ width: 28 }}>{b.stars}★</span>
                <div style={{ flex: 1, background: "var(--cream-line)", border: "1px solid var(--ink)", borderRadius: 999, height: 14, overflow: "hidden" }}>
                  <Meter pct={b.pct} />
                </div>
                <span style={{ width: 40, fontSize: 14 }}>{b.pct}%</span>
              </div>
            ))}
          </div>
        </Reveal>

        <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 32 }}>
          {REVIEWS.map((r) => (
            <article key={r.name + r.date} className="card">
              <Stars n={r.rating} />
              <p style={{ fontWeight: 700, margin: "8px 0 4px" }}>{r.title}</p>
              <p style={{ margin: "0 0 8px" }}>{r.text}</p>
              <p style={{ margin: 0, fontSize: 14 }}>
                {r.name} · {r.source}, {r.date}
              </p>
            </article>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="card" style={{ marginTop: 32, background: "var(--mustard)", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Eaten here? Tell the internet.</p>
            <a className="btn" href="mailto:hello@goldstardogs.example?subject=Review" style={{ marginLeft: "auto" }}>
              Email us a review
            </a>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link className="btn btn-secondary" href="/">
              Back home
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
