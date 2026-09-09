// Elemento gráfico recorrente da identidade: bicicleta carregando a flâmula.
// Decorativo, discreto, usado como assinatura visual entre seções.
export default function BikeDivider({
  className = "",
  color = "text-ink",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden="true" className={`flex justify-center ${className}`}>
      <svg
        width="132"
        height="56"
        viewBox="0 0 132 56"
        fill="none"
        className={color}
        role="presentation"
      >
        <circle cx="26" cy="40" r="10" stroke="currentColor" strokeWidth="3" />
        <circle cx="74" cy="40" r="10" stroke="currentColor" strokeWidth="3" />
        <path
          d="M26 40L36 22h24l14 18M36 22h-8M46 40H26M74 40L60 22"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M60 22V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 8l24 5-24 5z" fill="#ee3c00" stroke="#16121f" strokeWidth="2" />
      </svg>
    </div>
  );
}
