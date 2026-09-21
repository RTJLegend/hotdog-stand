import { SITE } from "@/lib/site";

export function FindUs() {
  return (
    <section
      id="find-us"
      className="wrap"
      style={{ padding: "48px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}
    >
      <div>
        <h2>FIND US</h2>
        <p>{SITE.address}</p>
        <p>{SITE.phone}</p>
        <table>
          <tbody>
            {SITE.hours.map((h) => (
              <tr key={h.days}>
                <td style={{ paddingRight: 16 }}>
                  <strong>{h.days}</strong>
                </td>
                <td>{h.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="card"
        style={{ minHeight: 240, display: "grid", placeItems: "center", textAlign: "center" }}
        role="img"
        aria-label="Map placeholder"
      >
        [map placeholder]
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="wrap" style={{ padding: "48px 20px" }}>
      <h2>OUR STORY</h2>
      <p style={{ maxWidth: "62ch" }}>
        Family-run cart since 2018 (placeholder). Vienna-style snap, steamed poppyseed buns, small-batch chili.
      </p>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "2px solid var(--ink)", marginTop: 32 }}>
      <div className="wrap" style={{ display: "flex", gap: 16, padding: "20px", flexWrap: "wrap" }}>
        <span>★ {SITE.brand}</span>
        <span>{SITE.address}</span>
        <span>{SITE.phone}</span>
        <span style={{ marginLeft: "auto" }}>© 2026 placeholder</span>
      </div>
    </footer>
  );
}
