import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Terms and Conditions | Gold Star Dogs",
  description: "The ground rules for ordering, catering, and using the Gold Star Dogs website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px", maxWidth: 760 }}>
        <Reveal>
          <p style={{ fontWeight: 800, letterSpacing: ".3em", color: "var(--chili)", margin: "0 0 8px", fontSize: 14 }}>LEGAL</p>
          <h1 style={{ fontSize: "clamp(40px,6vw,68px)" }}>TERMS AND CONDITIONS</h1>
          <p style={{ fontSize: 14 }}>Last updated: September 2026</p>
          <h2>Ordering ahead</h2>
          <p>Online orders are for pickup only at 123 W Madison St, Chicago. You pay at the window. Your confirmation code holds your order for 30 minutes past your pickup time, then it joins the walk-up line and finds a new home.</p>
          <h2>Catering</h2>
          <p>Drop-off catering starts at 10 guests. The on-site cart starts at 50 guests and needs a parking spot plus one power outlet. A 25 percent deposit holds your date and is refundable until 14 days before the event.</p>
          <h2>Prices and menu</h2>
          <p>Prices on this site are current to the best of our knowledge and can change when ingredient costs do. The board in the shop is always right if the two ever disagree.</p>
          <h2>Gift cards</h2>
          <p>Gift cards never expire and are redeemable in store only. Lost cards can be reissued with the original receipt.</p>
          <h2>Photos and credits</h2>
          <p>Menu photography credits live on our <Link href="/credits">credits page</Link>, which also lists the photographers whose work appears across the site.</p>
          <h2>House rules</h2>
          <p>Be kind to the crew and to each other. Ketchup on a classic Chicago dog is legal but will earn you a look. Management reserves the right to refuse service to anyone harassing staff or guests.</p>
          <h2>Liability</h2>
          <p>Our liability for any order is limited to the price you paid for it. Nothing here limits rights you hold under Illinois consumer law.</p>
          <h2>Changes</h2>
          <p>We may update these terms as the business changes. The date at the top always shows the current version.</p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
