import Link from "next/link";
import Hero from "@/components/Hero";
import StreetBanner from "@/components/StreetBanner";
import SectionTitle from "@/components/SectionTitle";
import AxisCard from "@/components/AxisCard";
import TrackRecordCard from "@/components/TrackRecordCard";
import PriorityShift from "@/components/PriorityShift";
import CTAJoin from "@/components/CTAJoin";
import CTADonate from "@/components/CTADonate";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { axes } from "@/content/axes";
import { bioShort, facts } from "@/content/bio";
import { trackRecord } from "@/content/track-record";

const threeIdeas = [
  {
    title: "A vida acima da velocidade",
    text: "Nenhuma morte no trânsito deve ser tratada como inevitável.",
    bg: "bg-brand-orange",
    text_color: "text-white",
    chip: "bg-brand-yellow text-ink",
  },
  {
    title: "85 para os 85",
    text: "Orçamento, espaço e prioridade para a maioria que anda, pedala e usa transporte coletivo.",
    bg: "bg-brand-purple",
    text_color: "text-white",
    chip: "bg-brand-mint text-ink",
  },
  {
    title: "Mudar a energia é mudar a mobilidade",
    text: "Não basta trocar o motor. Precisamos reduzir a dependência do automóvel e fortalecer caminhada, bicicleta, ônibus e trilhos.",
    bg: "bg-brand-mint",
    text_color: "text-ink",
    chip: "bg-brand-purple text-white",
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
              <article
                className={`h-full border-[4px] border-ink p-6 shadow-[6px_6px_0_0_#16121f] ${idea.bg} ${idea.text_color}`}
              >
                <p className={`inline-block border-2 border-ink px-2 py-0.5 font-body text-xs font-extrabold uppercase tracking-widest ${idea.chip}`}>
                  Ideia {i + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                  {idea.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">{idea.text}</p>
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
                <p className="font-display text-2xl uppercase leading-tight text-ink">
                  18 propostas detalhadas, uma por uma.
                </p>
                <Link
                  href="/propostas"
                  className="inline-flex min-h-12 items-center justify-center border-[3px] border-ink bg-ink px-6 py-2 font-display text-lg uppercase text-brand-yellow transition-transform hover:-translate-y-0.5"
                >
                  Ver propostas
                </Link>
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
            <p className="mt-4 text-base leading-relaxed text-ink/85">
              É saúde quando evita mortes. É clima quando reduz emissões. É trabalho
              quando devolve tempo e renda. É direito à cidade quando aproxima as
              pessoas de emprego, escola, cultura e cuidado.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/85">{bioShort}</p>
            <ul className="mt-6 space-y-2">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 text-sm font-bold text-ink">
                  <span aria-hidden="true" className="mt-1 inline-block h-3 w-3 shrink-0 border-2 border-ink bg-brand-orange" />
                  {fact}
                </li>
              ))}
            </ul>
            <Link
              href="/sobre"
              className="mt-8 inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-purple px-8 py-3 font-display text-xl uppercase text-white shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
            >
              Conheça minha trajetória
            </Link>
          </div>
        </div>
      </section>

      <StreetBanner backgroundColor="bg-brand-orange" textColor="text-white" />

      <section aria-labelledby="fez-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle
          kicker="Trajetória comprovada"
          title="Não comecei a discutir mobilidade agora."
          description="Há mais de uma década, Daniel transforma dados, pesquisa e mobilização em ferramentas para mudar as ruas e cobrar o poder público."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trackRecord.map((item) => (
            <li key={item.title}>
              <TrackRecordCard item={item} />
            </li>
          ))}
        </ul>
        <Link
          href="/trajetoria"
          className="mt-10 inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-yellow px-8 py-3 font-display text-xl uppercase text-ink shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
        >
          Ver trajetória completa
        </Link>
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
          <Link
            href="/participe"
            className="inline-flex min-h-14 items-center justify-center border-[3px] border-brand-yellow bg-brand-mint px-10 py-3 font-display text-xl uppercase text-ink transition-transform hover:-translate-y-0.5"
          >
            Faça parte
          </Link>
          <Link
            href="/doe"
            className="inline-flex min-h-14 items-center justify-center border-[3px] border-brand-mint bg-brand-orange px-10 py-3 font-display text-xl uppercase text-white transition-transform hover:-translate-y-0.5"
          >
            Doe agora
          </Link>
        </div>
      </section>

      <CTAJoin />
      <CTADonate />
    </>
  );
}
