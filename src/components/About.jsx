import './About.css'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// Identification</span>
                    <h2 className="section-title">
                        Digital <span className="accent">Identity</span> Card
                    </h2>
                </div>

                <div className="about-layout reveal">
                    {/* Profile Photo */}
                    <div className="profile-photo-wrapper">
                        <div className="photo-frame">
                            <div className="photo-border" />
                            <img src="https://raw.githubusercontent.com/mamarmani/Portfolio/refs/heads/main/public/mypic.png" alt="Amar Mani Mishra" className="profile-photo" />
                            <div className="photo-scanline" />
                        </div>
                        <div className="photo-label">
                            <span className="status-dot-sm" />
                            <span>IDENTITY VERIFIED</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content">
                        <div className="about-card glass-card">
                            <div className="card-top-bar" style={{ justifyContent: 'flex-end' }}>

                                <span className="card-status-dot" />
                            </div>

                            <div className="id-meta">
                                <h3 className="id-name">Amar Mani Mishra</h3>
                                <span className="id-role">CSE Undergraduate · Security Focus</span>
                                <span className="id-location">📍 India</span>
                            </div>

                            <div className="id-divider" />

                            <p className="about-text">
                                I am a Computer Science and Engineering student with a strong focus on
                                cybersecurity and secure software development. My interests lie in
                                cryptography, network security, and building reliable systems that
                                protect data integrity and confidentiality.
                            </p>
                            <p className="about-text">
                                I approach development with a security-first mindset — ensuring that
                                every system I build considers threat models, potential vulnerabilities,
                                and practical risk mitigation.
                            </p>
                            <p className="about-text">
                                Beyond technical skills, I value logical reasoning, disciplined execution,
                                and continuous learning. My goal is to contribute to building secure digital
                                infrastructures that users can trust.
                            </p>

                            <div className="about-tags">
                                <span className="tag">Cryptography</span>
                                <span className="tag">Network Security</span>
                                <span className="tag">Secure Development</span>
                                <span className="tag">Risk Mitigation</span>
                                <span className="tag">Threat Modeling</span>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card glass-card">
                                <span className="stat-icon">🔐</span>
                                <span className="stat-value">Security-First</span>
                                <span className="stat-label">Development Approach</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-icon">🎓</span>
                                <span className="stat-value">B.Tech CSE</span>
                                <span className="stat-label">Lovely Professional University</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-icon">🛡️</span>
                                <span className="stat-value">3+</span>
                                <span className="stat-label">Security Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
