import os

# Diretório e arquivo
output_dir = "/mnt/data/app"
os.makedirs(output_dir, exist_ok=True)
file_path = os.path.join(output_dir, "page.tsx")

# Novo conteúdo atualizado com design e ícones
page_content = """import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #f0f6ff 0%, #ffffff 100%)",
        color: "#1a1a1a",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          background: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          borderRadius: "16px",
          padding: "2rem 3rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          🚀 Uniconotify
        </h1>
        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem" }}>
          Conecte suas ferramentas favoritas e envie notificações instantâneas.  
          <br />
          <strong>Gratuito, seguro e de fácil integração.</strong>
        </p>

        {/* Ícones das integrações */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            width={50}
            height={50}
          />
          <Image
            src="https://ntfy.sh/static/img/logo.svg"
            alt="ntfy"
            width={50}
            height={50}
          />
          <Image
            src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
            alt="Supabase"
            width={50}
            height={50}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Next.js_logo.svg"
            alt="Next.js"
            width={50}
            height={50}
          />
        </div>

        {/* Botões de ação */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/docs/integrar"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            ⚙️ Integrar
          </a>
          <a
            href="/api/notify"
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            📤 Disparar Notificação
          </a>
        </div>

        <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#777" }}>
          Desenvolvido com <strong>Next.js</strong> + <strong>Supabase</strong> + <strong>ntfy</strong>
        </p>
      </div>
    </main>
  );
}
"""

# Criar o arquivo
with open(file_path, "w") as f:
    f.write(page_content)

file_path
