import Link from "next/link";
import BigNumber from "@/components/BigNumber";

export default function NotFound() {
  return (
    <section className="texture-paper flex min-h-[60vh] items-center justify-center bg-brand-yellow px-4 py-20 text-center">
      <div>
        <p className="font-display text-7xl uppercase text-brand-orange">404</p>
        <h1 className="mt-4 font-heading text-3xl font-extrabold text-ink sm:text-5xl">
          Essa rua não existe.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink/75">
          A página que você procurou não foi encontrada — mas o caminho das
          propostas está bem perto.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-orange px-8 py-3 font-display text-xl uppercase text-white shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#16121f]"
          >
            Voltar ao início
          </Link>
          <Link
            href="/propostas"
            className="inline-flex min-h-14 items-center justify-center border-[3px] border-ink bg-white px-8 py-3 font-display text-xl uppercase text-ink shadow-[4px_4px_0_0_#16121f] transition-transform hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#16121f]"
          >
            Ver propostas
          </Link>
        </div>
        <BigNumber className="mt-12 text-6xl text-brand-purple/20" />
      </div>
    </section>
  );
}
