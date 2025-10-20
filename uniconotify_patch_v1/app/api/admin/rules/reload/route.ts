import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("rules-json");
  return NextResponse.json({ ok: true, reloaded: true });
}
