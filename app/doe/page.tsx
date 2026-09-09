import type { Metadata } from "next";
import BigNumber from "@/components/BigNumber";
import DonateProgress from "@/components/DonateProgress";
import { siteConfig } from "@/content/site";
import { donateConfig } from "@/content/donate";

export const metadata: Metadata = {
  title: "Doe agora",
  description:
    "Essa campanha anda de bicicleta, ônibus e a pé. Para chegar mais longe, ela precisa de você. Doe pela plataforma oficial.",
  alternates: { canonical: "/doe" },
  openGraph: {
    title: "Doe agora | Daniel Valença 50.100",
    description:
      "Uma campanha feita por muita gente também é financiada por muita gente.",
  },
};

const reasons = [
  {
    title: "Por que a campanha precisa de doações",
    text: "Campanha custa dinheiro: material, deslocamento, estrutura de rua. Sem a contribuição de muita gente, só quem tem dinheiro próprio ou financiamento concentrado consegue disputar eleição.",
  },
  {
    title: "Por que contribuição pequena importa",
    text: "Muitas doações pequenas financiam a campanha e, ao mesmo tempo, mostram de onde vem a força política: de gente comum, não de grande doador.",
  },
  {
    title: "Segurança e legalidade",
    text: "A doação é feita pela plataforma oficial da campanha, com as regras eleitorais e prestação de contas. O site não coleta dados de cartão ou Pix diretamente.",
  },
];

export default function DoePage() {
  const hasUrl = Boolean(siteConfig.donationUrl);

  return (
    <>
      <section className="texture-paper bg-brand-purple">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <p className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
            Apoie a campanha
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
            {donateConfig.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            {donateConfig.subline}
          </p>

          {hasUrl ? (
            <div className="mt-10">
              <ul className="flex flex-wrap justify-center gap-3">
                {donateConfig.suggestedAmounts.map(({ amount, impact }) => (
                  <li key={amount} className="flex flex-col items-center gap-1">
                    <a
                      href={siteConfig.donationUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-white px-8 py-3 font-heading text-xl font-extrabold text-ink shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5"
                    >
                      R$ {amount}
                    </a>
                    {impact ? (
                      <span className="max-w-48 text-xs font-semibold text-white/80">
                        {impact}
                      </span>
                    ) : null}
                  </li>
                ))}
                <li>
                  <a
                    href={siteConfig.donationUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex min-h-14 items-center justify-center border-[3px] border-brand-yellow bg-transparent px-8 py-3 font-heading text-xl font-extrabold text-brand-yellow transition-transform hover:-translate-y-0.5"
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
            <div className="mx-auto mt-10 max-w-xl border-[4px] border-brand-yellow bg-ink p-6 text-left text-white">
              <p className="font-heading text-2xl font-extrabold text-brand-yellow">
                Plataforma de doação em configuração
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                A doação será feita pela plataforma oficial da campanha, em
                conformidade com a legislação eleitoral. Assim que o canal
                estiver ativo, os botões de contribuição aparecerão aqui.
              </p>
            </div>
          )}

          <DonateProgress />
        </div>
      </section>

      <section aria-labelledby="razoes-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 id="razoes-heading" className="sr-only">
          Por que doar
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <article className="h-full border-[4px] border-ink bg-white p-6 shadow-[5px_5px_0_0_#16121f]">
                <h3 className="font-heading text-2xl font-extrabold leading-tight text-ink">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{reason.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6" aria-hidden="true">
        <BigNumber className="text-8xl text-brand-purple/20 sm:text-9xl" />
      </div>
    </>
  );
}
