import { NextResponse } from "next/server";

type Payload = {
  title?: string;
  message: string;
  category?: string;
  priority?: "low" | "normal" | "high" | "emergency";
  tags?: string[];
  provider?: "ntfy" | "telegram" | "slack" | "both";
  ntfyTopic?: string;
  attachUrl?: string;
};

async function sendToNtfy(message: string, title?: string, topic?: string, attachUrl?: string) {
  const url = `https://ntfy.sh/${topic || process.env.NTFY_TOPIC || "uniconotify"}`;
  const headers: Record<string, string> = { };
  if (title) headers["Title"] = title;
  if (attachUrl) headers["Attach"] = attachUrl;
  await fetch(url, { method: "POST", headers, body: message });
}

async function sendToSlack(message: string, title?: string) {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return;
  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: title ? `*${title}*\n${message}` : message }),
  });
}

async function sendToTelegram(message: string, title?: string) {
  const bot = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!bot || !chat) return;
  const text = title ? `*${title}*\n${message}` : message;
  await fetch(`https://api.telegram.org/bot${bot}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chat, text, parse_mode: "Markdown" }),
  });
}

export async function POST(req: Request) {
  const apiKey = req.headers.get("x-api-key");
  const required = process.env.API_KEY;
  if (required && apiKey !== required) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as Payload;
  if (!body?.message) {
    return NextResponse.json({ error: "message é obrigatório" }, { status: 400 });
  }

  const provider = body.provider || "ntfy";
  const tasks: Promise<any>[] = [];
  const title = body.title;

  if (provider === "ntfy" || provider === "both") {
    tasks.push(sendToNtfy(body.message, title, body.ntfyTopic, body.attachUrl));
  }
  if (provider === "telegram" || provider === "both") {
    tasks.push(sendToTelegram(body.message, title));
  }
  if (provider === "slack") {
    tasks.push(sendToSlack(body.message, title));
  }

  await Promise.all(tasks);
  return NextResponse.json({ ok: true, provider });
}
