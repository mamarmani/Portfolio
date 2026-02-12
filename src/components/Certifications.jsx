import './Certifications.css'

const certs = [
    {
        title: 'Privacy and Security in Online Social Media',
        issuer: 'NPTEL',
        icon: '🏅',
    },
    {
        title: 'Cyber Security Essentials',
        issuer: 'LPU Skills',
        icon: '🛡️',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        icon: '📜',
    },
]

export default function Certifications() {
    return (
        <section className="certifications">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// Security Clearance</span>
                    <h2 className="section-title">
                        Certified <span className="accent">Badges</span>
                    </h2>
                </div>

                <div className="certs-grid">
                    {certs.map((cert, i) => (
                        <div className="cert-card glass-card reveal" key={i}>
                            <span className="cert-icon">{cert.icon}</span>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <span className="cert-issuer">{cert.issuer}</span>
                            </div>
                            <div className="cert-verified">
                                <span className="verified-badge">✓ VERIFIED</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
