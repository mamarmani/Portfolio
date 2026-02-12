import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    /* Intersection observer for reveal animations */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const revealEls = document.querySelectorAll('.reveal')
        revealEls.forEach((el) => observer.observe(el))

        return () => revealEls.forEach((el) => observer.unobserve(el))
    }, [])

    /* Generate particles */
    const particles = Array.from({ length: 20 }, (_, i) => {
        const size = Math.random() * 3 + 1
        const left = Math.random() * 100
        const duration = Math.random() * 15 + 10
        const delay = Math.random() * 10
        const color = Math.random() > 0.5 ? 'var(--accent-green)' : 'var(--accent-cyan)'
        return (
            <div
                key={i}
                className="particle"
                style={{
                    width: size + 'px',
                    height: size + 'px',
                    left: left + '%',
                    background: color,
                    boxShadow: `0 0 ${size * 3}px ${color}`,
                    animationDuration: duration + 's',
                    animationDelay: delay + 's',
                }}
            />
        )
    })

    return (
        <>
            <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />
            <div className="grid-background" />
            {particles}
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
