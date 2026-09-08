import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import StreetBanner from "@/components/StreetBanner";
import ProposalCard from "@/components/ProposalCard";
import ProposalsBrowser from "@/components/ProposalsBrowser";
import { MandateToolsExplained } from "@/components/MandateTools";
import { axes, axisColors } from "@/content/axes";
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

export default function PropostasPage() {
  return (
    <>
      <section className="texture-paper bg-brand-yellow">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="O programa"
            title="Cinco eixos. Dezoito propostas. Uma mudança de prioridade."
            description="Um programa para colocar a vida no centro, inverter as prioridades do dinheiro público e fazer de Pernambuco um estado onde caminhar, pedalar e usar transporte coletivo sejam escolhas seguras, dignas e desejáveis."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {axes.map((axis) => (
              <li key={axis.id}>
                <Link
                  href={`#${axis.slug}`}
                  className={`inline-block min-h-11 border-2 border-ink px-4 py-2 font-body text-sm font-extrabold uppercase tracking-wide ${axisColors[axis.id].chip}`}
                >
                  Eixo {axis.id}: {axis.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="todas-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="todas-heading" className="font-display text-3xl uppercase text-ink">
          Todas as propostas
        </h2>
        <p className="mt-2 text-sm text-ink/70">
          Filtre por eixo ou busque por palavra-chave. Cada proposta tem página
          própria, pronta para compartilhar.
        </p>
        <div className="mt-8">
          <ProposalsBrowser proposals={proposals} />
        </div>
      </section>

      <StreetBanner backgroundColor="bg-brand-purple" textColor="text-brand-yellow" />

      {axes.map((axis) => {
        const colors = axisColors[axis.id];
        const axisProposals = proposals.filter((p) => p.axis === axis.id);
        return (
          <section
            key={axis.id}
            id={axis.slug}
            aria-labelledby={`${axis.slug}-heading`}
            className={`texture-paper scroll-mt-24 border-t-[6px] border-ink ${colors.bg} ${colors.text}`}
          >
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <p
                className={`inline-block border-2 border-ink px-2 py-0.5 font-body text-xs font-extrabold uppercase tracking-widest ${colors.chip}`}
              >
                Eixo {axis.id}
              </p>
              <h2
                id={`${axis.slug}-heading`}
                className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[1.05] sm:text-5xl"
              >
                {axis.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
                {axis.message}
              </p>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {axisProposals.map((proposal) => (
                  <li key={proposal.slug}>
                    <ProposalCard proposal={proposal} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <MandateToolsExplained />
      </section>
    </>
  );
}
