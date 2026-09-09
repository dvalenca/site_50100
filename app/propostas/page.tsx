import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProposalsBrowser from "@/components/ProposalsBrowser";
import { MandateToolsExplained } from "@/components/MandateTools";
import PriorityShift from "@/components/PriorityShift";
import { axes } from "@/content/axes";
import { proposals } from "@/content/proposals";

export const metadata: Metadata = {
  title: "Propostas",
  description:
    "Conheça as propostas de Daniel Valença para segurança viária, transporte público, bicicleta, caminhada, clima, dados, orçamento e participação popular em Pernambuco.",
  alternates: { canonical: "/propostas" },
  openGraph: {
    title: "Propostas | Daniel Valença 50.100",
    description:
      "Cinco eixos e dezoito propostas para colocar a vida no centro das prioridades de Pernambuco.",
  },
};

export default async function PropostasPage({
  searchParams,
}: {
  searchParams: Promise<{ eixo?: string }>;
}) {
  const { eixo } = await searchParams;
  const parsedAxis = Number.parseInt(eixo ?? "0", 10);
  const initialAxis =
    parsedAxis >= 1 && parsedAxis <= 5 ? (parsedAxis as 1 | 2 | 3 | 4 | 5) : 0;

  return (
    <>
      <section className="texture-paper bg-brand-yellow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="O programa"
            title="Cinco eixos. Dezoito propostas. Uma mudança de prioridade."
            description="Um programa para colocar a vida no centro, inverter as prioridades do dinheiro público e fazer de Pernambuco um estado onde caminhar, pedalar e usar transporte coletivo sejam escolhas seguras, dignas e desejáveis."
          />
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {axes.map((axis) => (
              <li key={axis.id}>
                <Link
                  href={`?eixo=${axis.id}`}
                  className="font-body text-sm font-bold text-ink underline decoration-[3px] decoration-brand-purple underline-offset-4 hover:text-brand-purple"
                >
                  Eixo {axis.id}: {axis.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="mandato-como-heading" className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <h2 id="mandato-como-heading" className="sr-only">
          Como um deputado transforma proposta em ação
        </h2>
        <MandateToolsExplained />
      </section>

      <section aria-labelledby="todas-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-3xl font-extrabold text-ink">
          Todas as propostas
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Filtre por eixo ou busque por palavra-chave. Cada proposta tem página
          própria, pronta para compartilhar.
        </p>
        <div className="mt-8">
          <ProposalsBrowser proposals={proposals} initialAxis={initialAxis} />
        </div>
      </section>

      <PriorityShift />
    </>
  );
}
