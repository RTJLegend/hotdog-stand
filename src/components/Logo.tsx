export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Gold Star Dogs logo"
      style={{ display: "block", flexShrink: 0 }}
    >
      <circle cx="32" cy="32" r="29" fill="#C1272D" stroke="#201512" strokeWidth="3" />
      <circle cx="32" cy="32" r="21" fill="none" stroke="#FFF6E5" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon
        points="32,16 35.8,26.8 47.2,27.1 38.1,34 41.4,44.9 32,38.4 22.6,44.9 25.9,34 16.8,27.1 28.2,26.8"
        fill="#FFB800"
        stroke="#201512"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <LogoMark size={compact ? 30 : 38} />
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: compact ? 17 : 21, letterSpacing: ".02em" }}>
          GOLD STAR
        </span>
        <span style={{ fontWeight: 800, fontSize: compact ? 11 : 13, letterSpacing: ".42em", color: "var(--chili)" }}>
          DOGS
        </span>
      </span>
    </span>
  );
}
