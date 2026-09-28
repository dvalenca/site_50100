"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/** Folha inferior (mobile-first) com diálogo, igual ao padrão do menu mobile. */
export default function Sheet({
  open,
  onClose,
  titulo,
  children,
}: {
  open: boolean;
  onClose: () => void;
  titulo: string;
  children: React.ReactNode;
}) {
  const fecharRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    fecharRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
    >
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
      <div className="texture-paper relative max-h-[85dvh] w-full max-w-md overflow-y-auto border-t-[5px] border-ink bg-brand-yellow p-5 shadow-[0_-8px_0_0_#16121f] sm:border-[5px] sm:shadow-[8px_8px_0_0_#16121f]">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-xl uppercase text-ink">{titulo}</h2>
          <button
            ref={fecharRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-ink bg-white text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
