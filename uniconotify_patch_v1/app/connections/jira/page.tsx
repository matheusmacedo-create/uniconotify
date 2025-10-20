export default function JiraConnection() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Jira — Configuração</h1>
      <p className="text-gray-700 mb-4">Defina as variáveis de ambiente necessárias e faça um teste.</p>
      <h2 className="font-semibold mt-6 mb-2">Variáveis necessárias</h2>
      <pre className="bg-gray-50 p-4 rounded-lg text-sm">- JIRA_BASE_URL\n- JIRA_EMAIL\n- JIRA_API_TOKEN</pre>
      <h2 className="font-semibold mt-6 mb-2">Exemplo de uso</h2>
      <pre className="bg-gray-50 p-4 rounded-lg text-sm"># Integre eventos de issue e comentários ao /api/notify</pre>
    </main>
  );
}
