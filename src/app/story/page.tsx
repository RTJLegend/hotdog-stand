import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { Reveal, RevealGroup, Wipe } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { TIMELINE, TEAM, PRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story | Gold Star Dogs",
  description: "From a used cart in 2016 to a Madison Street staple: the story, timeline, team and press behind Gold Star Dogs.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>TWO FRIENDS, ONE CART</h1>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 8 }}>
          <Reveal>
            <p style={{ maxWidth: "64ch" }}>
              Gold Star Dogs started in 2016 when friends Reuben Thomas John and Ahaan Verma bought a used hot dog cart with their
              savings and parked it outside the Loop farmers market. The pitch was simple: a Chicago dog built exactly
              the way Reuben&apos;s grandfather made it: steamed poppyseed bun, all-beef frank with a snap, and every topping
              in its right place. The cart sold out its first Saturday by 1pm, and most Saturdays after that.
            </p>
            <p style={{ maxWidth: "64ch" }}>
              In 2019 the stand at 123 W Madison opened with six stools and a bigger grill. The menu grew, the chili
              got its own pot, and the elote dog, invented for a slow Tuesday, became the thing people cross town
              for. Ten years in, the mustard hasn&apos;t changed. The line just got longer.
            </p>
          </Reveal>
          <Reveal>
            <div className="card" style={{ background: "var(--ink)", color: "var(--paper)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "0 0 12px", color: "var(--mustard)" }}>FAST FACTS</p>
              <p style={{ margin: "8px 0" }}><strong>Founded:</strong> 2016, Loop farmers market</p>
              <p style={{ margin: "8px 0" }}><strong>Owners:</strong> Reuben Thomas John and Ahaan Verma</p>
              <p style={{ margin: "8px 0" }}><strong>Stand:</strong> 123 W Madison St since 2019</p>
              <p style={{ margin: "8px 0" }}><strong>Menu:</strong> 20 items, chili made daily at 6am</p>
              <p style={{ margin: "8px 0 0" }}><strong>Claim to fame:</strong> People&apos;s Choice, West Loop Food Fest 2023</p>
            </div>
          </Reveal>
        </div>

        <Wipe ratio="16/8" style={{ marginTop: 28, border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
          <Image
            src="/images/grill.jpg"
            alt="Franks and sausages sizzling with steam on the grill"
            width={1920}
            height={1280}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        </Wipe>

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
            <Wipe ratio="16/8" style={{ marginTop: 16, border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/party.jpg"
                alt="Festival crowd with glowing food stalls at night"
                width={1920}
                height={1280}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </Wipe>
            <p style={{ fontSize: 14, marginTop: 8 }}>Festival crowds like this one, where the chili cheese took People&apos;s Choice in 2023.</p>
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
