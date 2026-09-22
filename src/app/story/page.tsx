import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { Reveal, RevealGroup, Wipe } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { TIMELINE, TEAM, PRESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story | Gold Star Dogs",
  description: "From a used cart in 2016 to a Madison Street staple: the story, timeline, team and press behind Gold Star Dogs.",
};

const BELIEFS = [
  { n: "01", title: "Steam the bun, always", text: "A cold bun is a broken promise. The steamer runs from open to close, no exceptions." },
  { n: "02", title: "Order matters", text: "Mustard first, relish second, sport peppers where you can see them. Toppings are architecture." },
  { n: "03", title: "Chili at 6am or not at all", text: "Big Al starts the pot before sunrise. Day-old chili does not exist here." },
  { n: "04", title: "Nobody eats the mystery tray", text: "Every order gets labeled veg and gluten-free options. Always." },
  { n: "05", title: "Staff the rush like it matters", text: "Friday lunch gets the full crew. The line moves fast because we plan for it." },
];

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "56px 20px 48px" }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 12px", fontSize: 14 }}>
            OUR STORY
          </p>
          <h1 style={{ fontSize: "clamp(52px,8vw,104px)", lineHeight: 0.95 }}>TEN YEARS OF SNAP.</h1>
          <p style={{ fontSize: 14, marginTop: 12 }}>Words: Reuben Thomas John · 4 min read</p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 24 }}>
          <Reveal>
            <p className="dropcap" style={{ maxWidth: "64ch", fontSize: 18 }}>
              Gold Star Dogs started in 2016 when friends Reuben Thomas John and Ahaan Verma bought a used hot dog
              cart with their savings and parked it outside the Loop farmers market. The pitch was simple: a Chicago
              dog built exactly the way Reuben&apos;s grandfather made it. Steamed poppyseed bun, all-beef frank with
              a snap, and every topping in its right place. The cart sold out its first Saturday by 1pm, and most
              Saturdays after that.
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

        <Wipe ratio="21/9" style={{ marginTop: 32, border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
          <Image
            src="/images/grill.jpg"
            alt="Franks and sausages sizzling with steam on the grill"
            width={1920}
            height={1280}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        </Wipe>

        <section style={{ background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--radius)", marginTop: 40 }}>
          <Reveal className="wrap" style={{ padding: "48px 20px", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.15, margin: 0, textWrap: "pretty" }}>
              &ldquo;A hot dog is a promise: snap, steam, and everything in its right place.&rdquo;
            </p>
            <p style={{ color: "var(--mustard)", fontWeight: 700, margin: "16px 0 0" }}>Reuben Thomas John, co-owner</p>
          </Reveal>
        </section>

        <section style={{ marginTop: 56 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>WHAT WE BELIEVE</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>FIVE RULES, NO EXCEPTIONS</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 16 }}>
            {BELIEFS.map((b) => (
              <div key={b.n} className="card">
                <p style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--chili)", margin: 0 }}>{b.n}</p>
                <p style={{ fontWeight: 700, margin: "8px 0 4px" }}>{b.title}</p>
                <p style={{ margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section style={{ marginTop: 56 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>TIMELINE</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>HOW WE GOT HERE</h2>
          </Reveal>
          <div className="tl">
            {TIMELINE.map((t) => (
              <Reveal key={t.year} className="tl-item">
                <p style={{ fontFamily: "var(--font-display)", fontSize: 32, margin: 0, color: "var(--chili)" }}>{t.year}</p>
                <p style={{ fontWeight: 700, margin: "4px 0" }}>{t.title}</p>
                <p style={{ margin: 0, maxWidth: "52ch" }}>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 56 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>THE CREW</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>FOUR PEOPLE, ONE GRILL</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 16 }}>
            {TEAM.map((m) => (
              <article key={m.name} className="card">
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--mustard)",
                    border: "2px solid var(--ink)",
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                  }}
                  aria-hidden="true"
                >
                  {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <p style={{ fontWeight: 700, margin: "12px 0 2px", fontSize: 18 }}>{m.name}</p>
                <p style={{ margin: "0 0 8px", fontSize: 14, color: "var(--chili)", fontWeight: 700 }}>{m.role}</p>
                <p style={{ margin: 0 }}>{m.text}</p>
              </article>
            ))}
          </RevealGroup>
        </section>

        <section style={{ marginTop: 56 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>PRESS AND PRAISE</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>NICE THINGS, SAID LOUDLY</h2>
            <div className="card" style={{ marginTop: 16 }}>
              {PRESS.map((p) => (
                <p key={p.outlet} style={{ margin: "8px 0" }}>
                  <strong>{p.outlet}:</strong> {p.text}
                </p>
              ))}
            </div>
            <Wipe ratio="21/9" style={{ marginTop: 16, border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
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
