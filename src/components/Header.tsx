import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "var(--paper)",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 20px", flexWrap: "wrap" }}
      >
        <a
          href="#top"
          style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ink)", textDecoration: "none" }}
        >
          ★ {SITE.brand}
        </a>
        <nav style={{ marginLeft: "auto", display: "flex", gap: 16 }} aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#find-us">Find Us</a>
          <a href="#catering">Catering</a>
        </nav>
        <a className="btn" href="#order" style={{ padding: ".5rem 1rem" }}>
          Order Ahead
        </a>
      </div>
    </header>
  );
}
