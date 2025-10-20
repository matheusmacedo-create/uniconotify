"use client";
import { useRouter } from "next/navigation";
import { ConnectionCard } from "./components/ConnectionCard";

const items = [
  { title: "ClickUp", route: "/connections/clickup", desc: "Sincronizar tasks, eventos e webhooks." },
  { title: "RapidCBK", route: "/connections/rapidcbk", desc: "Receber callbacks de pagamentos e eventos." },
  { title: "Email", route: "/connections/email", desc: "SMTP/SendGrid para envio transacional." },
  { title: "Jira", route: "/connections/jira", desc: "Issues, sprints e notificações." },
  { title: "Slack", route: "/connections/slack", desc: "Mensagens em canais/grupos via webhook." },
  { title: "UnicoPag API", route: "/connections/unicopag", desc: "Eventos do ecossistema UnicoPag." },
];

export default function ConnectionsPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Conexões de API</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((i) => (
          <ConnectionCard
            key={i.title}
            title={i.title}
            description={i.desc}
            onConfigure={() => router.push(i.route)}
          />
        ))}
      </div>
    </main>
  );
}
