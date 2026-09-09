export type Proposal = {
  number: number;
  slug: string;
  axis: 1 | 2 | 3 | 4 | 5;
  title: string;
  tagline: string;
  problem: string;
  proposal: string;
  actions: string[];
  tools: string[];
  goal: string;
};

export const proposals: Proposal[] = [
  {
    number: 1,
    slug: "visao-zero-pernambuco",
    axis: 1,
    title: "Visão Zero Pernambuco",
    tagline: "Zero mortes no trânsito é o objetivo.",
    problem:
      "No trânsito de Pernambuco, gente morre atropelada, pedalando, indo trabalhar de moto ou esperando o ônibus. O poder público trata cada uma dessas mortes como azar, como fatalidade. Não é. Qualquer pessoa pode errar — mas a rua, a velocidade, a fiscalização e o socorro podem ser organizados para que o erro não termine em morte.",
    proposal:
      "Criar uma política estadual permanente de segurança viária, baseada no Sistema Seguro, com metas públicas de redução de mortes e ferimentos graves — priorizando quem anda a pé, pedala, anda de moto e usa ônibus.",
    actions: [
      "Metas públicas, anuais e plurianuais, de redução de mortes e ferimentos graves",
      "Auditoria de cada morte e ocorrência grave, para aprender e corrigir",
      "Velocidade segura e ruas desenhadas para perdoar o erro humano",
      "Prioridade de proteção a pedestres, ciclistas, motociclistas e passageiros",
      "Fiscalização concentrada onde o risco é maior",
      "Educação no trânsito baseada em evidência, não em palestra de vitrine",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Um Pernambuco onde o número de mortes no trânsito cai todo ano — e onde a vida vale mais do que a velocidade.",
  },
  {
    number: 2,
    slug: "municipios-pela-vida",
    axis: 1,
    title: "Municípios pela Vida",
    tagline: "O Estado deve premiar quem protege pessoas, não quem constrói mais asfalto.",
    problem:
      "Hoje, município ganha convênio e destaque por obra nova e asfalto. Prefeitura que investe em calçada, travessia e redução de velocidade — que é o que salva vida — quase não recebe reconhecimento. E cidade pequena, sem equipe técnica, fica sem ajuda para fazer qualquer coisa disso.",
    proposal:
      "Criar um programa estadual que dá prioridade técnica e financeira aos municípios que adotarem medidas comprovadas de redução de risco no trânsito.",
    actions: [
      "Critérios claros e públicos para entrar no programa",
      "Prioridade em convênios e assistência técnica do Estado",
      "Avaliação por resultado entregue, não por obra anunciada",
      "Apoio dedicado às prefeituras de cidades pequenas",
      "Troca de experiências entre cidades que estão dando certo",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Uma rede de cidades premiadas por proteger quem circula nas suas ruas — com o Estado empurrando para o lado da vida.",
  },
  {
    number: 3,
    slug: "rodovias-que-nao-matam",
    axis: 1,
    title: "Rodovias que Não Matam",
    tagline: "Estrada estadual também é lugar de gente: caminhando, pedalando, esperando ônibus e atravessando.",
    problem:
      "As rodovias estaduais cortam bairros e comunidades. Gente atravessa a pé para ir à escola, espera ônibus no acostamento, pedala na margem. Mas duplicação, restauração e requalificação seguem sendo projetadas como se na estrada só existisse carro.",
    proposal:
      "Exigir que toda obra em rodovia estadual — implantação, duplicação, restauração ou requalificação — inclua infraestrutura segura para quem caminha, pedala, espera e atravessa.",
    actions: [
      "Ciclovia separada do carro onde existe demanda",
      "Calçada e acessibilidade nos trechos urbanizados",
      "Velocidade adequada a cada trecho",
      "Fiscalização moderna",
      "Negociação com a União por ciclovia e travessia nas BRs",
      "Ponto de ônibus com embarque seguro",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Rodovia que serve também a quem vive ao lado dela — com travessia segura, sombra e espaço para quem anda devagar.",
  },
  {
    number: 4,
    slug: "transporte-publico-de-verdade",
    axis: 2,
    title: "Transporte Público de Verdade",
    tagline: "Ônibus bom é ônibus que chega: passa com frequência, anda rápido e embarca todo mundo.",
    problem:
      "Quem depende de ônibus conhece o roteiro: esperar sem saber se ele vem, carro lotado, viagem lenta no engarrafamento, cadeirante que não consegue subir. Sem padrão público medido e cobrado, qualidade fica só no discurso.",
    proposal:
      "Estabelecer padrões públicos, verificáveis e cobráveis de frequência, lotação, velocidade, acessibilidade, conforto, informação e confiabilidade no transporte coletivo.",
    actions: [
      "Mais frequência nas linhas",
      "Frota realmente em operação",
      "Piso baixo ou embarque em nível",
      "Climatização e conforto",
      "Informação em tempo real",
      "Revisão periódica da rede",
      "Faixas e corredores exclusivos",
      "Acessibilidade universal",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Um transporte coletivo em que cada padrão é público, medido e cobrado — porque ônibus bom é ônibus que chega, passa com frequência e anda.",
  },
  {
    number: 5,
    slug: "pernambuco-nos-trilhos",
    axis: 2,
    title: "Pernambuco nos Trilhos",
    tagline: "Metrô, trem e VLT devem estruturar o desenvolvimento — não ser tratados como um problema a ser repassado.",
    problem:
      "O sistema sobre trilhos do estado sofre com degradação e perda de confiabilidade, e as concessões acontecem sem transparência suficiente. Enquanto isso, o modo que mais gente carrega por hora fica de fora das decisões principais de mobilidade.",
    proposal:
      "Defender um sistema de metrô, trem e VLT público, recuperado, ampliado e integrado — tratado como espinha dorsal da mobilidade de Pernambuco.",
    actions: [
      "Fiscalização e transparência sobre os processos de concessão",
      "Recuperar infraestrutura e confiabilidade",
      "Expandir metrô, trem e VLT onde fizer sentido",
      "Integração física e tarifária",
      "Bicicletário e acesso seguro às estações",
      "Ferrovias intermunicipais de passageiros",
      "Crescimento da cidade junto de metrô, trem e corredor de ônibus",
    ],
    tools: ["orçamento", "fiscalizar", "articular", "mobilizar"],
    goal:
      "Metrô, trem e VLT tratados como política de Estado: recuperados, ampliados e integrados ao território.",
  },
  {
    number: 6,
    slug: "pernambuco-conectado",
    axis: 2,
    title: "Pernambuco Conectado",
    tagline: "Quem vive no interior merece saber, com antecedência, como chegar à cidade vizinha.",
    problem:
      "Boa parte do transporte intermunicipal — van, lotação, barco, travessia — funciona sem informação pública reunida em lugar nenhum. Planejar uma viagem no interior é tentativa e erro, na boca do povo.",
    proposal:
      "Reunir e publicar, num mapa e num planejador oficiais, as rotas, horários, tarifas e pontos do transporte intermunicipal — incluindo vans, lotações e travessias.",
    actions: [
      "Mapa público de rotas, horários, tarifas e pontos",
      "Planejador público de viagens",
      "Qualificação das redes que já são úteis",
      "Integração com barcos e travessias",
      "Informação sobre como viajar com bicicleta",
      "Planejamento baseado na demanda real",
    ],
    tools: ["legislar", "fiscalizar", "articular", "dados"],
    goal:
      "Qualquer pessoa, em qualquer município, consegue planejar sua viagem com informação pública, clara e atualizada.",
  },
  {
    number: 7,
    slug: "tarifa-zero",
    axis: 2,
    title: "Tarifa Zero",
    tagline: "Transporte coletivo é direito à cidade, não mercadoria de catraca.",
    problem:
      "A passagem pesa todo dia no orçamento de quem depende de ônibus para trabalhar e estudar. E como é o dinheiro do bilhete que sustenta o sistema, o serviço cresce atrás da arrecadação — atrás da função social do transporte.",
    proposal:
      "Defender a Tarifa Zero universal: gratuidade financiada com dinheiro público de fora da catraca, sem abrir mão das metas de frequência, conforto e confiabilidade.",
    actions: [
      "Construir a gratuidade como horizonte imediato",
      "Financiamento de fora da catraca",
      "Qualidade junto com gratuidade",
      "Integração metropolitana e intermunicipal",
      "Articulação por financiamento federal",
      "Bicicleta compartilhada integrada",
    ],
    tools: ["orçamento", "fiscalizar", "articular", "legislar"],
    goal:
      "Um transporte coletivo tratado como serviço público e direito à cidade — gratuito, frequente e de qualidade.",
  },
  {
    number: 8,
    slug: "novo-pedala-pe",
    axis: 3,
    title: "Novo Pedala PE",
    tagline: "Pernambuco já teve um programa estadual da bicicleta. É hora de reconstruí-lo bem maior.",
    problem:
      "O Pedala PE foi importante, mas vireu sazonal e acabou. Hoje, a bicicleta — meio de transporte e de trabalho para muita gente — não tem no estado um programa com metas, verba e alcance à altura.",
    proposal:
      "Recriar e ampliar o Pedala PE como política permanente de mobilidade por bicicleta em Pernambuco.",
    actions: [
      "Atualizar o Plano Diretor Cicloviário da RMR — o plano das ciclovias da região metropolitana do Recife",
      "Rede ciclável com conexões entre municípios",
      "Bicicletário nas repartições públicas",
      "Bicicleta pública e comunitária",
      "Formação de mecânicos e oficinas-escola",
      "Cicloturismo",
      "Fortalecimento da cadeia produtiva",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "A bicicleta tratada como política de Estado: rede conectada, economia local fortalecida e liberdade real de escolher como se deslocar.",
  },
  {
    number: 9,
    slug: "pedala-vale",
    axis: 3,
    title: "Pedala Vale",
    tagline: "Quem pedala faz um favor para a cidade inteira. A política pública pode reconhecer isso.",
    problem:
      "Quem pedala ocupa menos espaço, não polui e tira carro da rua — mas nenhum reconhecimento chega a quem faz isso todo dia, com energia própria.",
    proposal:
      "Testar um programa estadual de incentivo para quem se desloca de bicicleta, começando por experiências controladas e avaliação de resultado antes de expandir.",
    actions: [
      "Crédito de deslocamento para quem pedala",
      "Benefícios públicos",
      "Estudo de incentivos tributários juridicamente possíveis",
      "Bônus em programas com trabalhadores",
      "Privacidade e alternativa para quem não usa smartphone",
      "Avaliação de resultado antes da expansão",
    ],
    tools: ["legislar", "articular", "pilotos", "avaliar"],
    goal:
      "Um programa testado e avaliado em que quem escolhe a bicicleta recebe um benefício concreto — e público.",
  },
  {
    number: 10,
    slug: "caminhos-para-pessoas",
    axis: 3,
    title: "Caminhos para Pessoas",
    tagline: "Toda viagem começa e termina a pé.",
    problem:
      "Calçada esburacada, travessia perigosa, sol na cabeça e iluminação ruim: quem mais sofre é quem tem menos opção — pessoa idosa, com deficiência, criança, quem usa ônibus. Caminhar, que é o começo e o fim de toda viagem, é a parte mais esquecida da mobilidade.",
    proposal:
      "Criar uma agenda estadual para as cidades ficarem boas de caminhar: calçada, travessia, sombra e acessibilidade — o que os técnicos chamam de caminhabilidade.",
    actions: [
      "Calçadas nos corredores estaduais",
      "Travessias seguras",
      "Rotas escolares",
      "Iluminação na escala humana",
      "Desenho universal",
      "Arborização, sombra e lugar de descanso",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Ruas onde caminhar é seguro, sombreado e confortável — em qualquer idade e condição.",
  },
  {
    number: 11,
    slug: "micrologistica-de-baixo-carbono",
    axis: 3,
    title: "Entregas Limpas na Cidade",
    tagline: "A bicicleta também carrega comida, mercadoria, ferramenta e renda.",
    problem:
      "O trecho final das entregas dentro das cidades — o que o setor chama de “última milha” — está dominado por carro e moto que poluem, ocupam espaço e colocam gente em risco. E quem entrega de bicicleta trabalha sem apoio: sem água, sem banheiro, sem descanso e sem proteção.",
    proposal:
      "Criar uma política estadual para deixar o trecho final das entregas mais limpo e mais humano — e para proteger quem trabalha entregando.",
    actions: [
      "Pequenos centros de distribuição espalhados pela cidade (microhubs)",
      "Cargobike e bicicleta elétrica para entrega",
      "Entrega limpa como critério nas compras do Estado",
      "Ponto de apoio com água, banheiro, descanso e tomada",
      "Proteção social para quem entrega de bicicleta",
      "Menos caminhão e van pesados em áreas cheias de gente",
    ],
    tools: ["legislar", "compras públicas", "articular", "infraestrutura"],
    goal:
      "Entrega limpa, silenciosa e humana — e quem entrega de bicicleta tratado como trabalhador, não como força invisível.",
  },
  {
    number: 12,
    slug: "transicao-energetica-da-mobilidade",
    axis: 4,
    title: "Transição Energética da Mobilidade",
    tagline: "Eletrificar é necessário. Depender menos do carro é ainda mais.",
    problem:
      "A política de energia fala de mobilidade como se o problema fosse só o motor: trocar combustão por elétrico e pronto. A ordem certa é outra — primeiro evitar deslocamento desnecessário, depois passar viagens para caminhada, bicicleta e ônibus, fortalecer os trilhos e só então eletrificar o que precisa mesmo continuar motorizado.",
    proposal:
      "Unir transição de energia e mudança de modo de transporte numa estratégia estadual única: mais caminhada, bicicleta, ônibus e trilho — e eletrificação do que sobrar.",
    actions: [
      "Prioridade a investimentos que gerem viagens sustentáveis",
      "Ônibus elétrico com infraestrutura para operar",
      "Energia renovável para a mobilidade",
      "Conversão responsável das frotas públicas",
      "Bicicleta e caminhada como parte da redução de emissões",
      "Transição justa, sem subsídio que beneficie só quem tem carro",
    ],
    tools: ["orçamento", "fiscalizar", "legislar", "articular"],
    goal:
      "Pernambuco na frente da transição energética — mudando o modo de transporte, e não só o motor, sem aprofundar desigualdades.",
  },
  {
    number: 13,
    slug: "ruas-preparadas-para-o-clima",
    axis: 4,
    title: "Ruas Preparadas para o Clima",
    tagline: "Sombra, água e abrigo também são infraestrutura.",
    problem:
      "Quem espera ônibus ao sol, caminha sem sombra e pedala na chuva sente na pele: o clima já mudou. Calor extremo e enchentes batem mais forte em quem circula a pé, de bicicleta e de ônibus — e o desenho das ruas segue fingindo que nada aconteceu.",
    proposal:
      "Incorporar a adaptação ao clima no desenho das ruas e na política de mobilidade do estado.",
    actions: [
      "Bebedouro público",
      "Arborização e sombra",
      "Abrigo de ônibus de verdade",
      "Drenagem planejada junto com a mobilidade",
      "Pavimento permeável e infraestrutura verde",
      "Mapa de vulnerabilidade cruzando calor, enchente, renda e mobilidade",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Ruas que enfrentam o clima: sombreadas, drenadas e com água, abrigo e descanso para quem circula.",
  },
  {
    number: 14,
    slug: "morar-perto",
    axis: 4,
    title: "Morar Perto",
    tagline: "Morar longe de tudo é um imposto de tempo que família pobre paga todo dia.",
    problem:
      "A moradia popular é empurrada para a periferia distante — e a conta chega em horas de ônibus e dinheiro de passagem. Remoção injusta e segregação territorial transformam o deslocamento em imposto sobre a vida de quem já tem menos.",
    proposal:
      "Aproximar habitação, planejamento territorial e transporte — tratando custo e tempo de deslocamento como critério central da política habitacional.",
    actions: [
      "Moradia perto de transporte de alta capacidade",
      "Função social para terrenos públicos bem localizados",
      "Fiscalização de remoções e desapropriações",
      "Moradia e serviço perto do transporte, com proteção contra expulsão",
      "Custo e tempo de deslocamento como critério da política habitacional",
    ],
    tools: ["orçamento", "fiscalizar", "articular", "planejamento"],
    goal:
      "Cidade e região metropolitana em que morar perto do que se precisa é regra — e privilégio de ninguém.",
  },
  {
    number: 15,
    slug: "85-para-os-85",
    axis: 5,
    title: "85 para os 85",
    tagline: "A maioria anda, pedala e usa ônibus. A prioridade do Estado deveria ser essa maioria.",
    problem:
      "A maior parte das pessoas em Pernambuco se desloca sem carro — a pé, de bicicleta, de moto ou de ônibus. Mas o orçamento, o espaço da rua e a atenção dos governos seguem concentrados no modo que carrega menos gente. A prioridade real do dinheiro público está descolada da maioria.",
    proposal:
      "Direcionar a prioridade da política de mobilidade do estado para os modos coletivos e ativos — redistribuindo orçamento, espaço viário, investimento e atenção política.",
    actions: [
      "A maior parte dos investimentos para transporte coletivo, caminhada, bicicleta, acessibilidade e segurança",
      "Redistribuição de espaço nos grandes corredores",
      "Pressão anual nas três peças do orçamento do Estado (PPA, LDO e LOA)",
      "Avaliação de obra por gente beneficiada, segurança, clima e acesso",
      "Regra de conta pública e atualizável",
    ],
    tools: ["orçamento", "fiscalizar", "legislar", "mobilizar"],
    goal:
      "Um estado em que orçamento, espaço e política acompanham a maioria que anda, pedala e usa o transporte coletivo.",
  },
  {
    number: 16,
    slug: "orcamento-da-mobilidade-aberto",
    axis: 5,
    title: "Orçamento da Mobilidade Aberto",
    tagline: "Dinheiro público tem que dar para acompanhar: qual transporte ele está financiando.",
    problem:
      "É difícil rastrear o orçamento de mobilidade: obra anunciada não confere com a paga, subsídio fica invisível e não existe classificação pública do gasto por modo de transporte ou por território. Quem quer cobrar não sabe por onde começar.",
    proposal:
      "Classificar e acompanhar o orçamento de mobilidade por modo, território, tipo de gasto e objetivo — num painel público que qualquer pessoa entenda.",
    actions: [
      "Painel anual do orçamento de mobilidade",
      "Gasto por modo de transporte",
      "Todo subsídio e desconto de imposto aparecendo na mesa",
      "Comparação entre obra anunciada e obra paga",
      "Recorte territorial do investimento",
      "Prestação de contas em linguagem simples",
    ],
    tools: ["fiscalizar", "dados", "orçamento", "legislar"],
    goal:
      "O orçamento mostra quais são as prioridades de verdade — e qualquer pessoa consegue enxergá-lo e cobrá-lo.",
  },
  {
    number: 17,
    slug: "dados-para-salvar-vidas",
    axis: 5,
    title: "Dados para Salvar Vidas",
    tagline: "Sem dado integrado, o Estado não sabe onde agir — e ninguém consegue cobrar.",
    problem:
      "As informações sobre trânsito, saúde, segurança e transporte ficam espalhadas em sistemas fechados que não conversam entre si. Sem dado aberto e integrado, não existe mapa de risco confiável — e prevenir vira chute.",
    proposal:
      "Criar uma política estadual de dados abertos de mobilidade e segurança viária, integrando os sistemas que já existem.",
    actions: [
      "Integração entre saúde, segurança, DETRAN, transporte e infraestrutura",
      "Dado aberto de transporte",
      "Regra clara para registrar e contar os acidentes",
      "Mapa de risco",
      "Pesquisa pública",
      "Pesquisa feita junto com a população",
    ],
    tools: ["legislar", "fiscalizar", "dados", "articular"],
    goal:
      "Um estado que sabe onde agir — e uma sociedade com dados para cobrar e coproduzir a política pública.",
  },
  {
    number: 18,
    slug: "mandato-construido-com-a-sociedade",
    axis: 5,
    title: "Mandato Construído com a Sociedade",
    tagline: "Um mandato pode ser infraestrutura para a sociedade produzir política pública.",
    problem:
      "O gabinete fechado trata movimento, universidade, trabalhador e comunidade como plateia — chama para ouvir, não para coproduzir. O resultado é lei desconectada de quem vive o problema de verdade.",
    proposal:
      "Aproximar movimentos, universidades, trabalhadores, pesquisadores e comunidades da ALEPE — transformando o mandato em infraestrutura de participação.",
    actions: [
      "Conselhos temáticos do mandato",
      "Oficina e formação",
      "Apoio técnico para formular proposta",
      "Audiência com acompanhamento de compromisso",
      "Pesquisa e auditoria feitas pela população",
      "Interiorização do mandato",
      "Respeito à autonomia dos movimentos",
    ],
    tools: ["participação", "formação", "fiscalizar", "articular"],
    goal:
      "Um mandato aberto, interiorizado e construído com a sociedade — em que a pressão popular vira lei, orçamento e fiscalização.",
  },
];

export function getProposal(slug: string): Proposal | undefined {
  return proposals.find((p) => p.slug === slug);
}

export function getAdjacentProposals(slug: string): {
  prev: Proposal | undefined;
  next: Proposal | undefined;
} {
  const index = proposals.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? proposals[index - 1] : undefined,
    next: index >= 0 && index < proposals.length - 1 ? proposals[index + 1] : undefined,
  };
}
