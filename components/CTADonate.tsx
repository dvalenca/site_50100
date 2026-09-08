import Link from "next/link";
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
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-brand-mint">
          Uma campanha com independência política precisa de muitas pessoas
          contribuindo com o que puderem.
        </p>
        {isExternal ? (
          <a
            href={donationHref}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-8 inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-orange px-10 py-4 font-display text-2xl uppercase text-white shadow-[6px_6px_0_0_#ffc900] transition-transform hover:-translate-y-1 hover:shadow-[7px_9px_0_0_#ffc900]"
          >
            Doe agora
          </a>
        ) : (
          <Link
            href={donationHref}
            className="mt-8 inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-orange px-10 py-4 font-display text-2xl uppercase text-white shadow-[6px_6px_0_0_#ffc900] transition-transform hover:-translate-y-1 hover:shadow-[7px_9px_0_0_#ffc900]"
          >
            Doe agora
          </Link>
        )}
      </div>
    </section>
  );
}
