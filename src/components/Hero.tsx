import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="wrap"
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 32, padding: "56px 20px", alignItems: "center" }}
    >
      <div>
        <p
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
        <h1 style={{ fontSize: "clamp(48px,7vw,88px)", margin: "16px 0" }}>SNAPPY, LOADED, NO SHORTCUTS.</h1>
        <p>
          {SITE.tagline} Find us at {SITE.address} or order ahead for pickup.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          <a className="btn" href="#order">
            Order Ahead
          </a>
          <a className="btn btn-secondary" href="#menu">
            View Menu
          </a>
        </div>
      </div>
      <div
        style={{
          border: "2px solid var(--ink)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
          aspectRatio: "4/3",
          display: "grid",
          placeItems: "center",
          background: "#fff",
          padding: 16,
          textAlign: "center",
        }}
        role="img"
        aria-label="Hero image placeholder: steaming hot dog"
      >
        [16:9 image — steaming dog]
      </div>
    </section>
  );
}
