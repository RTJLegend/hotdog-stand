import type { Metadata } from "next";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Photo Credits | Gold Star Dogs",
  description: "Photographers behind the pictures on the Gold Star Dogs website.",
};

const CREDITS = [
  { file: "hero.jpg", subject: "Chicago dog with the city skyline", credit: "Jeremy Keith (adactio), CC BY 2.0, via Flickr" },
  { file: "classic.jpg", subject: "Classic dog with neon relish", credit: "Marit and Toomas Hinnosaar, CC BY 2.0, via Flickr" },
  { file: "chili.jpg", subject: "Chili cheese dog", credit: "jeffreyw, CC BY 2.0, via Flickr" },
  { file: "char.jpg", subject: "Char-grilled dog", credit: "ruffin_ready, CC BY 2.0, via Flickr" },
  { file: "elote.jpg", subject: "Loaded dogs with fries and slaw", credit: "jeffreyw, CC BY 2.0, via Flickr" },
  { file: "fries.jpg", subject: "Basket of fries", credit: "Fellipe Ditadi, via Wikimedia Commons" },
  { file: "shake.jpg", subject: "Diner chocolate shake", credit: "Via Wikimedia Commons contributors" },
  { file: "grill.jpg", subject: "Sausages on the grill", credit: "Dmitry Valberg photograph, via Wikimedia Commons" },
  { file: "party.jpg", subject: "Festival night market crowd", credit: "Via Wikimedia Commons contributors" },
  { file: "chicago.jpg", subject: "Chicago Theatre at night", credit: "Via Wikimedia Commons contributors" },
];

export default function CreditsPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 760 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>COLOPHON</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>PHOTO CREDITS</h1>
          <p>You found the hidden page. Every picture on this site, credited properly below. Menu slots marked as owner-supplied are being photographed as you read this.</p>
          <table style={{ borderCollapse: "collapse", width: "100%", marginTop: 16 }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
                <th style={{ padding: "8px 12px 8px 0" }}>File</th>
                <th style={{ padding: "8px 12px 8px 0" }}>Subject</th>
                <th style={{ padding: "8px 0" }}>Credit</th>
              </tr>
            </thead>
            <tbody>
              {CREDITS.map((c) => (
                <tr key={c.file} style={{ borderBottom: "1px solid var(--cream-line)" }}>
                  <td style={{ padding: "8px 12px 8px 0" }}><code>{c.file}</code></td>
                  <td style={{ padding: "8px 12px 8px 0" }}>{c.subject}</td>
                  <td style={{ padding: "8px 0" }}>{c.credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 14, marginTop: 16 }}>Menu item photos are being replaced with owner-supplied shots. This table updates as they land.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
