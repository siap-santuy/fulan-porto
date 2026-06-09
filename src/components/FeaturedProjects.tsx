import { useState } from 'react'
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { featuredProjects } from '../data/portfolio'
import { otherProjects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

const allProjects = [
  ...featuredProjects.map(p => ({ ...p, featured: true })),
  ...otherProjects.map(p => ({
    name: p.name,
    type: p.type,
    period: p.period,
    description: p.description,
    impact: [] as string[],
    stack: p.stack,
    accent: p.accent,
    image: null as string | null,
    link: p.link,
    featured: false,
  })),
]

const INITIAL_COUNT = 6

export default function FeaturedProjects() {
  const { ref, inView } = useInView(0.05)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? allProjects : allProjects.slice(0, INITIAL_COUNT)

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">03 — Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Selected<br />
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm">
            {allProjects.length} projects across backend engineering, fullstack development, and automation.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Show More / Less */}
        {allProjects.length > INITIAL_COUNT && (
          <div
            className="flex justify-center mt-10 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transitionDelay: '400ms' }}
          >
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              {showAll ? (
                <>
                  <ChevronUp size={16} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Show {allProjects.length - INITIAL_COUNT} More Projects
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof allProjects)[0]
  index: number
  inView: boolean
}) {
  return (
    <div
      className="glass rounded-2xl border border-white/6 overflow-hidden group card-hover flex flex-col relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease',
        transitionDelay: `${(index % INITIAL_COUNT) * 70}ms`,
      }}
    >
      {/* Top accent */}
      <div className="h-px" style={{ background: `linear-gradient(to right, ${project.accent}55, transparent)` }} />

      {/* Image (featured only) */}
      {project.image && (
        <div className="relative h-36 overflow-hidden">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${project.accent}15, transparent)` }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-15 group-hover:opacity-22 transition-opacity duration-500 scale-105 group-hover:scale-100"
          />
          {/* Mockup elements */}
          <div className="absolute bottom-3 left-3">
            <div className="glass rounded-lg p-2.5 border border-white/10 w-32">
              <div className="flex gap-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/40" />
              </div>
              <div className="space-y-1">
                {[1, 0.7, 0.85].map((w, i) => (
                  <div key={i} className="h-1 rounded-full bg-white/10" style={{ width: `${w * 100}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full shrink-0"
                style={{ background: `${project.accent}12`, color: project.accent, border: `1px solid ${project.accent}25` }}
              >
                {project.featured ? '★ Featured' : project.type}
              </span>
            </div>
            <h3 className="text-base font-bold text-white leading-snug group-hover:text-sky-50 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-0.5">{project.period}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors shrink-0 mt-1"
              onClick={e => e.stopPropagation()}
              aria-label="View project"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Impact bullets (featured only) */}
        {project.impact.length > 0 && (
          <div className="space-y-1.5 mb-4">
            {project.impact.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle2 size={11} className="shrink-0 mt-0.5" style={{ color: project.accent }} />
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.slice(0, 5).map(t => (
            <span
              key={t}
              className="tech-badge"
              style={{ color: `${project.accent}cc`, borderColor: `${project.accent}20`, background: `${project.accent}08` }}
            >
              {t}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="tech-badge text-slate-500">+{project.stack.length - 5}</span>
          )}
        </div>
      </div>
    </div>
  )
}
