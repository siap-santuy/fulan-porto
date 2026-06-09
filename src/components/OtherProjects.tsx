import { ExternalLink } from 'lucide-react'
import { otherProjects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function OtherProjects() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="pb-28 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">03b — More Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Other Notable <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((p, i) => (
            <div
              key={p.name}
              className="glass rounded-2xl border border-white/6 p-5 flex flex-col card-hover relative overflow-hidden group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${p.accent}55, transparent)` }} />

              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full"
                  style={{ background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}22` }}
                >
                  {p.type}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-sky-400 transition-colors"
                    onClick={e => e.stopPropagation()}
                    aria-label="View project"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="section-tag text-slate-700 mb-1">{p.period}</p>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-sky-50 transition-colors">{p.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map(t => (
                  <span
                    key={t}
                    className="tech-badge"
                    style={{ color: `${p.accent}cc`, borderColor: `${p.accent}20`, background: `${p.accent}08` }}
                  >
                    {t}
                  </span>
                ))}
                {p.stack.length > 5 && (
                  <span className="tech-badge text-slate-700">+{p.stack.length - 5}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
