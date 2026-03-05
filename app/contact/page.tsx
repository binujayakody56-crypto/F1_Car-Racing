import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with the LH44 fan site team.',
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                badge="Get In Touch"
                title="Contact"
                highlight="Us"
                subtitle="Have a story, correction, or collaboration idea? We'd love to hear from you."
            />

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {/* Form */}
                        <div className={styles.formCard}>
                            <h3 className={styles.formTitle}>Send a Message</h3>
                            <form className={styles.form} id="contact-form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                    <input className="form-input" id="name" type="text" placeholder="Lewis Hamilton" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input className="form-input" id="email" type="email" placeholder="you@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="subject">Subject</label>
                                    <select className="form-input" id="subject">
                                        <option value="">Select a topic</option>
                                        <option>Site Feedback</option>
                                        <option>Content Correction</option>
                                        <option>Partnership / Collaboration</option>
                                        <option>Media Enquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea className="form-input" id="message" placeholder="Tell us what's on your mind..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" id="submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message →
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div className={styles.infoColumn}>
                            <div className={`card ${styles.infoCard}`}>
                                <h4 className={styles.infoTitle}>Follow Lewis</h4>
                                <div className={styles.socialLinks}>
                                    <a href="https://x.com/lewishamilton" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} id="social-twitter">
                                        <span className={styles.socialIcon}>𝕏</span>
                                        <span>@LewisHamilton</span>
                                        <span className={styles.socialArrow}>→</span>
                                    </a>
                                    <a href="https://instagram.com/lewishamilton" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} id="social-instagram">
                                        <span className={styles.socialIcon}>◎</span>
                                        <span>@LewisHamilton</span>
                                        <span className={styles.socialArrow}>→</span>
                                    </a>
                                    <a href="https://mission44.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} id="social-mission44">
                                        <span className={styles.socialIcon}>〰</span>
                                        <span>Mission 44</span>
                                        <span className={styles.socialArrow}>→</span>
                                    </a>
                                    <a href="https://formula1.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} id="social-f1">
                                        <span className={styles.socialIcon}>🏎</span>
                                        <span>Formula1.com</span>
                                        <span className={styles.socialArrow}>→</span>
                                    </a>
                                </div>
                            </div>

                            <div className={`card ${styles.faqCard}`}>
                                <h4 className={styles.infoTitle}>Quick Links</h4>
                                <div className={styles.faqLinks}>
                                    {[
                                        { label: 'Career Statistics', href: '/stats' },
                                        { label: 'Photo Gallery', href: '/gallery' },
                                        { label: 'Lewis\'s Story', href: '/story' },
                                        { label: '2026 F1 Schedule', href: '/schedule' },
                                        { label: 'All F1 Winners', href: '/all-winners' },
                                    ].map(l => (
                                        <Link key={l.href} href={l.href} className={styles.faqLink}>
                                            <span>{l.label}</span>
                                            <span>→</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className={`card ${styles.disclaimerCard}`}>
                                <h4 className={styles.infoTitle}>Disclaimer</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--gray)', lineHeight: '1.6' }}>
                                    This is an unofficial fan site. We are not affiliated with Lewis Hamilton, Ferrari, Mercedes-AMG Petronas, or Formula 1® in any way. All trademarks and copyrights belong to their respective owners.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
