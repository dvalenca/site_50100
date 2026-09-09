"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
      const onKeydown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKeydown);
      return () => {
        document.removeEventListener("keydown", onKeydown);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const onBackdropClick = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center border-[3px] border-ink bg-brand-yellow text-ink"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-50 flex flex-col"
        >
          <div className="absolute inset-0 bg-ink/60" onClick={onBackdropClick} aria-hidden="true" />
          <div className="texture-paper relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto border-l-[6px] border-ink bg-brand-yellow p-6">
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label="Daniel Valença 50.100 — página inicial"
                className="inline-flex shrink-0 items-center"
              >
                <Image
                  src="/brand/bike.svg"
                  alt=""
                  width={423}
                  height={480}
                  unoptimized
                  className="h-14 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-11 w-11 items-center justify-center border-[3px] border-ink bg-white text-ink"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav aria-label="Navegação principal" className="mt-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  ref={i === 0 ? closeButtonRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b-2 border-ink/20 py-4 font-heading text-2xl font-extrabold text-ink hover:bg-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/doe"
              onClick={() => setOpen(false)}
              className="mt-8 flex min-h-14 items-center justify-center border-[3px] border-ink bg-brand-orange px-6 py-3 font-display text-2xl uppercase text-white shadow-[4px_4px_0_0_#16121f]"
            >
              Doe agora
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
