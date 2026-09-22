export type OrderInput = {
  dog: string;
  toppings: string[];
  qty: number;
  name: string;
  phone: string;
  pickupTime: string;
};

export function validateOrder(o: OrderInput): { ok: boolean; error?: string } {
  if (!o.dog) return { ok: false, error: "Choose a dog." };
  if (!o.name.trim()) return { ok: false, error: "Name is required." };
  if (!/^[0-9+\-().\s]{7,20}$/.test(o.phone)) return { ok: false, error: "Enter a valid phone." };
  if (!Number.isInteger(o.qty) || o.qty < 1 || o.qty > 20) return { ok: false, error: "Qty must be 1–20." };
  if (!o.pickupTime) return { ok: false, error: "Pickup time is required." };
  return { ok: true };
}

export type ClubSignup = { name: string; phone: string };

export function validateClubSignup(c: ClubSignup): { ok: boolean; error?: string } {
  if (!c.name.trim()) return { ok: false, error: "Name is required." };
  if (!/^[0-9+\-().\s]{7,20}$/.test(c.phone)) return { ok: false, error: "Enter a valid phone." };
  return { ok: true };
}
export type CateringInput = {
  name: string;
  email: string;
  date: string;
  headcount: number;
  message: string;
};

export function validateCatering(c: CateringInput): { ok: boolean; error?: string } {
  if (!c.name.trim()) return { ok: false, error: "Name is required." };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) return { ok: false, error: "Enter a valid email." };
  const d = new Date(c.date + "T00:00:00");
  if (Number.isNaN(d.getTime()) || d < new Date(new Date().toDateString()))
    return { ok: false, error: "Date must be today or later." };
  if (!Number.isInteger(c.headcount) || c.headcount < 10 || c.headcount > 1000)
    return { ok: false, error: "Headcount 10–1000." };
  return { ok: true };
}
