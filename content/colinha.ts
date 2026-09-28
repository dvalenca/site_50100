import { siteConfig } from "./site";

// ---------------------------------------------------------------------------
// “Monte sua colinha” — Eleições 2026 (Pernambuco)
//
// Tudo que aparece na colinha sobre candidaturas (nomes, números, partidos,
// fotos, opções permitidas e escolhas iniciais) fica NESTE arquivo.
// Os componentes apenas leem estes dados — não espalhe nomes ou números
// de candidaturas pelos componentes.
// ---------------------------------------------------------------------------

export type CandidaturaFixa = {
  rotulo: string;
  nome: string;
  /** Dígitos, sem pontos */
  numero: string;
  partido: string;
  /** Caminho dentro de /public (opcional) */
  foto?: string;
  slogan?: string;
};

export type CandidaturaSenado = {
  id: string;
  nome: string;
  /** 3 dígitos, sem pontos */
  numero: string;
  partido: string;
  /** Caminho dentro de /public (opcional) */
  foto?: string;
};

export type VagaSenado = {
  rotulo: string;
  /**
   * true  → escolha da campanha; o visitante não troca
   * false → o visitante pode trocar entre `permitidas`
   */
  fixa: boolean;
  /** id da candidatura sugerida inicialmente nesta vaga */
  padrao: string;
  /** ids das candidaturas que podem ocupar esta vaga */
  permitidas: string[];
};

export type CandidaturaFederal = {
  /** nome de urna */
  nome: string;
  /** 4 dígitos, sem pontos */
  numero: string;
  partido: string;
  /** Caminho dentro de /public (opcional) */
  foto?: string;
};

const sugestoesFederal: CandidaturaFederal[] = [
  { nome: "Bruna Ambiental", numero: "5024", partido: "PSOL REDE" },
  { nome: "Fernando do Salve", numero: "5001", partido: "PSOL REDE" },
  { nome: "Jones Manoel", numero: "5050", partido: "PSOL REDE" },
  { nome: "Kátia Cunha", numero: "5005", partido: "PSOL REDE" },
  { nome: "Márcia Azevedo", numero: "5030", partido: "PSOL REDE" },
  { nome: "Michelle Santos", numero: "5000", partido: "PSOL REDE" },
  { nome: "Pedro Stilo", numero: "5055", partido: "PSOL REDE" },
  { nome: "Professor Jerônimo Galvão", numero: "5013", partido: "PSOL REDE" },
  { nome: "Renato Fonseca", numero: "5077", partido: "PSOL REDE" },
  { nome: "Rosalvo", numero: "5087", partido: "PSOL REDE" },
  { nome: "Juliana Coelho", numero: "1808", partido: "PSOL REDE" },
  { nome: "Liana Cirne", numero: "1310", partido: "FE BRASIL" },
  { nome: "Rosa Amorim", numero: "1303", partido: "FE BRASIL" },
];

export const colinhaConfig = {
  eleicao: "ELEIÇÕES 2026",
  estado: "PERNAMBUCO",

  // Deputado estadual — a candidatura da campanha, sempre fixa e em destaque
  estadual: {
    rotulo: "Deputado Estadual",
    nome: siteConfig.candidate,
    numero: siteConfig.number.replace(".", ""), // 50100
    partido: siteConfig.party,
    slogan: siteConfig.slogan,
    foto: "/photos/daniel-hero.webp",
  } satisfies CandidaturaFixa,

  // Deputado federal — o visitante digita o número (4 dígitos) nos quadrinhos
  // ou escolhe uma das sugestões (lista fechada e configurável).
  federal: {
    rotulo: "Deputado(a) Federal",
    digitos: 4,
    sugestoes: sugestoesFederal,
  },

  senado: {
    opcoes: [
      { id: "marilia-arras", nome: "Marília Arraes", numero: "123", partido: "PDT" },
      { id: "humberto-costa", nome: "Humberto Costa", numero: "130", partido: "PT" },
      { id: "paulo-rubem-santiago", nome: "Paulo Rubem Santiago", numero: "180", partido: "REDE" },
    ] satisfies CandidaturaSenado[],
    vagas: [
      // 1º voto: escolha da campanha. Para permitir troca, mude `fixa` para
      // false e inclua outros ids em `permitidas`.
      { rotulo: "1º voto", fixa: true, padrao: "marilia-arras", permitidas: ["marilia-arras"] },
      // 2º voto: começa com Humberto Costa; o visitante pode trocar.
      {
        rotulo: "2º voto",
        fixa: false,
        padrao: "humberto-costa",
        permitidas: ["humberto-costa", "paulo-rubem-santiago"],
      },
    ] satisfies VagaSenado[],
  },

  // Governo e Presidência — escolhas da campanha, sem edição pelo visitante
  governo: {
    rotulo: "Governo de Pernambuco",
    nome: "Ivan Moraes",
    numero: "50",
    partido: "PSOL",
    foto: "",
  } satisfies CandidaturaFixa,
  presidencia: {
    rotulo: "Presidência",
    nome: "Lula",
    numero: "13",
    partido: "PT",
    foto: "",
  } satisfies CandidaturaFixa,

  // Identificação da propaganda eleitoral — usar somente dados da própria
  // campanha. Linhas vazias são omitidas na renderização.
  propagandaEleitoral: [
    `Eleição 2026 — ${siteConfig.candidate} | ${siteConfig.office}`,
    `${siteConfig.candidate} — ${siteConfig.office} | ${siteConfig.number.replace(".", "")} — ${siteConfig.party}`,
    siteConfig.cnpj ? `CNPJ da campanha: ${siteConfig.cnpj}` : "",
    siteConfig.campaignEmail ? `Contato: ${siteConfig.campaignEmail}` : "",
  ].filter(Boolean),
};

