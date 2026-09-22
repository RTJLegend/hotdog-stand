import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import FaqList from "@/components/FaqList";
import { Reveal, RevealGroup, Wipe } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Us | Gold Star Dogs",
  description: "Hours, location, parking, transit and FAQs for Gold Star Dogs at 123 W Madison St, Chicago Loop.",
};

const ADDRESS = "123 W Madison St, Chicago, IL 60602";
const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-87.6398%2C41.8739%2C-87.6198%2C41.8899&layer=mapnik&marker=41.8819%2C-87.6298";

export default function VisitPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "56px 20px 48px" }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 12px", fontSize: 14 }}>
            VISIT US
          </p>
          <h1 style={{ fontSize: "clamp(52px,8vw,104px)", lineHeight: 0.95 }}>IN THE LOOP, ON MADISON.</h1>
          <p style={{ maxWidth: "62ch", fontSize: 18 }}>
            Six stools, a standing counter, and the fastest lunch line in the Loop. Most regulars take it to go.
            Millennium Park is a six-minute walk east.
          </p>
        </Reveal>

        <Reveal>
          <div
            style={{
              marginTop: 24,
              border: "2px solid var(--ink)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <iframe
              title="Map showing Gold Star Dogs at 123 W Madison St, Chicago"
              src={MAP_SRC}
              style={{ width: "100%", height: 420, border: 0, display: "block" }}
              loading="lazy"
            />
          </div>
          <p style={{ fontSize: 14, marginTop: 8 }}>
            Map data © OpenStreetMap contributors. Marker: Madison and Clark.
          </p>
        </Reveal>

        <RevealGroup
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 24, alignItems: "start" }}
        >
          <div className="card">
            <h2 style={{ marginTop: 0 }}>ADDRESS</h2>
            <p>{SITE.address}</p>
            <p>{SITE.phone}</p>
            <p style={{ marginBottom: 12 }}>{SITE.email}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a
                className="btn btn-secondary"
                style={{ padding: ".5rem 1rem" }}
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
              <a
                className="btn btn-secondary"
                style={{ padding: ".5rem 1rem" }}
                href={`https://maps.apple.com/?daddr=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noreferrer"
              >
                Apple Maps
              </a>
            </div>
          </div>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>HOURS</h2>
            <table>
              <tbody>
                {SITE.hours.map((h) => (
                  <tr key={h.days}>
                    <td style={{ paddingRight: 16 }}>
                      <strong>{h.days}</strong>
                    </td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginBottom: 0, fontSize: 14 }}>Closed Thanksgiving, Christmas, and the morning of the Shamrock Shuffle.</p>
          </div>
          <div>
            <Wipe ratio="3/4" style={{ border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", minHeight: 300 }}>
              <Image
                src="/images/chicago.jpg"
                alt="The Chicago Theatre marquee glowing at night, two blocks from the stand"
                width={1280}
                height={1920}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </Wipe>
            <p style={{ fontSize: 14, marginTop: 8 }}>The Loop at night. We are a two-block walk from the Theatre.</p>
          </div>
        </RevealGroup>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>TRANSIT</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>GETTING HERE</h2>
          </Reveal>
          <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
            <div className="card">
              <strong>On foot and by L</strong>
              <p style={{ margin: "8px 0 0" }}>Two blocks from the Clark/Lake Blue Line and the Harold Washington Library Red Line stop. Follow the smell of celery salt.</p>
            </div>
            <div className="card">
              <strong>Parking</strong>
              <p style={{ margin: "8px 0 0" }}>Validated 30 minutes at the Adams and Wabash garage with any purchase. Street meters on Madison turn over fast.</p>
            </div>
            <div className="card">
              <strong>Bikes</strong>
              <p style={{ margin: "8px 0 0" }}>Rack right outside the door plus a Divvy station across the street at Madison and Dearborn.</p>
            </div>
          </RevealGroup>
        </section>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>GOOD TO KNOW</h2>
          </Reveal>
          <FaqList />
        </section>

        <Reveal>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Link className="btn" href="/order">
              Order ahead
            </Link>
            <Link className="btn btn-secondary" href="/menu">
              Browse the menu
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
