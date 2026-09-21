import { NextResponse } from "next/server";
import { validateOrder } from "@/lib/validate";

export async function POST(req: Request) {
  const body = await req.json();
  const v = validateOrder(body);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: 400 });
  const confirmationId = "GS-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  console.log("order", { ...body, confirmationId });
  return NextResponse.json({ ok: true, confirmationId });
}
