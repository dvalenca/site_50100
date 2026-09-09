import Button from "./Button";
import { siteConfig } from "@/content/site";

export default function CTADonate() {
  const donationHref = siteConfig.donationUrl || "/doe";
  const isExternal = Boolean(siteConfig.donationUrl);

  return (
    <section
      aria-labelledby="donate-heading"
      className="texture-paper border-t-[6px] border-ink bg-brand-purple"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2
          id="donate-heading"
          className="mx-auto max-w-3xl font-display text-4xl uppercase leading-[1.05] text-white sm:text-6xl"
        >
          Dinheiro de campanha também mostra prioridade.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
          Uma campanha com independência política precisa de muitas pessoas
          contribuindo com o que puderem.
        </p>
        <div className="mt-8">
          <Button href={donationHref} size="lg" external={isExternal}>
            Doe agora
          </Button>
        </div>
      </div>
    </section>
  );
}
