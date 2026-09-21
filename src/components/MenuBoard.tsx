import { MENU } from "@/lib/menu";

export default function MenuBoard() {
  return (
    <section id="menu" className="wrap" style={{ padding: "48px 20px" }}>
      <h2 style={{ fontSize: "clamp(32px,4vw,52px)" }}>MENU BOARD</h2>
      {MENU.map((g) => (
        <div key={g.group} style={{ marginTop: 24 }}>
          <h3>{g.group}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
            {g.items.map((it) => (
              <article
                key={it.id}
                className="card"
                style={{ borderTop: "6px solid var(--chili)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <strong>{it.name}</strong>
                  <span>{it.price}</span>
                </div>
                <div style={{ borderTop: "1px dashed var(--ink)", margin: "10px 0" }} aria-hidden="true" />
                <p style={{ margin: "8px 0" }}>{it.desc}</p>
                {it.tags?.map((t) => (
                  <span
                    key={t}
                    style={{ border: "1px solid var(--ink)", borderRadius: 999, padding: "2px 8px", fontSize: 12, marginRight: 6, background: "var(--paper)" }}
                  >
                    {t}
                  </span>
                ))}
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
