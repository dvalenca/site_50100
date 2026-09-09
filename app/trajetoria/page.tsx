import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import TrackRecordCard from "@/components/TrackRecordCard";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import PhotoStrip from "@/components/PhotoStrip";
import Button from "@/components/Button";
import CTADonate from "@/components/CTADonate";
import {
  awards,
  bioMedium,
  education,
  facts,
  politicalCommitments,
  publications,
  timeline,
} from "@/content/bio";
import { trackRecord, institutionalWork } from "@/content/track-record";

export const metadata: Metadata = {
  title: "Trajetória",
  description:
    "Quem é Daniel Valença e o que ele já fez: engenheiro eletrônico, mestre em Energia pela UFPE, cofundador da Ameciclo — uma década de dados, pesquisa e mobilização por mobilidade e direito à cidade.",
  alternates: { canonical: "/trajetoria" },
  openGraph: {
    title: "Trajetória | Daniel Valença 50.100",
    description:
      "A história de Daniel e o trabalho concreto: IDECiclo, Perfil do Ciclista, Plataforma de Dados, Observatório Cicloviário, Bota pra Rodar e Recife Parque.",
  },
};

export default function TrajetoriaPage() {
  return (
    <>
      {/* Daniel: quem é */}
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
                <li key={fact} className="flex items-start gap-3 text-sm font-semibold text-white">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-brand-yellow bg-brand-yellow"
                  />
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

      {/* Daniel: linha do tempo */}
      <section aria-labelledby="linha-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Linha do tempo" title="A trajetória, ano a ano." />
        <ol className="mt-10 border-l-4 border-ink pl-0">
          {timeline.map((item) => (
            <li key={`${item.period}-${item.title}`} className="relative pl-8 pb-8">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1 inline-block h-4 w-4 border-[3px] border-ink bg-brand-purple"
              />
              <p className="font-body text-sm font-extrabold uppercase tracking-widest text-brand-purple">
                {item.period}
              </p>
              <h3 className="mt-1 font-heading text-xl font-extrabold text-ink">{item.title}</h3>
              {item.place ? (
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.place}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {/* Fotos */}
      <section aria-labelledby="fotos-heading" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <h2 id="fotos-heading" className="sr-only">
          Fotos de Daniel
        </h2>
        <PhotoStrip
          photos={[
            { label: "Daniel pedalando na cidade" },
            { label: "Daniel no transporte coletivo" },
            { label: "Daniel em reunião ou espaço de participação" },
          ]}
        />
      </section>

      {/* Trajetória: o que já fez */}
      <section
        aria-labelledby="fez-heading"
        className="texture-paper border-y-[6px] border-ink bg-brand-orange py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            kicker="Trajetória comprovada"
            title="Não comecei a discutir mobilidade agora."
            description="Há mais de uma década, Daniel transforma dados, pesquisa e mobilização em ferramentas para mudar as ruas e cobrar o poder público."
            textColor="text-white"
            kickerColor="text-brand-yellow"
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trackRecord.map((item) => (
              <li key={item.title}>
                <TrackRecordCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trajetória: atuação institucional */}
      <section
        aria-labelledby="institucional-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      >
        <SectionTitle kicker="Atuação" title="Atuação política e institucional" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {institutionalWork.map((work) => (
            <li key={work.title}>
              <article className="h-full border-[4px] border-ink bg-brand-mint p-6 shadow-[5px_5px_0_0_#16121f]">
                <p className="font-body text-xs font-extrabold uppercase tracking-widest text-brand-purple">
                  {work.period}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-extrabold text-ink">{work.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/85">{work.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Trajetória: prêmios e publicações */}
      <section
        aria-labelledby="premios-heading"
        className="texture-paper border-y-[6px] border-ink bg-white py-14"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
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
            <SectionTitle kicker="Publicações" title="Textos e capítulos" />
            <ul className="mt-8 space-y-3">
              {publications.map((pub) => (
                <li
                  key={pub.title}
                  className="border-[3px] border-ink bg-white p-4 text-sm text-ink shadow-[4px_4px_0_0_#16121f]"
                >
                  <p className="font-body text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                    {pub.year}
                  </p>
                  <p className="mt-1 font-bold leading-relaxed">{pub.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Daniel: formação */}
      <section aria-labelledby="formacao-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle kicker="Base" title="Formação" />
        <ul className="mt-8 grid max-w-2xl gap-3">
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
      </section>

      {/* Daniel: posicionamento */}
      <section
        aria-labelledby="posicionamento-heading"
        className="border-y-[6px] border-ink bg-brand-purple py-14"
      >
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

      <section className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
        <p className="font-heading text-xl font-extrabold text-ink">
          Quer ver o que Daniel pretende fazer com essa experiência?
        </p>
        <Button href="/propostas" className="mt-4">
          Ver as 18 propostas
        </Button>
      </section>

      <CTADonate />
    </>
  );
}
