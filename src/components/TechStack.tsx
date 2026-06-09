import { useInView } from '../hooks/useInView'

const row1 = [
  { name: 'TypeScript', color: '#3178c6', bg: '#3178c610' },
  { name: 'Node.js', color: '#68a063', bg: '#68a06310' },
  { name: 'React.js', color: '#61dafb', bg: '#61dafb10' },
  { name: 'PostgreSQL', color: '#336791', bg: '#33679110' },
  { name: 'Docker', color: '#2496ed', bg: '#2496ed10' },
  { name: 'Express.js', color: '#94a3b8', bg: '#94a3b810' },
  { name: 'Next.js', color: '#e2e8f0', bg: '#e2e8f008' },
  { name: 'Redis', color: '#dc382d', bg: '#dc382d10' },
  { name: 'GCP', color: '#4285f4', bg: '#4285f410' },
  { name: 'Prisma', color: '#5a67d8', bg: '#5a67d810' },
]

const row2 = [
  { name: 'JavaScript', color: '#f7df1e', bg: '#f7df1e10' },
  { name: 'Fastify', color: '#f97316', bg: '#f9731610' },
  { name: 'Hono', color: '#e85d04', bg: '#e85d0410' },
  { name: 'TailwindCSS', color: '#06b6d4', bg: '#06b6d410' },
  { name: 'Bun', color: '#f9a825', bg: '#f9a82510' },
  { name: 'MySQL', color: '#4479a1', bg: '#4479a110' },
  { name: 'GitHub Actions', color: '#2088ff', bg: '#2088ff10' },
  { name: 'Jest', color: '#c21325', bg: '#c2132510' },
  { name: 'Sequelize', color: '#52b0e7', bg: '#52b0e710' },
  { name: 'Python', color: '#3572a5', bg: '#3572a510' },
]

const row3 = [
  { name: 'Go', color: '#00acd7', bg: '#00acd710' },
  { name: 'Svelte', color: '#ff3e00', bg: '#ff3e0010' },
  { name: 'Cypress', color: '#17202c', bg: '#ffffff08' },
  { name: 'Laravel', color: '#ff2d20', bg: '#ff2d2010' },
  { name: 'Firebase', color: '#ffca28', bg: '#ffca2810' },
  { name: 'Midtrans', color: '#0d74ce', bg: '#0d74ce10' },
  { name: 'BullMQ', color: '#ef4444', bg: '#ef444410' },
  { name: 'Chakra UI', color: '#38b2ac', bg: '#38b2ac10' },
  { name: 'Postman', color: '#ff6c37', bg: '#ff6c3710' },
  { name: 'AWS', color: '#ff9900', bg: '#ff990010' },
]

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee${reverse ? 'Rev' : ''} 28s linear infinite`,
        }}
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border shrink-0 transition-all duration-300 hover:scale-105 cursor-default select-none"
            style={{
              background: tech.bg,
              borderColor: `${tech.color}25`,
            }}
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}80` }} />
            <span className="text-sm font-medium whitespace-nowrap" style={{ color: tech.color === '#f7df1e' || tech.color === '#ffca28' || tech.color === '#f9a825' ? '#f8fafc' : tech.color }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const categories = [
  { label: 'Languages', color: '#f59e0b', skills: ['TypeScript', 'JavaScript', 'Python', 'Go'] },
  { label: 'Backend', color: '#0ea5e9', skills: ['Node.js', 'Express.js', 'Fastify', 'Hono', 'Bun', 'REST API'] },
  { label: 'Frontend', color: '#10b981', skills: ['React.js', 'Next.js', 'Svelte', 'TailwindCSS', 'Chakra UI'] },
  { label: 'Database', color: '#8b5cf6', skills: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Sequelize'] },
  { label: 'DevOps & Cloud', color: '#ef4444', skills: ['Docker', 'GCP', 'AWS', 'CI/CD', 'Git/GitLab'] },
  { label: 'Testing & Tools', color: '#f97316', skills: ['Jest', 'Cypress', 'Postman', 'Jira', 'Figma'] },
]

export default function TechStack() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative overflow-hidden"
    >
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marqueeRev { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>

      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-sky-500/3 blur-[100px] pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div
          className="max-w-6xl mx-auto px-6 mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">04 — Tech Stack</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Tools &<br />
            <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Marquee rows */}
        <div
          className="space-y-3 mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transitionDelay: '100ms' }}
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
          <MarqueeRow items={row3} />
        </div>

        {/* Category grid */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className="glass rounded-2xl border border-white/6 p-4 hover:border-white/12 transition-all duration-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease',
                  transitionDelay: `${200 + i * 60}ms`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}70` }} />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {cat.skills.map(s => (
                    <span key={s} className="text-xs text-slate-400 font-medium">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
