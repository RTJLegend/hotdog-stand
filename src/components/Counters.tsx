"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const render = (v: number) => {
      el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      render(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const obj = { v: 0 };
            animate(obj, {
              v: to,
              duration: 1500,
              ease: "outExpo",
              onUpdate: () => render(obj.v),
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export function Meter({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.width = `${pct}%`;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            animate(el, { width: ["0%", `${pct}%`], duration: 1100, ease: "outExpo" });
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return <div ref={ref} style={{ width: 0, height: "100%", background: "var(--mustard)" }} />;
}
