import { Mail, MapPin, Send } from 'lucide-react'
import { personal } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

function LinkedinSvg({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GithubSvg({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

const contactItems = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail, color: '#0ea5e9' },
  { label: 'LinkedIn', value: 'linkedin.com/in/fajri-arvandi', href: personal.linkedin, icon: LinkedinSvg, color: '#2563eb' },
  { label: 'GitHub', value: 'github.com/BANGKIT-CH2-PS156', href: personal.githubProject, icon: GithubSvg, color: '#94a3b8' },
  { label: 'Location', value: personal.location, href: null, icon: MapPin, color: '#10b981' },
]

export default function Contact() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-sky-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="section-tag mb-3">06 — Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Let's Build<br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-5 gap-7 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '150ms' }}
        >
          {/* Contact links */}
          <div className="lg:col-span-2 space-y-3">
            {contactItems.map(item => (
              <div key={item.label} className="glass rounded-xl border border-white/6 p-4 group hover:border-white/12 transition-all">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={15} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-slate-700 uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-slate-300 hover:text-white font-medium transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-300 font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl border border-sky-500/15 p-8 lg:p-10 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
                  <Send size={18} className="text-sky-400" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Ready to collaborate?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                  Whether it's a production backend system, a fullstack application, or an automation pipeline — I'm ready to deliver.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Production API & backend architecture',
                    'Fullstack web application development',
                    'Cloud infrastructure & DevOps setup',
                    'Process automation & integration',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Send Me a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
