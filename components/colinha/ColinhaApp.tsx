"use client";

import { useEffect, useMemo, useState } from "react";
import {
  colinhaConfig,
  escolhasParaQuery,
  validarEscolhas,
  type EscolhasColinha,
} from "@/content/colinha";
import ColinhaCard from "./ColinhaCard";
import SenadoSheet from "./SenadoSheet";
import SugestoesFederalSheet from "./SugestoesFederalSheet";
import { baixarColinha, colinhaBlob } from "./renderColinha";

const vaga1 = colinhaConfig.senado.vagas[0];
const vaga2 = colinhaConfig.senado.vagas[1];

const classeBotao =
  "inline-flex min-h-12 w-full items-center justify-center border-[3px] border-ink px-5 py-2.5 font-display text-base uppercase leading-none shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:translate-y-0 disabled:opacity-60";

export default function ColinhaApp({ inicial }: { inicial: EscolhasColinha }) {
  // O federal fica como rascunho (0 a 4 dígitos): os quadrinhos da colinha
  // mostram o que foi digitado, mas só conta como voto quando completa os 4.
  const [federal, setFederal] = useState(inicial.federal);
  const [senado, setSenado] = useState(inicial.senado);
  const [folha, setFolha] = useState<null | "sugestoes" | 0 | 1>(null);
  const [formato, setFormato] = useState<"wide" | "story">("story");
  const [aviso, setAviso] = useState("");
  const [ocupado, setOcupado] = useState(false);

  const escolhas: EscolhasColinha = { federal, senado };
  // Para link e imagem: número completo ou em branco — nunca parcial.
  const escolhasExport: EscolhasColinha = useMemo(
    () => ({
      federal: federal.length === colinhaConfig.federal.digitos ? federal : "",
      senado,
    }),
    [federal, senado],
  );

  // Guarda as escolhas válidas na URL (link compartilhável, sem conta nem banco)
  useEffect(() => {
    const query = escolhasParaQuery(escolhasExport);
    window.history.replaceState(null, "", window.location.pathname + query);
  }, [escolhasExport]);

  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(""), 5000);
    return () => clearTimeout(t);
  }, [aviso]);

  const linkAtual = () =>
    typeof window === "undefined"
      ? ""
      : window.location.origin + window.location.pathname + escolhasParaQuery(escolhasExport);

  const trocarSenado = (indice: 0 | 1, id: string) => {
    const novo = [...senado];
    novo[indice] = id;
    setSenado(validarEscolhas("", novo).senado);
    setFolha(null);
  };

  const invertivel =
    Boolean(vaga1 && vaga2 && !vaga1.fixa && !vaga2.fixa) &&
    vaga1.permitidas.includes(senado[1]) &&
    vaga2.permitidas.includes(senado[0]);

  const inverterSenado = () => {
    setSenado(validarEscolhas("", [senado[1], senado[0]]).senado);
  };

  const copiarLink = async () => {
    setAviso("");
    try {
      await navigator.clipboard.writeText(linkAtual());
      setAviso("Link copiado! Envie para quem você quiser.");
    } catch {
      window.prompt("Copie o link da sua colinha:", linkAtual());
    }
  };

  const compartilhar = async () => {
    setAviso("");
    const url = linkAtual();
    const texto = "Minha colinha para as eleições 2026 — com Daniel Valença 50.100 para deputado estadual!";
    try {
      const blob = await colinhaBlob(escolhasExport, formato);
      const arquivo = new File([blob], "colinha-daniel-valenca.png", { type: "image/png" });
      if (typeof navigator.canShare === "function" && navigator.canShare({ files: [arquivo] })) {
        await navigator.share({ files: [arquivo], text: `${texto} ${url}` });
        return;
      }
      if (navigator.share) {
        await navigator.share({ text: `${texto} ${url}` });
        return;
      }
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") return;
      // segue para o WhatsApp como alternativa
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${texto} ${url}`)}`, "_blank", "noopener");
  };

  const baixar = async () => {
    setAviso("");
    setOcupado(true);
    try {
      await baixarColinha(escolhasExport, formato);
      setAviso("Imagem baixada!");
    } catch {
      setAviso("Não foi possível gerar a imagem agora. Tente novamente.");
    } finally {
      setOcupado(false);
    }
  };

  return (
    <div className="texture-paper bg-[#fffdf6]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="max-w-2xl">
          <p className="inline-block border-[3px] border-ink bg-brand-yellow px-3 py-1 font-body text-sm font-extrabold uppercase tracking-[0.15em] text-ink">
            {colinhaConfig.eleicao} • {colinhaConfig.estado}
          </p>
          <h1 className="mt-5 font-display text-4xl uppercase sm:text-5xl">
            Monte sua colinha
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">
            Organize os seus votos para a urna, com <strong>Daniel Valença 50.100</strong> para
            deputado estadual. Digite o número do seu deputado federal — ou toque em Sugestões —,
            ajuste os votos para o Senado e leve a colinha no celular no dia da votação.
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="-mx-4 sm:-mx-6 lg:mx-0">
            <ColinhaCard
              escolhas={escolhas}
              formato={formato}
              acoes={{
                onFederalChange: setFederal,
                onSugestoesFederal: () => setFolha("sugestoes"),
                onLimparFederal: () => setFederal(""),
                onTrocarSenado: (indice) => setFolha(indice),
                onInverterSenado: inverterSenado,
                invertivel,
              }}
            />
            <p className="mx-auto mt-4 max-w-2xl px-4 text-sm leading-relaxed text-ink/70 sm:px-6 lg:px-0">
              As suas escolhas ficam guardadas no link. Copie, mande no WhatsApp ou baixe a
              imagem — quem abrir o link vê exatamente esta colinha, sem precisar de conta.
            </p>
          </div>

          <aside aria-label="Ações da colinha" className="lg:sticky lg:top-24">
            <div role="group" aria-label="Formato da colinha" className="flex border-[3px] border-ink">
              {(
                [
                  ["wide", "Quadrada (feed)"],
                  ["story", "Vertical (stories)"],
                ] as const
              ).map(([valor, rotulo]) => (
                <button
                  key={valor}
                  type="button"
                  aria-pressed={formato === valor}
                  onClick={() => setFormato(valor)}
                  className={`min-h-12 flex-1 px-3 py-2.5 font-display text-sm uppercase leading-tight ${
                    formato === valor ? "bg-ink text-brand-yellow" : "bg-white text-ink"
                  }`}
                >
                  {rotulo}
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              <button
                type="button"
                onClick={compartilhar}
                disabled={ocupado}
                className={`${classeBotao} bg-brand-orange text-white`}
              >
                Compartilhar
              </button>
              <button
                type="button"
                onClick={baixar}
                disabled={ocupado}
                className={`${classeBotao} bg-brand-yellow text-ink`}
              >
                {ocupado ? "Gerando imagem…" : "Baixar imagem"}
              </button>
              <button
                type="button"
                onClick={copiarLink}
                disabled={ocupado}
                className={`${classeBotao} bg-white text-ink`}
              >
                Copiar link
              </button>
            </div>

            {aviso ? (
              <p
                role="status"
                aria-live="polite"
                className="mt-4 border-[3px] border-ink bg-brand-mint px-3 py-2 text-sm font-bold text-ink"
              >
                {aviso}
              </p>
            ) : null}
          </aside>
        </div>
      </div>

      {folha === "sugestoes" ? (
        <SugestoesFederalSheet
          open
          onClose={() => setFolha(null)}
          valor={escolhasExport.federal}
          onConfirm={(numero) => {
            setFederal(numero);
            setFolha(null);
          }}
        />
      ) : null}
      {folha === 0 || folha === 1 ? (
        <SenadoSheet
          open
          onClose={() => setFolha(null)}
          indice={folha}
          escolhas={escolhas}
          onConfirm={trocarSenado}
        />
      ) : null}
    </div>
  );
}
