export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink py-6.5">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2.5 px-8">
        <p className="font-mono text-[11.5px] text-muted-ink">
          © {new Date().getFullYear()} Marques — Professor de Informática
        </p>
        <p className="font-mono text-[11.5px] text-muted-ink">
          Next.js · React · TailwindCSS
        </p>
      </div>
    </footer>
  );
}
