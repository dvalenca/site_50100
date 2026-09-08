export type TrackRecord = {
  title: string;
  role: string;
  what: string;
  why: string;
  detail?: string[];
};

export const trackRecord: TrackRecord[] = [
  {
    title: "IDECiclo",
    role: "Coordenação e desenvolvimento",
    what: "Índice desenvolvido para medir e comparar o desenvolvimento das políticas cicloviárias.",
    why: "Diante do dado, a prefeitura não escapa: o índice transforma cobrança em números públicos.",
    detail: [
      "Recebeu menção honrosa no Prêmio Bicicleta Brasil 2024 (IDECiclo Nacional).",
      "Recebeu menção honrosa no Promovendo a Mobilidade por Bicicletas 2019.",
    ],
  },
  {
    title: "Pesquisa Perfil do Ciclista",
    role: "Coordenação",
    what: "Coordenação de pesquisas em 2017, 2021 e 2024 para entender quem pedala e como a bicicleta é usada.",
    why: "Quem pedala deixa de ser invisível: a pesquisa dá rosto, renda e rota à ciclista real de Pernambuco.",
  },
  {
    title: "Plataforma de Dados",
    role: "Desenvolvimento de dados",
    what: "Plataforma aberta para organizar e visualizar dados de mobilidade por bicicleta.",
    why: "Dado aberto é poder de cobrança: qualquer pessoa pode conferir o que o poder público fez — e deixou de fazer.",
    detail: [
      "2º lugar no Prêmio Bicicleta Brasil 2024.",
    ],
  },
  {
    title: "Observatório Cicloviário",
    role: "Desenvolvimento",
    what: "Ferramenta de acompanhamento de políticas e infraestrutura cicloviária.",
    why: "A infraestrutura anunciada precisa se converter em quilômetro construído e seguro — e isso se acompanha.",
    detail: [
      "Menção honrosa no Promovendo a Mobilidade por Bicicletas 2024.",
    ],
  },
  {
    title: "Bota pra Rodar",
    role: "Projeto e coordenação",
    what: "Projeto de bicicletas compartilhadas em comunidades de baixa renda, com reaproveitamento de bicicletas e formação profissional.",
    why: "Mobilidade com inclusão: bike reaproveitada, oficina formando mecânico e transporte de graça na ponta.",
    detail: [
      "1º lugar no Promovendo a Mobilidade por Bicicletas 2017.",
    ],
  },
  {
    title: "Recife Parque",
    role: "Consultoria técnica",
    what: "Participação em estudos técnicos de mobilidade urbana para o projeto, contratados pela Prefeitura do Recife via UFPE.",
    why: "Análise técnica de verdade — rede cicloviária, semáforos, fatores de risco e tipologias de infraestrutura — a serviço do espaço público.",
    detail: [
      "Estudos de rede cicloviária, segurança, semáforos, fatores de risco e tipologias de infraestrutura.",
      "Trabalho realizado em 2023–2024.",
    ],
  },
];

export const institutionalWork = [
  {
    period: "desde 2013",
    title: "Ameciclo",
    description:
      "Cofundador, coordenador de projetos, desenvolvedor de dados e estrategista institucional da Associação Metropolitana de Ciclistas do Recife. Projetos associados: Bota pra Rodar, IDECiclo, Pesquisas Perfil do Ciclista, Plataforma de Dados, Observatório Cicloviário, Ciclodados e participação em espaços de planejamento e políticas urbanas.",
  },
  {
    period: "desde 2015",
    title: "União de Ciclistas do Brasil",
    description:
      "Atuação nacional: coordenação do Grupo de Trabalho de Pesquisa, conselheiro do Observatório da Bicicleta e atuação regional no Nordeste.",
  },
  {
    period: "2023–2024",
    title: "Consultoria em mobilidade urbana — Recife Parque",
    description:
      "Trabalho contratado pela Prefeitura do Recife via UFPE para estudos do Recife Parque: rede cicloviária, segurança, semáforos, fatores de risco e tipologias de infraestrutura.",
  },
  {
    period: "2014–2018",
    title: "Observatório do Recife",
    description:
      "Coordenação executiva e coordenação do grupo de mobilidade, com produção e acompanhamento de indicadores urbanos.",
  },
  {
    period: "2010–2014",
    title: "Energia eólica",
    description:
      "Experiência em estudos de potencial energético, projetos e desenvolvimento de parques eólicos.",
  },
  {
    period: "2023",
    title: "Assessoria parlamentar",
    description:
      "Atuação com automação de processos e ferramentas de dados para apoio ao trabalho legislativo.",
  },
];
