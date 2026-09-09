import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import TrackRecordCard from "@/components/TrackRecordCard";
import PhotoStrip from "@/components/PhotoStrip";
import Button from "@/components/Button";
import CTADonate from "@/components/CTADonate";
import { awards, publications } from "@/content/bio";
import { trackRecord } from "@/content/track-record";

export const metadata: Metadata = {
  title: "Trajetória",
  description:
    "IDECiclo, Perfil do Ciclista, Plataforma de Dados, Observatório Cicloviário, Bota pra Rodar e Recife Parque: o trabalho concreto por trás da candidatura de Daniel Valença.",
  alternates: { canonical: "/trajetoria" },
  openGraph: {
    title: "Trajetória | Daniel Valença 50.100",
    description:
      "Não comecei a discutir mobilidade agora: uma década de dados, pesquisa e mobilização.",
  },
};

export default function TrajetoriaPage() {
  return (
    <>
      <section className="texture-paper bg-brand-orange">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="Trajetória comprovada"
            title="Não comecei a discutir mobilidade agora."
            description="Há mais de uma década, Daniel transforma dados, pesquisa e mobilização em ferramentas para mudar as ruas e cobrar o poder público."
            textColor="text-white"
            kickerColor="text-brand-yellow"
          />
        </div>
      </section>

      <section aria-labelledby="projetos-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="projetos-heading" className="sr-only">
          Projetos e trabalhos
        </h2>
        <PhotoStrip
          photos={[
            { label: "Daniel pedalando em atividade de mobilidade" },
            { label: "Daniel com movimentos e pessoas na rua" },
            { label: "Daniel apresentando dados e pesquisas" },
          ]}
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trackRecord.map((item) => (
            <li key={item.title}>
              <TrackRecordCard item={item} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="premios-heading" className="texture-paper border-y-[6px] border-ink bg-white py-14">
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

      <section className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <p className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">
          Trajetória é bom. Programa é melhor.
        </p>
        <div className="mt-6">
          <Button href="/propostas" size="lg">
            Ver as 18 propostas
          </Button>
        </div>
      </section>

      <CTADonate />
    </>
  );
}
