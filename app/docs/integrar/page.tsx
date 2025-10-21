export default function IntegrarDocsPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-8 prose">
      <h1>Integração com o UnicoNotify</h1>

      <p>
        O <strong>UnicoNotify</strong> permite enviar notificações de qualquer sistema
        para o seu app de alertas (como <strong>ntfy</strong>, Slack ou Telegram) de forma simples.
      </p>

      <h2>🔑 Endpoint principal</h2>
      <pre>
        POST /api/notify
      </pre>

      <h3>Headers obrigatórios</h3>
      <pre>
        Content-Type: application/json
        x-api-key: SUA_CHAVE (se configurada no .env)
      </pre>

      <h3>Exemplo básico (ntfy)</h3>
      <pre>
        {`curl -X POST https://uniconotify.vercel.app/api/notify \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Pedido Aprovado",
    "message": "O pedido #1029 foi processado com sucesso!",
    "provider": "ntfy",
    "ntfyTopic": "unicopag"
  }'`}
      </pre>

      <h3>Exemplo Slack</h3>
      <pre>
        {`curl -X POST https://uniconotify.vercel.app/api/notify \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Novo lead cadastrado no checkout!",
    "provider": "slack"
  }'`}
      </pre>

      <h3>Exemplo Telegram</h3>
      <pre>
        {`curl -X POST https://uniconotify.vercel.app/api/notify \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Aviso de Pagamento",
    "message": "Pix recebido no valor de R$200,00.",
    "provider": "telegram"
  }'`}
      </pre>

      <h2>⚙️ Integração via RapidCBK (exemplo)</h2>
      <p>
        Caso utilize o RapidCBK como middleware de callbacks, configure o endpoint
        de notificação no seu painel como:
      </p>
      <pre>
        https://uniconotify.vercel.app/api/notify
      </pre>

      <h2>🧩 Resumo das variáveis necessárias</h2>
      <ul>
        <li><code>NTFY_TOPIC</code> – nome do tópico (ex: unicopag)</li>
        <li><code>SLACK_WEBHOOK_URL</code> – URL de webhook do Slack</li>
        <li><code>TELEGRAM_BOT_TOKEN</code> e <code>TELEGRAM_CHAT_ID</code></li>
        <li><code>API_KEY</code> (opcional, segurança extra)</li>
      </ul>

      <h2>🧠 Dica</h2>
      <p>
        Use o endpoint <code>/api/test</code> para confirmar que sua aplicação está ativa
        e <code>/api/notify</code> para enviar mensagens reais.
      </p>

      <p>
        Após enviar, abra o app ntfy e verifique se o tópico configurado
        (ex: <code>unicopag</code>) recebeu a notificação.
      </p>

      <p>
        👉 Para mais exemplos, veja <a href="/connections">/connections</a>.
      </p>
    </main>
  );
}
