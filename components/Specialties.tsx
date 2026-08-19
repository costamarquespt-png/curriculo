const specialties = [
  {
    num: "01",
    title: "Redes de Computadores",
    desc: "Comunicação de Dados — desenho, configuração e resolução de problemas em redes multi-site, routing e segurança perimetral.",
    chips: ["Cisco Packet Tracer", "Routing & Switching", "Firewall ASA"],
  },
  {
    num: "02",
    title: "Sistemas & Arquitetura",
    desc: "Sistemas Digitais e Arquitetura de Computadores — software e hardware, da lógica digital à integração de sistemas.",
    chips: ["Arquitetura de Sistemas", "Python", "SQL"],
  },
  {
    num: "03",
    title: "Sistemas Operativos",
    desc: "Administração cliente/servidor — instalação, configuração e gestão de ambientes operativos em contexto educativo.",
    chips: ["Cliente/Servidor", "Administração de Sistemas"],
  },
  {
    num: "04",
    title: "Empreendedorismo & Office",
    desc: "Educação para o Empreendedorismo e Cultura Empresarial — produtividade e ferramentas Microsoft Office aplicadas à gestão.",
    chips: ["Microsoft Office", "Cultura Empresarial"],
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs tracking-[0.1em] text-copper-dark">
            01 — Especialidades
          </p>
          <h2 className="mt-2 font-display text-[26px] font-semibold sm:text-[34px]">
            Áreas de intervenção técnica
          </h2>
          <p className="mt-2.5 text-[15.5px] text-muted">
            Disciplinas lecionadas em cursos técnico-profissionais, do 9.º
            ano de introdução às TIC até ao 12.º ano.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {specialties.map((s) => (
            <div
              key={s.num}
              className="rounded-xl border border-border-light bg-white p-6.5 transition-all hover:-translate-y-0.5 hover:border-blueprint-dim"
            >
              <div className="flex h-8.5 w-8.5 items-center justify-center rounded-lg bg-blueprint/10 font-mono text-[13px] font-medium text-blueprint">
                {s.num}
              </div>
              <h3 className="mb-2 mt-3 text-[17px] font-semibold">{s.title}</h3>
              <p className="mb-4 text-sm text-muted">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border-light bg-paper-2 px-2.5 py-1 font-mono text-[11.5px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
