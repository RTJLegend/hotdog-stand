"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export default function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="card" style={{ padding: 0, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                all: "unset",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                width: "100%",
                padding: 16,
                boxSizing: "border-box",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              <span>{f.q}</span>
              <span
                aria-hidden="true"
                style={{
                  display: "inline-grid",
                  placeItems: "center",
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  border: "2px solid var(--ink)",
                  borderRadius: "50%",
                  background: isOpen ? "var(--mustard)" : "#fff",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform .3s ease, background .3s ease",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>
            <div
              className="faq-answer"
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows .35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p style={{ margin: 0, padding: "0 16px 16px" }}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
