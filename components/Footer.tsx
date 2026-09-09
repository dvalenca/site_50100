import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import LogoBike from "./LogoBike";

export default function Footer() {
  return (
    <footer className="border-t-[6px] border-ink bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/brand/logo-principal-claro.svg"
            alt="Logo da campanha: A rua é do povo, com bicicleta"
            width={904}
            height={644}
            unoptimized
            className="h-20 w-auto"
          />
          <p className="mt-4 font-display text-xl uppercase leading-tight text-brand-yellow">
            {siteConfig.candidate} {siteConfig.number}
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/80">
            {siteConfig.office} • {siteConfig.party}
          </p>
          {siteConfig.campaignEmail ? (
            <p className="mt-4 text-sm">
              <a
                className="underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow"
                href={`mailto:${siteConfig.campaignEmail}`}
              >
                {siteConfig.campaignEmail}
              </a>
            </p>
          ) : null}
          {siteConfig.instagramUrl ? (
            <p className="mt-2 text-sm">
              <a
                className="underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow"
                href={siteConfig.instagramUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </p>
          ) : null}
        </div>

        <nav aria-label="Links do site">
          <p className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
            Navegue
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-brand-yellow hover:underline" href="/propostas">Propostas</Link></li>
            <li><Link className="hover:text-brand-yellow hover:underline" href="/sobre">Sobre Daniel</Link></li>
            <li><Link className="hover:text-brand-yellow hover:underline" href="/trajetoria">Trajetória</Link></li>
            <li><Link className="hover:text-brand-yellow hover:underline" href="/participe">Faça parte</Link></li>
            <li><Link className="hover:text-brand-yellow hover:underline" href="/doe">Doe agora</Link></li>
            <li>
              <Link className="hover:text-brand-yellow hover:underline" href="/politica-de-privacidade">
                Política de privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-sm leading-relaxed text-white/70">
          <p className="font-body text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
            Transparência
          </p>
          <p className="mt-4">
            Dados eleitorais legalmente obrigatórios serão publicados aqui quando
            fornecidos e validados pela campanha.
          </p>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center">
        <a
          href="#conteudo"
          className="inline-flex items-center gap-2 text-sm font-bold text-white/80 underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow"
        >
          <LogoBike className="h-4 w-auto text-brand-yellow" />
          Voltar ao topo
        </a>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/60">
        <p>
          {siteConfig.candidate} — {siteConfig.office} — {siteConfig.party} — {siteConfig.slogan}
        </p>
      </div>
    </footer>
  );
}
