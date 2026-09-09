import Hero from "@/components/Hero";
import StreetBanner from "@/components/StreetBanner";
import SectionTitle from "@/components/SectionTitle";
import AxisCard from "@/components/AxisCard";
import TrackRecordCard from "@/components/TrackRecordCard";
import PriorityShift from "@/components/PriorityShift";
import CTAJoin from "@/components/CTAJoin";
import CTADonate from "@/components/CTADonate";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import PhotoStrip from "@/components/PhotoStrip";
import Button from "@/components/Button";
import { axes } from "@/content/axes";
import { bioShort, facts } from "@/content/bio";
import { trackRecord } from "@/content/track-record";

const threeIdeas = [
  {
    title: "A vida acima da velocidade",
    text: "Nenhuma morte no trânsito deve ser tratada como inevitável.",
    chip: "bg-brand-orange text-white",
  },
  {
    title: "85 para os 85",
    text: "Orçamento, espaço e prioridade para a maioria que anda, pedala e usa transporte coletivo.",
    chip: "bg-brand-purple text-white",
  },
  {
    title: "Mudar a energia é mudar a mobilidade",
    text: "Não basta trocar o motor. Precisamos reduzir a dependência do automóvel e fortalecer caminhada, bicicleta, ônibus e trilhos.",
    chip: "bg-brand-mint text-ink",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StreetBanner />

      <section aria-labelledby="ideias-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="ideias-heading" className="sr-only">
          Três ideias centrais
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {threeIdeas.map((idea, i) => (
            <li key={idea.title} className={i % 2 === 1 ? "md:-rotate-1" : "md:rotate-1"}>
              <article className="h-full border-[4px] border-ink bg-white p-6 shadow-[6px_6px_0_0_#16121f]">
                <p
                  className={`inline-block border-2 border-ink px-2 py-0.5 font-body text-xs font-extrabold uppercase tracking-widest ${idea.chip}`}
                >
                  Ideia {i + 1}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-extrabold leading-tight text-ink">
                  {idea.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{idea.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="eixos-heading" className="texture-paper border-y-[6px] border-ink bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            kicker="O programa"
            title="Cinco eixos para colocar a vida no centro."
            description="Um programa para inverter as prioridades do dinheiro público e fazer de Pernambuco um estado onde caminhar, pedalar e usar transporte coletivo sejam escolhas seguras, dignas e desejáveis."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {axes.map((axis) => (
              <li key={axis.id}>
                <AxisCard axis={axis} />
              </li>
            ))}
            <li>
              <div className="flex h-full flex-col items-start justify-center gap-4 border-[4px] border-dashed border-ink/40 p-6">
                <p className="font-heading text-2xl font-extrabold leading-tight text-ink">
                  18 propostas detalhadas, uma por uma.
                </p>
                <Button href="/propostas">Ver propostas</Button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="sobre-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="border-[5px] border-ink bg-brand-mint p-2 shadow-[8px_8px_0_0_#5d0caa]">
            <PhotoPlaceholder
              label="Retrato de Daniel Valença"
              backgroundColor="bg-white"
              textColor="text-ink"
            />
          </div>
          <div>
            <SectionTitle
              kicker="Sobre Daniel"
              title="Mobilidade não é uma pauta pequena."
            />
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              É saúde quando evita mortes. É clima quando reduz emissões. É trabalho
              quando devolve tempo e renda. É direito à cidade quando aproxima as
              pessoas de emprego, escola, cultura e cuidado.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">{bioShort}</p>
            <ul className="mt-6 space-y-2">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm font-semibold text-ink">
                  <span aria-hidden="true" className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-ink bg-brand-orange" />
                  {fact}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/sobre" size="lg">
                Conheça minha trajetória
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="fez-heading" className="texture-paper border-y-[6px] border-ink bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            kicker="Trajetória comprovada"
            title="Não comecei a discutir mobilidade agora."
            description="Há mais de uma década, Daniel transforma dados, pesquisa e mobilização em ferramentas para mudar as ruas e cobrar o poder público."
          />
          <div className="mt-10">
            <PhotoStrip
              photos={[
                { label: "Daniel pedalando na cidade" },
                { label: "Daniel em atividade de rua com movimentos" },
                { label: "Daniel trabalhando com mapas e dados" },
              ]}
            />
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trackRecord.map((item) => (
              <li key={item.title}>
                <TrackRecordCard item={item} />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/trajetoria" size="lg">
              Ver trajetória completa
            </Button>
          </div>
        </div>
      </section>

      <PriorityShift />

      <section
        aria-labelledby="rua-heading"
        className="texture-paper border-b-[6px] border-ink bg-ink py-16 text-center"
      >
        <h2
          id="rua-heading"
          className="mx-auto max-w-4xl px-4 font-display text-5xl uppercase leading-[1.02] text-brand-yellow sm:text-7xl"
        >
          A rua é do povo.
          <span className="block text-brand-mint">O orçamento também.</span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/participe" size="lg">
            Faça parte
          </Button>
          <Button href="/doe" variant="secondary" size="lg" onDark>
            Doe agora
          </Button>
        </div>
      </section>

      <CTAJoin />
      <CTADonate />
    </>
  );
}
