import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import { SpecialBanner, Stars, MenuCard } from "@/components/Bits";
import { Counter } from "@/components/Counters";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Story, Footer } from "@/components/Sections";
import { MENU } from "@/lib/menu";
import { REVIEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gold Star Dogs — Classic Hot Dogs in the Chicago Loop",
  description: "Snappy all-beef dogs, loaded specials, shakes and catering. 123 W Madison St, Chicago. Order ahead for pickup.",
};

const FEATURED = ["chili-cheese", "elote", "classic"];
const featuredItems = MENU.flatMap((g) => g.items).filter((i) => FEATURED.includes(i.id));

const STATS = [
  { n: <Counter to={10} />, l: "years on Madison" },
  { n: <Counter to={20} />, l: "menu items" },
  { n: <Counter to={4.8} decimals={1} suffix="★" />, l: "from 2,300+ reviews" },
  { n: <Counter to={500} suffix="+" />, l: "events catered" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <div className="wrap" style={{ padding: "32px 20px 0" }}>
          <Reveal>
            <SpecialBanner />
          </Reveal>
        </div>

        <section className="wrap" style={{ padding: "48px 20px" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>HOUSE FAVORITES</h2>
            <p>
              Three dogs that built the line out the door. <Link href="/menu">See the full menu →</Link>
            </p>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginTop: 20 }}>
            {featuredItems.map((i) => (
              <MenuCard key={i.id} item={i} />
            ))}
          </RevealGroup>
        </section>

        <section style={{ background: "var(--ink)", color: "var(--paper)" }}>
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16, padding: "32px 20px", textAlign: "center" }}>
            {STATS.map((s) => (
              <div key={s.l}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 36, margin: 0, color: "var(--mustard)" }}>{s.n}</p>
                <p style={{ margin: "4px 0 0" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap" style={{ padding: "48px 20px" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>REGULARS TALK</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 20 }}>
            {REVIEWS.slice(0, 3).map((r) => (
              <article key={r.name + r.date} className="card">
                <Stars n={r.rating} />
                <p style={{ fontWeight: 700, margin: "8px 0 4px" }}>{r.title}</p>
                <p style={{ margin: "0 0 8px" }}>{r.text}</p>
                <p style={{ margin: 0, fontSize: 14 }}>
                  — {r.name} · {r.source}, {r.date}
                </p>
              </article>
            ))}
          </RevealGroup>
        </section>

        <section className="wrap" style={{ padding: "0 20px 48px" }}>
          <Reveal>
            <div className="card" style={{ background: "var(--chili)", color: "#fff", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <h2 style={{ margin: "0 0 8px" }}>FEEDING A CROWD?</h2>
                <p style={{ margin: 0 }}>Office lunches, backyard parties, weddings. Drop-off from 10 guests, cart from 50.</p>
              </div>
              <Link className="btn btn-secondary" href="/catering" style={{ marginLeft: "auto" }}>
                Plan catering
              </Link>
            </div>
          </Reveal>
        </section>

        <Reveal className="wrap" style={{ padding: "0 20px" }}>
          <Story />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
