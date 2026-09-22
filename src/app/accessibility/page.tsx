import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Accessibility | Gold Star Dogs",
  description: "Our accessibility commitments, built-in features, known limits, and how to report a barrier.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 800 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>ACCESSIBILITY</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026</p>
          <p>Everyone deserves a hot dog. This statement covers the website and the physical stand, aiming at WCAG 2.2 level AA for digital content and equivalent hospitality in person.</p>

          <h2>1. Our commitment and standard</h2>
          <p>We design to WCAG 2.2 AA success criteria (perceivable, operable, understandable, robust) and review the site against that bar at least twice a year and after every major redesign. Where a criterion cannot be met in a component, this page says so below with a workaround, because silence about a gap is itself a barrier.</p>

          <h2>2. Built into this site</h2>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Keyboard:</strong> every control (menus, filters, carousel, accordion, forms, map links) is reachable and operable by keyboard, with a visible focus outline that meets 3:1 contrast against adjacent colors.</li>
            <li><strong>Reduced motion:</strong> a single media query disables marquees, reveals, counters, parallax, floats, and transitions for users who request reduced motion. Auto-advance on the review carousel also stops.</li>
            <li><strong>Text and contrast:</strong> body text targets 7:1 contrast on the paper background; large display type targets at least 4.5:1. Text scales to 200 percent without breaking layout or hiding controls.</li>
            <li><strong>Meaning beyond color:</strong> prices, dietary tags, allergen badges, errors, and ratings always pair color with text or shape, so nothing depends on color vision alone.</li>
            <li><strong>Forms:</strong> every field has a visible label, errors are announced with alert roles, and confirmation codes are shown as plain text that can be copied, dictated, or screenshotted.</li>
            <li><strong>Images and media:</strong> every photo carries descriptive alt text; decorative graphics are hidden from assistive tech. No content autoplays sound or video anywhere.</li>
            <li><strong>Structure:</strong> one level-one heading per page, logical heading order, landmark header/main/footer regions, and a skip-friendly layout with no keyboard traps.</li>
            <li><strong>Touch and pointer:</strong> targets meet 24px minimums (44px for primary actions), drag interactions (carousel swipe, 3D spin where present) always have button equivalents, and nothing requires multi-touch gestures.</li>
          </ul>

          <h2>3. Known limitations and workarounds</h2>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Embedded map:</strong> the OpenStreetMap frame is a third-party widget whose internal keyboard behavior we do not control. Workaround: the address, hours, and one-tap Google Maps and Apple Maps directions buttons beside it provide the same information without touching the frame.</li>
            <li><strong>PDF-free zone:</strong> we publish no PDF menus or documents, so there are no untagged PDFs to encounter. If we ever add one, it will be tagged or replaced with HTML.</li>
            <li><strong>Older browsers:</strong> very old browsers may miss decorative animation but keep full content and function, since content never depends on animation libraries loading.</li>
          </ul>

          <h2>4. The physical stand</h2>
          <p>Step-free entrance, counter at accessible height on request (staff will come to you), large-print menus on request, and staff trained to read the whole board aloud without rushing. Service animals are welcome. If the lunch line looks daunting, order ahead and we will bring the tray to the door.</p>

          <h2>5. Feedback, response time, and review cadence</h2>
          <p>Found a barrier? Email <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a> with the page, your browser or assistive tech, and what went wrong. Accessibility reports jump the queue: acknowledgment within two business days, substantive reply within ten. This statement is reviewed every September and after each redesign, with the date above as proof.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
