import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Privacy Policy | Gold Star Dogs",
  description: "How Gold Star Dogs collects, uses, retains, and protects your information, and the rights you hold.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 800 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>PRIVACY POLICY</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026. This policy explains what we collect, why we collect it, how long we keep it, who sees it, and what you can do about it.</p>

          <h2>1. Who we are</h2>
          <p>Gold Star Dogs (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates the hot dog stand at 123 W Madison St, Chicago, IL 60602 and this website. For privacy purposes we act as the data controller for information you submit through order and catering forms. Contact: <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a>, (312) 555-0100.</p>

          <h2>2. Information we collect</h2>
          <p>We collect only what the business needs to function. The categories are:</p>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Identifiers you provide:</strong> name and phone number (order-ahead form); name, email address, event date, headcount, and message (catering form).</li>
            <li><strong>Transaction details:</strong> items ordered, quantities, toppings, pickup times, and confirmation codes.</li>
            <li><strong>Communications:</strong> emails you send us, including review submissions and privacy requests, with their contents and metadata.</li>
            <li><strong>Technical data:</strong> basic server logs our hosting provider generates to keep the site running (IP address, timestamps, requested pages, error traces). We do not run analytics beacons, advertising pixels, fingerprinting scripts, or cross-site trackers.</li>
          </ul>
          <p>We do not collect payment card details online (you pay at the window), government identifiers, biometric data, precise geolocation, or health information. Please do not send such information through our forms.</p>

          <h2>3. Sources</h2>
          <p>Nearly everything comes directly from you when you fill in a form or email us. Technical data comes automatically from our hosting infrastructure when your browser requests a page.</p>

          <h2>4. Why we use your information</h2>
          <p>Each use maps to a purpose and a basis:</p>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Fulfilling orders:</strong> preparing your food, holding your pickup, and issuing confirmation codes. Basis: performance of the service you requested.</li>
            <li><strong>Replying to inquiries:</strong> answering catering requests, reviews, and questions. Basis: legitimate interest in running the business plus your consent implied by contacting us.</li>
            <li><strong>Record-keeping and accounting:</strong> reconciling the till and meeting tax obligations. Basis: legal obligation and legitimate interest.</li>
            <li><strong>Security and debugging:</strong> diagnosing errors and abuse. Basis: legitimate interest in a working site.</li>
          </ul>
          <p>We will never use your information for a materially different purpose without telling you first and, where the law requires it, obtaining fresh consent.</p>

          <h2>5. Who sees your information</h2>
          <p>Access is limited to the people who need it: counter staff fulfilling orders, the owners handling catering, and our hosting provider (Vercel), which processes data solely to serve the site under its own data processing terms. Our code repository host (GitHub) stores site code, never customer data. We do not sell personal information, rent mailing lists, or share data with advertisers, data brokers, or social networks. We disclose information only when required by law (for example, a valid subpoena or court order), to protect safety, or to enforce our <Link href="/terms">terms</Link>.</p>

          <h2>6. International transfers</h2>
          <p>Our hosting infrastructure may process data in data centers outside Illinois, including outside the United States. Where transfer rules apply, we rely on the safeguards our providers publish (such as standard contractual clauses) and on limiting transfers to what is strictly necessary to serve the site.</p>

          <h2>7. Retention schedule</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid var(--ink)" }}>
                <th style={{ padding: "8px 12px 8px 0" }}>Data</th>
                <th style={{ padding: "8px 12px 8px 0" }}>Kept for</th>
                <th style={{ padding: "8px 0" }}>Then</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--cream-line)" }}><td style={{ padding: "8px 12px 8px 0" }}><strong>Pickup orders</strong></td><td style={{ padding: "8px 12px 8px 0" }}>90 days</td><td style={{ padding: "8px 0" }}>Deleted</td></tr>
              <tr style={{ borderBottom: "1px solid var(--cream-line)" }}><td style={{ padding: "8px 12px 8px 0" }}><strong>Catering inquiries</strong></td><td style={{ padding: "8px 12px 8px 0" }}>1 year</td><td style={{ padding: "8px 0" }}>Deleted on request sooner</td></tr>
              <tr style={{ borderBottom: "1px solid var(--cream-line)" }}><td style={{ padding: "8px 12px 8px 0" }}><strong>Emails you send us</strong></td><td style={{ padding: "8px 12px 8px 0" }}>2 years</td><td style={{ padding: "8px 0" }}>Deleted</td></tr>
              <tr style={{ borderBottom: "1px solid var(--cream-line)" }}><td style={{ padding: "8px 12px 8px 0" }}><strong>Server logs</strong></td><td style={{ padding: "8px 12px 8px 0" }}>30 days (provider default)</td><td style={{ padding: "8px 0" }}>Rotated away</td></tr>
              <tr><td style={{ padding: "8px 12px 8px 0" }}><strong>Accounting records</strong></td><td style={{ padding: "8px 12px 8px 0" }}>7 years</td><td style={{ padding: "8px 0" }}>Required by tax law</td></tr>
            </tbody>
          </table>

          <h2>8. Security</h2>
          <p>We use encrypted connections (HTTPS) throughout, restrict back-office access to the owners, and collect as little as possible in the first place, which remains the best security measure available. No internet transmission is perfectly secure, so we cannot promise absolute protection, but we treat your details with the same care we give the chili recipe.</p>

          <h2>9. Your rights</h2>
          <p>Depending on where you live (including protections under laws such as the CCPA/CPRA and GDPR-style regimes), you may hold some or all of the following rights:</p>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Know and access:</strong> ask what we hold about you and get a copy.</li>
            <li><strong>Correct:</strong> fix inaccurate details (for example, a mistyped phone number on a catering quote).</li>
            <li><strong>Delete:</strong> ask us to erase your information, subject to legal retention duties such as tax records.</li>
            <li><strong>Portability:</strong> receive your information in a usable format.</li>
            <li><strong>Opt out of sale or sharing:</strong> moot in practice because we sell and share nothing, but the right stands.</li>
            <li><strong>Limit sensitive uses and withdraw consent:</strong> where consent was the basis, you may withdraw it at any time.</li>
            <li><strong>Non-discrimination:</strong> exercising any right will never cost you worse service or higher prices.</li>
          </ul>
          <p>To exercise any right, email <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a> with the subject &ldquo;Privacy request.&rdquo; We verify identity by matching the contact details you provide against the records in question, then respond within 45 days (plus a permitted extension we will tell you about if needed). Authorized agents may act for you with signed permission. If you disagree with our answer, you may appeal by replying, and you retain the right to complain to your attorney general or data protection authority.</p>

          <h2>10. Children</h2>
          <p>This site is for general audiences and is not directed at children under 13 (or the higher age your jurisdiction sets). We do not knowingly collect children&apos;s information. If you believe a child sent us details, contact us and we will delete them promptly.</p>

          <h2>11. Do Not Track and automated decisions</h2>
          <p>We honor browser Do Not Track and Global Privacy Control signals by default posture: since we run no tracking, there is nothing extra to switch off. We make no solely automated decisions with legal or similarly significant effects; a human reviews every order and quote.</p>

          <h2>12. Changes to this policy</h2>
          <p>When this policy changes materially, we update the date above and, for significant changes, post a notice on the homepage for at least 30 days. Continued use of the site after changes take effect constitutes acceptance.</p>

          <h2>13. Contact</h2>
          <p>Gold Star Dogs, 123 W Madison St, Chicago, IL 60602 · <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a> · (312) 555-0100. Privacy requests are answered within five business days for acknowledgment and 45 days for substance.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
