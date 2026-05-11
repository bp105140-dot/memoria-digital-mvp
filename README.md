# Memoria Digital MVP

MVP funcional para presentes digitais personalizados com Next.js, Supabase e deploy na Vercel.

## O que ja esta funcional

- Landing page de venda
- Login por link magico
- Criador de presente em etapas
- Upload de fotos para Supabase Storage
- Timeline com eventos personalizados
- Escolha de tema visual
- Salvar rascunho
- Publicar presente
- Painel do comprador
- Pagina publica em `/g/[slug]`

## Stack

- Next.js
- React
- Supabase Auth
- Supabase Database
- Supabase Storage
- Vercel

## Como configurar

1. Instale as dependencias:

```bash
npm install
```

2. Copie `.env.example` para `.env.local` e preencha:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

3. No Supabase SQL Editor, rode o arquivo:

`supabase/schema.sql`

4. Inicie o projeto:

```bash
npm run dev
```

5. Abra `http://localhost:3000`

## Como subir na Vercel

1. Importe o repositório no painel da Vercel
2. Configure as variaveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy

## Proximo passo recomendado

Integrar checkout com Pix e webhooks para que a publicacao final dependa do pagamento aprovado, como definido no PRD.
