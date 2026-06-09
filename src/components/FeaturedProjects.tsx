import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { featuredProjects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function FeaturedProjects() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">03 — Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Featured<br />
            <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((p, i) => (
            <FeaturedCard key={p.name} project={p} index={i} inView={inView} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({
  project,
  index,
  inView,
  flip,
}: {
  project: (typeof featuredProjects)[0]
  index: number
  inView: boolean
  flip: boolean
}) {
  return (
    <div
      className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transitionDelay: `${index * 120}ms` }}
    >
      <div className="glass rounded-3xl border border-white/7 overflow-hidden group hover:border-white/12 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/5">
        <div className={`grid lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {/* Visual panel */}
          <div className="relative overflow-hidden min-h-[220px] lg:min-h-[300px]">
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accent}12, transparent 60%)` }} />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover opacity-15 group-hover:opacity-20 transition-opacity duration-700 scale-105 group-hover:scale-100"
              style={{ minHeight: '220px' }}
            />

            {/* Mockup overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="glass rounded-xl p-4 border border-white/10 max-w-[260px]">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                  <div className="w-2 h-2 rounded-full bg-green-400/50" />
                  <span className="ml-auto font-mono text-xs text-slate-700">prod</span>
                </div>
                <div className="space-y-1.5">
                  {[0.75, 1, 0.85, 0.6].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-white/8" style={{ width: `${w * 100}%` }} />
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="h-5 w-14 rounded-md" style={{ background: `${project.accent}25`, border: `1px solid ${project.accent}35` }} />
                  <div className="h-5 w-8 rounded-md bg-white/5" />
                </div>
              </div>
            </div>

            {/* Type badge */}
            <div className="absolute top-5 left-5">
              <span
                className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30` }}
              >
                {project.type}
              </span>
            </div>
          </div>

          {/* Content panel */}
          <div className="p-7 lg:p-10 flex flex-col justify-center">
            <p className="section-tag mb-3">{project.period}</p>
            <h3 className="font-display text-2xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              {project.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

            <ul className="space-y-2 mb-5">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: project.accent }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: project.accent }}
              >
                View Live Project
                <ExternalLink size={13} />
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-700">Internal / Company Tool</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
