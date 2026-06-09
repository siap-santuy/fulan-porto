export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center">
            <span className="text-sky-400 font-mono text-xs font-bold">FA</span>
          </div>
          <span className="text-sm text-slate-600">Fajri Arvandi · Software Engineer</span>
        </div>

        <nav className="flex items-center gap-5 text-xs font-mono text-slate-500">
          {['about', 'experience', 'projects', 'stack', 'contact'].map(id => (
            <a key={id} href={`#${id}`} className="hover:text-slate-400 transition-colors capitalize">
              {id}
            </a>
          ))}
        </nav>

        <div className="text-xs font-mono text-slate-800">Jakarta, Indonesia</div>
      </div>
    </footer>
  )
}
