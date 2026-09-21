export default function Ticker() {
  const items = "★ TODAY'S SPECIAL — SEE THE MENU BOARD ★ 123 W MADISON, CHICAGO ★ OPEN TIL 9PM ★ CATERING FOR 10–200 ★ ";
  return (
    <div
      style={{
        background: "var(--mustard)",
        borderTop: "2px solid var(--ink)",
        borderBottom: "2px solid var(--ink)",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
      aria-hidden="true"
    >
      <div className="ticker-track">{items.repeat(4)}</div>
    </div>
  );
}
