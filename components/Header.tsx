import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-[5px] border-ink bg-brand-yellow/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label={`${siteConfig.candidate} ${siteConfig.number} — página inicial`}
        >
          <span className="font-display text-lg uppercase text-ink sm:text-xl">
            Daniel Valença
          </span>
          <span className="font-display text-sm uppercase text-brand-purple sm:text-base">
            50.100 • PSOL-PE
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 font-body text-sm font-bold uppercase text-ink underline-offset-4 hover:bg-white/60 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href="/doe" className="ml-2">
                Doe agora
              </Button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/doe"
            className="border-[3px] border-ink bg-brand-orange px-3 py-2 font-display text-sm uppercase text-white shadow-[3px_3px_0_0_#16121f]"
          >
            Doe agora
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
