import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import { Counter } from "@/components/Counters";
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

const NUMBERS = [
  { value: <Counter to={1.2} decimals={1} suffix="M+" />, label: "dogs served since 2016" },
  { value: <Counter to={34} />, label: "straight sellout Saturdays to start" },
  { value: <Counter to={6} suffix="AM" />, label: "chili o'clock, every morning" },
  { value: <Counter to={10} />, label: "years on Madison Street" },
];

const BUILD_STEPS = [
  "Steam the bun. Ninety seconds, no more.",
  "Frank in. Snappy side up.",
  "Mustard zigzag, end to end.",
  "Neon relish, one spoon.",
  "Onion plus tomato wedges.",
  "Pickle spear, sport peppers.",
  "Celery salt snow. Serve fast.",
];

const NOTES = [
  {
    name: "Reuben Thomas John",
    role: "Co-owner, Grill",
    text: "My grandfather never wrote the recipe down. He didn't need to. Mustard, relish, onion, tomato, pickle, peppers, salt, in that order. I spent one whole summer getting the celery salt shake right. Worth it.",
  },
  {
    name: "Ahaan Verma",
    role: "Co-owner, Ops",
    text: "People think I run the business side. Really I run the make-sure-Friday-doesn't-break-us side. The spreadsheet is just a grill schedule with extra steps.",
  },
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

        <section style={{ marginTop: 40 }}>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 16, textAlign: "center" }}>
            {NUMBERS.map((s) => (
              <div key={s.label} className="card">
                <p style={{ fontFamily: "var(--font-display)", fontSize: 40, margin: 0, color: "var(--chili)" }}>{s.value}</p>
                <p style={{ margin: "4px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <section style={{ background: "var(--ink)", color: "var(--paper)", borderRadius: "var(--radius)", marginTop: 40, position: "relative", overflow: "hidden" }}>
          <svg className="spin-slow" aria-hidden="true" viewBox="0 0 64 64" style={{ position: "absolute", right: -40, top: -40, width: 220, height: 220, opacity: 0.16 }}>
            <polygon
              points="32,4 39,23 59,23 43,35 49,55 32,43 15,55 21,35 5,23 25,23"
              fill="#FFB800"
            />
          </svg>
          <Reveal className="wrap" style={{ padding: "48px 20px", textAlign: "center", position: "relative" }}>
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
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>ANATOMY</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>THE CLASSIC, STEP BY STEP</h2>
            <p style={{ maxWidth: "62ch" }}>Seven steps, same order, every single time. This is the build the whole stand runs on.</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, marginTop: 16, alignItems: "start" }}>
            <Wipe ratio="4/5" style={{ border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/classic.jpg"
                alt="Classic Chicago dog with neon relish and mustard zigzag"
                width={1024}
                height={768}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </Wipe>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
              {BUILD_STEPS.map((step, i) => (
                <Reveal key={step} delay={Math.min(i * 60, 300)}>
                  <li className="card" style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chili)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section style={{ marginTop: 56 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>TIMELINE</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>HOW WE GOT HERE</h2>
          </Reveal>
          <div className="tl">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} className="tl-item" x={i % 2 === 0 ? -36 : 36} y={10}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 32, margin: 0, color: "var(--chili)" }}>{t.year}</p>
                <p style={{ fontWeight: 700, margin: "4px 0" }}>{t.title}</p>
                <p style={{ margin: 0, maxWidth: "52ch" }}>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 56 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>IN THEIR WORDS</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>NOTES FROM THE OWNERS</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginTop: 16 }}>
            {NOTES.map((n) => (
              <figure key={n.name} className="card" style={{ margin: 0, background: "var(--mustard)" }}>
                <blockquote style={{ margin: 0, fontSize: 18 }}>
                  <p style={{ marginTop: 0 }}>&ldquo;{n.text}&rdquo;</p>
                </blockquote>
                <figcaption style={{ fontWeight: 700 }}>
                  {n.name} <span style={{ fontWeight: 400 }}>· {n.role}</span>
                </figcaption>
              </figure>
            ))}
          </RevealGroup>
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
          </Reveal>
        </section>
      </main>

      <div style={{ marginTop: 8 }}>
        <Ticker items="★ TEN YEARS OF SNAP ★ PEOPLE'S CHOICE 2023 ★ 1.2M DOGS SERVED ★ CHILI AT 6AM ★ " />
      </div>

      <div className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <div className="card" style={{ background: "var(--chili)", color: "#fff", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: "0 0 8px" }}>COME TASTE TEN YEARS</h2>
              <p style={{ margin: 0 }}>123 W Madison St, Chicago. Open today until late.</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-secondary" href="/order">
                Order ahead
              </Link>
              <Link className="btn btn-secondary" href="/visit">
                Get directions
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <Footer />
    </>
  );
}
