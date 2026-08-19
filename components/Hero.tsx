export default function Hero() {
  return (
    <section className="grid-bg overflow-hidden bg-ink pb-24 pt-[150px] text-[#EDEFEA]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 px-8 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-copper before:h-px before:w-[22px] before:bg-copper before:content-['']">
            Professor de Informática
          </p>
          <h1 className="mb-4 font-display text-[34px] font-semibold leading-[1.06] sm:text-[54px]">
            Marques
            <br />
            <span className="font-medium text-muted-ink">
              Redes, Sistemas &amp; Programação
            </span>
          </h1>
          <p className="mb-8 max-w-[480px] text-[17px] text-muted-ink">
            Formador em Cursos Técnicos Profissionais, do 9.º ao 12.º ano,
            com foco em redes de computadores, arquitetura de sistemas e
            desenvolvimento de software aplicado ao ensino.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projetos"
              className="rounded-md bg-copper px-6 py-3 font-mono text-[13px] text-ink transition-all hover:-translate-y-0.5 hover:bg-[#DA9350]"
            >
              Ver projetos
            </a>
            <a
              href="#contacto"
              className="rounded-md border border-white/25 px-6 py-3 font-mono text-[13px] transition-colors hover:border-copper hover:text-copper"
            >
              Contactar
            </a>
          </div>
        </div>

        <div>
          <svg
            viewBox="0 0 420 380"
            className="w-full"
            role="img"
            aria-label="Diagrama de rede ligando as áreas de especialidade"
          >
            <g stroke="#3E7CB1" strokeOpacity="0.45" strokeWidth="1.3" fill="none">
              <line x1="210" y1="190" x2="90" y2="80" />
              <line x1="210" y1="190" x2="330" y2="70" />
              <line x1="210" y1="190" x2="60" y2="260" />
              <line x1="210" y1="190" x2="340" y2="270" />
              <line x1="210" y1="190" x2="210" y2="340" />
            </g>
            <g>
              <circle cx="210" cy="190" r="34" fill="#16273D" stroke="#3E7CB1" strokeWidth="1.5" />
              <text x="210" y="195" textAnchor="middle" fill="#EDEFEA" fontFamily="var(--font-mono)" fontSize="13">
                MC
              </text>
            </g>
            <g fontFamily="var(--font-mono)" fontSize="11" fill="#C9D4DC">
              <circle cx="90" cy="80" r="5" fill="#3E7CB1" />
              <text x="102" y="78">Redes</text>
              <circle cx="330" cy="70" r="5" fill="#3E7CB1" />
              <text x="270" y="60">Sistemas</text>
              <circle cx="60" cy="260" r="5" fill="#3E7CB1" />
              <text x="14" y="284">Sist. Operativos</text>
              <circle cx="340" cy="270" r="5" fill="#3E7CB1" />
              <text x="288" y="294">Empreendedorismo</text>
              <circle cx="210" cy="340" r="5" fill="#3E7CB1" />
              <text x="178" y="362">Orientação PAP</text>
            </g>
            <circle r="3" fill="#C9803F">
              <animateMotion dur="4s" repeatCount="indefinite" path="M210,190 L90,80" />
            </circle>
          </svg>
          <p className="mt-3.5 text-center font-mono text-[11.5px] tracking-wide text-muted-ink">
            áreas de intervenção — ver &quot;Projetos&quot; para exemplos aplicados
          </p>
        </div>
      </div>
    </section>
  );
}
