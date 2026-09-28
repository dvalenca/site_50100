"use client";

import Image from "next/image";
import { colinhaConfig, opcaoSenado, type EscolhasColinha } from "@/content/colinha";
import NumberBoxes from "./NumberBoxes";
import Sheet from "./Sheet";

/** Troca do voto para o Senado dentro da lista fechada e configurável. */
export default function SenadoSheet({
  open,
  onClose,
  indice,
  escolhas,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  indice: 0 | 1;
  escolhas: EscolhasColinha;
  onConfirm: (indice: 0 | 1, id: string) => void;
}) {
  const vaga = colinhaConfig.senado.vagas[indice];
  if (!vaga) return null;
  const outroId = escolhas.senado[1 - indice];

  return (
    <Sheet open={open} onClose={onClose} titulo={`Senado — ${vaga.rotulo}`}>
      <p className="mt-2 text-sm font-bold text-ink/80">
        Escolha quem ocupa o {vaga.rotulo} para o Senado. A mesma candidatura não
        pode ficar nos dois votos.
      </p>

      <ul className="mt-4 space-y-3">
        {vaga.permitidas.map((id) => {
          const opcao = opcaoSenado(id);
          if (!opcao) return null;
          const emUsoNoOutro = id === outroId;
          const selecionada = escolhas.senado[indice] === id;
          return (
            <li key={id}>
              <button
                type="button"
                disabled={emUsoNoOutro}
                onClick={() => onConfirm(indice, id)}
                aria-pressed={selecionada}
                className={`flex w-full items-center gap-3 border-[3px] border-ink p-3 text-left shadow-[3px_3px_0_0_#16121f] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${
                  selecionada ? "bg-brand-mint" : "bg-white"
                }`}
              >
                {opcao.foto ? (
                  <Image
                    src={opcao.foto}
                    alt=""
                    width={96}
                    height={96}
                    className="h-16 w-16 shrink-0 border-[3px] border-ink object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center border-[3px] border-ink bg-brand-purple font-display text-2xl uppercase text-brand-yellow"
                  >
                    {opcao.nome.charAt(0)}
                  </span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-xl uppercase text-ink">
                    {opcao.nome}
                  </span>
                  <span className="mt-1 block text-xs font-extrabold uppercase tracking-wide text-ink/70">
                    {emUsoNoOutro ? `Já está no ${colinhaConfig.senado.vagas[1 - indice]?.rotulo}` : opcao.partido}
                  </span>
                </span>
                <NumberBoxes casas={3} valor={opcao.numero} tamanho="sm" />
              </button>
            </li>
          );
        })}
      </ul>
    </Sheet>
  );
}
