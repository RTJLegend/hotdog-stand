const MUSTARD = "#FFB800";
const RELISH = "#4A7C2E";
const INK = "#201512";

function Mustard() {
  return (
    <polyline
      points="70,86 90,76 110,86 130,76 150,86 170,76 190,86 210,76 230,86 250,76"
      fill="none"
      stroke={MUSTARD}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Relish() {
  const spots = [80, 100, 120, 140, 160, 180, 200, 220, 240];
  return (
    <g fill={RELISH}>
      {spots.map((x, i) => (
        <circle key={x} cx={x} cy={i % 2 === 0 ? 80 : 86} r="6" />
      ))}
    </g>
  );
}

function Onion() {
  return (
    <g fill="#fff" stroke={INK} strokeWidth="1.5">
      {[95, 130, 165, 200, 235].map((x) => (
        <circle key={x} cx={x} cy="82" r="7" />
      ))}
    </g>
  );
}

function Tomato() {
  return (
    <g fill="#D94F3D" stroke={INK} strokeWidth="1.5">
      <rect x="100" y="72" width="44" height="14" rx="7" transform="rotate(-8 122 79)" />
      <rect x="180" y="72" width="44" height="14" rx="7" transform="rotate(8 202 79)" />
    </g>
  );
}

function Pickle() {
  return <rect x="85" y="58" width="150" height="17" rx="8.5" fill="#5C7A3A" stroke={INK} strokeWidth="1.5" />;
}

function Peppers() {
  return (
    <g>
      <ellipse cx="120" cy="66" rx="12" ry="6" fill="#C1272D" stroke={INK} strokeWidth="1.5" />
      <ellipse cx="205" cy="66" rx="12" ry="6" fill="#C1272D" stroke={INK} strokeWidth="1.5" />
    </g>
  );
}

function CelerySalt() {
  const dots: [number, number][] = [[90, 78], [115, 88], [140, 76], [165, 88], [190, 78], [215, 88], [240, 78], [105, 70], [155, 70], [205, 70], [230, 90], [75, 88]];
  return (
    <g fill="#8a8a8a">
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" />
      ))}
    </g>
  );
}

function Cheese() {
  return (
    <g fill="#F08A1D">
      <rect x="70" y="80" width="180" height="13" rx="6.5" />
      <rect x="110" y="88" width="10" height="14" rx="5" />
      <rect x="170" y="88" width="10" height="18" rx="5" />
      <rect x="220" y="88" width="10" height="12" rx="5" />
    </g>
  );
}

function Chili() {
  return (
    <g fill="#6B3418">
      {[85, 110, 135, 160, 185, 210, 235].map((x, i) => (
        <ellipse key={x} cx={x} cy={i % 2 === 0 ? 78 : 84} rx="14" ry="9" />
      ))}
    </g>
  );
}

const LAYERS: Record<string, () => React.JSX.Element> = {
  mustard: Mustard,
  relish: Relish,
  onion: Onion,
  tomato: Tomato,
  pickle: Pickle,
  "sport peppers": Peppers,
  "celery salt": CelerySalt,
  cheese: Cheese,
  chili: Chili,
};

const ORDER = ["chili", "cheese", "relish", "onion", "tomato", "pickle", "sport peppers", "mustard", "celery salt"];

export default function DogPreview({ dog, toppings, qty }: { dog: string; toppings: string[]; qty: number }) {
  const isVeg = dog === "veg" || dog === "loaded-veg";
  const layers = ORDER.filter((t) => toppings.includes(t));
  return (
    <figure style={{ margin: 0 }} aria-label="Preview of your built hot dog">
      <svg viewBox="0 0 320 170" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-hidden="true">
        <ellipse cx="160" cy="146" rx="140" ry="16" fill="#fff" stroke={INK} strokeWidth="2" />
        <ellipse cx="160" cy="118" rx="122" ry="26" fill="#F2D492" stroke={INK} strokeWidth="2.5" />
        <rect x="52" y="92" width="216" height="30" rx="15" fill={isVeg ? "#6A8F3C" : "#9C3D26"} stroke={INK} strokeWidth="2.5" />
        {layers.map((t) => {
          const Layer = LAYERS[t];
          return Layer ? <Layer key={t} /> : null;
        })}
        {qty > 1 && (
          <g>
            <circle cx="286" cy="30" r="20" fill={MUSTARD} stroke={INK} strokeWidth="2.5" />
            <text x="286" y="38" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>
              ×{qty}
            </text>
          </g>
        )}
      </svg>
      <figcaption style={{ fontSize: 14, textAlign: "center" }}>
        {dog ? "Your build, fresh off the grill." : "Pick a dog to start building."}
        {isVeg && " Plant-based frank in green."}
      </figcaption>
    </figure>
  );
}
