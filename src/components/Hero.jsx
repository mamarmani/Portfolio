import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const bootLines = [
    { text: '> initializing_profile.exe', delay: 0 },
    { text: '> loading_security_modules...', delay: 1200 },
    { text: '> verifying_identity...', delay: 2400 },
    { text: '> access_granted ✓', delay: 3600, className: 'success' },
]

export default function Hero() {
    const [visibleLines, setVisibleLines] = useState([])
    const [showProfile, setShowProfile] = useState(false)
    const [typedName, setTypedName] = useState('')
    const fullName = 'Amar Mani Mishra'
    const nameRef = useRef(0)

    useEffect(() => {
        bootLines.forEach((line, i) => {
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, line])
            }, line.delay)
        })

        /* Show profile after boot sequence */
        setTimeout(() => {
            setShowProfile(true)
        }, 4600)
    }, [])

    /* Name typing effect */
    useEffect(() => {
        if (!showProfile) return
        const interval = setInterval(() => {
            if (nameRef.current < fullName.length) {
                setTypedName(fullName.slice(0, nameRef.current + 1))
                nameRef.current++
            } else {
                clearInterval(interval)
            }
        }, 80)
        return () => clearInterval(interval)
    }, [showProfile])

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                {/* Terminal Card */}
                <div className="terminal-card">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                        </div>
                        <span className="terminal-title">system_init.sh</span>
                    </div>
                    <div className="terminal-body">
                        {visibleLines.map((line, i) => (
                            <div key={i} className={`terminal-line ${line.className || ''}`}>
                                <span className="typing-text">{line.text}</span>
                            </div>
                        ))}
                        {visibleLines.length > 0 && !showProfile && (
                            <span className="cursor-blink">▊</span>
                        )}
                    </div>
                </div>

                {/* Profile Reveal */}
                <div className={`profile-reveal ${showProfile ? 'visible' : ''}`}>
                    <div className="profile-status">
                        <span className="status-dot" />
                        <span className="status-text">SECURE CHANNEL ACTIVE</span>
                    </div>
                    <h1 className="hero-name">
                        {typedName}
                        <span className="cursor-blink">▊</span>
                    </h1>
                    <p className="hero-tagline">Cybersecurity Enthusiast</p>
                    <p className="hero-sub">Secure Systems Developer</p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                            <span>◈</span> View Projects
                        </button>
                        <a href="https://drive.google.com/uc?export=download&id=1p_XU5AzFAyOVb-T7_zTXXyETCmUXI0Bj" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <span>↓</span> Download Resume
                        </a>
                        <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
                            <span>◇</span> Contact
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={`scroll-indicator ${showProfile ? 'visible' : ''}`}>
                <div className="scroll-line" />
                <span>SCROLL</span>
            </div>
        </section>
    )
}
