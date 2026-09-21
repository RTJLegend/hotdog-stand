import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { TIMELINE, TEAM, PRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story — Gold Star Dogs",
  description: "From a used cart in 2016 to a Madison Street staple: the story, timeline, team and press behind Gold Star Dogs.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>TWO BROTHERS, ONE CART</h1>
          <p style={{ maxWidth: "64ch" }}>
            Gold Star Dogs started in 2016 when brothers Marcus and Daryl Webb bought a used hot dog cart with their
            savings and parked it outside the Loop farmers market. The pitch was simple: a Chicago dog built exactly
            the way their grandfather made it — steamed poppyseed bun, all-beef frank with a snap, and every topping
            in its right place. The cart sold out its first Saturday by 1pm, and most Saturdays after that.
          </p>
          <p style={{ maxWidth: "64ch" }}>
            In 2019 the stand at 123 W Madison opened with six stools and a bigger grill. The menu grew, the chili
            got its own pot, and the elote dog — invented for a slow Tuesday — became the thing people cross town
            for. Ten years in, the mustard hasn&apos;t changed. The line just got longer.
          </p>
        </Reveal>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <h2>TIMELINE</h2>
          </Reveal>
          <div style={{ marginTop: 16, borderLeft: "4px solid var(--chili)", paddingLeft: 20, display: "grid", gap: 20 }}>
            {TIMELINE.map((t) => (
              <Reveal key={t.year}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 28, margin: 0, color: "var(--chili)" }}>{t.year}</p>
                <p style={{ fontWeight: 700, margin: "4px 0" }}>{t.title}</p>
                <p style={{ margin: 0, maxWidth: "60ch" }}>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <h2>THE CREW</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 16 }}>
            {TEAM.map((m) => (
              <article key={m.name} className="card">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--mustard)",
                    border: "2px solid var(--ink)",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                  }}
                  aria-hidden="true"
                >
                  {m.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <p style={{ fontWeight: 700, margin: "12px 0 2px" }}>{m.name}</p>
                <p style={{ margin: "0 0 8px", fontSize: 14, color: "var(--chili)", fontWeight: 700 }}>{m.role}</p>
                <p style={{ margin: 0 }}>{m.text}</p>
              </article>
            ))}
          </RevealGroup>
        </section>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <h2>PRESS & PRAISE</h2>
            <div className="card" style={{ marginTop: 12 }}>
              {PRESS.map((p) => (
                <p key={p.outlet} style={{ margin: "8px 0" }}>
                  <strong>{p.outlet}:</strong> {p.text}
                </p>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              <Link className="btn" href="/menu">
                Taste the story
              </Link>
              <Link className="btn btn-secondary" href="/visit">
                Come say hi
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
