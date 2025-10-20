# Hub de Notificações Gratuito

Sistema de notificações de custo zero usando provedores gratuitos (ntfy e Telegram Bot).

## 🎯 Características

- **Custo Zero**: Usa provedores gratuitos (ntfy público/self-hosted e Telegram Bot)
- **Roteamento Inteligente**: Sistema de regras para rotear notificações por categoria/prioridade
- **Horário Silencioso**: Configurável com lista de permissões de categorias
- **Rate Limiting**: Proteção integrada contra abuso
- **Painel Administrativo**: Interface web para gerenciar logs, chaves API e regras
- **Bibliotecas Cliente**: Clientes Python e JavaScript incluídos
- **Pronto para Docker**: Inclui servidor ntfy self-hosted opcional

## 🚀 Início Rápido

### 1. Configuração

\`\`\`bash
# Clone o repositório
git clone <seu-repo>
cd notification-hub

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas credenciais
\`\`\`

### 2. Configure o Banco de Dados

Execute o script SQL em `scripts/001_create_notification_tables.sql` no seu banco Supabase.

### 3. Inicie o Servidor

\`\`\`bash
npm run dev
\`\`\`

Visite `http://localhost:3000` para acessar a aplicação.

### 4. Acesse o Painel Admin

- URL: `http://localhost:3000/admin/login`
- Credenciais padrão: `admin` / `admin123`
- Configure via variáveis `ADMIN_USERNAME` e `ADMIN_PASSWORD`

## 📡 Uso da API

### Enviar Notificação

\`\`\`bash
POST /api/notify
Headers:
  X-API-Key: sua_chave_api
  Content-Type: application/json

Body:
{
  "title": "Título",
  "message": "Mensagem",
  "category": "general | alerts | sales ...",
  "priority": "low | normal | high | emergency",
  "tags": ["sistema","info"],
  "provider": "ntfy | telegram | both",
  "ntfyTopic": "sobrescrever-topico",
  "attachUrl": "https://imagem.png"
}
\`\`\`

## 🔧 Configuração de Regras

Edite `rules.json` para customizar rotas:

\`\`\`json
{
  "routes": [
    {
      "name": "Alertas críticos -> ambos",
      "match": {"category": "alerts", "priority": ["high","emergency"]},
      "provider": "both",
      "overrides": {"priority": "emergency","tags": ["alerta","crítico"]}
    },
    {
      "name": "Vendas -> telegram",
      "match": {"category":"sales"},
      "provider":"telegram",
      "overrides": {}
    },
    {
      "name": "Padrão -> ntfy",
      "match": {},
      "provider": "ntfy",
      "overrides": {}
    }
  ],
  "quietHours": {
    "respect": true,
    "allowlistCategories": ["alerts"],
    "fallbackPriorityDuringQuiet": "low"
  }
}
\`\`\`

Recarregue regras sem reiniciar:
\`\`\`bash
POST /api/admin/rules/reload (com X-API-Key)
\`\`\`

## 🔒 Segurança

- Com ntfy público (https://ntfy.sh), use tópicos "randômicos" (ex.: meu-topico-3c8a4d8f)
- Em produção, prefira self-host com autenticação do ntfy
- Nunca exponha seu hub sem `API_KEY` forte
- Ative HTTPS no seu proxy (Nginx/Traefik) se publicar na internet

## 📚 Bibliotecas Cliente

### Python
\`\`\`python
from client import NotificationClient
cl = NotificationClient("http://localhost:3000", "sua_api_key")
cl.send("Título", "Mensagem", category="sales", priority="high")
cl.send_critical("ALERTA!", "Problema crítico")
\`\`\`

### Node/JS
\`\`\`javascript
import { NotificationClient } from './client.js';
const cl = new NotificationClient("http://localhost:3000", "sua_api_key");
await cl.send("Olá", "Mensagem");
\`\`\`

## 📊 Painel Administrativo

O painel admin fornece:
- **Visão Geral**: Estatísticas e métricas em tempo real
- **Logs**: Histórico completo de notificações com pesquisa e filtros
- **Chaves API**: Gerenciamento de chaves de autenticação
- **Regras**: Editor visual e JSON para configuração de roteamento

## 🐳 Docker

\`\`\`bash
# Inicie com ntfy self-hosted
docker-compose up -d

# Hub: http://localhost:3000
# ntfy: http://localhost:2586
\`\`\`

## 📝 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.
