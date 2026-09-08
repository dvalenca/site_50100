import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function CTAJoin() {
  return (
    <section aria-labelledby="join-heading" className="texture-paper bg-brand-mint">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="border-[5px] border-ink bg-white p-8 shadow-[8px_8px_0_0_#16121f] sm:p-10">
          <h2 id="join-heading" className="font-display text-4xl uppercase leading-[1.05] text-ink sm:text-5xl">
            Uma campanha feita na rua precisa de gente.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            Ajude a levar as ideias da campanha para mais bairros, cidades e pessoas.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/participe"
              className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-purple px-8 py-3 font-display text-xl uppercase text-white shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
            >
              Quero participar
            </Link>
            {siteConfig.materialsUrl ? (
              <a
                href={siteConfig.materialsUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-yellow px-8 py-3 font-display text-xl uppercase text-ink shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
              >
                Receber materiais
              </a>
            ) : null}
            {siteConfig.groupUrl ? (
              <a
                href={siteConfig.groupUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-white px-8 py-3 font-display text-xl uppercase text-ink shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
              >
                Entrar no grupo
              </a>
            ) : null}
            {siteConfig.whatsappUrl ? (
              <a
                href={siteConfig.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-white px-8 py-3 font-display text-xl uppercase text-ink shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
              >
                Compartilhar
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
