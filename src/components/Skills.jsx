import './Skills.css'

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '⌨️',
        skills: [
            { name: 'Python', level: 80 },
            { name: 'C', level: 70 },
            { name: 'C++', level: 65 },
            { name: 'Java', level: 60 },
            { name: 'SQL', level: 70 },
        ],
    },
    {
        title: 'Web Development',
        icon: '🌐',
        skills: [
            { name: 'HTML', level: 85 },
            { name: 'CSS', level: 75 },
            { name: 'JavaScript', level: 70 },
        ],
    },
    {
        title: 'Security & Tools',
        icon: '🛡️',
        skills: [
            { name: 'Git', level: 75 },
            { name: 'GitHub', level: 80 },
            { name: 'Oracle', level: 55 },
            { name: 'Nmap', level: 65 },
            { name: 'Metasploit', level: 55 },
            { name: 'AutoCAD', level: 50 },
        ],
    },
    {
        title: 'Soft Skills',
        icon: '🧠',
        skills: [
            { name: 'Problem-Solving', level: 85 },
            { name: 'Logical Reasoning', level: 80 },
            { name: 'Discipline', level: 90 },
            { name: 'Hardworking', level: 90 },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// System Modules</span>
                    <h2 className="section-title">
                        Capabilities <span className="accent">Dashboard</span>
                    </h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, ci) => (
                        <div className="skill-module glass-card reveal" key={ci}>
                            <div className="module-header">
                                <span className="module-icon">{cat.icon}</span>
                                <h3 className="module-title">{cat.title}</h3>
                                <span className="module-status">ONLINE</span>
                            </div>
                            <div className="module-skills">
                                {cat.skills.map((skill, si) => (
                                    <div className="skill-row" key={si}>
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-fill"
                                                style={{ '--fill-width': `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
