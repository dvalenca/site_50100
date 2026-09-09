import LogoBike from "./LogoBike";

// Elemento gráfico recorrente da identidade: a bicicleta da logo oficial
// carregando uma flâmula, usada como assinatura visual entre seções.
export default function BikeDivider({
  className = "",
  color = "text-ink",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden="true" className={`flex justify-center ${className}`}>
      <div className="relative">
        <LogoBike className={`h-14 w-auto ${color}`} />
        <svg
          width="34"
          height="22"
          viewBox="0 0 34 22"
          fill="none"
          className="absolute -right-9 -top-3 -rotate-6"
        >
          <path
            d="M6 2v18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={color}
          />
          <path d="M6 2l24 5.5L6 13z" fill="#ee3c00" stroke="#16121f" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
