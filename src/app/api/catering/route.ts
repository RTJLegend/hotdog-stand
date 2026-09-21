import { NextResponse } from "next/server";
import { validateCatering } from "@/lib/validate";

export async function POST(req: Request) {
  const body = await req.json();
  const v = validateCatering(body);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: 400 });
  console.log("catering", body);
  return NextResponse.json({ ok: true });
}
