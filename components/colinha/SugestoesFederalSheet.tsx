"use client";

import Image from "next/image";
import { colinhaConfig } from "@/content/colinha";
import NumberBoxes from "./NumberBoxes";
import Sheet from "./Sheet";

/** Sugestões de deputado federal (lista fechada e configurável). */
export default function SugestoesFederalSheet({
  open,
  onClose,
  valor,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  /** número atual, para marcar a sugestão escolhida */
  valor: string;
  onConfirm: (numero: string) => void;
}) {
  return (
    <Sheet open={open} onClose={onClose} titulo="Sugestões para deputado(a) federal">
      <p className="mt-2 text-sm font-bold text-ink/80">
        Toque em uma sugestão para preencher o número — ou feche e digite outro
        número direto nos quadrinhos da colinha.
      </p>

      <ul className="mt-4 space-y-3">
        {colinhaConfig.federal.sugestoes.map((opcao) => {
          const selecionada = valor === opcao.numero;
          return (
            <li key={opcao.numero}>
              <button
                type="button"
                onClick={() => onConfirm(opcao.numero)}
                aria-pressed={selecionada}
                className={`flex w-full flex-wrap items-center gap-x-3 gap-y-2 border-[3px] border-ink p-3 text-left shadow-[3px_3px_0_0_#16121f] active:translate-y-px ${
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
                  <span className="block font-display text-xl uppercase leading-tight text-ink">
                    {opcao.nome}
                  </span>
                  <span className="mt-1 block text-xs font-extrabold uppercase tracking-wide text-ink/70">
                    {opcao.partido}
                  </span>
                </span>
                <NumberBoxes
                  casas={4}
                  valor={opcao.numero}
                  tamanho="sm"
                  className="basis-full justify-end sm:ml-auto sm:basis-auto"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </Sheet>
  );
}
