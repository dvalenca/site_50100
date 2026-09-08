"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/content/site";

type FormStatus = "idle" | "sending" | "success" | "error" | "unavailable";

export default function ParticipeForm() {
  const [status, setStatus] = useState<FormStatus>(
    siteConfig.formEndpoint ? "idle" : "unavailable",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = form.elements.namedItem("website") as HTMLInputElement | null;
    if (honeypot && honeypot.value) return;

    if (!siteConfig.formEndpoint) {
      setStatus("unavailable");
      return;
    }

    setStatus("sending");
    const data = new FormData(form);
    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "unavailable") {
    return (
      <div className="border-[4px] border-ink bg-brand-yellow p-6">
        <p className="font-display text-xl uppercase text-ink">
          Formulário em configuração
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          O envio do formulário será ativado assim que o canal oficial da campanha
          estiver configurado com segurança. Por enquanto, fale com a campanha
          {siteConfig.whatsappUrl ? (
            <>
              {" "}
              pelo{" "}
              <a
                href={siteConfig.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="font-bold underline decoration-2 underline-offset-4"
              >
                WhatsApp
              </a>
            </>
          ) : null}
          {siteConfig.campaignEmail ? (
            <>
              {" "}
              ou pelo e-mail{" "}
              <a
                href={`mailto:${siteConfig.campaignEmail}`}
                className="font-bold underline decoration-2 underline-offset-4"
              >
                {siteConfig.campaignEmail}
              </a>
            </>
          ) : null}
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[4px] border-ink bg-white p-6 shadow-[6px_6px_0_0_#16121f]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-extrabold uppercase tracking-wide text-ink">
            Nome *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2.5"
          />
        </div>
        <div>
          <label htmlFor="city" className="block font-body text-sm font-extrabold uppercase tracking-wide text-ink">
            Cidade
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2.5"
          />
        </div>
        <div>
          <label htmlFor="neighborhood" className="block font-body text-sm font-extrabold uppercase tracking-wide text-ink">
            Bairro
          </label>
          <input
            id="neighborhood"
            name="neighborhood"
            type="text"
            className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2.5"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="block font-body text-sm font-extrabold uppercase tracking-wide text-ink">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2.5"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm font-extrabold uppercase tracking-wide text-ink">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2.5"
          />
        </div>
        <div>
          <label htmlFor="help" className="block font-body text-sm font-extrabold uppercase tracking-wide text-ink">
            Como quer ajudar?
          </label>
          <select
            id="help"
            name="help"
            className="mt-1 w-full border-[3px] border-ink bg-white px-3 py-2.5"
          >
            <option value="">Selecione (opcional)</option>
            <option value="voluntariado">Voluntariado</option>
            <option value="rua">Atividades de rua</option>
            <option value="digital">Mobilização digital</option>
            <option value="materiais">Receber materiais</option>
            <option value="grupo">Grupos de apoio</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <div className="mt-4 hidden">
        <label htmlFor="website">
          Não preencha este campo — é uma proteção contra spam.
        </label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-ink">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-5 w-5 shrink-0 border-2 border-ink accent-[#5d0caa]"
          />
          <span>
            Concordo em ser contatado(a) pela campanha e li a{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-bold underline decoration-2 underline-offset-4"
            >
              política de privacidade
            </Link>
            . *
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-14 w-full items-center justify-center border-[3px] border-ink bg-brand-orange px-8 py-3 font-display text-xl uppercase text-white shadow-[5px_5px_0_0_#16121f] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Enviando…" : "Quero participar"}
      </button>

      <p aria-live="polite" className="mt-4 min-h-6 text-sm font-bold">
        {status === "success" ? (
          <span className="text-green-800">
            Recebido! A campanha vai entrar em contato. Obrigado por fazer parte.
          </span>
        ) : null}
        {status === "error" ? (
          <span className="text-brand-orange">
            Não foi possível enviar agora. Tente de novo em alguns instantes.
          </span>
        ) : null}
      </p>
    </form>
  );
}
