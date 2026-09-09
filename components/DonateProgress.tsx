import { donateConfig } from "@/content/donate";

// Termômetro de arrecadação + prova social.
// Não renderiza nada enquanto `goal` e `supporters` não forem preenchidos
// com dados reais em content/donate.ts.
export default function DonateProgress() {
  const { goal, supporters } = donateConfig;

  if (!goal || goal.target <= 0) {
    if (!supporters) return null;
    return (
      <p className="mt-6 text-sm font-bold text-white/90">
        {supporters} pessoas já contribuíram — essa campanha é financiada por pessoas.
      </p>
    );
  }

  const pct = Math.min(100, Math.round((goal.raised / goal.target) * 100));

  return (
    <div className="mt-8">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={goal.target}
        aria-valuenow={goal.raised}
        aria-label={`R$ ${goal.raised.toLocaleString("pt-BR")} arrecadados de R$ ${goal.target.toLocaleString("pt-BR")}`}
        className="mx-auto max-w-md"
      >
        <div className="h-6 border-[3px] border-ink bg-white">
          <div className="h-full bg-brand-orange" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <p className="mt-3 text-sm font-bold text-white">
        R$ {goal.raised.toLocaleString("pt-BR")} arrecadados de R${" "}
        {goal.target.toLocaleString("pt-BR")} — {pct}%
      </p>
      {goal.deadline ? (
        <p className="mt-1 text-sm text-white/80">Prazo: {goal.deadline}</p>
      ) : null}
      {supporters ? (
        <p className="mt-1 text-sm text-white/80">
          {supporters} pessoas já contribuíram — essa campanha é financiada por pessoas.
        </p>
      ) : null}
    </div>
  );
}
