"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate } from "animejs";
import { Stars } from "@/components/Bits";
import { REVIEWS } from "@/lib/content";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const go = useCallback(
    (next: number) => {
      const total = REVIEWS.length;
      const wrapped = (next + total) % total;
      setIndex(wrapped);
      if (!reduced.current && trackRef.current) {
        animate(trackRef.current, {
          opacity: [0.2, 1],
          translateX: [next > index ? 40 : -40, 0],
          duration: 450,
          ease: "outExpo",
        });
      }
    },
    [index]
  );

  useEffect(() => {
    if (paused || reduced.current) return;
    const t = setInterval(() => go(index + 1), 6000);
    return () => clearInterval(t);
  }, [index, paused, go]);

  const r = REVIEWS[index];
  const dragX = useRef<number | null>(null);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ marginTop: 20 }}
    >
      <div
        ref={trackRef}
        className="card"
        style={{ maxWidth: 720, minHeight: 220, touchAction: "pan-y" }}
        onPointerDown={(e) => {
          dragX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (dragX.current === null) return;
          const dx = e.clientX - dragX.current;
          dragX.current = null;
          if (dx < -60) go(index + 1);
          else if (dx > 60) go(index - 1);
        }}
      >
        <Stars n={r.rating} />
        <p style={{ fontWeight: 700, fontSize: 20, margin: "8px 0 4px" }}>{r.title}</p>
        <p style={{ margin: "0 0 8px" }}>{r.text}</p>
        <p style={{ margin: 0, fontSize: 14 }}>
          {r.name} · {r.source}, {r.date}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
        <button className="btn btn-secondary" onClick={() => go(index - 1)} aria-label="Previous review" style={{ padding: ".4rem .9rem" }}>
          ←
        </button>
        <span style={{ fontSize: 14 }}>
          {index + 1} / {REVIEWS.length}
        </span>
        <button className="btn btn-secondary" onClick={() => go(index + 1)} aria-label="Next review" style={{ padding: ".4rem .9rem" }}>
          →
        </button>
        <Link href="/reviews" style={{ marginLeft: "auto" }}>
          Read all reviews →
        </Link>
      </div>
    </div>
  );
}
