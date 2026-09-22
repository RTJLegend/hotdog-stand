"use client";

import { useEffect, useState } from "react";
import { animate } from "animejs";

export function ClubSignup() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<{ state: "idle" | "pending" | "ok" | "error"; msg?: string; id?: string }>({
    state: "idle",
  });

  useEffect(() => {
    if (status.state !== "ok") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(".club-confirm", { opacity: [0, 1], scale: [0.92, 1], duration: 550, ease: "outBack" });
  }, [status.state]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "pending" });
    try {
      const res = await fetch("/api/club", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) setStatus({ state: "error", msg: data.error ?? "Signup failed." });
      else setStatus({ state: "ok", id: data.memberId });
    } catch {
      setStatus({ state: "error", msg: "Network error. Try again." });
    }
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
      <label>
        Name
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      </label>
      <label>
        Phone
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="312-555-0100" />
      </label>
      <button className="btn" disabled={status.state === "pending"}>
        {status.state === "pending" ? "Joining…" : "Join the club"}
      </button>
      {status.state === "error" && <p role="alert">Error: {status.msg}</p>}
      {status.state === "ok" && (
        <p role="status" className="card club-confirm">
          Welcome to the club! Your member number is <strong>{status.id}</strong>. Show it at the register to collect stars.
        </p>
      )}
    </form>
  );
}
