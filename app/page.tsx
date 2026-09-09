import Hero from "@/components/Hero";
import StreetBanner from "@/components/StreetBanner";
import SectionTitle from "@/components/SectionTitle";
import AxisCard from "@/components/AxisCard";
import BikeDivider from "@/components/BikeDivider";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CTAJoin from "@/components/CTAJoin";
import CTADonate from "@/components/CTADonate";
import { axes } from "@/content/axes";
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
    text: "Precisamos reduzir a dependência do automóvel e fortalecer caminhada, bicicleta, ônibus e trilhos.",
    chip: "bg-brand-mint text-ink",
  },
];

const mobilityLines = [
  ["É saúde", "quando a gente evita mortes no trânsito."],
  ["É trabalho", "quando ninguém perde três horas por dia no ônibus."],
  ["É clima", "quando dependemos menos de carro e combustível."],
  ["É renda", "quando o deslocamento deixa de comer parte do salário."],
  [
    "É direito à cidade",
    "quando todo mundo consegue chegar ao trabalho, à escola, ao lazer e ao cuidado.",
  ],
];

const highlights = trackRecord.filter((item) =>
  ["IDECiclo", "Plataforma de Dados", "Bota pra Rodar"].includes(item.title),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <StreetBanner />

      <section
        aria-labelledby="mais-que-bicicleta-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      >
        <h2
          id="mais-que-bicicleta-heading"
          className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl"
        >
          Mobilidade é muito mais que bicicleta.
        </h2>
        <ul className="mt-8 max-w-2xl space-y-3">
          {mobilityLines.map(([lead, rest]) => (
            <li key={lead} className="flex items-start gap-3 text-lg leading-relaxed text-ink/85">
              <span
                aria-hidden="true"
                className="mt-2.5 inline-block h-3 w-3 shrink-0 bg-brand-orange"
              />
              <span>
                <strong className="font-heading font-extrabold text-ink">{lead}</strong> {rest}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl border-l-8 border-brand-yellow pl-4 text-lg font-semibold leading-relaxed text-ink">
          A bicicleta faz parte disso. O ônibus, o metrô, a caminhada, a moradia e o
          orçamento público também.
        </p>
      </section>

      <section aria-labelledby="ideias-heading" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
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
        <div className="mt-10">
          <Button href="/propostas" size="lg">
            Entenda as propostas
          </Button>
        </div>
      </section>

      <BikeDivider className="py-10 text-ink" />

      <section
        aria-labelledby="eixos-heading"
        className="texture-paper border-y-[6px] border-ink bg-brand-mint py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            kicker="O programa"
            title="Cinco eixos para colocar a vida no centro."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {axes.map((axis) => (
              <li key={axis.id}>
                <AxisCard axis={axis} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="sobre-teaser-heading"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      >
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
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
              title="Daniel trabalha com isso há mais de uma década."
            />
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
              Engenheiro, pesquisador, cofundador da Ameciclo e especialista em
              mobilidade, Daniel passou os últimos anos produzindo dados,
              cobrando políticas públicas e trabalhando para mudar as ruas.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="border-2 border-ink bg-white px-3 py-1.5 text-sm font-bold text-ink"
                >
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/trajetoria" size="lg">
                Conheça Daniel e a trajetória
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTAJoin />
      <CTADonate />
    </>
  );
}
