import Link from "next/link";
import { SITE } from "@/lib/site";

export function FindUs() {
  return (
    <section
      id="find-us"
      className="wrap"
      style={{ padding: "48px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}
    >
      <div>
        <h2>FIND US</h2>
        <p>{SITE.address}</p>
        <p>{SITE.phone}</p>
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
        <p style={{ marginTop: 16 }}>
          <Link href="/visit">Parking, transit & FAQs →</Link>
        </p>
      </div>
      <div
        className="card"
        style={{ minHeight: 240, display: "grid", placeItems: "center", textAlign: "center" }}
        role="img"
        aria-label="Map showing the stand on W Madison St"
      >
        [map — Madison & Clark, Loop]
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="wrap" style={{ padding: "48px 20px" }}>
      <h2>OUR STORY</h2>
      <p style={{ maxWidth: "62ch" }}>
        Two brothers, one used cart, and their grandfather&apos;s Chicago dog build. Ten years later the grill is
        bigger but the mustard hasn&apos;t changed. <Link href="/story">Read the full story →</Link>
      </p>
    </section>
  );
}

const EXPLORE = [
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our Story" },
  { href: "/visit", label: "Visit Us" },
  { href: "/order", label: "Order Ahead" },
  { href: "/catering", label: "Catering" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "2px solid var(--ink)", marginTop: 32 }}>
      <div
        className="wrap"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, padding: "32px 20px" }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 8px" }}>★ {SITE.brand}</p>
          <p style={{ margin: 0 }}>{SITE.tagline}</p>
        </div>
        <nav aria-label="Explore">
          <p style={{ fontWeight: 700, margin: "0 0 8px" }}>Explore</p>
          {EXPLORE.map((l) => (
            <p key={l.href} style={{ margin: "4px 0" }}>
              <Link href={l.href}>{l.label}</Link>
            </p>
          ))}
        </nav>
        <div>
          <p style={{ fontWeight: 700, margin: "0 0 8px" }}>Visit</p>
          <p style={{ margin: "4px 0" }}>{SITE.address}</p>
          <p style={{ margin: "4px 0" }}>{SITE.phone}</p>
          <p style={{ margin: "4px 0" }}>Mon–Thu 11–9 · Fri–Sat 11–11 · Sun 12–8</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--cream-line)" }}>
        <div className="wrap" style={{ display: "flex", gap: 16, padding: "12px 20px", flexWrap: "wrap", fontSize: 14 }}>
          <span>© 2026 {SITE.brand}</span>
          <span style={{ marginLeft: "auto" }}>Made with mustard in Chicago</span>
        </div>
      </div>
    </footer>
  );
}
