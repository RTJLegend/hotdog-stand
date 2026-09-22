import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { ClubSignup } from "@/components/ClubSignup";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Gold Star Club | Gold Star Dogs",
  description: "Earn a star per dog, cash in ten for a free classic. Plus birthday shakes and double-star Mondays.",
};

const REWARDS = [
  { n: "1 star", t: "Per dog, side, or shake. Shown at the register, collected in seconds." },
  { n: "10 stars", t: "A free Classic Chicago, any day, no blackout trickery." },
  { n: "25 stars", t: "Gold status: free cheese or chili on everything for a month." },
  { n: "50 stars", t: "Your name Sharpied on the regulars board behind the register. Immortality, basically." },
];

const STEPS = [
  { n: "01", t: "Join below with your name and phone. Get a member number instantly." },
  { n: "02", t: "Show the number at the register. Stars land before your food does." },
  { n: "03", t: "Hit ten stars and eat free. Repeat until legendary." },
];

export default function ClubPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "56px 20px 48px" }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 12px", fontSize: 14 }}>
            LOYALTY
          </p>
          <h1 style={{ fontSize: "clamp(52px,8vw,104px)", lineHeight: 0.95 }}>GOLD STAR CLUB.</h1>
          <p style={{ maxWidth: "62ch", fontSize: 18 }}>
            One star per dog. Ten stars, one free classic. Plus a birthday shake and double-star Mondays, because
            regulars should eat like regulars.
          </p>
        </Reveal>

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>HOW IT WORKS</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
            {STEPS.map((s) => (
              <div key={s.n} className="card">
                <p style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--chili)", margin: 0 }}>{s.n}</p>
                <p style={{ margin: "8px 0 0" }}>{s.t}</p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>REWARDS LADDER</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
            {REWARDS.map((r) => (
              <div key={r.n} className="card" style={{ borderTop: "6px solid var(--mustard)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 28, margin: 0 }}>{r.n.toUpperCase()}</p>
                <p style={{ margin: "8px 0 0" }}>{r.t}</p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section style={{ marginTop: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32 }}>
            <div>
              <Reveal>
                <h2>JOIN FREE</h2>
                <p>No card, no app, no points expiring while you sleep. Stars never expire. One phone number per human.</p>
              </Reveal>
              <ClubSignup />
            </div>
            <Reveal>
              <div className="card" style={{ background: "var(--ink)", color: "var(--paper)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "0 0 12px", color: "var(--mustard)" }}>FINE PRINT, READABLE</p>
                <p style={{ margin: "8px 0" }}><strong>Double-star Mondays:</strong> every Monday, every item, automatic.</p>
                <p style={{ margin: "8px 0" }}><strong>Birthday shake:</strong> free shake in your birthday week. Tell us the week, we trust you.</p>
                <p style={{ margin: "8px 0" }}><strong>Catering counts:</strong> every $10 of catering earns a star.</p>
                <p style={{ margin: "8px 0 0" }}><strong>Leaving:</strong> text STOP any time and the number dies with dignity.</p>
              </div>
              <div style={{ marginTop: 16 }}>
                <Link className="btn btn-secondary" href="/menu">
                  Earn your first star
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
