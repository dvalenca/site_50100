// Configuração da área de doação.
// PREENCHER com dados REAIS da campanha. Nada aqui deve ser inventado:
// os blocos só aparecem no site quando os campos estiverem preenchidos.
export const donateConfig = {
  headline: "Para essa ideia chegar mais longe, ela precisa de você.",
  subline:
    "Essa campanha anda de bicicleta, ônibus e a pé. Uma campanha feita por muita gente também é financiada por muita gente.",

  // Âncoras de valor: botões de atalho para a plataforma oficial.
  // "impact" descreve o que o valor ajuda a financiar — preencher com custos
  // reais (ex.: "ajuda a colocar material de campanha na rua").
  // Enquanto "impact" estiver vazio, o site mostra só o valor, sem equivalência.
  suggestedAmounts: [
    { amount: 25, impact: "" },
    { amount: 50, impact: "" },
    { amount: 100, impact: "" },
  ],

  // Meta de arrecadação. Preencher quando houver dado real validado.
  // O termômetro só aparece quando target for maior que zero.
  goal: null as null | { raised: number; target: number; deadline: string },

  // Número de pessoas que já contribuíram. Só aparece quando preenchido.
  supporters: null as null | number,
};
