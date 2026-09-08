const shifts = [
  { from: "Da velocidade", to: "para a vida" },
  { from: "Do carro como padrão", to: "para a mobilidade como direito" },
  { from: "Da tarifa como única conta", to: "para o transporte como serviço público" },
  { from: "Da bicicleta como lazer", to: "para a bicicleta como política de Estado" },
  { from: "Da obra isolada", to: "para a rede" },
  { from: "Da transição tecnológica", to: "para a transição modal" },
  { from: "Do orçamento opaco", to: "para a prioridade verificável" },
  { from: "Do gabinete fechado", to: "para o mandato construído com a sociedade" },
];

export default function PriorityShift() {
  return (
    <section aria-labelledby="priority-shift-heading" className="texture-paper border-y-[6px] border-ink bg-brand-yellow py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="priority-shift-heading" className="max-w-3xl font-display text-4xl uppercase leading-[1.05] text-ink sm:text-5xl">
          Não é um catálogo de obras. É uma mudança de prioridade.
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {shifts.map((shift, i) => (
            <li
              key={shift.to}
              className={`flex flex-col gap-1 border-[4px] border-ink p-5 shadow-[5px_5px_0_0_#16121f] ${
                i % 2 === 0 ? "bg-white" : "bg-brand-mint"
              }`}
            >
              <s className="font-body text-base font-bold uppercase tracking-wide text-ink/50 line-through decoration-brand-orange decoration-2">
                {shift.from}
              </s>
              <span className="font-display text-2xl uppercase leading-tight text-ink">
                {shift.to}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
