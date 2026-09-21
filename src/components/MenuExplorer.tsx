"use client";

import { useEffect, useState } from "react";
import { animate, stagger } from "animejs";
import { MENU } from "@/lib/menu";
import { MenuCard } from "@/components/Bits";

const TABS = ["All", ...MENU.map((g) => g.group)];

export default function MenuExplorer() {
  const [tab, setTab] = useState("All");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(".menu-explorer .menu-card-item").forEach((el) => {
        el.style.opacity = "1";
      });
      return;
    }
    animate(".menu-explorer .menu-card-item", {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 600,
      delay: stagger(45),
      ease: "outExpo",
    });
  }, [tab]);

  const groups = tab === "All" ? MENU : MENU.filter((g) => g.group === tab);

  return (
    <div className="menu-explorer">
      <div role="tablist" aria-label="Menu categories" style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "20px 0 8px" }}>
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            style={{
              border: "2px solid var(--ink)",
              borderRadius: 999,
              padding: ".45rem 1rem",
              fontWeight: 700,
              cursor: "pointer",
              background: tab === t ? "var(--ink)" : "#fff",
              color: tab === t ? "var(--paper)" : "var(--ink)",
            }}
          >
            {t}
          </button>
        ))}
      </div>
      {groups.map((g) => (
        <section key={g.group} style={{ marginTop: 32 }}>
          <h2>{g.group.toUpperCase()}</h2>
          <p style={{ marginTop: 0 }}>{g.blurb}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
            {g.items.map((it) => (
              <MenuCard key={it.id} item={it} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
