import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import FitFinder from "@/components/FitFinder";
import { CateringPackages, CateringForm } from "@/components/Catering";
import { Reveal, RevealGroup, Wipe } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { OCCASIONS, CATERING_STEPS, REVIEWS } from "@/lib/content";
import { Stars } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Catering and Events | Gold Star Dogs",
  description: "Office lunches, backyard parties, weddings and game days. Drop-off from 10 guests, on-site cart from 50.",
};

const cateringReview = REVIEWS.find((r) => r.name === "Rob F.") ?? REVIEWS[0];

export default function CateringPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "56px 20px 48px" }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 12px", fontSize: 14 }}>
            CATERING AND EVENTS
          </p>
          <h1 style={{ fontSize: "clamp(52px,8vw,104px)", lineHeight: 0.95 }}>WE FEED CROWDS.</h1>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 24 }}>
          <Reveal>
            <p style={{ fontSize: 18, maxWidth: "56ch" }}>
              Half our business is feeding other people&apos;s parties. Drop-off spreads start at 10 guests. The
              on-site cart starts at 50 and needs a parking spot and an outlet. Every order gets labeled veg and
              gluten-free options. Nobody eats the mystery tray.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
              <a className="btn" href="#finder">
                Find your fit
              </a>
              <a className="btn btn-secondary" href="#quote">
                Get a quote
              </a>
            </div>
          </Reveal>
          <Wipe ratio="16/10" style={{ border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", alignSelf: "start" }}>
            <Image
              src="/images/elote.jpg"
              alt="Loaded dogs with fries and slaw, ready to serve"
              width={1024}
              height={680}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              priority
            />
          </Wipe>
        </div>
        <p style={{ fontSize: 14, marginTop: 8 }}>A Friday office drop-off, halfway unloaded.</p>

        <section id="finder" style={{ marginTop: 48, scrollMarginTop: 90 }}>
          <Reveal>
            <FitFinder />
          </Reveal>
        </section>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>PACKAGES</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>PICK YOUR FORMAT</h2>
          </Reveal>
          <div style={{ marginTop: 12 }}>
            <CateringPackages />
          </div>
        </section>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>OCCASIONS</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>GOOD FOR</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 12 }}>
            {OCCASIONS.map((o) => (
              <div key={o.name} className="card">
                <strong>{o.name}</strong>
                <p style={{ margin: "8px 0 0" }}>{o.text}</p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section style={{ background: "var(--mustard)", border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", marginTop: 48 }}>
          <Reveal style={{ padding: "32px 24px" }}>
            <Stars n={cateringReview.rating} />
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,3vw,32px)", lineHeight: 1.2, margin: "12px 0" }}>
              &ldquo;{cateringReview.text}&rdquo;
            </p>
            <p style={{ fontWeight: 700, margin: 0 }}>
              {cateringReview.name} · {cateringReview.source}, {cateringReview.date}
            </p>
          </Reveal>
        </section>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>PROCESS</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>HOW IT WORKS</h2>
            <ol style={{ paddingLeft: 20, display: "grid", gap: 12, marginTop: 12, maxWidth: "62ch" }}>
              {CATERING_STEPS.map((s, i) => (
                <li key={s.title}>
                  <strong>
                    {i + 1}. {s.title}:
                  </strong>{" "}
                  {s.text}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section id="quote" style={{ marginTop: 48, scrollMarginTop: 90 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>QUOTE</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>GET A QUOTE</h2>
            <p>We reply within one business day. For dates less than a week out, call us. We keep grill slots open.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 12 }}>
            <CateringForm />
            <Reveal>
              <div className="card" style={{ background: "var(--mustard)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "0 0 12px" }}>GOOD TO KNOW</p>
                <p style={{ margin: "8px 0" }}><strong>Fastest reply:</strong> call (312) 555-0100 between 9am and 4pm.</p>
                <p style={{ margin: "8px 0" }}><strong>Short notice:</strong> under a week? Call. We hold grill slots for exactly this.</p>
                <p style={{ margin: "8px 0" }}><strong>Tastings:</strong> planning a wedding? Come in for a tasting box first.</p>
                <p style={{ margin: "8px 0 0" }}><strong>Deposit:</strong> 25 percent to hold the date, refundable to 14 days out.</p>
              </div>
              <div style={{ marginTop: 16 }}>
                <Link className="btn btn-secondary" href="/reviews">
                  Read event reviews
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
