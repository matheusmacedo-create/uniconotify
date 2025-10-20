# Guia de Instalação - Hub de Notificações

## Pré-requisitos

- Conta no Supabase (gratuita)
- Node.js 18+ instalado
- Variáveis de ambiente configuradas

## Passo 1: Configurar Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um novo projeto
2. Aguarde a criação do projeto (pode levar alguns minutos)
3. Copie as credenciais do projeto:
   - URL do projeto
   - Chave anônima (anon key)
   - Chave de serviço (service role key)

## Passo 2: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role

# Admin (opcional - padrão: admin/admin123)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
\`\`\`

## Passo 3: Criar Tabelas no Banco de Dados

### Opção A: Via SQL Editor do Supabase (Recomendado)

1. Acesse seu projeto no Supabase
2. Vá em **SQL Editor** no menu lateral
3. Clique em **New Query**
4. Copie todo o conteúdo do arquivo `scripts/001_create_notification_tables.sql`
5. Cole no editor SQL
6. Clique em **Run** para executar o script

### Opção B: Via v0 (se disponível)

Se você estiver usando o v0, ele pode executar o script automaticamente para você.

## Passo 4: Verificar Instalação

1. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

2. Acesse `http://localhost:3000/admin/login`

3. A página de login irá verificar automaticamente se as tabelas foram criadas

4. Se aparecer um erro de "Banco de dados não inicializado":
   - Volte ao Passo 3 e execute o script SQL
   - Clique em "Verificar Novamente" na página de login

5. Se aparecer "Banco de dados inicializado com sucesso!", você pode fazer login com:
   - Usuário: `admin`
   - Senha: `admin123`

## Passo 5: Testar a Aplicação

Após fazer login, você pode testar a aplicação:

1. Acesse `http://localhost:3000/api/test` para criar dados de teste
2. Veja os logs em **Logs** no painel administrativo
3. Verifique as estatísticas na página inicial do admin

## Estrutura das Tabelas Criadas

O script SQL cria as seguintes tabelas:

- **notification_logs**: Armazena todos os logs de notificações enviadas
- **api_keys**: Gerencia as chaves de API para autenticação
- **notification_stats**: Estatísticas agregadas por dia

Também cria:
- Índices para melhor performance
- Políticas RLS (Row Level Security)
- Triggers para atualização automática de estatísticas

## Solução de Problemas

### Erro: "Could not find the table"

**Causa**: As tabelas não foram criadas no banco de dados.

**Solução**: Execute o script SQL conforme o Passo 3.

### Erro: "Unauthorized" ou "Invalid API key"

**Causa**: Variáveis de ambiente não configuradas corretamente.

**Solução**: 
1. Verifique se o arquivo `.env.local` existe
2. Confirme que as chaves do Supabase estão corretas
3. Reinicie o servidor de desenvolvimento

### Erro: "Failed to connect to server"

**Causa**: Servidor não está rodando ou porta ocupada.

**Solução**:
1. Certifique-se de que executou `npm run dev`
2. Verifique se a porta 3000 está disponível
3. Tente usar outra porta: `PORT=3001 npm run dev`

## Próximos Passos

Após a instalação bem-sucedida:

1. **Criar Chaves de API**: Vá em "Chaves API" no painel admin
2. **Configurar Regras**: Personalize as regras de roteamento em "Regras"
3. **Integrar com sua Aplicação**: Use as chaves de API criadas para enviar notificações

## Segurança em Produção

Antes de colocar em produção:

1. **Altere as credenciais de admin** via variáveis de ambiente
2. **Use HTTPS** (Vercel faz isso automaticamente)
3. **Proteja suas chaves de API** - nunca as exponha no frontend
4. **Configure RLS adequadamente** se necessário para seu caso de uso
5. **Monitore os logs** regularmente para detectar uso indevido

## Suporte

Se encontrar problemas:

1. Verifique os logs do navegador (F12 > Console)
2. Verifique os logs do Supabase (Dashboard > Logs)
3. Consulte a documentação do Supabase: [supabase.com/docs](https://supabase.com/docs)
