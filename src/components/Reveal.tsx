"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { animate, stagger } from "animejs";

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function showAll(root: ParentNode, selector: string) {
  root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
};

/** Fade-and-rise on scroll into view. Initial hidden state comes from CSS (.rv); noscript + reduced-motion fall back to visible. */
export function Reveal({ children, className, style, delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      el.style.opacity = "1";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            animate(el, { opacity: [0, 1], translateY: [y, 0], duration: 800, delay, ease: "outExpo" });
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={["rv", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}

/** Staggers direct children on scroll into view. Children hidden via CSS (.rv-group > *). */export function RevealGroup({ children, className, style, gap = 80 }: RevealProps & { gap?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      showAll(el, ":scope > *");
      el.style.opacity = "1";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            animate(Array.from(el.children) as HTMLElement[], {
              opacity: [0, 1],
              translateY: [26, 0],
              duration: 700,
              delay: stagger(gap),
              ease: "outExpo",
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [gap]);

  return (
    <div ref={ref} className={["rv-group", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}

/** Clip-path wipe reveal for images. The outer box is observed (never clipped);
    the inner .wipe layer carries the clipped initial state from CSS. */
export function Wipe({
  children,
  className,
  style,
  ratio = "16/10",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ratio?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.firstElementChild as HTMLElement | null;
    if (reducedMotion()) {
      if (inner) inner.style.clipPath = "none";
      const img = el.querySelector("img");
      if (img) (img as HTMLElement).style.transform = "none";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (inner) {
              animate(inner, {
                clipPath: ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
                duration: 950,
                ease: "outExpo",
              });
              const img = inner.querySelector("img");
              if (img) animate(img, { scale: [1.14, 1], duration: 1200, ease: "outExpo" });
            }
            io.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ aspectRatio: ratio, overflow: "hidden", ...style }}
    >
      <div className="wipe" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
