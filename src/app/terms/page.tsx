import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Terms and Conditions | Gold Star Dogs",
  description: "The ground rules for ordering, catering, gift cards, liability, and using the Gold Star Dogs website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 800 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>TERMS AND CONDITIONS</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026. By using this site or buying from the stand, you agree to these terms. If you do not agree, please order elsewhere (the place across the street is fine, we will not tell).</p>

          <h2>1. Definitions</h2>
          <p>&ldquo;We&rdquo; means Gold Star Dogs of 123 W Madison St, Chicago, IL 60602. &ldquo;You&rdquo; means the customer. &ldquo;Site&rdquo; means this website. &ldquo;Order&rdquo; means a pickup order placed here. &ldquo;Event&rdquo; means a catered engagement.</p>

          <h2>2. Eligibility and accounts</h2>
          <p>There are no accounts and no age gate for browsing. Orders may be placed by anyone old enough to carry a tray. Catering contracts must be signed by someone 18 or older with authority to bind the client.</p>

          <h2>3. Ordering ahead</h2>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Offer and acceptance:</strong> submitting the form is your offer. Our confirmation screen (with code) is our acceptance. No code, no order.</li>
            <li><strong>Pickup only:</strong> we do not deliver and use no delivery platforms. Pickup is at the register inside the stand.</li>
            <li><strong>Payment:</strong> you pay at the window by card or cash. Online prepayment is not accepted, so your card details never touch our systems.</li>
            <li><strong>Pickup window:</strong> confirmation codes hold your food for 30 minutes past the chosen time. After that, it joins the walk-up line and finds a new home, and you are not charged.</li>
            <li><strong>Changes and cancellations:</strong> call (312) 555-0100 at least 15 minutes before pickup to change or cancel, free of charge. Inside 15 minutes we will try, but the grill may have already spoken.</li>
            <li><strong>Large pickup orders:</strong> 10 or more of anything is a catering inquiry in disguise. We may rebook it as catering (with your agreement) so it gets its own grill slot.</li>
          </ul>

          <h2>4. Catering</h2>
          <ul style={{ display: "grid", gap: 6 }}>
            <li><strong>Quotes:</strong> the form sends a request, not a booking. A booking exists when we confirm in writing with date, headcount, package, and price.</li>
            <li><strong>Minimums:</strong> drop-off starts at 10 guests; the on-site cart starts at 50 guests and needs a parking spot plus one standard power outlet.</li>
            <li><strong>Deposit:</strong> 25 percent holds your date, refundable until 14 days before the event. Inside 14 days the deposit converts to a food credit for a future date within 6 months.</li>
            <li><strong>Final headcount:</strong> due 72 hours before the event. Counts may rise after that (we bring buffer) but cannot fall below the quoted minimum.</li>
            <li><strong>Cancellations by you:</strong> more than 14 days out, full deposit refund. 14 days to 72 hours, deposit becomes credit. Under 72 hours, 50 percent of the quoted total is due, since the food is already bought and prepped.</li>
            <li><strong>Cancellation by us:</strong> if we must cancel (equipment failure, emergency), you choose between a full refund and rebooking with 10 percent off. This has happened once since 2016.</li>
            <li><strong>Force majeure:</strong> neither side owes the other when blizzards, blackouts, floods, or other events beyond reasonable control make performance impossible. Deposits are refunded in full in that case.</li>
            <li><strong>On-site conduct:</strong> the crew needs safe access, water for handwashing setup, and a point person reachable by phone during the event.</li>
          </ul>

          <h2>5. Prices, menu accuracy, and allergens</h2>
          <p>Prices on this site are current to the best of our knowledge and can change when ingredient costs do. The board in the shop is always right if the two ever disagree. Photos show real food but lighting and garnish vary by day. Nutrition figures are estimates per serving, not laboratory analysis. Our kitchen handles wheat, milk, egg, soy, mustard, and celery, and shared fryers and surfaces mean traces can travel. Guests with severe allergies should talk to us in person before ordering so we can advise honestly, including telling you no when that is the safe answer.</p>

          <h2>6. Gift cards</h2>
          <p>Gift cards never expire and carry no dormancy fees, in line with applicable law. They are redeemable in store only, not transferable for cash except where the law requires it. Lost cards can be reissued with the original receipt; without it, the card is as gone as a dropped relish packet.</p>

          <h2>7. Website license and intellectual property</h2>
          <p>We grant you a personal, non-exclusive, non-transferable license to browse the site and place orders. The Gold Star Dogs name, star logo, menu text, and site design are ours (or our photographers&apos;, credited on our <Link href="/credits">credits page</Link>). You may not copy, scrape at abusive rates, reframe, or resell the site or its content. Reviews you email us may be quoted on the site with first name and last initial only, unless you ask otherwise.</p>

          <h2>8. Acceptable use</h2>
          <p>Do not submit false orders, probe the order API for fun, impersonate others, upload malicious content, or interfere with other visitors&apos; use. We may decline orders or block abusive traffic without notice, and we keep logs to prove it if needed.</p>

          <h2>9. Third-party links and embeds</h2>
          <p>Directions links open Google Maps and Apple Maps; the visit page embeds an OpenStreetMap frame. Those services apply their own terms and privacy rules once you leave our pages. We are not responsible for their content, routing choices, or uptime.</p>

          <h2>10. Disclaimers</h2>
          <p>The site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent the law allows. We do not warrant uninterrupted availability; the grill sometimes needs us more than the server does.</p>

          <h2>11. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, our total liability for any order is limited to the price you paid for it, and for any event to the amount you paid us for it. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, even if advised of the possibility. Some jurisdictions do not allow these limits, so they apply only as far as your local law permits.</p>

          <h2>12. Indemnification</h2>
          <p>You agree to indemnify and hold us harmless from claims arising out of your misuse of the site, your breach of these terms, or information you provided that turned out to be someone else&apos;s. We will notify you promptly of any such claim and let you participate in the defense at your expense.</p>

          <h2>13. Governing law and disputes</h2>
          <p>These terms are governed by the laws of Illinois, excluding conflict-of-law rules. Before filing anything, contact us so we can try to fix it like neighbors; most disputes end at this step. Unresolved disputes go to the state or federal courts located in Cook County, Illinois, and both sides consent to that venue. Nothing here limits small-claims remedies available to you.</p>

          <h2>14. Severability, waiver, and entire agreement</h2>
          <p>If any provision is found unenforceable, the rest stand, and the offending provision is rewritten to the minimum extent needed to make it enforceable. Our failure to enforce a provision once is not a waiver of it later. These terms, plus any written catering confirmation, are the entire agreement between us on these subjects.</p>

          <h2>15. Changes and contact</h2>
          <p>We may update these terms as the business changes. Material changes get a homepage notice for at least 30 days; the date above always shows the current version. Questions: Gold Star Dogs, 123 W Madison St, Chicago, IL 60602 · <a href="mailto:hello@goldstardogs.example">hello@goldstardogs.example</a> · (312) 555-0100.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
