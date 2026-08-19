export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-ink-line bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-3.5">
        <div className="flex items-center gap-2.5 font-display text-[15px] font-semibold text-[#EDEFEA]">
          <span className="h-[9px] w-[9px] rounded-full bg-copper shadow-[0_0_0_3px_rgba(201,128,63,0.22)]" />
          Marques
          <span className="font-normal text-muted-ink"> / Informática</span>
        </div>
        <a
          href="#contacto"
          className="rounded-md bg-copper px-4.5 py-2 font-mono text-[12.5px] tracking-wide text-ink transition-colors hover:bg-[#DA9350]"
        >
          Contactar
        </a>
      </div>
    </div>
  );
}
