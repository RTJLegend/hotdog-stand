"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, createTimeline, stagger } from "animejs";
import { SITE } from "@/lib/site";

export default function Hero() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animate("[data-hero]", { opacity: 1, duration: 1 });
      return;
    }
    const tl = createTimeline({ defaults: { ease: "outExpo" } });
    tl.add("[data-hero='badge']", { opacity: [0, 1], translateY: [14, 0], scale: [0.9, 1], duration: 550 })
      .add("[data-hero='line']", { opacity: [0, 1], translateY: [46, 0], duration: 950, delay: stagger(110) }, "-=300")
      .add("[data-hero='sub']", { opacity: [0, 1], translateY: [16, 0], duration: 650 }, "-=600")
      .add("[data-hero='cta']", { opacity: [0, 1], translateY: [16, 0], duration: 600, delay: stagger(90) }, "-=500")
      .add("[data-hero='art']", { opacity: [0, 1], scale: [0.94, 1], duration: 900 }, "-=750")
      .add(".hero-badge", { opacity: [0, 1], scale: [0.7, 1], duration: 500, ease: "outBack" }, "-=400");
    // Gentle float on the badge inner — separate element from the entrance above, so no transform conflict.
    const float = animate(".hero-badge-inner", {
      translateY: [0, -8],
      duration: 1900,
      ease: "inOutSine",
      alternate: true,
      loop: true,
      delay: 2600,
    });
    return () => {
      tl.revert();
      float.revert();
    };
  }, []);

  return (
    <section
      id="top"
      className="wrap"
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 32, padding: "56px 20px", alignItems: "center" }}
    >
      <div>
        <p
          data-hero="badge"
          style={{
            background: "var(--mustard)",
            display: "inline-block",
            padding: "4px 12px",
            border: "2px solid var(--ink)",
            borderRadius: 999,
            fontWeight: 700,
            margin: 0,
          }}
        >
          Open today · {SITE.hours[0].time}
        </p>
        <h1 style={{ fontSize: "clamp(48px,7vw,88px)", margin: "16px 0" }}>
          <span data-hero="line" style={{ display: "block" }}>SNAPPY,</span>
          <span data-hero="line" style={{ display: "block" }}>LOADED,</span>
          <span data-hero="line" style={{ display: "block" }}>NO SHORTCUTS.</span>
        </h1>
        <p data-hero="sub">
          {SITE.tagline} Find us at {SITE.address} or order ahead for pickup.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <Link data-hero="cta" className="btn" href="/order">
            Order Ahead
          </Link>
          <Link data-hero="cta" className="btn btn-secondary" href="/menu">
            View Menu
          </Link>
        </div>
      </div>
      <div
        data-hero="art"
        style={{
          position: "relative",
          border: "2px solid var(--ink)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
          aspectRatio: "4/3",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Classic Chicago dog with pickle spear, tomato, mustard and neon relish in a paper tray"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-badge" style={{ position: "absolute", left: 12, bottom: 12 }}>
          <span
            className="hero-badge-inner"
            style={{
              display: "inline-block",
              background: "var(--paper)",
              border: "2px solid var(--ink)",
              borderRadius: 999,
              padding: "6px 14px",
              fontWeight: 700,
              boxShadow: "3px 3px 0 var(--ink)",
            }}
          >
            ★ 4.8 · 2,300+ reviews
          </span>
        </div>
      </div>
    </section>
  );
}
