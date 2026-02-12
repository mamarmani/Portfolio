import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">⬡ AMM</span>
                </div>
                <p className="footer-quote">
                    "Security is not a feature. It is a foundation."
                </p>
                <div className="footer-links">
                    <a href="mailto:nx6692@gmail.com" className="footer-link">Email</a>
                    <span className="footer-sep">·</span>
                    <a href="https://in.linkedin.com/in/amar-mani" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <span className="footer-sep">·</span>
                    <a href="https://github.com/Mamarmani" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                </div>
                <p className="footer-copy">
                    © 2026 Amar Mani Mishra. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
