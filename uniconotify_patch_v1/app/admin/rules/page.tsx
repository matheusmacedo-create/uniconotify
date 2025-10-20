import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";
import fs from "node:fs";
import path from "node:path";

async function loadRules() {
  "use server";
  const file = path.join(process.cwd(), "rules.json");
  try {
    const data = await fs.promises.readFile(file, "utf-8");
    return data;
  } catch {
    return JSON.stringify({ routes: [], quietHours: { respect: false } }, null, 2);
  }
}

export default async function RulesPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const rules = await loadRules();
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Regras</h1>
      <p>Leitura do arquivo <code>rules.json</code> no root do projeto.</p>
      <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto">{rules}</pre>
    </main>
  );
}
