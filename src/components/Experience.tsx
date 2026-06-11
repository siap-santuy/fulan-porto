import { useState } from 'react'
import { MapPin, Calendar, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { experiences } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

const INITIAL_COUNT = 3

export default function Experience() {
  const { ref, inView } = useInView(0.05)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? experiences : experiences.slice(0, INITIAL_COUNT)

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative"
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">02 — Experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            Professional<br />
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/15 to-transparent hidden md:block" />

          <div className="space-y-5">
            {visible.map((exp, i) => (
              <ExpCard key={exp.company} exp={exp} index={i} inView={inView} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        {/* Show More / Less */}
        {experiences.length > INITIAL_COUNT && (
          <div
            className="flex justify-center mt-10 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transitionDelay: '400ms' }}
          >
            <button
              onClick={() => setShowAll(v => !v)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl glass border border-[var(--border-hi)] hover:border-sky-500/30 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              {showAll ? (
                <>
                  <ChevronUp size={16} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Show {experiences.length - INITIAL_COUNT} More Experiences
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ExpCard({
  exp,
  index,
  inView,
  defaultOpen,
}: {
  exp: (typeof experiences)[0]
  index: number
  inView: boolean
  defaultOpen: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="relative md:pl-14 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transitionDelay: `${index * 90}ms` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-3.5 top-6 w-4 h-4 rounded-full border-2 border-[var(--bg)] hidden md:block z-10 shrink-0"
        style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}60` }}
      />

      <div
        className="glass rounded-2xl border border-white/6 overflow-hidden cursor-pointer card-hover"
        style={{ '--hover-border': `${exp.color}25` } as React.CSSProperties}
        onClick={() => setOpen(v => !v)}
      >
        {/* Top accent */}
        <div className="h-px" style={{ background: `linear-gradient(to right, ${exp.color}50, transparent)` }} />

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                >
                  {exp.type}
                </span>
                <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-0.5">{exp.role}</h3>
              <p className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <div className="flex items-center gap-1.5 text-slate-600">
                <Calendar size={11} />
                <span className="font-mono text-xs">{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <MapPin size={11} />
                <span className="text-xs">{exp.location}</span>
              </div>
              <ChevronRight
                size={14}
                className="text-slate-600 mt-1 transition-transform duration-300"
                style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
              />
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {exp.stack.map(t => <span key={t} className="tech-badge">{t}</span>)}
          </div>

          {/* Expandable highlights */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ maxHeight: open ? '400px' : '0', opacity: open ? 1 : 0 }}
          >
            <div className="pt-5 mt-5 border-t border-white/5">
              <ul className="space-y-2.5">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <ChevronRight size={13} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
