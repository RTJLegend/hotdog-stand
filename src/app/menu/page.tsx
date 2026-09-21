import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { MenuCard } from "@/components/Bits";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { MENU, SPECIALS } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu — Gold Star Dogs",
  description: "Classics, loaded dogs, garden options, sides, shakes and weekly specials at Gold Star Dogs, Chicago Loop.",
};

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <h1 style={{ fontSize: "clamp(44px,6vw,76px)" }}>MENU BOARD</h1>
          <p style={{ maxWidth: "62ch" }}>
            Everything is made to order on steamed poppyseed buns. Franks are all-beef with natural casings from a
            fourth-generation Chicago sausage maker. Legend: <strong>veg</strong> vegetarian · <strong>gf</strong>{" "}
            gluten-free or adaptable · <strong>spicy</strong> brings heat.
          </p>
        </Reveal>

        {MENU.map((g) => (
          <section key={g.group} style={{ marginTop: 40 }}>
            <Reveal>
              <h2>{g.group.toUpperCase()}</h2>
              <p style={{ marginTop: 0 }}>{g.blurb}</p>
            </Reveal>
            <RevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
              {g.items.map((it) => (
                <MenuCard key={it.id} item={it} />
              ))}
            </RevealGroup>
          </section>
        ))}

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <h2>WEEKLY SPECIALS</h2>
            <div className="card" style={{ marginTop: 12 }}>
              {SPECIALS.map((s) => (
                <p key={s.day} style={{ margin: "8px 0" }}>
                  <strong>{DAY_NAMES[s.day]}:</strong> {s.name} — {s.desc}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Link className="btn" href="/order">
              Order ahead
            </Link>
            <Link className="btn btn-secondary" href="/catering">
              Feed a crowd
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
