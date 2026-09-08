import Link from "next/link";
import { axisColors, type Axis } from "@/content/axes";
import { proposals } from "@/content/proposals";

export default function AxisCard({ axis }: { axis: Axis }) {
  const colors = axisColors[axis.id];
  const axisProposals = proposals.filter((p) => p.axis === axis.id);
  return (
    <article
      className={`flex h-full flex-col border-[4px] border-ink p-6 shadow-[6px_6px_0_0_#16121f] transition-transform hover:-translate-y-1 ${colors.bg} ${colors.text}`}
    >
      <p className={`inline-block self-start border-2 border-ink px-2 py-0.5 font-body text-xs font-extrabold uppercase tracking-widest ${colors.chip}`}>
        Eixo {axis.id}
      </p>
      <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
        {axis.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed opacity-90">{axis.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Propostas do eixo ${axis.id}`}>
        {axisProposals.map((p) => (
          <li key={p.slug} className="text-xs font-bold uppercase">
            <span className="border border-current px-1.5 py-0.5">
              {String(p.number).padStart(2, "0")} {p.title}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={`/propostas#${axis.slug}`}
        className={`mt-auto inline-flex min-h-12 items-center justify-center border-[3px] border-ink px-5 py-2 pt-3 font-display text-base uppercase text-ink ${colors.accent} transition-transform hover:-translate-y-0.5`}
      >
        Ver propostas do eixo
      </Link>
    </article>
  );
}
