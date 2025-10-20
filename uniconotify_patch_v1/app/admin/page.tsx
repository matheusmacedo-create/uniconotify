import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminHome() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Admin — Visão Geral</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li><a href="/admin/logs">Logs</a></li>
        <li><a href="/admin/keys">Chaves API</a></li>
        <li><a href="/admin/rules">Regras</a></li>
      </ul>
    </main>
  );
}
