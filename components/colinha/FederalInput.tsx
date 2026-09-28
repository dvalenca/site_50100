"use client";

import { useRef } from "react";
import { colinhaConfig } from "@/content/colinha";

const { digitos: CASAS } = colinhaConfig.federal;

const classeCaixa = (cheia: boolean) =>
  `h-11 w-9 border-[3px] text-center font-display text-2xl leading-none text-ink caret-brand-orange focus-visible:outline-brand-orange ${
    cheia ? "border-ink bg-white" : "border-dashed border-ink/40 bg-white/60"
  }`;

/** Digitação do número do deputado federal direto nos quadrinhos, como na urna. */
export default function FederalInput({
  valor,
  onChange,
}: {
  valor: string;
  onChange: (digitos: string) => void;
}) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const casas = Array.from({ length: CASAS }, (_, i) => valor[i] ?? "");

  const definir = (novo: string) => onChange(novo.replace(/\D/g, "").slice(0, CASAS));

  const aoMudar = (i: number, evento: React.ChangeEvent<HTMLInputElement>) => {
    const bruto = evento.target.value.replace(/\D/g, "");
    if (!bruto) return;
    const atual = casas.slice();
    let pos = i;
    for (const d of bruto) {
      if (pos >= CASAS) break;
      atual[pos] = d;
      pos++;
    }
    definir(atual.join(""));
    const foco = Math.min(pos, CASAS - 1);
    const input = refs.current[foco];
    input?.focus();
    input?.select();
  };

  const aoApagar = (i: number, evento: React.KeyboardEvent<HTMLInputElement>) => {
    if (evento.key !== "Backspace") return;
    if (casas[i]) return; // input apaga o próprio dígito normalmente
    evento.preventDefault();
    const atual = casas.slice();
    if (i > 0) {
      atual[i - 1] = "";
      definir(atual.join(""));
    }
    const input = refs.current[Math.max(i - 1, 0)];
    input?.focus();
  };

  return (
    <div className="flex gap-1" role="group" aria-label={`Número do deputado federal — ${CASAS} dígitos`}>
      {casas.map((digito, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
          value={digito}
          aria-label={`${i + 1}º dígito do número do deputado federal`}
          maxLength={CASAS}
          onChange={(e) => aoMudar(i, e)}
          onKeyDown={(e) => aoApagar(i, e)}
          onFocus={(e) => e.target.select()}
          className={classeCaixa(Boolean(digito))}
        />
      ))}
    </div>
  );
}
