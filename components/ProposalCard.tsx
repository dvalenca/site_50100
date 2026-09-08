import Link from "next/link";
import { axisColors } from "@/content/axes";
import type { Proposal } from "@/content/proposals";

export default function ProposalCard({ proposal }: { proposal: Proposal }) {
  const colors = axisColors[proposal.axis];
  return (
    <Link
      href={`/propostas/${proposal.slug}`}
      className="group flex h-full flex-col border-[4px] border-ink bg-white p-6 shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-1 focus-visible:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <span
          className={`border-2 border-ink px-2 py-0.5 font-body text-xs font-extrabold uppercase tracking-widest ${colors.chip}`}
        >
          Proposta {String(proposal.number).padStart(2, "0")}
        </span>
        <span className="font-body text-xs font-bold uppercase text-ink/60">
          Eixo {proposal.axis}
        </span>
      </div>
      <h3 className="mt-4 font-display text-2xl uppercase leading-tight text-ink group-hover:text-brand-purple">
        {proposal.title}
      </h3>
      <p className="mt-2 text-sm font-bold text-brand-orange">“{proposal.tagline}”</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/80">
        {proposal.proposal}
      </p>
      <span className="mt-auto inline-flex items-center pt-4 font-body text-sm font-extrabold uppercase tracking-wide text-brand-purple underline decoration-2 underline-offset-4">
        Ver a proposta completa →
      </span>
    </Link>
  );
}
