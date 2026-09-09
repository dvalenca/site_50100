import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTADonate from "@/components/CTADonate";
import ParticipeForm from "@/components/ParticipeForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Faça parte",
  description:
    "Uma campanha feita na rua precisa de gente. Voluntariado, atividades de rua, mobilização digital, materiais e grupos de apoio.",
  alternates: { canonical: "/participe" },
  openGraph: {
    title: "Faça parte | Daniel Valença 50.100",
    description:
      "Ajude a levar as ideias da campanha para mais bairros, cidades e pessoas.",
  },
};

const blocks = [
  {
    title: "Voluntariado",
    text: "Coloque seu tempo e talento a serviço da campanha: apoio a atividades, produção e organização.",
    link: { label: "Entrar no grupo de voluntariado", href: siteConfig.groupUrl },
  },
  {
    title: "Atividades de rua",
    text: "Levar a conversa para a rua — onde a campanha nasceu. Bairro, feira, ponto de ônibus, calçada.",
    link: { label: "Entrar no grupo de voluntariado", href: siteConfig.groupUrl },
  },
  {
    title: "Mobilização digital",
    text: "Espalhar as propostas nas redes, com informação de verdade e sem fake news.",
    link: { label: "Entrar na comunidade de avisos", href: siteConfig.whatsappUrl },
  },
  {
    title: "Receber materiais",
    text: "Quer flyers, adesivos e santinhos para o seu bairro ou cidade? A campanha organiza.",
    link: siteConfig.materialsUrl
      ? { label: "Pedir materiais", href: siteConfig.materialsUrl }
      : null,
  },
  {
    title: "Grupos de apoio",
    text: "Montar um grupo de apoio na sua cidade, bairro, universidade ou local de trabalho.",
    link: { label: "Entrar no grupo de voluntariado", href: siteConfig.groupUrl },
  },
  {
    title: "Contato com a campanha",
    text: "Dúvidas, ideias e parcerias: fale diretamente com a equipe.",
    link: siteConfig.campaignEmail
      ? { label: "Escrever para a campanha", href: `mailto:${siteConfig.campaignEmail}` }
      : { label: "Entrar na comunidade de avisos", href: siteConfig.whatsappUrl },
  },
];

export default function ParticipePage() {
  return (
    <>
      <section className="texture-paper bg-brand-mint">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            kicker="Faça parte"
            title="Uma campanha feita na rua precisa de gente."
            description="Ajude a levar as ideias da campanha para mais bairros, cidades e pessoas."
            kickerColor="text-brand-purple"
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blocks.map((block) => (
              <li key={block.title}>
                <article className="flex h-full flex-col border-[4px] border-ink bg-white p-6 shadow-[5px_5px_0_0_#16121f]">
                  <h2 className="font-heading text-2xl font-extrabold leading-tight text-ink">
                    {block.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{block.text}</p>
                  {block.link && block.link.href ? (
                    <a
                      href={block.link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mt-auto inline-flex items-center pt-4 font-body text-sm font-extrabold uppercase tracking-wide text-brand-purple underline decoration-2 underline-offset-4 hover:text-brand-orange"
                    >
                      {block.link.label} →
                    </a>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="form-heading" className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <SectionTitle
          kicker="Comece agora"
          title="Preencha e a campanha entra em contato."
          description="Só o essencial: nome, cidade e um jeito de te encontrar. Nada de pergunta desnecessária."
        />
        <div className="mt-8">
          <ParticipeForm />
        </div>
        {siteConfig.campaignEmail ? (
          <p className="mt-6 text-sm text-ink/70">
            Prefere e-mail? Escreva para{" "}
            <a
              href={`mailto:${siteConfig.campaignEmail}`}
              className="font-bold underline decoration-2 underline-offset-4"
            >
              {siteConfig.campaignEmail}
            </a>
            .
          </p>
        ) : null}
      </section>

      <CTADonate />
    </>
  );
}
