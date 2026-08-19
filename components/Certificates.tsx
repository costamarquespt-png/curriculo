const certs = [1, 2, 3];

export default function Certificates() {
  return (
    <section id="certificados" className="bg-paper-2 py-24">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs tracking-[0.1em] text-copper-dark">
            04 — Certificados
          </p>
          <h2 className="mt-2 font-display text-[26px] font-semibold sm:text-[34px]">
            Formação e certificação
          </h2>
          <p className="mt-2.5 font-mono text-[11px] text-copper-dark">
            Secção com dados de exemplo — substituir pelos certificados reais
            antes de publicar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {certs.map((i) => (
            <div
              key={i}
              className="rounded-lg border border-dashed border-border-light bg-white p-5"
            >
              <p className="font-mono text-[11.5px] text-blueprint">[AAAA]</p>
              <h4 className="mb-1 mt-2 text-[14.5px] font-semibold">
                [Nome do certificado]
              </h4>
              <p className="text-[12.5px] text-muted">[Entidade emissora]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
