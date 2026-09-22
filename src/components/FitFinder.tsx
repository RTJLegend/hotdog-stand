"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate } from "animejs";
import { findPackage } from "@/lib/menu";

type Verdict =
  | { kind: "package"; id: string; note: string }
  | { kind: "call"; note: string };

function recommend(heads: number, cart: boolean): Verdict {
  if (heads < 10) {
    return { kind: "call", note: "Under our 10-guest minimum for catering. Call us anyway. For small groups, the order-ahead menu scales just fine." };
  }
  if (cart && heads >= 50) {
    return { kind: "package", id: "big-event", note: "The cart, the crew, and the full menu on site. This is the Big Event package." };
  }
  if (cart && heads < 50) {
    const id = heads <= 30 ? "backyard" : "office";
    return { kind: "package", id, note: "The cart needs 50 plus guests, but drop-off will nail this size. Start here:" };
  }
  if (heads <= 30) {
    return { kind: "package", id: "backyard", note: "Backyard size, drop-off with setup. Easy." };
  }
  if (heads <= 80) {
    return { kind: "package", id: "office", note: "Office size with labeled dietary options and boxed-meeting upgrades." };
  }
  return { kind: "package", id: "big-event", note: "Over 80 guests wants the on-site cart and crew." };
}

export default function FitFinder() {
  const [heads, setHeads] = useState(30);
  const [cart, setCart] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const verdict = recommend(heads, cart);
  const pack = verdict.kind === "package" ? findPackage(verdict.id) : null;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (resultRef.current) {
      animate(resultRef.current, { opacity: [0, 1], translateY: [14, 0], duration: 500, ease: "outExpo" });
    }
  }, [heads, cart]);

  return (
    <div className="card" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 26, margin: "0 0 4px", color: "var(--mustard)" }}>
        FIND YOUR FIT
      </p>
      <p style={{ margin: "0 0 16px" }}>Two questions. Thirty seconds. One recommendation.</p>
      <div style={{ display: "grid", gap: 16 }}>
        <label style={{ display: "grid", gap: 6 }}>
          How many mouths?
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              type="button"
              aria-label="Fewer guests"
              onClick={() => setHeads((h) => Math.max(5, h - 5))}
              style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid var(--paper)", background: "transparent", color: "var(--paper)", fontSize: 22, cursor: "pointer" }}
            >
              −
            </button>
            <strong style={{ fontSize: 32, minWidth: 90, textAlign: "center" }}>{heads}</strong>
            <button
              type="button"
              aria-label="More guests"
              onClick={() => setHeads((h) => Math.min(500, h + 5))}
              style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid var(--paper)", background: "transparent", color: "var(--paper)", fontSize: 22, cursor: "pointer" }}
            >
              +
            </button>
          </span>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontWeight: 700 }}>
          <input
            type="checkbox"
            checked={cart}
            onChange={(e) => setCart(e.target.checked)}
            style={{ width: 22, height: 22, accentColor: "var(--mustard)" }}
          />
          I want the on-site cart with crew
        </label>
      </div>
      <div ref={resultRef} style={{ marginTop: 20, borderTop: "1px dashed var(--mustard)", paddingTop: 16 }}>
        <p style={{ margin: "0 0 8px" }}>{verdict.note}</p>
        {pack ? (
          <Link
            href={`/catering/${pack.id}`}
            style={{ display: "inline-block", fontFamily: "var(--font-display)", fontSize: 28, color: "var(--mustard)" }}
          >
            {pack.name.toUpperCase()} · {pack.price} →
          </Link>
        ) : (
          <a href="tel:+13125550100" style={{ display: "inline-block", fontFamily: "var(--font-display)", fontSize: 28, color: "var(--mustard)" }}>
            (312) 555-0100
          </a>
        )}
      </div>
    </div>
  );
}
