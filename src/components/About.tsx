import { Code2, Cloud, Zap, Users } from 'lucide-react'
import { personal, stats } from '../data/portfolio'
import Counter from './Counter'
import { useInView } from '../hooks/useInView'

const pillars = [
  { icon: Code2, title: 'Backend Engineering', desc: 'Production-grade APIs, microservices, secure architecture.' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'GCP, Docker, CI/CD pipelines, containerized deployments.' },
  { icon: Zap, title: 'Automation Systems', desc: 'Workflow automation, bots, AI-powered internal tooling.' },
  { icon: Users, title: 'Agile Collaboration', desc: 'Full Scrum ceremonies, cross-functional team delivery.' },
]

export default function About() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">01 — About</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Turning ideas into<br />
            <span className="gradient-text">production systems</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div
            className="transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-24px)', transitionDelay: '100ms' }}
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-5">{personal.summary}</p>
            <p className="text-slate-500 leading-relaxed mb-8">
              My engineering mindset is shaped by real production experience — shipping features in Agile sprints, resolving cross-team conflicts, and ensuring reliability under real user load.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {pillars.map(p => (
                <div key={p.title} className="glass rounded-xl p-4 border border-white/5 hover:border-sky-500/20 transition-all group cursor-default">
                  <p.icon size={17} className="text-sky-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold text-slate-300 mb-1">{p.title}</div>
                  <div className="text-xs text-slate-600 leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className="transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(24px)', transitionDelay: '200ms' }}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map(s => (
                <div key={s.label} className="glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/15 transition-all relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/3 to-transparent" />
                  <div className="relative">
                    <div className="font-display text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                      <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} active={inView} />
                    </div>
                    <div className="text-xs font-mono text-slate-600 uppercase tracking-wide">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-sky-500 to-transparent rounded-l-2xl" />
              <p className="section-tag mb-3">Education</p>
              <div className="text-lg font-bold text-white mb-1">University of Nurdin Hamzah</div>
              <div className="text-sm text-slate-400 mb-3">Bachelor of Informatics Engineering · 2021 – 2025 · Jambi, Indonesia</div>
              <div className="flex flex-wrap gap-2">
                {/* <span className="tech-badge">GPA: 4.00 / 4.00</span> */}
                <span className="tech-badge">Informatics Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
