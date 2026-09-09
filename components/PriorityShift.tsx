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
    <section
      aria-labelledby="priority-shift-heading"
      className="texture-paper border-y-[6px] border-ink bg-brand-yellow py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="priority-shift-heading"
          className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl"
        >
          Não é um catálogo de obras. É uma mudança de prioridade.
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {shifts.map((shift) => (
            <li
              key={shift.to}
              className="flex flex-col gap-1 border-[4px] border-ink bg-white p-5 shadow-[5px_5px_0_0_#16121f]"
            >
              <s className="font-body text-base font-bold uppercase tracking-wide text-ink/45 line-through decoration-brand-orange decoration-2">
                {shift.from}
              </s>
              <span className="font-heading text-2xl font-extrabold leading-tight text-ink">
                {shift.to}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
