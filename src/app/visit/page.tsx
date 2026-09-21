import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { FAQS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Us — Gold Star Dogs",
  description: "Hours, location, parking, transit and FAQs for Gold Star Dogs at 123 W Madison St, Chicago Loop.",
};

export default function VisitPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>VISIT US</h1>
          <p style={{ maxWidth: "62ch" }}>
            Six stools, a standing counter, and the fastest lunch line in the Loop. Most regulars take it to go —
            Millennium Park is a six-minute walk east.
          </p>
        </Reveal>

        <RevealGroup
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 24 }}
        >
          <div className="card">
            <h2 style={{ marginTop: 0 }}>ADDRESS</h2>
            <p>{SITE.address}</p>
            <p>{SITE.phone}</p>
            <p style={{ marginBottom: 0 }}>{SITE.email}</p>
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
          <div
            className="card"
            style={{ minHeight: 220, display: "grid", placeItems: "center", textAlign: "center" }}
            role="img"
            aria-label="Map showing the stand at Madison and Clark"
          >
            [map — Madison & Clark, Loop]
          </div>
        </RevealGroup>

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>GETTING HERE</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
              <div className="card">
                <strong>On foot</strong>
                <p style={{ margin: "8px 0 0" }}>Two blocks from the Clark/Lake Blue Line and the Harold Washington Library Red Line stop.</p>
              </div>
              <div className="card">
                <strong>Parking</strong>
                <p style={{ margin: "8px 0 0" }}>Validated 30 minutes at the Adams & Wabash garage with any purchase. Street meters on Madison turn over fast.</p>
              </div>
              <div className="card">
                <strong>Bikes</strong>
                <p style={{ margin: "8px 0 0" }}>Rack right outside the door plus a Divvy station across the street at Madison & Dearborn.</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section style={{ marginTop: 40 }}>
          <Reveal>
            <h2>GOOD TO KNOW</h2>
          </Reveal>
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            {FAQS.map((f) => (
              <Reveal key={f.q}>
                <details className="card">
                  <summary style={{ fontWeight: 700, cursor: "pointer" }}>{f.q}</summary>
                  <p style={{ margin: "8px 0 0" }}>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
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
