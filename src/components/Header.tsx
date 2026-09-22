import Link from "next/link";
import { LogoLockup } from "@/components/Logo";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our Story" },
  { href: "/visit", label: "Visit Us" },
  { href: "/catering", label: "Catering" },
];

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
        <Link
          href="/"
          style={{ color: "var(--ink)", textDecoration: "none" }}
          aria-label="Gold Star Dogs home"
        >
          <LogoLockup />
        </Link>
        <nav style={{ marginLeft: "auto", display: "flex", gap: 16, flexWrap: "wrap" }} aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/reviews">Reviews</Link>
        </nav>
        <Link className="btn" href="/order" style={{ padding: ".5rem 1rem" }}>
          Order Ahead
        </Link>
      </div>
    </header>
  );
}
