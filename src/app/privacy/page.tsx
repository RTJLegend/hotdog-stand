import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Privacy Policy | Gold Star Dogs",
  description: "How Gold Star Dogs collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 760 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>PRIVACY POLICY</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026</p>
          <h2>What we collect</h2>
          <p>When you order ahead, we collect your name, phone number, order details, and pickup time. When you request catering, we collect your name, email, event date, headcount, and message. That is the whole list.</p>
          <h2>How we use it</h2>
          <p>We use your details to make your food, hold your pickup, and reply to your catering request. We do not sell your information, share it with advertisers, or add you to a marketing list you did not ask to join.</p>
          <h2>How long we keep it</h2>
          <p>Order logs are kept for 90 days for accounting, then deleted. Catering inquiries are kept for one year so repeat customers do not have to reintroduce themselves.</p>
          <h2>Cookies</h2>
          <p>We use only the technical cookies our hosting needs to serve the site. Details live in our <Link href="/cookies">cookie policy</Link>.</p>
          <h2>Children</h2>
          <p>This site is for general audiences. We do not knowingly collect information from children under 13.</p>
          <h2>Contact</h2>
          <p>Questions about your data? Email <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a> and a human (usually Ahaan) will reply within five business days.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
