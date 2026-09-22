import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { CateringForm } from "@/components/Catering";
import { Reveal, Wipe } from "@/components/Reveal";
import { Footer } from "@/components/Sections";
import { CATERING_PACKAGES, findPackage } from "@/lib/menu";

export function generateStaticParams() {
  return CATERING_PACKAGES.map((p) => ({ pkg: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ pkg: string }> }): Promise<Metadata> {
  const { pkg } = await params;
  const pack = findPackage(pkg);
  if (!pack) return { title: "Not found | Gold Star Dogs" };
  return {
    title: `${pack.name} Package | Gold Star Dogs Catering`,
    description: `${pack.name} catering (${pack.price}): ${pack.desc}`,
  };
}

export default async function PackagePage({ params }: { params: Promise<{ pkg: string }> }) {
  const { pkg } = await params;
  const pack = findPackage(pkg);
  if (!pack) notFound();

  const others = CATERING_PACKAGES.filter((p) => p.id !== pack.id);

  return (
    <>
      <Header />
      <main className="wrap" style={{ padding: "48px 20px" }}>
        <Reveal>
          <p style={{ margin: "0 0 8px" }}>
            <Link href="/catering">Catering</Link> / {pack.name}
          </p>
          <h1 style={{ fontSize: "clamp(40px,6vw,72px)" }}>{pack.name.toUpperCase()} PACKAGE</h1>
          <p style={{ maxWidth: "62ch" }}>{pack.desc}</p>
        </Reveal>

        <Wipe ratio="21/9" style={{ marginTop: 24, border: "2px solid var(--ink)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
          <Image
            src={pack.img.src}
            alt={pack.img.alt}
            width={pack.img.w}
            height={pack.img.h}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            priority
          />
        </Wipe>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginTop: 32 }}>
          <div>
            <Reveal>
              <h2>WHAT&apos;S INCLUDED</h2>
              <ul style={{ paddingLeft: 20, display: "grid", gap: 6 }}>
                {pack.includes.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="card" style={{ marginTop: 16, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <span><strong>Serves:</strong> {pack.serves}</span>
                <span><strong>Setup:</strong> {pack.setup}</span>
                <span><strong>Price:</strong> {pack.price}</span>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h2>BOOK THIS PACKAGE</h2>
              <p>Mention {pack.name} in the details box and we will price it exactly.</p>
            </Reveal>
            <CateringForm />
          </div>
        </div>

        <section style={{ marginTop: 48 }}>
          <Reveal>
            <h2>OTHER PACKAGES</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 12 }}>
              {others.map((o) => (
                <Link key={o.id} href={`/catering/${o.id}`} className="card" style={{ textDecoration: "none" }}>
                  <strong>{o.name}</strong>
                  <p style={{ margin: "8px 0" }}>{o.desc}</p>
                  <span>{o.price}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
