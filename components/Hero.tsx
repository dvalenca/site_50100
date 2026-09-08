import Link from "next/link";
import { siteConfig } from "@/content/site";
import { axes, axisColors } from "@/content/axes";
import { proposals } from "@/content/proposals";
import BigNumber from "./BigNumber";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="texture-paper bg-brand-purple">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
        <div>
          <p className="inline-block border-[3px] border-ink bg-brand-yellow px-3 py-1 font-body text-sm font-extrabold uppercase tracking-[0.15em] text-ink">
            {siteConfig.office} • {siteConfig.party}
          </p>
          <h1 id="hero-heading" className="mt-5 font-display text-6xl uppercase leading-[0.95] text-white sm:text-7xl md:text-8xl">
            Daniel Valença
          </h1>
          <BigNumber className="mt-3 text-7xl text-brand-yellow sm:text-8xl md:text-9xl" />
          <p className="mt-6 font-display text-3xl uppercase leading-none text-brand-mint sm:text-4xl">
            A rua é do povo.
            <span className="block text-2xl text-white sm:text-3xl">
              E a política também precisa ser.
            </span>
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white">
            Mobilidade, direito à cidade, clima, trabalho e democracia para colocar
            a vida no centro das prioridades de Pernambuco.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/propostas"
              className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-mint px-8 py-3 font-display text-xl uppercase text-ink shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_8px_0_0_#16121f]"
            >
              Conheça as propostas
            </Link>
            <Link
              href="/doe"
              className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-orange px-8 py-3 font-display text-xl uppercase text-white shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_8px_0_0_#16121f]"
            >
              Doe para a campanha
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Cinco eixos do programa">
            {axes.map((axis) => {
              const colors = axisColors[axis.id];
              return (
                <li key={axis.id}>
                  <Link
                    href={`/propostas#${axis.slug}`}
                    className={`inline-block border-2 border-ink px-3 py-1 font-body text-xs font-bold uppercase tracking-wide ${colors.chip}`}
                  >
                    Eixo {axis.id}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-sm text-white/70">
            {proposals.length} propostas em cinco eixos — de segurança viária a
            orçamento aberto.
          </p>
        </div>

        <div className="relative">
          <div className="border-[6px] border-ink bg-ink p-2 shadow-[10px_10px_0_0_#ffc900]">
            <PhotoPlaceholder
              label="Foto de Daniel em contexto de rua e mobilidade"
              className="min-h-72 md:min-h-96"
            />
          </div>
          <p
            aria-hidden="true"
            className="mt-4 inline-block -rotate-2 border-[3px] border-ink bg-brand-orange px-4 py-2 font-display text-xl uppercase text-white"
          >
            A bicicleta é só a porta de entrada.
          </p>
        </div>
      </div>
    </section>
  );
}
