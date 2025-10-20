import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LogsPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Logs</h1>
      <p>Em uma versão completa, listaríamos logs do banco.</p>
    </main>
  );
}
