# Daniel Valença — Site

Site oficial da campanha de **Daniel Valença**, candidato a **Deputado Estadual por Pernambuco — PSOL-PE — número 50.100**. Slogan: **A rua é do povo**.

Construído com Next.js (App Router), TypeScript e Tailwind CSS, majoritariamente estático.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Instalação

```bash
npm install
cp .env.example .env.local
```

## Desenvolvimento

```bash
npm run dev
```

Abra <http://localhost:3000>.

## Estrutura do conteúdo

Todo o conteúdo editável fica em `content/`:

| Arquivo | Conteúdo |
| --- | --- |
| `content/site.ts` | Nome, número, partido, slogan e links configuráveis |
| `content/bio.ts` | Biografia, fatos, linha do tempo, prêmios, publicações e posicionamentos |
| `content/axes.ts` | Os cinco eixos do programa e as ferramentas do mandato |
| `content/proposals.ts` | As 18 propostas (modelo de dados em `Proposal`) |
| `content/track-record.ts` | Projetos ("Daniel já fez") e atuação institucional |
| `content/donate.ts` | Configuração de doação: valores sugeridos, impactos, meta e prova social |

## Como editar propostas

Edite `content/proposals.ts`. Cada proposta segue o modelo:

```ts
{
  number: 1,
  slug: "visao-zero-pernambuco", // define a URL /propostas/<slug>
  axis: 1, // eixo de 1 a 5
  title: "Visão Zero Pernambuco",
  tagline: "Nenhuma morte no trânsito é inevitável.",
  problem: "…",      // "O problema"
  proposal: "…",     // "O que propomos"
  actions: ["…"],    // "O que o mandato fará"
  tools: ["legislar", "orçamento", "fiscalizar", "articular"],
  goal: "…",         // "Onde queremos chegar"
}
```

A página individual, o sitemap e a listagem são gerados automaticamente a partir desse arquivo.

## Como trocar fotos

As fotos ainda não foram disponibilizadas, então o site exibe **placeholders** (`components/PhotoPlaceholder.tsx`). Para publicar fotos reais:

1. Converta para WebP ou AVIF e coloque em `public/photos/` (ex.: `daniel-hero.webp`).
2. Substitua o componente `PhotoPlaceholder` por `next/image` no local correspondente, com `alt` descritivo.
3. Nunca use banco de imagens — apenas fotos reais fornecidas pela campanha.

O logo oficial (`public/brand/`) deve ser usado como imagem quando for fornecido; não recrie o logo com fonte aproximada.

## Como configurar links

Os links oficiais da campanha (doação via Quero Apoiar, Instagram, comunidade de avisos e grupo de voluntariado no WhatsApp) já vêm como padrão em `content/site.ts`. Para sobrescrever, defina as variáveis correspondentes em `.env.local` (desenvolvimento) ou na Vercel (produção):

### Doação (valores, meta e prova social)

Edite `content/donate.ts`:

- `suggestedAmounts`: valores âncora (R$ 25/50/100) e o texto de impacto de cada um. **Não invente equivalências** — preencha o `impact` só quando houver custo real calculado pela campanha.
- `goal`: meta de arrecadação (`{ raised, target, deadline }`). O termômetro aparece só quando `target > 0`.
- `supporters`: número de pessoas que já contribuíram. A frase de prova social aparece só quando preenchido.

O botão de doação usa `NEXT_PUBLIC_DONATION_URL`; sem URL configurada, os CTAs apontam para a página `/doe` com aviso.

| Variável | Efeito quando vazia |
| --- | --- |
| `NEXT_PUBLIC_DONATION_URL` | Botões "Doe agora" apontam para a página `/doe` com aviso de plataforma em configuração |
| `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_WHATSAPP_URL` | Links ficam ocultos no rodapé e nos CTAs |
| `NEXT_PUBLIC_GROUP_URL` / `NEXT_PUBLIC_MATERIALS_URL` | Botões ficam ocultos na seção "Faça parte" |
| `NEXT_PUBLIC_CAMPAIGN_EMAIL` | E-mail não aparece |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Formulário de participação é substituído por aviso |

Nunca coloque segredos em variáveis `NEXT_PUBLIC_*` — elas são públicas no bundle.

## Variáveis de ambiente

Ver `.env.example`. Não comitte `.env.local`.

## Build

```bash
npm run build
```

Validações:

```bash
npm run lint
npm run typecheck
```

## Deploy na Vercel

1. Faça push do repositório para o GitHub (branch `main`).
2. Importe o projeto na Vercel (framework Next.js detectado automaticamente).
3. Configure as variáveis de ambiente em Settings → Environment Variables.
4. Domínio pretendido: `danielvalenca.com.br` (confirmar antes de alterar o DNS).
5. A Vercel gera preview automático por PR e deploy de produção no push para `main`.

## GitHub Actions

O workflow `.github/workflows/ci.yml` roda `lint`, `typecheck` e `build` em cada push/PR. Ele valida o código; a hospedagem fica na Vercel.

## Acessibilidade

- Meta WCAG 2.2 AA.
- Navegação por teclado com foco visível e skip link ("Pular para o conteúdo").
- Landmarks semânticos, headings em ordem lógica, `aria-*` nos componentes interativos.
- Contraste verificado na paleta oficial; texto nunca depende só de cor.
- `prefers-reduced-motion` respeitado (animações desativadas).
- Formulários com labels reais, consentimento e estados anunciados com `aria-live`.
