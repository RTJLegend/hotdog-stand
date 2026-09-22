import { NextResponse } from "next/server";
import { validateClubSignup } from "@/lib/validate";

export async function POST(req: Request) {
  const body = await req.json();
  const v = validateClubSignup(body);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: 400 });
  const memberId = "GS-CLUB-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  console.log("club signup", { ...body, memberId });
  return NextResponse.json({ ok: true, memberId });
}
