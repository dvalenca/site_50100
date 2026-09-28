import type { Metadata } from "next";
import ColinhaApp from "@/components/colinha/ColinhaApp";
import { queryParaEscolhas } from "@/content/colinha";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Monte sua colinha",
  description:
    "Monte sua colinha para as eleições 2026 em Pernambuco: Daniel Valença 50.100 para deputado estadual e os demais votos da urna. Guarde, compartilhe e leve no dia da votação.",
  openGraph: {
    title: "Monte sua colinha — Daniel Valença 50.100",
    description:
      "Sua colinha das eleições 2026: Daniel Valença 50.100 para deputado estadual, mais os votos para Senado, Governo e Presidência.",
    url: `${siteConfig.siteUrl}/colinha`,
  },
};

function primeiroValor(valor: string | string[] | undefined): string {
  if (Array.isArray(valor)) return valor[0] ?? "";
  return valor ?? "";
}

export default async function PaginaColinha({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const params = new URLSearchParams();
  for (const chave of ["f", "s1", "s2"]) {
    const valor = primeiroValor(sp[chave]);
    if (valor) params.set(chave, valor);
  }
  // As escolhas vindas da URL são validadas: o estadual é fixo e o Senado só
  // aceita as opções permitidas — o que não bater cai no padrão da campanha.
  const inicial = queryParaEscolhas(params);
  return <ColinhaApp inicial={inicial} />;
}
