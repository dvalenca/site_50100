const dimensoes = {
  sm: "h-8 w-7 text-base",
  md: "h-11 w-9 text-2xl",
  lg: "h-16 w-12 text-4xl",
};

type Tamanho = keyof typeof dimensoes;

/** Quadrinhos individuais do número, como na urna. */
export default function NumberBoxes({
  casas,
  valor,
  tamanho = "md",
  emDestaque = false,
  className = "",
}: {
  casas: number;
  valor: string;
  tamanho?: Tamanho;
  emDestaque?: boolean;
  className?: string;
}) {
  const digitos = Array.from({ length: casas }, (_, i) => valor[i] ?? "");
  const temNumero = digitos.some(Boolean);
  return (
    <div
      className={`flex gap-1 ${className}`}
      role="img"
      aria-label={temNumero ? `Número ${valor}` : "Número em branco"}
    >
      {digitos.map((digito, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`flex items-center justify-center border-[3px] font-display leading-none ${dimensoes[tamanho]} ${
            digito
              ? emDestaque
                ? "border-ink bg-brand-yellow text-ink"
                : "border-ink bg-white text-ink"
              : "border-dashed border-ink/40 bg-white/60 text-ink"
          }`}
        >
          {digito}
        </span>
      ))}
    </div>
  );
}
