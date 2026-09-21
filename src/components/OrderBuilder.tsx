"use client";

import { useEffect, useState } from "react";
import { animate } from "animejs";
import { MENU } from "@/lib/menu";

const TOPPINGS = ["mustard", "relish", "onion", "tomato", "pickle", "sport peppers", "celery salt", "cheese", "chili"];

export default function OrderBuilder({ bare = false }: { bare?: boolean }) {
  const [form, setForm] = useState({ dog: "", toppings: [] as string[], qty: 1, name: "", phone: "", pickupTime: "" });
  const [status, setStatus] = useState<{ state: "idle" | "pending" | "ok" | "error"; msg?: string; id?: string }>({
    state: "idle",
  });

  useEffect(() => {
    if (status.state !== "ok") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(".order-confirm", { opacity: [0, 1], scale: [0.92, 1], duration: 550, ease: "outBack" });
  }, [status.state]);

  function toggleTopping(t: string) {
    setForm((f) => ({
      ...f,
      toppings: f.toppings.includes(t) ? f.toppings.filter((x) => x !== t) : [...f.toppings, t],
    }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "pending" });
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) setStatus({ state: "error", msg: data.error ?? "Order failed." });
      else setStatus({ state: "ok", id: data.confirmationId });
    } catch {
      setStatus({ state: "error", msg: "Network error. Try again." });
    }
  }

  const formEl = (
    <form onSubmit={submit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
      <label>
        Dog
        <select value={form.dog} onChange={(e) => setForm({ ...form, dog: e.target.value })} required>
          <option value="">Choose…</option>
          {MENU.flatMap((g) => g.items).map((i) => (
            <option key={i.id} value={i.id}>
              {i.name} — {i.price}
            </option>
          ))}
        </select>
      </label>
      <fieldset style={{ border: "2px solid var(--ink)", borderRadius: 8, padding: 12 }}>
        <legend>Toppings</legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {TOPPINGS.map((t) => (
            <label key={t} style={{ display: "flex", gap: 6, alignItems: "center", fontWeight: 400, border: "1px solid var(--ink)", borderRadius: 999, padding: "4px 10px" }}>
              <input
                type="checkbox"
                style={{ width: "auto" }}
                checked={form.toppings.includes(t)}
                onChange={() => toggleTopping(t)}
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        Qty
        <input type="number" min={1} max={20} value={form.qty} onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })} />
      </label>
      <label>
        Name
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      </label>
      <label>
        Phone
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="312-555-0100" />
      </label>
      <label>
        Pickup time
        <input type="time" value={form.pickupTime} onChange={(e) => setForm({ ...form, pickupTime: e.target.value })} required />
      </label>
      <button className="btn" disabled={status.state === "pending"}>
        {status.state === "pending" ? "Sending…" : "Place pickup order"}
      </button>
      {status.state === "error" && <p role="alert">Error: {status.msg}</p>}
      {status.state === "ok" && (
        <p role="status" className="card order-confirm">
          Confirmed! Show this at the window: <strong>{status.id}</strong>
        </p>
      )}
    </form>
  );

  if (bare) return formEl;

  return (
    <section id="order" className="wrap" style={{ padding: "48px 20px" }}>
      <h2>ORDER AHEAD</h2>
      <p>Pickup only in v1. Pay at the window.</p>
      {formEl}
    </section>
  );
}
