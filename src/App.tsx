import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
