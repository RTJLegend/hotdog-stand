import type { Metadata } from "next";
import Header from "@/components/Header";
import { CateringPackages, CateringForm } from "@/components/Catering";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { OCCASIONS, CATERING_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Catering & Events — Gold Star Dogs",
  description: "Office lunches, backyard parties, weddings and game days. Drop-off from 10 guests, on-site cart from 50.",
};

export default function CateringPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>CATERING & EVENTS</h1>
          <p style={{ maxWidth: "64ch" }}>
            Half our business is feeding other people&apos;s parties. Drop-off spreads start at 10 guests; the
            on-site cart starts at 50 and needs a parking spot and an outlet. Every order gets labeled veg and
            gluten-free options — nobody eats the mystery tray.
          </p>
        </Reveal>

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>GOOD FOR</h2>
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

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>PACKAGES</h2>
          </Reveal>
          <div style={{ marginTop: 12 }}>
            <CateringPackages />
          </div>
        </section>

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>HOW IT WORKS</h2>
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

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>GET A QUOTE</h2>
            <p>We reply within one business day. For dates less than a week out, call — we keep grill slots open.</p>
          </Reveal>
          <div style={{ marginTop: 12 }}>
            <CateringForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
