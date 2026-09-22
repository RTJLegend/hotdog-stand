"use client";

import dynamic from "next/dynamic";

const HotDog3D = dynamic(() => import("@/components/HotDog3D"), {
  ssr: false,
  loading: () => (
    <div className="card" style={{ minHeight: 320, display: "grid", placeItems: "center" }}>
      Firing up the grill…
    </div>
  ),
});

export default function HotDog3DSection() {
  return (
    <div className="card" style={{ marginTop: 16, height: 380, padding: 0, overflow: "hidden" }}>
      <HotDog3D />
    </div>
  );
}
