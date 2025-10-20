export default function DocsPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-8 prose">
      <h1>Documentação — UnicoNotify</h1>
      <p>Endpoints principais:</p>
      <ul>
        <li><code>/api/notify</code> — envio de notificações</li>
        <li><code>/api/test</code> — sanity check</li>
        <li><code>/api/test/cleanup</code> — limpa dados de teste</li>
        <li><code>/api/admin/rules/reload</code> — recarrega regras</li>
      </ul>
      <p>Páginas:</p>
      <ul>
        <li><code>/connections</code> — central de integrações</li>
        <li><code>/admin/login</code> — login do admin</li>
        <li><code>/admin</code>, <code>/admin/logs</code>, <code>/admin/keys</code>, <code>/admin/rules</code></li>
      </ul>
    </main>
  );
}
