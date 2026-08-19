const testimonials = [1, 2, 3];

export default function Testimonials() {
  return (
    <section id="avaliacao" className="py-24">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs tracking-[0.1em] text-copper-dark">
            05 — Avaliação
          </p>
          <h2 className="mt-2 font-display text-[26px] font-semibold sm:text-[34px]">
            O que dizem sobre o meu trabalho
          </h2>
          <p className="mt-2.5 font-mono text-[11px] text-copper-dark">
            Testemunhos de exemplo — substituir por citações reais de
            colegas, coordenadores ou alunos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-3">
          {testimonials.map((i) => (
            <div
              key={i}
              className="rounded-xl border border-dashed border-border-light bg-white p-5.5"
            >
              <p className="mb-4 text-sm leading-relaxed text-ink2">
                &quot;[Substituir por testemunho real — 1 a 2 frases sobre o
                impacto do trabalho.]&quot;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-2 font-mono text-[11px] text-muted">
                  ?
                </div>
                <div>
                  <p className="text-[13px] font-semibold">[Nome]</p>
                  <p className="text-[11.5px] text-muted">[Cargo / Escola]</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
