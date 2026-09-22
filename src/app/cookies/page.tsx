import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Cookie Policy | Gold Star Dogs",
  description: "The minimal cookies Gold Star Dogs uses and how to control them.",
};

const ROWS = [
  { name: "Hosting session", purpose: "Keeps our hosting platform serving pages reliably", expiry: "Session" },
  { name: "Load balancing", purpose: "Routes your requests to a healthy server", expiry: "Session" },
  { name: "Form drafts", purpose: "Stored only in your own browser while you type an order (never sent until you submit)", expiry: "Until you leave" },
];

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 760 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>COOKIE POLICY</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026</p>
          <p>Short version: no ad trackers, no analytics beacons, no cookie walls. The site works fine if you block everything.</p>
          <h2>What we set</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
                <th style={{ padding: "8px 12px 8px 0" }}>Cookie</th>
                <th style={{ padding: "8px 12px 8px 0" }}>Purpose</th>
                <th style={{ padding: "8px 0" }}>Expiry</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name} style={{ borderBottom: "1px solid var(--cream-line)" }}>
                  <td style={{ padding: "8px 12px 8px 0" }}><strong>{r.name}</strong></td>
                  <td style={{ padding: "8px 12px 8px 0" }}>{r.purpose}</td>
                  <td style={{ padding: "8px 0" }}>{r.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>How to control cookies</h2>
          <p>Use your browser settings to block or delete cookies. The menu, ordering, and catering forms keep working. If a feature ever needs a cookie to function, we will say so on the spot instead of burying it here.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
