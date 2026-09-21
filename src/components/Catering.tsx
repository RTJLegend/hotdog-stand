"use client";

import { useState } from "react";
import { CATERING_PACKAGES } from "@/lib/menu";

export default function Catering() {
  const [form, setForm] = useState({ name: "", email: "", date: "", headcount: 30, message: "" });
  const [status, setStatus] = useState<{ state: "idle" | "pending" | "ok" | "error"; msg?: string }>({ state: "idle" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "pending" });
    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) setStatus({ state: "error", msg: data.error ?? "Request failed." });
      else setStatus({ state: "ok" });
    } catch {
      setStatus({ state: "error", msg: "Network error. Try again." });
    }
  }

  return (
    <section id="catering" className="wrap" style={{ padding: "48px 20px" }}>
      <h2>CATERING</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, margin: "20px 0" }}>
        {CATERING_PACKAGES.map((p) => (
          <article key={p.id} className="card">
            <strong>{p.name}</strong>
            <p style={{ margin: "8px 0" }}>{p.desc}</p>
            <span>{p.price}</span>
          </article>
        ))}
      </div>
      <form onSubmit={submit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <label>
          Name
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </label>
        <label>
          Event date
          <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        </label>
        <label>
          Headcount
          <input type="number" min={10} max={1000} value={form.headcount} onChange={(e) => setForm({ ...form, headcount: Number(e.target.value) })} />
        </label>
        <label>
          Details
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Venue, time, dietary needs…" />
        </label>
        <button className="btn" disabled={status.state === "pending"}>
          {status.state === "pending" ? "Sending…" : "Request catering"}
        </button>
        {status.state === "error" && <p role="alert">Error: {status.msg}</p>}
        {status.state === "ok" && <p role="status" className="card">Thanks! We&apos;ll reply within one business day.</p>}
      </form>
    </section>
  );
}
