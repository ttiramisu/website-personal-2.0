export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/70 px-6 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">ttiramisu</p>
          <p className="text-sm text-slate-500">© {currentYear} Zijie.</p>
        </div>

        <p className="text-sm text-slate-500">
          Designed and built with Vite, React, and a calmer aesthetic.
        </p>
      </div>
    </footer>
  );
}
