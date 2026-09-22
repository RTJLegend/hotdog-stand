import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Reveal, Wipe } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { MENU, ALL_ITEMS, findItem } from "@/lib/menu";

export function generateStaticParams() {
  return ALL_ITEMS.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const item = findItem(id);
  if (!item) return { title: "Not found | Gold Star Dogs" };
  return {
    title: `${item.name} | Gold Star Dogs`,
    description: `${item.name} (${item.price}): ${item.desc}`,
  };
}

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = findItem(id);
  if (!item) notFound();

  const groupItems = MENU.find((g) => g.group === item.group)?.items.filter((i) => i.id !== item.id).slice(0, 3) ?? [];

  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <p style={{ margin: "0 0 8px" }}>
            <Link href="/menu">Menu</Link> / {item.group}
          </p>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)" }}>{item.name.toUpperCase()}</h1>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 8 }}>
          <div>
            {item.img ? (
              <Wipe ratio="4/3" style={{ border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
                <Image
                  src={item.img.src}
                  alt={item.img.alt}
                  width={item.img.w}
                  height={item.img.h}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  priority
                />
              </Wipe>
            ) : (
              <div className="card" style={{ aspectRatio: "4/3", display: "grid", placeItems: "center", textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 40 }}>★</span>
              </div>
            )}
            <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
              <Link className="btn" href={`/order?dog=${item.id}`}>
                Order this ahead
              </Link>
              <Link className="btn btn-secondary" href="/menu">
                Full menu
              </Link>
            </div>
          </div>

          <div>
            <Reveal>
              <p style={{ fontSize: 20, maxWidth: "52ch" }}>{item.desc}</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--chili)", margin: "8px 0" }}>
                {item.price}
              </p>
              {item.tags && (
                <p>
                  {item.tags.map((t) => (
                    <span key={t} style={{ border: "1px solid var(--ink)", borderRadius: 999, padding: "2px 10px", fontSize: 13, marginRight: 6, background: "#fff" }}>
                      {t}
                    </span>
                  ))}
                </p>
              )}
            </Reveal>
            <Reveal>
              <h2>WHAT&apos;S IN IT</h2>
              <ul style={{ paddingLeft: 20, display: "grid", gap: 4 }}>
                {item.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
              <p style={{ fontSize: 14 }}>About {item.kcal} kcal. Ask us about allergens, we keep the binder behind the register.</p>
            </Reveal>
            <Reveal>
              <h2>WHY IT&apos;S HERE</h2>
              <p style={{ maxWidth: "52ch" }}>{item.story}</p>
            </Reveal>
            <Reveal>
              <h2>PAIRS WITH</h2>
              <p style={{ maxWidth: "52ch" }}>{item.pairs.join(" plus ")}</p>
            </Reveal>
          </div>
        </div>

        {groupItems.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <Reveal>
              <h2>MORE {item.group.toUpperCase()}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
                {groupItems.map((g) => (
                  <Link key={g.id} href={`/menu/${g.id}`} className="card" style={{ textDecoration: "none" }}>
                    <strong>{g.name}</strong>
                    <p style={{ margin: "8px 0 0" }}>{g.price}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
