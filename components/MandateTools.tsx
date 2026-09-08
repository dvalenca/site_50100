import { mandateTools } from "@/content/axes";

const toolLabels: Record<string, string> = {
  "legislar": "Legislar",
  "orçamento": "Orçamento",
  "fiscalizar": "Fiscalizar",
  "articular": "Articular",
  "dados": "Dados",
  "participação": "Participação",
  "mobilizar": "Mobilizar",
  "pilotos": "Pilotos",
  "avaliar": "Avaliar",
  "planejamento": "Planejamento",
  "infraestrutura": "Infraestrutura",
  "formação": "Formação",
  "compras públicas": "Compras públicas",
};

export default function MandateTools({ tools }: { tools: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Instrumentos do mandato">
      {tools.map((tool) => (
        <li key={tool}>
          <span className="inline-block border-2 border-ink bg-ink px-3 py-1 font-body text-xs font-extrabold uppercase tracking-wide text-brand-mint">
            {toolLabels[tool] ?? tool}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function MandateToolsExplained() {
  return (
    <section aria-labelledby="mandate-tools-heading" className="border-[4px] border-ink bg-brand-mint p-6 shadow-[6px_6px_0_0_#16121f] sm:p-8">
      <h3 id="mandate-tools-heading" className="font-display text-2xl uppercase text-ink">
        Como um deputado transforma proposta em ação
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
        Deputado estadual não governa — mas tem quatro ferramentas concretas para
        transformar proposta em realidade. Este mandato vai usar todas:
      </p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        {mandateTools.map((tool, i) => (
          <div
            key={tool.name}
            className={`border-[3px] border-ink p-4 ${
              i % 2 === 0 ? "bg-brand-purple text-white" : "bg-white text-ink"
            }`}
          >
            <dt className="font-display text-xl uppercase">{tool.name}</dt>
            <dd className="mt-1 text-sm leading-relaxed opacity-90">{tool.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
