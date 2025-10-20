# Testando o Hub de Notificações

## Configuração do Banco de Dados

1. **Execute o script de migração do banco de dados:**
   - O script `scripts/001_create_notification_tables.sql` cria todas as tabelas necessárias
   - Execute-o pela interface do v0 ou pelo painel do Supabase

2. **Verifique se as tabelas foram criadas:**
   - `notification_logs` - armazena todo o histórico de notificações
   - `api_keys` - gerencia chaves de autenticação da API
   - `notification_stats` - estatísticas agregadas por data

## Executando os Testes

### 1. Testar Conexão com o Banco de Dados

Visite: `http://localhost:3000/api/test`

Este endpoint irá:
- Criar uma chave API de teste
- Inserir logs de notificação de exemplo (sucesso e falha)
- Buscar e exibir estatísticas
- Testar funcionalidade de pesquisa

Resposta esperada:
\`\`\`json
{
  "success": true,
  "message": "Todos os testes de banco de dados passaram!",
  "results": {
    "apiKeys": 1,
    "logs": 3,
    "stats": { ... },
    "searchResults": 1
  }
}
\`\`\`

### 2. Testar Painel Administrativo

1. **Login no admin:**
   - Visite: `http://localhost:3000/admin/login`
   - Credenciais padrão: `admin` / `admin123`

2. **Verificar Página de Visão Geral:**
   - Visite: `http://localhost:3000/admin`
   - Deve exibir estatísticas dos dados de teste

3. **Verificar Página de Logs:**
   - Visite: `http://localhost:3000/admin/logs`
   - Deve mostrar as 3 notificações de teste
   - Tente filtrar por status (sucesso/falha)
   - Tente pesquisar por "alerta"

4. **Verificar Página de Chaves API:**
   - Visite: `http://localhost:3000/admin/keys`
   - Deve mostrar a chave API de teste
   - Tente criar uma nova chave
   - Tente ativar/desativar chaves

5. **Verificar Página de Regras:**
   - Visite: `http://localhost:3000/admin/rules`
   - Deve exibir as regras de roteamento atuais
   - Tente editar a configuração JSON

### 3. Limpar Dados de Teste

Envie requisição POST para: `http://localhost:3000/api/test/cleanup`

Isso removerá todos os dados de teste do banco de dados.

## Testes Manuais

### Criar uma notificação via API:

\`\`\`bash
curl -X POST http://localhost:3000/api/notify \
  -H "X-API-Key: SUA_CHAVE_API" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Teste Manual",
    "message": "Testando sistema de notificações",
    "category": "test",
    "priority": "normal",
    "provider": "ntfy"
  }'
\`\`\`

Depois verifique o painel administrativo para ver se aparece nos logs.

## Solução de Problemas

### Erros de conexão com banco de dados:
- Verifique se as variáveis de ambiente do Supabase estão configuradas
- Confirme que as tabelas foram criadas com sucesso
- Certifique-se de que as políticas RLS estão em vigor

### Nenhum dado aparecendo no painel:
- Execute o endpoint de teste primeiro para popular dados
- Verifique o console do navegador por erros
- Verifique se você está logado no painel admin

### Falha na autenticação da chave API:
- Crie uma chave API pelo painel admin
- Use a chave completa incluindo o prefixo `nh_`
- Inclua-a no header `X-API-Key`
