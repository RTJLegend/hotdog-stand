export default function Ticker() {
  return (
    <div
      style={{
        background: "var(--mustard)",
        borderTop: "2px solid var(--ink)",
        borderBottom: "2px solid var(--ink)",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div style={{ display: "inline-block", padding: "8px 0", animation: "ticker 22s linear infinite" }}>
        ★ TODAY: CHILI CHEESE $8.50 ★ 123 W MADISON ★ OPEN TIL 9PM ★ CATERING AVAILABLE ★&nbsp;
      </div>
      <style>{`@keyframes ticker{to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
