import Button from "./Button";
import { siteConfig } from "@/content/site";

export default function CTAJoin() {
  return (
    <section aria-labelledby="join-heading" className="texture-paper bg-brand-mint">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="border-[5px] border-ink bg-white p-8 shadow-[8px_8px_0_0_#16121f] sm:p-10">
          <h2
            id="join-heading"
            className="max-w-xl font-heading text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl"
          >
            Uma campanha feita na rua precisa de gente.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/75">
            Ajude a levar as ideias da campanha para mais bairros, cidades e pessoas.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/participe" size="lg">
              Quero participar
            </Button>
            {siteConfig.materialsUrl ? (
              <Button href={siteConfig.materialsUrl} variant="secondary" size="lg" external>
                Receber materiais
              </Button>
            ) : null}
            {siteConfig.groupUrl ? (
              <Button href={siteConfig.groupUrl} variant="secondary" size="lg" external>
                Entrar no grupo
              </Button>
            ) : null}
            {siteConfig.whatsappUrl ? (
              <Button href={siteConfig.whatsappUrl} variant="secondary" size="lg" external>
                Compartilhar
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
