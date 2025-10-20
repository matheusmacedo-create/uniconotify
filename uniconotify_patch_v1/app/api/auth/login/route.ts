import { NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const form = await req.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");

  const u = process.env.ADMIN_USERNAME || "admin";
  const p = process.env.ADMIN_PASSWORD || "admin123";
  if (username === u && password === p) {
    await setSessionCookie();
    return NextResponse.redirect(new URL('/admin', req.url));
  }
  return NextResponse.json({ ok: false }, { status: 401 });
}
