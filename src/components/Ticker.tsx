const DEFAULT_ITEMS =
  "★ TODAY'S SPECIAL: SEE THE MENU BOARD ★ 123 W MADISON, CHICAGO ★ OPEN TIL 9PM ★ CATERING FOR 10 TO 200 ★ ";

export default function Ticker({ items }: { items?: string }) {
  const text = (items ?? DEFAULT_ITEMS).repeat(4);
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
      <div className="ticker-track">{text}</div>
    </div>
  );
}
