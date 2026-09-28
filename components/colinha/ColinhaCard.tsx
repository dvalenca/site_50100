import Image from "next/image";
import { colinhaConfig, opcaoSenado, type EscolhasColinha } from "@/content/colinha";
import FederalInput from "./FederalInput";
import NumberBoxes from "./NumberBoxes";

export type AcoesColinha = {
  onFederalChange: (digitos: string) => void;
  onSugestoesFederal: () => void;
  onLimparFederal: () => void;
  onTrocarSenado: (indice: 0 | 1) => void;
  onInverterSenado: () => void;
  invertivel: boolean;
};

const classeBotao =
  "border-2 border-ink bg-brand-yellow px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-ink shadow-[2px_2px_0_0_#16121f] active:translate-y-px";

type LinhaProps = {
  indice: number;
  cargo: string;
  /** null = cargo sem nome (só o número) */
  nome: string | null;
  partido?: string;
  foto?: string;
  casas: number;
  valor: string;
  /** sobrepõe os quadrinhos estáticos (digitação do federal) */
  caixas?: React.ReactNode;
  children?: React.ReactNode;
};

function Linha({ indice, cargo, nome, partido, foto, casas, valor, caixas, children }: LinhaProps) {
  return (
    <div className="flex items-center gap-3 border-b-[3px] border-ink/15 px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink/60">
          {indice} • {cargo}
        </p>
        {nome ? (
          <>
            <p className="truncate font-display text-lg uppercase sm:text-xl">{nome}</p>
            {partido ? <p className="text-[11px] font-bold uppercase text-ink/70">{partido}</p> : null}
          </>
        ) : null}
      </div>
      {foto ? (
        <Image
          src={foto}
          alt=""
          width={112}
          height={112}
          className="h-14 w-14 shrink-0 border-[3px] border-ink object-cover"
        />
      ) : null}
      <div className="flex shrink-0 flex-col items-end gap-1">
        {caixas ?? <NumberBoxes casas={casas} valor={valor} />}
        {children}
      </div>
    </div>
  );
}

/** O santinho: cargos na ordem da urna, Daniel em destaque. */
export default function ColinhaCard({
  escolhas,
  formato = "wide",
  acoes,
}: {
  escolhas: EscolhasColinha;
  formato?: "wide" | "story";
  acoes?: AcoesColinha;
}) {
  const c = colinhaConfig;
  const story = formato === "story";
  const senado = escolhas.senado.map((id) => opcaoSenado(id) ?? null);

  return (
    <article
      aria-label="Colinha para as eleições 2026 em Pernambuco"
      className={`mx-auto w-full border-[5px] border-ink bg-white text-ink shadow-[10px_10px_0_0_#5d0caa] ${
        story ? "flex max-w-[340px] flex-col" : "max-w-2xl"
      }`}
    >
      <div className="flex min-h-10 items-center justify-center border-b-[5px] border-ink bg-brand-purple px-3 py-2 text-center">
        <p className="font-display text-xs uppercase tracking-[0.14em] text-brand-yellow sm:text-sm">
          {c.eleicao} • {c.estado}
        </p>
      </div>

      {/* 1 — Deputado(a) Federal */}
      <Linha
        indice={1}
        cargo={c.federal.rotulo}
        nome={null}
        casas={c.federal.digitos}
        valor={escolhas.federal}
        caixas={
          acoes ? (
            <FederalInput valor={escolhas.federal} onChange={acoes.onFederalChange} />
          ) : (
            <NumberBoxes casas={c.federal.digitos} valor={escolhas.federal} />
          )
        }
      >
        {acoes ? (
          <div className="flex gap-1">
            <button type="button" onClick={acoes.onSugestoesFederal} className={classeBotao}>
              Sugestões
            </button>
            {escolhas.federal ? (
              <button type="button" onClick={acoes.onLimparFederal} className={classeBotao}>
                Limpar
              </button>
            ) : null}
          </div>
        ) : null}
      </Linha>

      {/* 2 — Deputado Estadual (destaque) */}
      <div className="border-y-[5px] border-ink bg-brand-purple px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/80">
              2 • {c.estadual.rotulo} — {c.estadual.partido}
            </p>
            <p
              className={`mt-1 font-display uppercase text-brand-yellow ${
                story ? "text-4xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {c.estadual.nome}
            </p>
            <p className="mt-2 inline-block -rotate-1 border-2 border-ink bg-brand-yellow px-2 py-0.5 font-display text-[10px] uppercase text-ink">
              {c.estadual.slogan}
            </p>
          </div>
          {c.estadual.foto ? (
            <Image
              src={c.estadual.foto}
              alt="Foto de Daniel Valença"
              width={180}
              height={220}
              className={`shrink-0 border-[3px] border-ink object-cover ${
                story ? "h-44 w-36" : "h-32 w-28"
              }`}
            />
          ) : null}
        </div>
        <div className="mt-3 flex justify-center">
          <NumberBoxes casas={5} valor={c.estadual.numero} tamanho="lg" emDestaque />
        </div>
      </div>

      {/* 3 e 4 — Senado */}
      {senado.map((opcao, i) => {
        const vaga = c.senado.vagas[i];
        if (!opcao || !vaga) return null;
        return (
          <Linha
            key={opcao.id}
            indice={3 + i}
            cargo={`Senado — ${vaga.rotulo}`}
            nome={opcao.nome}
            partido={opcao.partido}
            foto={opcao.foto}
            casas={3}
            valor={opcao.numero}
          >
            {acoes && !vaga.fixa ? (
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => acoes?.onTrocarSenado(i as 0 | 1)}
                  className={classeBotao}
                >
                  Trocar
                </button>
                {i === 1 && acoes.invertivel ? (
                  <button type="button" onClick={acoes.onInverterSenado} className={classeBotao}>
                    Inverter
                  </button>
                ) : null}
              </div>
            ) : null}
          </Linha>
        );
      })}

      {/* 5 — Governo de Pernambuco */}
      <Linha
        indice={5}
        cargo={c.governo.rotulo}
        nome={c.governo.nome}
        partido={c.governo.partido}
        foto={c.governo.foto}
        casas={2}
        valor={c.governo.numero}
      />

      {/* 6 — Presidência */}
      <Linha
        indice={6}
        cargo={c.presidencia.rotulo}
        nome={c.presidencia.nome}
        partido={c.presidencia.partido}
        foto={c.presidencia.foto}
        casas={2}
        valor={c.presidencia.numero}
      />

      <footer className="mt-auto border-t-[5px] border-ink bg-ink px-4 py-3">
        {c.propagandaEleitoral.map((linha) => (
          <p key={linha} className="text-[10px] font-bold uppercase leading-snug text-white/75">
            {linha}
          </p>
        ))}
      </footer>
    </article>
  );
}
