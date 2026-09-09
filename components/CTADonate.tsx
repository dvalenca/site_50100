import Button from "./Button";
import DonateProgress from "./DonateProgress";
import { siteConfig, donationAmountUrl } from "@/content/site";
import { donateConfig } from "@/content/donate";

export default function CTADonate() {
  const hasUrl = Boolean(siteConfig.donationUrl);

  return (
    <section
      aria-labelledby="donate-heading"
      className="texture-paper border-t-[6px] border-ink bg-brand-purple"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
          Doe agora
        </p>
        <h2
          id="donate-heading"
          className="mt-2 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl"
        >
          {donateConfig.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/85">
          {donateConfig.subline}
        </p>

        {hasUrl ? (
          <div className="mt-8">
            <ul className="flex flex-wrap justify-center gap-3">
              {donateConfig.suggestedAmounts.map(({ amount, impact }) => (
                <li key={amount} className="flex flex-col items-center gap-1">
                  <a
                    href={donationAmountUrl(amount)}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex min-h-12 items-center justify-center border-[3px] border-ink bg-white px-6 py-2 font-heading text-lg font-extrabold text-ink shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
                  >
                    R$ {amount}
                  </a>
                  {impact ? (
                    <span className="max-w-48 text-xs font-semibold text-white/80">{impact}</span>
                  ) : null}
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.donationUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-12 items-center justify-center border-[3px] border-brand-yellow bg-transparent px-6 py-2 font-heading text-lg font-extrabold text-brand-yellow transition-transform hover:-translate-y-0.5"
                >
                  Outro valor
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/70">
              Você escolhe o valor e conclui com segurança na plataforma oficial de doação.
            </p>
          </div>
        ) : (
          <div className="mt-8">
            <Button href="/doe" size="lg">
              Doe agora
            </Button>
          </div>
        )}

        <DonateProgress />
      </div>
    </section>
  );
}
