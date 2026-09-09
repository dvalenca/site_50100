"use client";

import { useMemo, useState } from "react";
import { axes, axisColors } from "@/content/axes";
import type { Proposal } from "@/content/proposals";
import ProposalCard from "./ProposalCard";

const filterInactive = "border-[3px] border-ink bg-white text-ink hover:bg-brand-yellow/30";
const filterActiveBase =
  "border-[3px] border-ink shadow-[4px_4px_0_0_#16121f] font-heading font-extrabold";

export default function ProposalsBrowser({
  proposals,
  initialAxis = 0,
}: {
  proposals: Proposal[];
  initialAxis?: 0 | 1 | 2 | 3 | 4 | 5;
}) {
  const [axisFilter, setAxisFilter] = useState<0 | 1 | 2 | 3 | 4 | 5>(initialAxis);
  const [query, setQuery] = useState("");

  // Quando a página é reaberta com outro filtro na URL
  // (ex.: /propostas?eixo=2), ajusta o estado durante o render.
  const [prevInitialAxis, setPrevInitialAxis] = useState(initialAxis);
  if (initialAxis !== prevInitialAxis) {
    setPrevInitialAxis(initialAxis);
    setAxisFilter(initialAxis);
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return proposals.filter((p) => {
      const matchesAxis = axisFilter === 0 || p.axis === axisFilter;
      if (!normalizedQuery) return matchesAxis;
      const haystack = `${p.title} ${p.tagline} ${p.proposal}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return matchesAxis && haystack.includes(normalizedQuery);
    });
  }, [proposals, axisFilter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar propostas por eixo"
        >
          <button
            type="button"
            aria-pressed={axisFilter === 0}
            onClick={() => setAxisFilter(0)}
            className={`min-h-11 px-4 py-2 font-body text-sm font-extrabold uppercase tracking-wide transition-transform ${
              axisFilter === 0
                ? `${filterActiveBase} bg-ink text-white`
                : filterInactive
            }`}
          >
            Todos
          </button>
          {axes.map((axis) => {
            const active = axisFilter === axis.id;
            const activeColor = axisColors[axis.id].chip;
            return (
              <button
                key={axis.id}
                type="button"
                aria-pressed={active}
                onClick={() => setAxisFilter(axis.id)}
                className={`min-h-11 px-4 py-2 font-body text-sm font-extrabold uppercase tracking-wide transition-transform ${
                  active ? `${filterActiveBase} ${activeColor}` : filterInactive
                }`}
              >
                Eixo {axis.id}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <label htmlFor="proposal-search" className="sr-only">
            Buscar propostas por título ou palavra-chave
          </label>
          <input
            id="proposal-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por palavra…"
            className="w-full border-[3px] border-ink bg-white px-4 py-3 font-body text-base text-ink placeholder:text-ink/40"
          />
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-sm font-bold text-ink/70">
        {filtered.length === 0
          ? "Nenhuma proposta encontrada com esse filtro."
          : `${filtered.length} ${filtered.length === 1 ? "proposta" : "propostas"}`}
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((proposal) => (
          <li key={proposal.slug}>
            <ProposalCard proposal={proposal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
