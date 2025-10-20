import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default async function LoginPage() {
  if (await isAuthenticated()) redirect("/admin");

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        action="/api/auth/login"
        method="POST"
        className="w-full max-w-sm border rounded-xl p-6 bg-white shadow"
      >
        <h1 className="text-xl font-bold mb-4">Login Admin</h1>
        <label className="text-sm block mb-2">Usuário</label>
        <input name="username" className="w-full border rounded p-2 mb-4" />
        <label className="text-sm block mb-2">Senha</label>
        <input type="password" name="password" className="w-full border rounded p-2 mb-4" />
        <button className="w-full py-2 rounded bg-black text-white">Entrar</button>
      </form>
    </main>
  );
}
