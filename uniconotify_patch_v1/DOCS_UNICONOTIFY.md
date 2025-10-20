# UnicoNotify — Patch v1

Este pacote adiciona rotas de API, páginas de conexões e páginas admin mínimas para resolver erros 404 e permitir testes de integrações.

## O que entra
- `/api/notify`, `/api/test`, `/api/test/cleanup`, `/api/admin/rules/reload`
- `/connections` + páginas de ClickUp, RapidCBK, Email, Jira, Slack, UnicoPag
- `/admin/login`, `/admin`, `/admin/logs`, `/admin/keys`, `/admin/rules`
- `rules.json` e documentação enxuta

## Variáveis sugeridas
- `API_KEY` — protege `/api/notify`
- `NTFY_TOPIC`
- `SLACK_WEBHOOK_URL`
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- `ADMIN_USERNAME`, `ADMIN_PASSWORD`

## Como aplicar
1) Extraia o zip na raiz do seu projeto Next.js (App Router).
2) Ajuste variáveis em `.env.local`.
3) Rode `npm run dev` e acesse `/connections` e `/admin/login`.

## Observação
Endpoints e páginas admin são minimalistas e prontos para evoluir (integração real com Supabase/Logs).
