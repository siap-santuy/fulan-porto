import { Calendar, Hash } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Certifications() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">05 — Certifications</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Verified<br />
            <span className="gradient-text">Credentials</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="glass rounded-2xl border border-white/6 p-6 relative overflow-hidden group card-hover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.6s ease',
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {/* Accent top */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, ${cert.color}60, transparent)` }} />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${cert.color}07, transparent 55%)` }}
              />

              <div className="relative">
                {/* Badge icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-mono text-sm font-bold"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30`, color: cert.color }}
                >
                  {cert.badge}
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug group-hover:text-sky-50 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: cert.color }}>{cert.issuer}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600 text-xs">
                    <Calendar size={11} />
                    <span>
                      Issued {cert.issued}
                      {cert.expires ? ` · Exp ${cert.expires}` : ''}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700 text-xs">
                    <Hash size={11} className="shrink-0 mt-0.5" />
                    <span className="font-mono break-all leading-relaxed">{cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
