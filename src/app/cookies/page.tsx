import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Cookie Policy | Gold Star Dogs",
  description: "Every cookie and storage mechanism Gold Star Dogs uses, why it exists, and how to control it.",
};

const ROWS = [
  { name: "Hosting session affinity", provider: "Vercel (hosting)", purpose: "Keeps our hosting platform serving pages reliably during your visit", expiry: "Session (deleted when you close the browser)", type: "Strictly necessary" },
  { name: "Load balancing", provider: "Vercel (hosting)", purpose: "Routes your requests to a healthy server so pages load", expiry: "Session", type: "Strictly necessary" },
  { name: "Security checks", provider: "Vercel (hosting)", purpose: "Filters automated abuse and attacks before they reach the site", expiry: "Session to 30 days", type: "Strictly necessary" },
  { name: "Form drafts", provider: "Your own browser only", purpose: "Holds what you typed in an order form while the tab is open. Never transmitted until you press submit", expiry: "Until you leave or submit", type: "Functional" },
];

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 800 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>COOKIE POLICY</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026</p>
          <p>Short version: no advertising trackers, no analytics beacons, no social pixels, no cookie walls. The site works fully if you block everything, and this page lists every single storage mechanism so you can verify that claim.</p>

          <h2>1. What cookies and storage are</h2>
          <p>Cookies are small text files a site asks your browser to keep. Related mechanisms include browser local storage, session storage, and cache entries. The rules below cover all of them regardless of the technical label.</p>

          <h2>2. Our categories</h2>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Strictly necessary:</strong> required for pages to load and forms to submit. These need no consent and cannot be switched off without breaking the site.</li>
            <li><strong>Functional:</strong> conveniences such as holding an unsubmitted form draft in your own browser. Used only while you are on the page.</li>
            <li><strong>Analytics:</strong> none. We measure popularity the old way (the lunch line).</li>
            <li><strong>Advertising and cross-site tracking:</strong> none, and we contractually forbid any future provider from adding them without updating this page first.</li>
          </ul>

          <h2>3. Complete inventory</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
                <th style={{ padding: "8px 12px 8px 0" }}>Name</th>
                <th style={{ padding: "8px 12px 8px 0" }}>Provider and purpose</th>
                <th style={{ padding: "8px 0" }}>Expiry and type</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name} style={{ borderBottom: "1px solid var(--cream-line)" }}>
                  <td style={{ padding: "8px 12px 8px 0" }}><strong>{r.name}</strong><br /><span style={{ fontSize: 14 }}>{r.provider}</span></td>
                  <td style={{ padding: "8px 12px 8px 0" }}>{r.purpose}</td>
                  <td style={{ padding: "8px 0" }}>{r.expiry}<br /><span style={{ fontSize: 14 }}>{r.type}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 14 }}>Embedded third-party frames (the OpenStreetMap map on our visit page) may apply their own tile-caching under the tile provider&apos;s policy. Interacting with the map is optional and never required to order or contact us; the address and directions links work without loading it.</p>

          <h2>4. Consent and how to control cookies</h2>
          <p>Because we set nothing that needs consent, we show no banner. To control even the strictly necessary items:</p>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Block all cookies</strong> in your browser settings. The site keeps working; worst case, a page reloads once to find a fresh server.</li>
            <li><strong>Delete on exit</strong> using your browser&apos;s &ldquo;clear on quit&rdquo; options for a clean slate every visit.</li>
            <li><strong>Per-site rules</strong> let you allow this domain while blocking others.</li>
          </ul>
          <p>Browser instructions change often, so search your browser&apos;s help for &ldquo;cookies&rdquo; plus its name (Chrome, Firefox, Safari, Edge all document this in one page each).</p>

          <h2>5. Do Not Track and Global Privacy Control</h2>
          <p>We treat DNT and GPC signals as opt-outs of anything optional. Since nothing optional exists, every visit is already in the strictest posture. If that ever changes, this section will describe exactly what flips and how to flip it back.</p>

          <h2>6. Changes</h2>
          <p>If we ever add a cookie that needs consent, we will update this inventory first and add a consent choice before the cookie fires, never after. The date above always shows the current version.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
