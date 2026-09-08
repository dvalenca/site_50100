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
    tagline: "Nenhuma morte no trânsito é inevitável.",
    problem:
      "No trânsito de Pernambuco, vidas são perdidas em ocorrências que um sistema bem desenhado poderia impedir. Morte e lesão grave ainda são tratadas como preço normal do deslocamento — e quem mais paga é quem anda a pé, pedala, anda de moto ou usa ônibus.",
    proposal:
      "Instituir uma política estadual permanente de Sistema Seguro, com redução contínua de mortes e lesões graves e prioridade de proteção a pedestres, ciclistas, motociclistas e usuários do transporte coletivo. Pessoas erram: ruas, velocidades, veículos, fiscalização e atendimento devem ser organizados para que o erro não termine em tragédia.",
    actions: [
      "Metas públicas anuais e plurianuais de redução de mortes e lesões graves",
      "Auditoria de mortes e ocorrências graves",
      "Velocidade segura e desenho viário tolerante ao erro",
      "Prioridade aos usuários vulneráveis",
      "Fiscalização orientada por risco",
      "Educação baseada em evidências",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Um Pernambuco com política de Estado, metas públicas e redução contínua de mortes no trânsito — com a vida acima da velocidade.",
  },
  {
    number: 2,
    slug: "municipios-pela-vida",
    axis: 1,
    title: "Municípios pela Vida",
    tagline: "O Estado deve premiar quem protege pessoas — não quem constrói mais asfalto.",
    problem:
      "Hoje, a lógica de premiação e repasse costuma valorizar obra e asfalto, não proteção à vida. Municípios que investem em calçadas, travessias seguras e redução de velocidade não recebem reconhecimento proporcional — e cidades pequenas ficam sem apoio técnico para agir.",
    proposal:
      "Criar incentivos técnicos e financeiros estaduais para municípios que adotem medidas comprovadas de redução de risco no trânsito.",
    actions: [
      "Critérios claros de adesão ao programa",
      "Prioridade em convênios e assistência técnica",
      "Avaliação por resultados e implementação real",
      "Apoio dedicado a municípios pequenos",
      "Intercâmbio de soluções entre cidades",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Uma rede de municípios premiados por proteger pessoas, com o Estado induzindo segurança viária em vez de asfalto por asfalto.",
  },
  {
    number: 3,
    slug: "rodovias-que-nao-matam",
    axis: 1,
    title: "Rodovias que Não Matam",
    tagline: "Estrada estadual também é lugar de gente caminhando, pedalando, esperando ônibus e atravessando.",
    problem:
      "Rodovias estaduais atravessam comunidades e bairros onde pessoas caminham, pedalam, esperam ônibus e atravessam todos os dias. Implantação, duplicação e requalificação raramente tratam essas pessoas como usuários legítimos da via.",
    proposal:
      "Fazer com que implantação, duplicação, restauração e requalificação de rodovias considerem infraestrutura segura para caminhada, bicicleta, transporte coletivo e travessias.",
    actions: [
      "Ciclovias segregadas onde houver demanda",
      "Calçadas e acessibilidade em trechos urbanizados",
      "Velocidades compatíveis com o contexto da via",
      "Fiscalização moderna",
      "Articulação por ciclovias e travessias em BRs",
      "Acesso seguro a ônibus e paradas",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Rodovias estaduais projetadas para todos os modos — com travessias seguras, sombra e lugar para quem anda a pé e de bicicleta.",
  },
  {
    number: 4,
    slug: "transporte-publico-de-verdade",
    axis: 2,
    title: "Transporte Público de Verdade",
    tagline:
      "Ônibus bom não é só ônibus novo: é chegar rápido, saber quando passa, conseguir embarcar e viajar com dignidade.",
    problem:
      "Passageiro enfrenta espera longa sem informação, veículos lotados, embarque difícil para cadeirantes e pessoas com crianças ou compras, e deslocamentos lentos presos no congestionamento. Sem padrões públicos verificáveis, a qualidade fica no discurso.",
    proposal:
      "Estabelecer padrões públicos e verificáveis de frequência, lotação, velocidade, acessibilidade, conforto, informação e confiabilidade no transporte coletivo do estado.",
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
      "O sistema metroferroviário pernambucano sofre com degradação, perda de confiabilidade e processos de concessão cercados por pouca transparência. Enquanto isso, o trilho — o modo com maior capacidade de transporte limpo — fica fora do centro das decisões de mobilidade.",
    proposal:
      "Defender um sistema metroferroviário público, recuperado, ampliado e integrado, como espinha dorsal da mobilidade no estado.",
    actions: [
      "Fiscalização e transparência sobre processos de concessão",
      "Recuperar infraestrutura e confiabilidade",
      "Expandir metrô, trem e VLT onde fizer sentido",
      "Integração física e tarifária",
      "Bicicletários e acesso seguro às estações",
      "Ferrovias intermunicipais de passageiros",
      "Desenvolvimento urbano orientado ao transporte",
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
    tagline:
      "Quem vive no interior não deveria depender de descobrir, por boca a boca, como chegar ao município vizinho.",
    problem:
      "Boa parte do transporte intermunicipal — regular, complementar, vans, lotações, barcos e travessias — funciona sem informação pública consolidada. Sem mapa, horário e tarifa acessíveis, a viagem depende de boca a boca e tentativa e erro.",
    proposal:
      "Integrar e dar visibilidade ao transporte intermunicipal regular, complementar, vans, lotações, travessias e demais conexões existentes.",
    actions: [
      "Mapa público de rotas, horários, tarifas e pontos",
      "Planejador público de viagens",
      "Qualificação de redes úteis",
      "Integração com barcos e travessias",
      "Informação sobre transporte de bicicleta",
      "Planejamento baseado em demanda real",
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
    tagline: "Transporte coletivo é direito à cidade, não mercadoria vendida a cada catraca.",
    problem:
      "A tarifa pesa todos os dias no orçamento das famílias que dependem do ônibus para trabalhar, estudar e cuidar. E o financiamento pelo bilhete condiciona o serviço à arrecadação — não a função social do transporte.",
    proposal:
      "Defender Tarifa Zero universal, com financiamento público e extratarifário, sem abandonar as metas de frequência, conforto e confiabilidade do sistema.",
    actions: [
      "Construir a gratuidade como horizonte imediato",
      "Financiamento fora da catraca",
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
    tagline:
      "Pernambuco já teve um programa estadual dedicado à bicicleta. É hora de reconstruí-lo com metas, orçamento e abrangência muito maiores.",
    problem:
      "O Pedala PE foi uma política importante, mas não se consolidou como programa permanente de Estado. Hoje a bicicleta — meio de transporte de trabalho e renda para milhares de pessoas — não tem um programa estadual com metas, orçamento e abrangência à altura.",
    proposal:
      "Recriar e ampliar o Pedala PE como política permanente de mobilidade por bicicleta em Pernambuco.",
    actions: [
      "Atualizar e fortalecer o Plano Diretor Cicloviário da RMR",
      "Redes cicláveis e conexões intermunicipais",
      "Bicicletários no poder público",
      "Bicicleta pública e comunitária",
      "Formação de mecânicos e oficinas-escola",
      "Cicloturismo",
      "Fortalecimento da cadeia produtiva",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "A bicicleta tratada como política de Estado: rede ciclável conectada, economia local fortalecida e liberdade real de escolha do modo de transporte.",
  },
  {
    number: 9,
    slug: "pedala-vale",
    axis: 3,
    title: "Pedala Vale",
    tagline: "Quem pedala gera benefícios coletivos. A política pública pode reconhecer isso.",
    problem:
      "Quem pedala economiza espaço viário, reduz emissões e descongestiona o sistema — mas nenhum reconhecimento público chega a quem faz esse deslocamento todos os dias.",
    proposal:
      "Testar um programa estadual de incentivos para deslocamentos por bicicleta, começando por experiências controladas e avaliação de resultados.",
    actions: [
      "Créditos de mobilidade ativa",
      "Benefícios públicos",
      "Estudo de incentivos tributários juridicamente possíveis",
      "Bônus em programas com trabalhadores",
      "Privacidade e alternativas para quem não usa smartphone",
      "Avaliação de resultados antes de expansão",
    ],
    tools: ["legislar", "articular", "pilotos", "avaliar"],
    goal:
      "Um mecanismo testado, avaliado e público que reconheça — em benefício concreto — quem escolhe se deslocar de bicicleta.",
  },
  {
    number: 10,
    slug: "caminhos-para-pessoas",
    axis: 3,
    title: "Caminhos para Pessoas",
    tagline: "Toda viagem começa e termina a pé.",
    problem:
      "Calçadas esburacadas, travessias perigosas, falta de sombra e iluminação precária castigam principalmente pessoas idosas, com deficiência, crianças e quem depende do transporte coletivo. Caminhar — a base de todas as viagens — é a parte mais negligenciada da mobilidade.",
    proposal:
      "Criar uma agenda estadual de caminhabilidade e acessibilidade universal nas vias de competência do estado.",
    actions: [
      "Calçadas em corredores estaduais",
      "Travessias seguras",
      "Rotas escolares",
      "Iluminação na escala humana",
      "Desenho universal",
      "Arborização, sombra e locais de descanso",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Ruas onde caminhar é seguro, sombreado e confortável para todas as pessoas — em todas as idades e condições.",
  },
  {
    number: 11,
    slug: "micrologistica-de-baixo-carbono",
    axis: 3,
    title: "Micrologística de Baixo Carbono",
    tagline: "A bicicleta também carrega comida, mercadoria, ferramenta e renda.",
    problem:
      "A última milha urbana é dominada por veículos motorizados que poluem, ocupam espaço e colocam em risco pedestres — enquanto cicloentregadores trabalham em condições precárias, sem apoio nem proteção.",
    proposal:
      "Criar uma política estadual de última milha limpa e humana, protegendo também quem trabalha com entregas.",
    actions: [
      "Microhubs logísticos",
      "Cargobikes e bicicletas elétricas",
      "Critérios de baixo carbono em compras públicas",
      "Pontos de apoio com água, banheiro, descanso e tomada",
      "Proteção social para cicloentregadores",
      "Redução de veículos pesados em áreas sensíveis",
    ],
    tools: ["legislar", "compras públicas", "articular", "infraestrutura"],
    goal:
      "Uma logística urbana limpa, silenciosa e humana — com quem entrega de bicicleta reconhecido e protegido.",
  },
  {
    number: 12,
    slug: "transicao-energetica-da-mobilidade",
    axis: 4,
    title: "Transição Energética da Mobilidade",
    tagline: "Eletrificar é necessário. Reduzir a dependência de veículos individuais é ainda mais importante.",
    problem:
      "A política energética trata mobilidade como sinônimo de trocar o motor do carro — de combustão para elétrico. Mas a ordem certa é outra: evitar deslocamentos motorizados desnecessários, transferir viagens para caminhada, bicicleta e coletivo, fortalecer trilhos e só então eletrificar o que precisa continuar motorizado.",
    proposal:
      "Combinar transição modal, transporte coletivo, trilhos e eletrificação em uma estratégia estadual única de descarbonização da mobilidade.",
    actions: [
      "Prioridade a investimentos que induzam viagens sustentáveis",
      "Ônibus elétricos com infraestrutura",
      "Energia renovável para mobilidade",
      "Conversão responsável de frotas públicas",
      "Bicicleta e caminhada como parte da descarbonização",
      "Transição justa sem subsídio regressivo ao automóvel",
    ],
    tools: ["orçamento", "fiscalizar", "legislar", "articular"],
    goal:
      "Pernambuco na frente da transição energética — com mudança de modo, não só de motor, e sem subsídios que aprofundem desigualdades.",
  },
  {
    number: 13,
    slug: "ruas-preparadas-para-o-clima",
    axis: 4,
    title: "Ruas Preparadas para o Clima",
    tagline: "Sombra, água e abrigo também são infraestrutura de mobilidade.",
    problem:
      "Calor extremo e enchentes atingem com mais força quem espera ônibus ao sol, caminha sem sombra e pedala sob chuva. O desenho das ruas ainda ignora o clima que já chegou.",
    proposal:
      "Integrar adaptação climática ao desenho das ruas e à política de mobilidade do estado.",
    actions: [
      "Bebedouros públicos",
      "Arborização e sombra",
      "Abrigos de ônibus de verdade",
      "Integração entre drenagem e mobilidade",
      "Pavimentos, áreas permeáveis e infraestrutura verde",
      "Mapa de vulnerabilidade cruzando calor, enchentes, renda e mobilidade",
    ],
    tools: ["legislar", "orçamento", "fiscalizar", "articular"],
    goal:
      "Ruas que enfrentam o clima: sombreadas, drenantes e com água, abrigo e descanso para quem circula a pé, de bicicleta e de ônibus.",
  },
  {
    number: 14,
    slug: "morar-perto",
    axis: 4,
    title: "Morar Perto",
    tagline:
      "Não existe política de mobilidade sustentável se a moradia popular continuar sendo empurrada para cada vez mais longe.",
    problem:
      "A moradia popular é empurrada para a periferia distante, obrigando famílias a gastar horas e renda no deslocamento diário. Remoções injustas e segregação territorial aprofundam a desigualdade — e o tempo de viagem vira imposto sobre a vida.",
    proposal:
      "Aproximar política habitacional, planejamento territorial e transporte, tratando custo e tempo de deslocamento como critério central.",
    actions: [
      "Moradia perto de transporte de alta capacidade",
      "Função social de terrenos públicos bem localizados",
      "Fiscalização de remoções e desapropriações",
      "Desenvolvimento orientado ao transporte com proteção contra expulsão",
      "Custo e tempo de deslocamento como critério da política habitacional",
    ],
    tools: ["orçamento", "fiscalizar", "articular", "planejamento"],
    goal:
      "Cidade e região metropolitana em que morar perto do que se precisa é regra — não privilégio.",
  },
  {
    number: 15,
    slug: "85-para-os-85",
    axis: 5,
    title: "85 para os 85",
    tagline: "A prioridade do Estado deve acompanhar a maioria das pessoas — no orçamento, no espaço e na política.",
    problem:
      "A maioria das pessoas se desloca fora do automóvel particular — mas orçamento, espaço viário e atenção política seguem concentrados no modo que transporta menos gente. A prioridade real do dinheiro público não acompanha a maioria.",
    proposal:
      "Direcionar a prioridade de mobilidade do estado para os modos coletivos e ativos, redistribuindo orçamento, espaço viário, investimento e atenção política.",
    actions: [
      "Maior parte dos investimentos para transporte coletivo, caminhada, bicicleta, acessibilidade e segurança",
      "Redistribuição de espaço em grandes corredores",
      "Disputa anual de PPA, LDO e LOA",
      "Avaliação de obras por pessoas beneficiadas, segurança, clima e acesso",
      "Metodologia pública e atualizável",
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
    tagline:
      "Se o dinheiro é público, a população precisa conseguir enxergar para qual modo de transporte ele está indo.",
    problem:
      "O orçamento de mobilidade é difícil de rastrear: obras anunciadas não correspondem ao que foi pago, subsídios ficam invisíveis e não há classificação pública do gasto por modo de transporte ou território.",
    proposal:
      "Classificar e acompanhar o orçamento de mobilidade por modo, território, tipo de gasto e objetivo, em painel público de fácil compreensão.",
    actions: [
      "Painel anual do orçamento de mobilidade",
      "Gasto por modo de transporte",
      "Visibilidade de subsídios e renúncias",
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
    tagline: "Sem dados integrados, o Estado não sabe onde agir — e a sociedade não consegue cobrar.",
    problem:
      "Informações de saúde, segurança, trânsito, transporte e infraestrutura ficam em sistemas isolados e fechados. Sem dados abertos e integrados, não há mapa de risco confiável — e a prevenção vira chute.",
    proposal:
      "Criar uma política estadual de dados abertos de mobilidade e segurança viária, integrando os sistemas existentes.",
    actions: [
      "Integração entre saúde, segurança, DETRAN, transporte e infraestrutura",
      "Dados abertos de transporte",
      "Metodologia clara para dados de sinistros",
      "Mapas de risco",
      "Pesquisas públicas",
      "Ciência cidadã",
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
      "O gabinete fechado trata movimentos, universidades, trabalhadores e comunidades como plateia — não como coprodutores da política pública. O resultado é legislação desconectada de quem vive o problema.",
    proposal:
      "Aproximar movimentos, universidades, trabalhadores, pesquisadores e comunidades da ALEPE, transformando o mandato em infraestrutura de participação.",
    actions: [
      "Conselhos temáticos do mandato",
      "Oficinas e formação",
      "Apoio técnico à formulação de propostas",
      "Audiências com acompanhamento de compromissos",
      "Pesquisa e auditoria cidadã",
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
