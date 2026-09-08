import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import StreetBanner from "@/components/StreetBanner";
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
  },
  {
    title: "Atividades de rua",
    text: "Levar a conversa para a rua — onde a campanha nasceu. Bairro, feira, ponto de ônibus, calçada.",
  },
  {
    title: "Mobilização digital",
    text: "Espalhar as propostas nas redes, com informação de verdade e sem fake news.",
  },
  {
    title: "Receber materiais",
    text: "Quer flyers, adesivos e santinhos para o seu bairro ou cidade? A campanha organiza.",
  },
  {
    title: "Grupos de apoio",
    text: "Montar um grupo de apoio na sua cidade, bairro, universidade ou local de trabalho.",
  },
  {
    title: "Contato com a campanha",
    text: "Dúvidas, ideias e parcerias: fale diretamente com a equipe.",
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
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blocks.map((block, i) => (
              <li key={block.title}>
                <article
                  className={`h-full border-[4px] border-ink p-6 shadow-[5px_5px_0_0_#16121f] ${
                    i % 2 === 0 ? "bg-white text-ink" : "bg-brand-purple text-white"
                  }`}
                >
                  <h2 className="font-display text-2xl uppercase leading-tight">{block.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{block.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StreetBanner backgroundColor="bg-brand-yellow" textColor="text-brand-purple" />

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
