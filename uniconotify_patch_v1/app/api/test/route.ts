import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Endpoint de teste operacional",
    results: { apiKeys: 1, logs: 3, stats: { today: 3 } },
  });
}
