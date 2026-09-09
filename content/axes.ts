export type Axis = {
  id: 1 | 2 | 3 | 4 | 5;
  slug: string;
  title: string;
  message: string;
  summary: string;
};

export const axes: Axis[] = [
  {
    id: 1,
    slug: "eixo-1",
    title: "Ninguém deveria morrer para se deslocar",
    message:
      "Segurança viária é saúde pública. A responsabilidade do Estado é construir um sistema em que erros humanos não sejam punidos com morte.",
    summary: "Segurança viária com Sistema Seguro para proteger quem anda, pedala, motocicleta e usa ônibus.",
  },
  {
    id: 2,
    slug: "eixo-2",
    title: "Transporte Público de Verdade",
    message:
      "Tarifa importa, mas gratuidade sem qualidade não resolve. Transporte coletivo precisa ganhar frequência, velocidade, confiabilidade, conforto e integração.",
    summary: "Frequência, confiabilidade, acessibilidade, integração — e Tarifa Zero como horizonte.",
  },
  {
    id: 3,
    slug: "eixo-3",
    title: "Pernambuco para caminhar, pedalar e transportar",
    message:
      "Bicicleta é transporte, trabalho, logística, turismo, saúde e transição energética. Caminhar é a base de todas as viagens.",
    summary: "Caminhabilidade, rede cicloviária e logística de última milha limpa e humana.",
  },
  {
    id: 4,
    slug: "eixo-4",
    title: "Mobilidade é política climática e urbana",
    message:
      "Calor extremo, enchentes, sombra, moradia e deslocamento fazem parte da mesma agenda. Transição energética precisa ser também transição modal e socialmente justa.",
    summary: "Adaptação climática nas ruas, transição modal e moradia perto do transporte.",
  },
  {
    id: 5,
    slug: "eixo-5",
    title: "Democracia, participação e dinheiro público",
    message:
      "O verdadeiro discurso do governo aparece no orçamento. Política pública precisa de dados abertos, transparência e controle social.",
    summary: "Orçamento aberto, dados públicos e mandato construído com a sociedade.",
  },
];

// Sistema consistente de cor por eixo (item 11 da revisão):
// 1 → laranja, 2 → roxo, 3 → verde, 4 → amarelo, 5 → preto (ink).
// Usar `chip` em labels, filtros e indicadores; `band` em faixas de seção.
export const axisColors: Record<
  1 | 2 | 3 | 4 | 5,
  { band: string; bandText: string; chip: string }
> = {
  1: {
    band: "bg-brand-orange",
    bandText: "text-white",
    chip: "bg-brand-orange text-white",
  },
  2: {
    band: "bg-brand-purple",
    bandText: "text-white",
    chip: "bg-brand-purple text-white",
  },
  3: {
    band: "bg-brand-mint",
    bandText: "text-ink",
    chip: "bg-brand-mint text-ink",
  },
  4: {
    band: "bg-brand-yellow",
    bandText: "text-ink",
    chip: "bg-brand-yellow text-ink",
  },
  5: {
    band: "bg-ink",
    bandText: "text-white",
    chip: "bg-ink text-brand-mint",
  },
};

export const mandateTools = [
  {
    name: "Legislar",
    description:
      "Projetos de lei, emendas, requerimentos, resoluções e outras proposições dentro das competências estaduais.",
  },
  {
    name: "Orçamento",
    description:
      "PPA, LDO, LOA, emendas cabíveis, prioridades de investimento e acompanhamento da execução.",
  },
  {
    name: "Fiscalizar",
    description:
      "Pedidos de informação, audiências, comissões, contratos, indicadores, obras e execução de políticas.",
  },
  {
    name: "Articular",
    description:
      "Pressão política e cooperação com Governo do Estado, municípios, União, bancada federal, órgãos de controle, universidades e sociedade civil.",
  },
];
