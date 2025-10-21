"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { BellRing, Send, Loader2 } from "lucide-react"

export default function NotificacoesPage() {
  const [topic, setTopic] = useState("unicopag")
  const [title, setTitle] = useState("Título de Teste")
  const [message, setMessage] = useState("Mensagem de notificação enviada com sucesso!")
  const [isSending, setIsSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function sendNotification() {
    setIsSending(true)
    setResult(null)

    try {
      const response = await fetch(`https://ntfy.sh/${topic}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          message,
        }),
      })

      if (!response.ok) throw new Error("Falha ao enviar notificação")
      setResult("✅ Notificação enviada com sucesso!")
    } catch (error) {
      console.error(error)
      setResult("❌ Erro ao enviar notificação.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 rounded-full bg-blue-100 p-4 w-fit">
            <BellRing className="h-8 w-8 text-blue-700" />
          </div>
          <CardTitle>Teste de Notificação</CardTitle>
          <CardDescription>
            Envie uma notificação para seu app <b>Ntfy</b> e veja ela aparecer instantaneamente
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Tópico (topic)</label>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: unicopag"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Título</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da notificação"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Mensagem</label>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conteúdo da notificação"
              className="mt-1"
            />
          </div>

          <Button
            onClick={sendNotification}
            disabled={isSending}
            className="w-full flex items-center justify-center gap-2"
          >
            {isSending ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Enviar Notificação
              </>
            )}
          </Button>

          {result && (
            <p
              className={`text-center text-sm mt-2 ${
                result.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </CardContent>
      </Card>

      <p className="text-xs text-slate-500 mt-6 text-center max-w-sm">
        Para testar: abra o app Ntfy no celular, adicione o tópico informado acima (ex: <b>{topic}</b>), 
        e veja a notificação aparecer ao clicar no botão.
      </p>
    </div>
  )
}
