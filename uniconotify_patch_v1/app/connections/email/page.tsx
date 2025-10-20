export default function EmailConnection() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Email — Configuração</h1>
      <p className="text-gray-700 mb-4">Defina as variáveis de ambiente necessárias e faça um teste.</p>
      <h2 className="font-semibold mt-6 mb-2">Variáveis necessárias</h2>
      <pre className="bg-gray-50 p-4 rounded-lg text-sm">- SMTP_HOST\n- SMTP_PORT\n- SMTP_USER\n- SMTP_PASS\n- EMAIL_FROM</pre>
      <h2 className="font-semibold mt-6 mb-2">Exemplo de uso</h2>
      <pre className="bg-gray-50 p-4 rounded-lg text-sm"># Use seu transporte SMTP no backend para enviar mensagens</pre>
    </main>
  );
}
