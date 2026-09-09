import Link from "next/link";
import { axisColors, type Axis } from "@/content/axes";

// Card compacto de eixo, usado na home: título, uma frase e link.
// A lista completa das propostas fica só em /propostas.
export default function AxisCard({ axis }: { axis: Axis }) {
  const colors = axisColors[axis.id];
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
      <Link
        href={`/propostas?eixo=${axis.id}`}
        className="mt-auto inline-flex items-center pt-4 font-body text-sm font-extrabold uppercase tracking-wide text-brand-purple underline decoration-2 underline-offset-4 hover:text-brand-orange"
      >
        Ver propostas →
      </Link>
    </article>
  );
}