// ---------------------------------------------------------------------------
// Estado das escolhas + validação + link compartilhável
// ---------------------------------------------------------------------------

export type EscolhasColinha = {
  /** número do deputado federal escolhido (4 dígitos) ou vazio */
  federal: string;
  /** ids das candidaturas, um por vaga, na ordem das vagas */
  senado: string[];
};

export function opcaoSenado(id: string): CandidaturaSenado | undefined {
  return colinhaConfig.senado.opcoes.find((o) => o.id === id);
}

function sanitizarNumero(valor: string | null | undefined, digitos: number): string {
  if (!valor) return "";
  const apenasDigitos = valor.replace(/\D/g, "");
  return apenasDigitos.length === digitos ? apenasDigitos : "";
}

/**
 * Valida escolhas vindas de qualquer lugar (URL, seletores, estado interno):
 * - o voto estadual é sempre o da campanha (nem passa por aqui);
 * - o federal aceita somente número com exatamente 4 dígitos (ou vazio);
 * - os votos para o Senado só podem ser ids permitidos na vaga, sem repetir.
 */
export function validarEscolhas(
  federal: string,
  senado: (string | null | undefined)[],
): EscolhasColinha {
  const senadoValido = colinhaConfig.senado.vagas.map((vaga, i) => {
    const pedido = senado[i] ?? "";
    return vaga.permitidas.includes(pedido) ? pedido : vaga.padrao;
  });
  // A vaga anterior tem preferência; a seguinte não pode repeti-la.
  for (let i = 1; i < senadoValido.length; i++) {
    if (senadoValido[i] === senadoValido[i - 1]) {
      const vaga = colinhaConfig.senado.vagas[i];
      senadoValido[i] = vaga.permitidas.find((p) => p !== senadoValido[i - 1]) ?? senadoValido[i];
    }
  }
  return {
    federal: sanitizarNumero(federal, colinhaConfig.federal.digitos),
    senado: senadoValido,
  };
}

export function escolhasPadrao(): EscolhasColinha {
  return validarEscolhas("", colinhaConfig.senado.vagas.map((v) => v.padrao));
}

/** Resolve o número de urna (ex.: "123") para o id da candidatura permitida na vaga. */
function idPorNumeroSenado(numero: string | null, vaga: VagaSenado): string | null {
  if (!numero) return null;
  const digitos = numero.replace(/\D/g, "");
  for (const id of vaga.permitidas) {
    if (opcaoSenado(id)?.numero === digitos) return id;
  }
  return null;
}

/** Lê as escolhas dos parâmetros de URL (?f=&s1=&s2=) e valida tudo. */
export function queryParaEscolhas(params: URLSearchParams): EscolhasColinha {
  const [vaga1, vaga2] = colinhaConfig.senado.vagas;
  const s1 = vaga1 ? idPorNumeroSenado(params.get("s1"), vaga1) : null;
  const s2 = vaga2 ? idPorNumeroSenado(params.get("s2"), vaga2) : null;
  return validarEscolhas(params.get("f") ?? "", [s1, s2]);
}

/** Serializa as escolhas válidas para os parâmetros de URL (números de urna). */
export function escolhasParaQuery(escolhas: EscolhasColinha): string {
  const params = new URLSearchParams();
  if (escolhas.federal) params.set("f", escolhas.federal);
  const numero1 = escolhas.senado[0] ? opcaoSenado(escolhas.senado[0])?.numero : "";
  const numero2 = escolhas.senado[1] ? opcaoSenado(escolhas.senado[1])?.numero : "";
  if (numero1) params.set("s1", numero1);
  if (numero2) params.set("s2", numero2);
  const query = params.toString();
  return query ? `?${query}` : "";
}
