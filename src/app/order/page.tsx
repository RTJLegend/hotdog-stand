import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import OrderBuilder from "@/components/OrderBuilder";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Order Ahead — Gold Star Dogs",
  description: "Order pickup ahead and skip the lunch line at Gold Star Dogs. Pay at the window.",
};

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>ORDER AHEAD</h1>
          <p style={{ maxWidth: "62ch" }}>Pickup only. Pay at the window. Ready in about 10 minutes — 20 at Friday lunch rush.</p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 24 }}>
          <OrderBuilder bare />
          <aside>
            <Reveal>
              <h2>HOW PICKUP WORKS</h2>
              <ol style={{ paddingLeft: 20, display: "grid", gap: 8 }}>
                <li>Build your order — dogs, toppings, quantity.</li>
                <li>Pick a pickup time at least 15 minutes out.</li>
                <li>Show your confirmation code at the register.</li>
                <li>Pay, grab napkins, done.</li>
              </ol>
              <div className="card" style={{ marginTop: 16 }}>
                <strong>Rush-hour honesty</strong>
                <p style={{ margin: "8px 0 0" }}>
                  Friday 11:30–1:30 runs about 20 minutes even for advance orders. Order before 11 for the fastest
                  turnaround. Feeding 10 or more? Use <Link href="/catering">catering</Link> instead — it gets its own
                  grill slot.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
