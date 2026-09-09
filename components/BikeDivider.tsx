import LogoBike from "./LogoBike";

// Elemento gráfico recorrente da identidade: a bicicleta da logo oficial,
// usada como assinatura visual entre seções.
export default function BikeDivider({
  className = "",
  color = "text-ink",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden="true" className={`flex justify-center ${className}`}>
      <LogoBike className={`h-16 w-auto ${color}`} />
    </div>
  );
}
