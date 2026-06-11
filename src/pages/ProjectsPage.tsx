import { useState, useEffect } from 'react'
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '../data/portfolio'

const allProjects = [
  ...featuredProjects.map(p => ({ ...p, featured: true as const })),
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
    featured: false as const,
  })),
]

const PAGE_SIZE = 6

export default function ProjectsPage({ onBack }: { onBack: () => void }) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(allProjects.length / PAGE_SIZE)
  const current = allProjects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border)] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </button>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-slate-500 text-sm font-mono">
            {allProjects.length} Projects Total
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="section-tag mb-3">All Projects</p>
          <h1
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: 'Electrolize, sans-serif' }}
          >
            Complete<br />
            <span className="gradient-text">Work Archive</span>
          </h1>
          <p className="text-slate-500 text-sm">
            Page {page + 1} of {totalPages} — showing {current.length} of {allProjects.length} projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {current.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-xl glass border border-[var(--border)] flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-10 h-10 rounded-xl font-mono text-sm font-medium transition-all ${
                  i === page
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'glass border border-[var(--border)] text-slate-400 hover:text-white hover:border-sky-500/30'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-xl glass border border-[var(--border)] flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof allProjects)[0]
  index: number
}) {
  return (
    <div
      className="glass rounded-2xl border border-white/6 overflow-hidden group card-hover flex flex-col relative"
      style={{
        animation: 'fadeUp 0.5s ease both',
        animationDelay: `${index * 60}ms`,
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
