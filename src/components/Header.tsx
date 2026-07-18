export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-lg font-bold tracking-wide text-white">
          SEOYEON
        </h1>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="transition hover:text-white hover:[text-shadow:0_0_12px_rgba(192,132,252,0.9)]">
            About
          </a>
          <a href="#skills" className="transition hover:text-white hover:[text-shadow:0_0_12px_rgba(192,132,252,0.9)]">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-white hover:[text-shadow:0_0_12px_rgba(192,132,252,0.9)]">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}