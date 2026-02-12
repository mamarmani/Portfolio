import { useState } from 'react'
import './Contact.css'

const channels = [
    {
        label: 'Email',
        value: 'nx6692@gmail.com',
        href: 'mailto:nx6692@gmail.com',
        icon: '✉',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/amar-mani',
        href: 'https://in.linkedin.com/in/amar-mani',
        icon: '🔗',
    },
    {
        label: 'GitHub',
        value: 'github.com/Mamarmani',
        href: 'https://github.com/Mamarmani',
        icon: '◈',
    },
    {
        label: 'Phone',
        value: '+91-9918226692',
        href: 'tel:+919918226692',
        icon: '📱',
    },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        /* Open mailto with the form data as a fallback */
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
        window.open(`mailto:nx6692@gmail.com?subject=${subject}&body=${body}`)
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">// Secure Channel</span>
                    <h2 className="section-title">
                        Establish <span className="accent">Connection</span>
                    </h2>
                </div>

                <div className="contact-grid reveal">
                    {/* Contact Channels */}
                    <div className="contact-channels">
                        <p className="contact-intro">
                            Ready to connect? Choose a secure communication channel below.
                        </p>
                        {channels.map((ch, i) => (
                            <a
                                key={i}
                                href={ch.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="channel-card glass-card"
                            >
                                <span className="channel-icon">{ch.icon}</span>
                                <div className="channel-info">
                                    <span className="channel-label">{ch.label}</span>
                                    <span className="channel-value">{ch.value}</span>
                                </div>
                                <span className="channel-arrow">→</span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-header">
                            <span className="form-icon">&gt;_</span>
                            <span className="form-title">Send Encrypted Message</span>
                        </div>

                        <div className="form-group">
                            <label className="form-label">identifier</label>
                            <input
                                className="form-input"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">return_address</label>
                            <input
                                className="form-input"
                                type="email"
                                name="email"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">payload</label>
                            <textarea
                                className="form-input form-textarea"
                                name="message"
                                placeholder="Enter your message..."
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary form-submit">
                            {sent ? '✓ Transmitted' : '◈ Transmit Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
