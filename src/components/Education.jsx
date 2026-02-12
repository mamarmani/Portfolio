import './Education.css'

export default function Education() {
    return (
        <section id="education" className="education">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// Access Log</span>
                    <h2 className="section-title">
                        Education <span className="accent">Timeline</span>
                    </h2>
                </div>

                <div className="timeline reveal">
                    <div className="timeline-line" />

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <div className="marker-dot" />
                        </div>
                        <div className="timeline-card glass-card">
                            <div className="timeline-date">
                                <span className="date-badge">Aug 2023 — Present</span>
                            </div>
                            <h3 className="timeline-title">Lovely Professional University</h3>
                            <p className="timeline-location">Punjab, India</p>
                            <p className="timeline-subtitle">Bachelor of Technology — Computer Science & Engineering</p>
                            <div className="timeline-details">
                                <span className="detail-item">
                                    <span className="detail-label">CGPA</span>
                                    <span className="detail-value">6.02</span>
                                </span>
                                <span className="detail-item">
                                    <span className="detail-label">Focus</span>
                                    <span className="detail-value">Cybersecurity</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <div className="marker-dot marker-dot-cyan" />
                        </div>
                        <div className="timeline-card glass-card">
                            <div className="timeline-date">
                                <span className="date-badge cyan">Apr 2020 — Mar 2022</span>
                            </div>
                            <h3 className="timeline-title">GSAS Academy</h3>
                            <p className="timeline-location">Harriaya, Basti</p>
                            <p className="timeline-subtitle">Intermediate</p>
                            <div className="timeline-details">
                                <span className="detail-item">
                                    <span className="detail-label">Percentage</span>
                                    <span className="detail-value">67%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-marker">
                            <div className="marker-dot marker-dot-cyan" />
                        </div>
                        <div className="timeline-card glass-card">
                            <div className="timeline-date">
                                <span className="date-badge cyan">Apr 2018 — Mar 2020</span>
                            </div>
                            <h3 className="timeline-title">GSAS Academy</h3>
                            <p className="timeline-location">Harriaya, Basti</p>
                            <p className="timeline-subtitle">Matriculation</p>
                            <div className="timeline-details">
                                <span className="detail-item">
                                    <span className="detail-label">Percentage</span>
                                    <span className="detail-value">85%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extra Curricular */}
                <div className="extra-section reveal">
                    <h3 className="extra-title">
                        <span className="section-label">// Extra Curricular</span>
                    </h3>
                    <div className="extra-grid">
                        <div className="extra-card glass-card">
                            <span className="extra-icon">💻</span>
                            <div className="extra-info">
                                <h4>Code-A-Haunt Hackathon</h4>
                                <p>Participant</p>
                            </div>
                        </div>
                        <div className="extra-card glass-card">
                            <span className="extra-icon">🤝</span>
                            <div className="extra-info">
                                <h4>ABVKS NGO</h4>
                                <p>Volunteer — Ayodhya, UP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
