import type { TrackRecord } from "@/content/track-record";

export default function TrackRecordCard({ item }: { item: TrackRecord }) {
  return (
    <article className="flex h-full flex-col border-[4px] border-ink bg-white p-6 shadow-[5px_5px_0_0_#16121f]">
      <h3 className="font-heading text-2xl font-extrabold leading-tight text-ink">
        {item.title}
      </h3>
      <p className="mt-1 font-body text-xs font-extrabold uppercase tracking-widest text-ink/50">
        {item.role}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink/80">{item.what}</p>
      <p className="mt-3 border-l-4 border-brand-orange pl-3 text-sm font-semibold leading-relaxed text-ink">
        {item.why}
      </p>
      {item.detail?.length ? (
        <ul className="mt-auto space-y-1 pt-4 text-xs text-ink/60">
          {item.detail.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 inline-block h-2 w-2 shrink-0 bg-ink/40" />
              {d}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
