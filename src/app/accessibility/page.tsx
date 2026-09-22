import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Accessibility | Gold Star Dogs",
  description: "Our accessibility commitments and the features built into this site.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 760 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>ACCESSIBILITY</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026</p>
          <p>Everyone deserves a hot dog. This site aims for WCAG 2.2 AA, and the stand itself keeps a step-free entrance, large-print menus on request, and staff who will read the whole board aloud without rushing you.</p>
          <h2>Built into this site</h2>
          <ul style={{ display: "grid", gap: 6 }}>
            <li>Full keyboard navigation with visible focus outlines on every control.</li>
            <li>All motion (marquees, reveals, counters, carousels) switches off under reduced-motion settings.</li>
            <li>Descriptive alt text on every photo and labeled form fields throughout ordering.</li>
            <li>Color is never the only signal: prices, tags, and errors also use text and shape.</li>
          </ul>
          <h2>Feedback</h2>
          <p>Found a barrier? Email <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a> with the page and what went wrong. Accessibility reports jump the queue, ahead of everything except the lunch rush.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
