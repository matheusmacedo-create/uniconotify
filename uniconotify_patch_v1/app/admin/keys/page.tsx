import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function KeysPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return (
    <main className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Chaves API</h1>
      <p>Gerencie chaves aqui (placeholder).</p>
      <pre className="bg-gray-50 p-4 rounded">Use a env API_KEY para autenticar no /api/notify</pre>
    </main>
  );
}
