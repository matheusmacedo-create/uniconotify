export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
        background: "#f7f9fb",
        color: "#222",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        🚀 Uniconotify
      </h1>
      <p style={{ maxWidth: "600px", lineHeight: 1.6 }}>
        Seu hub de notificações está online! <br />
        Envie requisições para <code>/api/notify</code> para testar o envio via
        <strong> ntfy </strong> ou <strong>Telegram</strong>.
      </p>
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#666" }}>
        Desenvolvido com Next.js + Supabase + ntfy
      </p>
    </main>
  );
}
