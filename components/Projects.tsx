const projects = [
  {
    title: "CINEL Gaming Store",
    stack: "Python · Flet",
    desc: "Aplicação desktop de gestão de inventário de videojogos, com base de dados SQLite, operações CRUD completas, filtros e dashboard de acompanhamento.",
    links: ["GitHub [substituir]", "Demo [substituir]"],
  },
  {
    title: "Rede Multi-Site — TPFC",
    stack: "Cisco Packet Tracer",
    desc: "Projeto de rede multi-site (sede em Santarém e filial em Lisboa), com firewall Cisco ASA 5505, routing estático, documentação formal com referências RFC/IEEE e plano de testes.",
    links: ["Documentação [substituir]", "Topologia [substituir]"],
  },
  {
    title: "SNQ_Analizer",
    stack: "Python · SQLAlchemy",
    desc: "Sistema de apoio ao Catálogo Nacional de Qualificações, com importador de dados, motor de competências, motor curricular, API REST e interface gráfica. Ligado a dissertação de mestrado.",
    links: ["GitHub [substituir]"],
  },
  {
    title: "Registo de Alunos",
    stack: "Supabase",
    desc: "Sistema de registo de alunos com autenticação e políticas de segurança a nível de linha (RLS), incluindo limitação de envio de emails e resolução de conflitos de políticas.",
    links: ["GitHub [substituir]", "Demo [substituir]"],
  },
  {
    title: "Dashboard de Gestão",
    stack: "Flet · SQL Server",
    desc: "Aplicação de painel de controlo ligada a SQL Server, com múltiplas secções de gestão e visualização de dados através de gráficos.",
    links: ["GitHub [substituir]"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-5xl px-8">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs tracking-[0.1em] text-copper-dark">
            03 — Projetos
          </p>
          <h2 className="mt-2 font-display text-[26px] font-semibold sm:text-[34px]">
            Trabalho aplicado
          </h2>
          <p className="mt-2.5 text-[15.5px] text-muted">
            Uma seleção de projetos próprios e materiais desenvolvidos para
            contexto letivo e académico.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex h-full flex-col rounded-xl border border-border-light bg-white p-6.5"
            >
              <div className="mb-3.5 flex items-start justify-between">
                <h3 className="text-[17px] font-semibold">{p.title}</h3>
                <span className="whitespace-nowrap rounded-md bg-copper/10 px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-copper-dark">
                  {p.stack}
                </span>
              </div>
              <p className="mb-4 flex-grow text-sm text-muted">{p.desc}</p>
              <div className="mt-auto flex gap-4 border-t border-border-light pt-3.5">
                {p.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="border-b border-dashed border-muted font-mono text-xs text-muted"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center rounded-xl border border-dashed border-border-light p-6.5 text-center font-mono text-[12.5px] text-muted">
            + espaço reservado
            <br />
            para novo projeto
          </div>
        </div>
      </div>
    </section>
  );
}
