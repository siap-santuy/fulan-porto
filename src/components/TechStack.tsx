import { techCategories } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function TechStack() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-sky-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">04 — Tech Stack</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Tools &<br />
            <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, catIdx) => (
            <div
              key={cat.name}
              className="glass rounded-2xl border border-white/6 p-6 relative overflow-hidden hover:border-white/12 transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.6s ease',
                transitionDelay: `${catIdx * 80}ms`,
              }}
            >
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${cat.color}08, transparent 55%)` }}
              />
              <div className="relative">
                {/* Category label */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}70` }} />
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase" style={{ color: cat.color }}>
                    {cat.name}
                  </span>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {cat.skills.map(skill => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} active={inView} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also-used row */}
        <div
          className="mt-8 glass rounded-2xl border border-white/5 p-6 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '520ms' }}
        >
          <p className="section-tag mb-4">Also experienced with</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Laravel', 'Firebase', 'BullMQ', 'Cypress', 'Jira', 'GitLab',
              'WebSocket', 'Google OAuth2', 'Midtrans', 'i18n', 'SheetJS',
              'dnd-kit', 'Groq AI', 'ImageKit', 'Bunny CDN', 'Nodemailer', 'Svelte', 'AlpineJS',
            ].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level, color, active }: { name: string; level: number; color: string; active: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono text-slate-600">{level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: active ? `${level}%` : '0%',
            background: `linear-gradient(to right, ${color}70, ${color})`,
            boxShadow: active ? `0 0 6px ${color}40` : 'none',
            transitionDelay: '300ms',
          }}
        />
      </div>
    </div>
  )
}
