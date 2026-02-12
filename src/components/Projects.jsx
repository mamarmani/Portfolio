import './Projects.css'

const projects = [
    {
        id: 4,
        classification: 'PUBLIC ACCESS',
        title: 'AI Character Name Generator',
        date: 'February 2026',
        description:
            'An intelligent tool powered by AI to generate unique, context-aware character names for writers, gamers, and creators. The application provides instant results with a seamless user experience, deployed on a robust global edge network for high availability.',
        tags: ['React', 'AI Integration', 'Generative Tech', 'Netlify', 'Web App'],
        highlights: ['AI-Powered Generation', 'Instant Results', 'Creativity Support', 'Global Deployment'],
        link: 'https://ai-character-name-generator.netlify.app/',
        featured: true,
    },
    {
        id: 1,
        classification: 'TOP SECRET',
        title: 'Secure Image Transmission using Cryptography',
        date: 'August 2025',
        description:
            'A Python-based secure image encryption and decryption system designed to ensure confidential transmission of image data. The application implements symmetric key cryptography to encrypt image files before transmission and decrypt them securely using a shared secret key. A user-friendly graphical interface was developed to make cryptographic operations accessible even to non-technical users.',
        tags: ['Python', 'Cryptography', 'Symmetric Key', 'GUI', 'Data Integrity'],
        highlights: ['Confidentiality', 'Encryption', 'Secure Transmission', 'Data Integrity'],
        featured: true,
    },
    {
        id: 2,
        classification: 'CONFIDENTIAL',
        title: 'Emergency Medical Facilities Management System',
        date: 'November 2024',
        description:
            'A responsive web-based emergency management system designed to streamline patient registration, monitor resource availability, and manage critical cases efficiently. The system enables real-time updates using JavaScript to reduce workflow delays during emergency situations. A structured and intuitive dashboard design ensures clarity, speed, and usability for operational staff.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Dashboard', 'Real-time UI'],
        highlights: ['Real-time UI', 'Workflow Optimization', 'Responsive Dashboard', 'System Design'],
        featured: false,
    },
    {
        id: 3,
        classification: 'CONFIDENTIAL',
        title: 'Sports Awareness Website',
        date: 'June 2023',
        description:
            'A multi-page responsive website developed to promote sports awareness and engagement. The project focuses on structured content presentation, smooth navigation, and interactive elements to enhance user experience. Emphasis was placed on responsive design principles, accessibility, and consistent UI styling across various devices.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Accessibility'],
        highlights: ['Responsive Design', 'User Experience', 'Structured Layout', 'Performance'],
        featured: false,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// Classified Operations</span>
                    <h2 className="section-title">
                        Security <span className="accent">Projects</span>
                    </h2>
                </div>

                <div className="projects-list">
                    {projects.map((project, i) => (
                        <div
                            className={`project-card glass-card reveal ${project.featured ? 'featured' : ''}`}
                            key={project.id}
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="project-top">
                                <div className="project-meta">
                                    <span className={`classification ${project.featured ? 'top-secret' : ''}`}>
                                        🔒 {project.classification}
                                    </span>
                                    <span className="project-id">OP-{String(project.id).padStart(3, '0')}</span>
                                </div>
                                {project.featured && <span className="featured-badge">★ FEATURED</span>}
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-date">{project.date}</span>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-highlights">
                                {project.highlights.map((h, j) => (
                                    <span className="highlight" key={j}>◆ {h}</span>
                                ))}
                            </div>

                            <div className="project-tags">
                                {project.tags.map((tag, j) => (
                                    <span className="tag" key={j}>{tag}</span>
                                ))}
                            </div>

                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    [ ACCESS SYSTEM ]
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
