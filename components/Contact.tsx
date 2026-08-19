"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Ligar aqui a um serviço de envio (ex: Formspree, Resend) antes de publicar.
    console.log(form);
  }

  return (
    <section id="contacto" className="grid-bg bg-ink py-24 text-[#EDEFEA]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-14 px-8 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.1em] text-copper">
            06 — Contacto
          </p>
          <h2 className="mb-3 mt-2 font-display text-[26px] font-semibold sm:text-[34px]">
            Vamos falar
          </h2>
          <p className="mb-7 max-w-[420px] text-muted-ink">
            Disponível para oportunidades em ensino técnico, formação ou
            projetos de tecnologia educativa.
          </p>

          <div className="mb-4.5">
            <p className="font-mono text-[11.5px] tracking-wide text-muted-ink">
              EMAIL
            </p>
            <p className="mt-1 text-[15px]">[substituir@email.pt]</p>
          </div>
          <div className="mb-4.5">
            <p className="font-mono text-[11.5px] tracking-wide text-muted-ink">
              TELEFONE
            </p>
            <p className="mt-1 text-[15px]">[+351 substituir]</p>
          </div>

          <div className="mt-6 flex flex-col gap-3.5">
            <a
              href="#"
              className="flex items-center justify-between border-b border-ink-line py-3.5 text-[14.5px]"
            >
              LinkedIn <span className="font-mono text-copper">↗</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between border-b border-ink-line py-3.5 text-[14.5px]"
            >
              GitHub <span className="font-mono text-copper">↗</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="mb-1.5 block font-mono text-[11.5px] tracking-wide text-muted-ink"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              required
              placeholder="O seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full rounded-md border border-white/20 bg-white/5 px-3.5 py-3 text-sm text-[#EDEFEA] placeholder:text-muted-ink focus:border-copper focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1.5 block font-mono text-[11.5px] tracking-wide text-muted-ink"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="nome@empresa.pt"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-md border border-white/20 bg-white/5 px-3.5 py-3 text-sm text-[#EDEFEA] placeholder:text-muted-ink focus:border-copper focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mensagem"
              className="mb-1.5 block font-mono text-[11.5px] tracking-wide text-muted-ink"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              required
              placeholder="Escreva a sua mensagem"
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full resize-y rounded-md border border-white/20 bg-white/5 px-3.5 py-3 text-sm text-[#EDEFEA] placeholder:text-muted-ink focus:border-copper focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-copper py-3 font-mono text-[13px] text-ink transition-colors hover:bg-[#DA9350]"
          >
            Enviar mensagem
          </button>
          <p className="mt-2.5 font-mono text-[11px] text-muted-ink">
            Formulário por ligar a um serviço de envio (ex: Formspree, Resend)
            antes de publicar.
          </p>
        </form>
      </div>
    </section>
  );
}
