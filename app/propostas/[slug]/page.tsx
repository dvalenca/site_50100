import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StreetBanner from "@/components/StreetBanner";
import MandateTools, { MandateToolsExplained } from "@/components/MandateTools";
import { axisColors, axes } from "@/content/axes";
import {
  getAdjacentProposals,
  getProposal,
  proposals,
} from "@/content/proposals";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return proposals.map((proposal) => ({ slug: proposal.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proposal = getProposal(slug);
  if (!proposal) return {};
  return {
    title: `${String(proposal.number).padStart(2, "0")} — ${proposal.title}`,
    description: proposal.tagline,
    alternates: { canonical: `/propostas/${proposal.slug}` },
    openGraph: {
      title: `${proposal.title} | ${siteConfig.candidate} ${siteConfig.number}`,
      description: proposal.tagline,
    },
  };
}

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = getProposal(slug);
  if (!proposal) notFound();

  const axis = axes.find((a) => a.id === proposal.axis)!;
  const colors = axisColors[proposal.axis];
  const { prev, next } = getAdjacentProposals(slug);

  return (
    <>
      <section className={`texture-paper border-b-[6px] border-ink ${colors.bg} ${colors.text}`}>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <nav aria-label="Trilha de navegação">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide">
              <li>
                <Link href="/propostas" className="underline decoration-2 underline-offset-4">
                  Propostas
                </Link>
              </li>
              <li aria-hidden="true">→</li>
              <li>
                <Link href={`/propostas#${axis.slug}`} className="underline decoration-2 underline-offset-4">
                  Eixo {axis.id}
                </Link>
              </li>
            </ol>
          </nav>

          <p
            className={`mt-6 inline-block border-2 border-ink px-2 py-0.5 font-body text-xs font-extrabold uppercase tracking-widest ${colors.chip}`}
          >
            Proposta {String(proposal.number).padStart(2, "0")} de 18 • Eixo {axis.id}:{" "}
            {axis.title}
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[1.05] sm:text-6xl">
            {proposal.title}
          </h1>
          <p className="mt-4 font-display text-2xl uppercase leading-tight opacity-95 sm:text-3xl">
            “{proposal.tagline}”
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <section aria-labelledby="problema-heading" className="border-l-8 border-brand-orange pl-5">
          <h2 id="problema-heading" className="font-display text-2xl uppercase text-ink">
            O problema
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/85">{proposal.problem}</p>
        </section>

        <section aria-labelledby="proposta-heading" className="mt-10 border-l-8 border-brand-purple pl-5">
          <h2 id="proposta-heading" className="font-display text-2xl uppercase text-ink">
            O que propomos
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/85">{proposal.proposal}</p>
        </section>

        <section aria-labelledby="mandato-heading" className="mt-10 border-l-8 border-brand-yellow pl-5">
          <h2 id="mandato-heading" className="font-display text-2xl uppercase text-ink">
            O que o mandato fará
          </h2>
          <ul className="mt-4 space-y-2">
            {proposal.actions.map((action) => (
              <li key={action} className="flex items-start gap-3 text-base leading-relaxed text-ink/85">
                <span aria-hidden="true" className="mt-2 inline-block h-2.5 w-2.5 shrink-0 bg-brand-purple" />
                {action}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="instrumentos-heading" className="mt-8">
          <h2 id="instrumentos-heading" className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-ink/70">
            Instrumentos do mandato
          </h2>
          <div className="mt-3">
            <MandateTools tools={proposal.tools} />
          </div>
        </section>

        <section aria-labelledby="destino-heading" className="mt-10 border-[4px] border-ink bg-brand-mint p-6 shadow-[6px_6px_0_0_#16121f]">
          <h2 id="destino-heading" className="font-display text-2xl uppercase text-ink">
            Onde queremos chegar
          </h2>
          <p className="mt-3 text-lg font-bold leading-relaxed text-ink">{proposal.goal}</p>
        </section>

        <div className="mt-10">
          <MandateToolsExplained />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/propostas"
            className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-ink px-10 py-3 font-display text-xl uppercase text-brand-yellow transition-transform hover:-translate-y-0.5"
          >
            Ver o programa completo
          </Link>
        </div>

        <nav
          aria-label="Navegar entre propostas"
          className="mt-12 grid gap-4 border-t-4 border-ink pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/propostas/${prev.slug}`}
              className="group border-[3px] border-ink bg-white p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-ink/60">
                ← Anterior
              </span>
              <span className="mt-1 block font-display text-lg uppercase text-ink group-hover:text-brand-purple">
                {String(prev.number).padStart(2, "0")} {prev.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
          {next ? (
            <Link
              href={`/propostas/${next.slug}`}
              className="group border-[3px] border-ink bg-white p-4 text-right transition-transform hover:-translate-y-0.5"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-ink/60">
                Próxima →
              </span>
              <span className="mt-1 block font-display text-lg uppercase text-ink group-hover:text-brand-purple">
                {String(next.number).padStart(2, "0")} {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      </div>

      <StreetBanner backgroundColor="bg-brand-orange" textColor="text-white" />
    </>
  );
}
