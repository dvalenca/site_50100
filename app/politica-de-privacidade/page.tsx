import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como o site da campanha Daniel Valença 50.100 trata dados pessoais, de acordo com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false },
};

const placeholders: Record<string, string> = {
  "{{EMAIL_CAMPANHA}}": siteConfig.campaignEmail || "{{EMAIL_CAMPANHA}}",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl uppercase text-ink sm:text-5xl">
        Política de privacidade
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/85">
        <div>
          <h2 className="font-display text-2xl uppercase text-ink">Quem somos</h2>
          <p className="mt-2">
            Este site é o canal oficial da campanha de Daniel Valença, candidato a
            Deputado Estadual por Pernambuco — PSOL-PE, número 50.100.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase text-ink">Quais dados tratamos</h2>
          <p className="mt-2">
            O site trata dados pessoais apenas quando você voluntariamente os
            envia pelo formulário de participação: nome, cidade, bairro,
            WhatsApp, e-mail e a forma como você quer ajudar.
          </p>
          <p className="mt-2">
            Não coletamos dados de navegação por padrão. Não instalamos pixels
            de terceiros (Meta, Google Ads, TikTok ou outros) sem decisão
            explícita da campanha.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase text-ink">Para que usamos</h2>
          <p className="mt-2">
            Usamos os dados exclusivamente para entrar em contato sobre as
            atividades da campanha que você manifestou interesse em apoiar.
            Não vendemos, alugamos e nem compartilhamos seus dados com
            terceiros para fins comerciais.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase text-ink">Consentimento e revogação</h2>
          <p className="mt-2">
            O envio do formulário exige consentimento explícito. Você pode
            revogar o consentimento e solicitar exclusão dos seus dados a
            qualquer momento pelo e-mail da campanha:{" "}
            <strong>{placeholders["{{EMAIL_CAMPANHA}}"]}</strong>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase text-ink">Segurança</h2>
          <p className="mt-2">
            Os dados são enviados apenas para o canal oficial configurado da
            campanha. Não armazenamos dados pessoais neste site e não
            publicamos dados pessoais em repositórios públicos.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl uppercase text-ink">Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Nos termos da Lei nº 13.709/2018 (LGPD), você pode solicitar
            confirmação do tratamento, acesso, correção, portabilidade,
            anonimização ou exclusão dos seus dados, além de revogar
            consentimentos.
          </p>
        </div>

        <div className="border-l-4 border-brand-orange pl-4 text-sm">
          <p>
            Campanha Daniel Valença 50.100 — CNPJ {siteConfig.cnpj}. Outras
            informações legais obrigatórias (como dados de prestação de contas)
            serão publicadas quando fornecidas e validadas pela campanha.
          </p>
        </div>
      </div>
    </section>
  );
}
