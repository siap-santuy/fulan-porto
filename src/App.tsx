import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectsPage from './pages/ProjectsPage'
import { useTheme } from './hooks/useTheme'

export default function App() {
  useTheme()
  const [page, setPage] = useState<'home' | 'projects'>('home')

  if (page === 'projects') {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-slate-100">
        <ProjectsPage onBack={() => { setPage('home'); window.scrollTo({ top: 0 }) }} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-slate-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects onViewAll={() => { setPage('projects'); window.scrollTo({ top: 0 }) }} />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
