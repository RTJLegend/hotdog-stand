import Link from "next/link";
import { SITE } from "@/lib/site";
import { LogoLockup } from "@/components/Logo";

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
  { href: "/reviews", label: "Reviews" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "2px solid var(--ink)", marginTop: 32 }}>
      <div
        className="wrap"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, padding: "32px 20px" }}
      >
        <div>
          <LogoLockup compact />
          <p style={{ margin: "8px 0 0" }}>{SITE.tagline}</p>
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
          <nav aria-label="Legal" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
          <span style={{ marginLeft: "auto" }}>Made with mustard in Chicago</span>
        </div>
      </div>
    </footer>
  );
}
