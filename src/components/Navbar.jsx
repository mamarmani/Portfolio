import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = (id) => {
        setMobileOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner container">
                <a href="#" className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="brand-icon">⬡</span>
                    <span className="brand-text">AMM<span className="brand-dot">.</span></span>
                </a>

                <button
                    className={`hamburger ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span /><span /><span />
                </button>

                <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button className="nav-link" onClick={() => handleClick(link.id)}>
                                <span className="nav-link-marker">//</span> {link.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1p_XU5AzFAyOVb-T7_zTXXyETCmUXI0Bj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary nav-cta"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
