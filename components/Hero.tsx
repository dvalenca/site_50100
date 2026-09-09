import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { axes, axisColors } from "@/content/axes";
import { proposals } from "@/content/proposals";
import Button from "./Button";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="texture-paper bg-brand-purple">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
        <div>
          <p className="inline-block border-[3px] border-ink bg-brand-yellow px-3 py-1 font-body text-sm font-extrabold uppercase tracking-[0.15em] text-ink">
            {siteConfig.office} • {siteConfig.party}
          </p>
          <h1 id="hero-heading" className="mt-5">
            <span className="sr-only">Daniel Valença 50.100</span>
            <Image
              src="/brand/logo-completa.svg"
              alt=""
              aria-hidden="true"
              width={595}
              height={472}
              unoptimized
              priority
              className="mt-2 w-full max-w-sm"
            />
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Mobilidade, direito à cidade, clima, trabalho e democracia para colocar
            a vida no centro das prioridades de Pernambuco.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/propostas" size="lg">
              Conheça as propostas
            </Button>
            <Button href="/participe" variant="secondary" size="lg" onDark>
              Faça parte
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Cinco eixos do programa">
            {axes.map((axis) => {
              const colors = axisColors[axis.id];
              return (
                <li key={axis.id}>
                  <Link
                    href={`/propostas?eixo=${axis.id}`}
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
            <Image
              src="/photos/daniel-hero.webp"
              alt="Daniel em atividade na rua com a bandeira da campanha"
              width={1600}
              height={1066}
              priority
              className="h-72 w-full object-cover md:h-96"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
          <p
            aria-hidden="true"
            className="mt-4 inline-block -rotate-2 border-[3px] border-ink bg-brand-yellow px-4 py-2 font-heading text-lg font-extrabold text-ink"
          >
            A bicicleta é só a porta de entrada.
          </p>
        </div>
      </div>
    </section>
  );
}
