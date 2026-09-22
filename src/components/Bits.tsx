"use client";

import Link from "next/link";
import Image from "next/image";

import { todaysSpecial, type MenuItem } from "@/lib/menu";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function SpecialBanner() {
  const day = new Date().getDay();
  const s = todaysSpecial(day);
  return (
    <div className="card" style={{ background: "var(--mustard)", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 28 }}>★</span>
      <div>
        <strong>
          {DAYS[day]} special: {s.name}
        </strong>
        <p style={{ margin: "4px 0 0" }}>{s.desc}</p>
      </div>
      <Link className="btn" href="/menu" style={{ marginLeft: "auto" }}>
        See the menu
      </Link>
    </div>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <span role="img" aria-label={`${n} out of 5 stars`} style={{ color: "var(--chili)", letterSpacing: 2 }}>
      {"★".repeat(n)}
      {"☆".repeat(5 - n)}
    </span>
  );
}

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Link href={`/menu/${item.id}`} className="menu-card-item" style={{ textDecoration: "none", color: "inherit", display: "block" }} aria-label={`${item.name}, ${item.price}. View details.`}>
    <article className="card" style={{ borderTop: "6px solid var(--chili)", overflow: "hidden", height: "100%" }}>
      {item.img && (
        <div style={{ margin: "-16px -16px 12px", borderBottom: "2px solid var(--ink)" }}>
          <Image
            src={item.img.src}
            alt={item.img.alt}
            width={item.img.w}
            height={item.img.h}
            style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <strong>{item.name}</strong>
        <span>{item.price}</span>
      </div>
      <div style={{ borderTop: "1px dashed var(--ink)", margin: "10px 0" }} aria-hidden="true" />
      <p style={{ margin: "8px 0" }}>{item.desc}</p>
      {item.tags?.map((t) => (
        <span
          key={t}
          style={{ border: "1px solid var(--ink)", borderRadius: 999, padding: "2px 8px", fontSize: 12, marginRight: 6, background: "var(--paper)" }}
        >
          {t}
        </span>
      ))}
      <p style={{ margin: "12px 0 0", fontWeight: 700 }}>View details →</p>
    </article>
    </Link>
  );
}
