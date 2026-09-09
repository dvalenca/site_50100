import type { Metadata } from "next";
import BigNumber from "@/components/BigNumber";
import Button from "@/components/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Doe agora",
  description:
    "Uma campanha com independência política precisa de muitas pessoas contribuindo com o que puderem. Doe pela plataforma oficial.",
  alternates: { canonical: "/doe" },
  openGraph: {
    title: "Doe agora | Daniel Valença 50.100",
    description:
      "Dinheiro de campanha também mostra prioridade: contribua com o que puder.",
  },
};

const reasons = [
  {
    title: "Por que a campanha precisa de doações",
    text: "Campanha custa dinheiro: material gráfico, deslocamento, estrutura de rua. Sem contribuição de muita gente, só quem tem dinheiro próprio ou financiamento concentrado consegue disputar eleição.",
  },
  {
    title: "Por que contribuição pequena importa",
    text: "Muitas doações pequenas financiam a campanha e, ao mesmo tempo, mostram de onde vem a força política: de gente comum, não de grandes doadores.",
  },
  {
    title: "Segurança e legalidade",
    text: "A doação é feita pela plataforma oficial da campanha, com regras eleitorais e prestação de contas. O site não coleta dados de cartão ou Pix diretamente.",
  },
];

export default function DoePage() {
  return (
    <>
      <section className="texture-paper bg-brand-purple">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
            Apoie a campanha
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl uppercase leading-[1.05] text-white sm:text-6xl">
            Dinheiro de campanha também mostra prioridade.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-mint">
            Uma campanha com independência política precisa de muitas pessoas
            contribuindo com o que puderem.
          </p>
          <div className="mt-8">
            {siteConfig.donationUrl ? (
              <Button href={siteConfig.donationUrl} size="lg" external>
                Doe agora pela plataforma oficial
              </Button>
            ) : (
              <div className="max-w-xl border-[4px] border-brand-yellow bg-ink p-6 text-white">
                <p className="font-heading text-2xl font-extrabold text-brand-yellow">
                  Plataforma de doação em configuração
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  A doação será feita pela plataforma oficial da campanha, em
                  conformidade com a legislação eleitoral. Assim que o canal
                  estiver ativo, o botão de doação aparecerá aqui.
                </p>
              </div>
            )}
          </div>
          <BigNumber className="mt-10 text-8xl text-brand-yellow/30 sm:text-9xl" />
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
    </>
  );
}
