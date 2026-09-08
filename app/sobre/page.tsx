import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import StreetBanner from "@/components/StreetBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CTADonate from "@/components/CTADonate";
import {
  awards,
  bioMedium,
  education,
  facts,
  politicalCommitments,
  timeline,
} from "@/content/bio";
import { institutionalWork } from "@/content/track-record";

export const metadata: Metadata = {
  title: "Sobre Daniel",
  description:
    "Engenheiro eletrônico, mestre em Energia pela UFPE e cofundador da Ameciclo: a trajetória de Daniel Valença em mobilidade, dados e direito à cidade.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre Daniel | Daniel Valença 50.100",
    description:
      "A trajetória de Daniel Valença: mobilidade, dados, clima, participação popular e fiscalização do poder público.",
  },
};

export default function SobrePage() {
  return (
    <>
      <section className="texture-paper bg-brand-purple">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_0.8fr] md:items-start">
          <div>
            <SectionTitle
              kicker="Sobre Daniel"
              title="Pesquisa, dados e rua — há mais de uma década."
              textColor="text-white"
              kickerColor="text-brand-yellow"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/90">
              {bioMedium.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm font-bold text-brand-mint">
                  <span aria-hidden="true" className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-brand-mint bg-brand-orange" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:sticky md:top-24">
            <div className="border-[5px] border-ink bg-brand-yellow p-2 shadow-[8px_8px_0_0_#ee3c00]">
              <PhotoPlaceholder
                label="Foto de Daniel Valença"
                backgroundColor="bg-white"
                textColor="text-ink"
                className="min-h-72"
              />
            </div>
          </div>
        </div>
      </section>

      <StreetBanner backgroundColor="bg-brand-yellow" textColor="text-brand-purple" />

      <section aria-labelledby="linha-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Linha do tempo" title="A trajetória, ano a ano." />
        <ol className="mt-10 space-y-0 border-l-4 border-ink pl-0">
          {timeline.map((item, i) => (
            <li key={`${item.period}-${item.title}`} className="relative pl-8 pb-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[9px] top-1 inline-block h-4 w-4 border-[3px] border-ink ${
                  i % 2 === 0 ? "bg-brand-orange" : "bg-brand-purple"
                }`}
              />
              <p className="font-body text-sm font-extrabold uppercase tracking-widest text-brand-purple">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-xl uppercase text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.place}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="institucional-heading" className="texture-paper border-y-[6px] border-ink bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            kicker="Atuação"
            title="Atuação política e institucional"
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {institutionalWork.map((work) => (
              <li key={work.title}>
                <article className="h-full border-[4px] border-ink bg-brand-mint p-6 shadow-[5px_5px_0_0_#16121f]">
                  <p className="font-body text-xs font-extrabold uppercase tracking-widest text-brand-purple">
                    {work.period}
                  </p>
                  <h3 className="mt-1 font-display text-2xl uppercase text-ink">{work.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85">{work.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="premios-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle kicker="Reconhecimento" title="Prêmios" />
            <ul className="mt-8 space-y-3">
              {awards.map((award) => (
                <li
                  key={award}
                  className="flex items-start gap-3 border-[3px] border-ink bg-brand-yellow p-4 text-sm font-bold text-ink"
                >
                  <span aria-hidden="true" className="mt-0.5 text-lg">★</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle kicker="Base" title="Formação" />
            <ul className="mt-8 space-y-3">
              {education.map((item) => (
                <li
                  key={item.title}
                  className="border-[3px] border-ink bg-white p-4 text-sm font-bold text-ink shadow-[4px_4px_0_0_#16121f]"
                >
                  <p className="text-brand-purple">{item.period}</p>
                  <p className="mt-1">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="posicionamento-heading" className="border-y-[6px] border-ink bg-brand-purple py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            kicker="Posicionamento"
            title="Especialização não é neutralidade."
            description={politicalCommitments.intro}
            textColor="text-white"
            kickerColor="text-brand-yellow"
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {politicalCommitments.items.map((item) => (
              <li
                key={item}
                className="border-2 border-brand-mint px-3 py-1.5 text-sm font-bold text-brand-mint"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <p className="font-display text-3xl uppercase text-ink sm:text-4xl">
          O programa é o próximo passo.
        </p>
        <Link
          href="/propostas"
          className="mt-6 inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-orange px-10 py-3 font-display text-xl uppercase text-white shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
        >
          Ver as 18 propostas
        </Link>
      </section>

      <CTADonate />
    </>
  );
}
