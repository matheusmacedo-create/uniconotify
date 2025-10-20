export const metadata = {
  title: "Uniconotify",
  description: "Hub de notificações gratuito com Supabase e ntfy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
