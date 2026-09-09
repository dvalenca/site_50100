import Link from "next/link";
import { axisColors, type Axis } from "@/content/axes";
import { proposals } from "@/content/proposals";

export default function AxisCard({ axis }: { axis: Axis }) {
  const colors = axisColors[axis.id];
  const axisProposals = proposals.filter((p) => p.axis === axis.id);
  return (
    <article className="flex h-full flex-col border-[4px] border-ink bg-white p-6 shadow-[6px_6px_0_0_#16121f]">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 items-center justify-center border-2 border-ink font-heading text-lg font-extrabold ${colors.chip}`}
        >
          {axis.id}
        </span>
        <p className="font-body text-xs font-extrabold uppercase tracking-[0.2em] text-ink/60">
          Eixo {axis.id}
        </p>
      </div>
      <h3 className="mt-4 font-heading text-2xl font-extrabold leading-tight text-ink">
        {axis.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{axis.summary}</p>
      <ul className="mt-4 border-t-2 border-ink/10 pt-4">
        {axisProposals.map((p) => (
          <li
            key={p.slug}
            className="py-1 text-sm font-semibold leading-snug text-ink/80"
          >
            <span className="mr-1 text-ink/45">{String(p.number).padStart(2, "0")} —</span>
            {p.title}
          </li>
        ))}
      </ul>
      <Link
        href={`/propostas#${axis.slug}`}
        className="mt-auto inline-flex min-h-12 items-center justify-center border-[3px] border-ink bg-white px-5 pt-3.5 font-display text-base uppercase text-ink shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#16121f]"
      >
        Ver propostas do eixo →
      </Link>
    </article>
  );
}
