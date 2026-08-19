const specSheet = [
  { k: "DISPONIBILIDADE", v: "[Substituir — ex: disponível a partir de...]", dot: true },
  { k: "FUNÇÃO ATUAL", v: "Formador — Cursos Técnicos Profissionais" },
  { k: "CICLO LETIVO", v: "9.º ao 12.º ano" },
  { k: "PAP", v: "Orientador e membro de júri" },
  { k: "FCT / ESTÁGIOS", v: "Supervisão e contacto com entidades" },
  { k: "LOCALIZAÇÃO", v: "[Substituir — cidade]" },
];

const softSkills = [
  "Comunicação",
  "Orientação de projetos",
  "Resolução de problemas",
  "Trabalho em equipa",
  "Mentoria",
];

export default function About() {
  return (
    <section id="sobre" className="bg-paper-2 py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 px-8 md:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.1em] text-copper-dark">
            02 — Sobre mim
          </p>
          <h2 className="mb-5 mt-2 font-display text-[26px] font-semibold sm:text-[34px]">
            Ensinar tecnologia, um projeto de cada vez
          </h2>
          <div className="space-y-4 text-[15.5px] text-ink2">
            <p className="max-w-[540px]">
              [Substituir por biografia real — 2 a 3 parágrafos sobre
              percurso profissional, motivação para o ensino e abordagem
              pedagógica.]
            </p>
            <p className="max-w-[540px]">
              [Substituir — interesses pessoais e o que traz para a sala de
              aula além da matéria técnica.]
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {softSkills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border-light bg-paper px-2.5 py-1 font-mono text-[11.5px]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-ink p-7 text-[#EDEFEA]">
          {specSheet.map((row) => (
            <div
              key={row.k}
              className="flex justify-between gap-4 border-b border-ink-line py-3 text-[13.5px] last:border-none"
            >
              <span className="font-mono text-xs text-muted-ink">{row.k}</span>
              <span className="max-w-[60%] text-right">
                {row.dot && (
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#7FBF7F]" />
                )}
                {row.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
