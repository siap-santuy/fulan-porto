import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'
import FloatingTechIcons from './FloatingTechIcons'

const roles = [
  'Backend Engineer',
  'Fullstack Developer',
  'API Architect',
  'Cloud Engineer',
  'Automation Builder',
]

function GithubSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

function LinkedinSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setTimeout(() => setMounted(true), 80) }, [])

  useEffect(() => {
    const current = roles[roleIdx]
    if (!deleting && displayed === current) {
      timer.current = setTimeout(() => setDeleting(true), 2400)
      return
    }
    if (deleting && displayed === '') {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
      return
    }
    const speed = deleting ? 42 : 78
    timer.current = setTimeout(() => {
      setDisplayed(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
    }, speed)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [displayed, deleting, roleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Floating tech icons */}
      <FloatingTechIcons />

      {/* Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sky-500/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/4 blur-[100px] pointer-events-none" />

      {/* Floating dots */}
      {([
        { top: '12%', left: '8%', right: undefined, delay: '0s', size: 'w-2 h-2' },
        { top: '25%', left: undefined, right: '12%', delay: '1.5s', size: 'w-1.5 h-1.5' },
        { top: '70%', left: '6%', right: undefined, delay: '2.8s', size: 'w-1 h-1' },
        { top: '80%', left: undefined, right: '8%', delay: '0.7s', size: 'w-2 h-2' },
        { top: '45%', left: '3%', right: undefined, delay: '3.5s', size: 'w-1 h-1' },
      ] as const).map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} rounded-full bg-sky-500/30 animate-float pointer-events-none`}
          style={{ top: dot.top, left: dot.left, right: dot.right, animationDelay: dot.delay }}
        />
      ))}

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-sky-500/15 pointer-events-none" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-sky-500/15 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-sky-500/15 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-sky-500/15 pointer-events-none" />

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{ transition: 'opacity 0.8s ease, transform 0.8s ease', opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(32px)' }}
      >
        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 border border-white/8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" style={{ animation: 'pulse 2s infinite' }} />
          <span className="text-xs font-mono text-slate-500 tracking-wider">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="text-white">Fajri</span>
          <span className="gradient-text ml-3 sm:ml-5">Arvandi</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl font-light text-slate-400">
            {displayed}
            <span className="cursor-blink" />
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Building production-grade APIs, scalable platforms, and intelligent automation systems.
          Based in <span className="text-slate-300 font-medium">Jakarta, Indonesia</span>.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#"
            className="px-7 py-3.5 rounded-xl glass border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass border border-white/8 hover:border-sky-500/30 flex items-center justify-center text-slate-500 hover:text-sky-400 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinSvg />
          </a>
          <a
            href={personal.githubProject}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass border border-white/8 hover:border-sky-500/30 flex items-center justify-center text-slate-500 hover:text-sky-400 transition-all"
            aria-label="GitHub"
          >
            <GithubSvg />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 rounded-xl glass border border-white/8 hover:border-sky-500/30 flex items-center justify-center text-slate-500 hover:text-sky-400 transition-all"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

        {/* Specialization chips */}
        <div className="flex flex-wrap justify-center gap-2">
          {personal.specializations.map(s => (
            <span key={s} className="tech-badge">{s}</span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-700 hover:text-slate-500 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  )
}
