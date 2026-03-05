import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
    'Lewis Hamilton': [
        { label: 'Story', href: '/story' },
        { label: 'LH Details', href: '/lewis-hamilton' },
        { label: 'Championships', href: '/championships' },
        { label: 'Stats', href: '/stats' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Cars', href: '/cars' },
    ],
    'F1 World': [
        { label: 'All Drivers', href: '/all-drivers' },
        { label: 'All Teams', href: '/all-teams' },
        { label: 'Driver Standings', href: '/driver-standings' },
        { label: 'Team Standings', href: '/team-standings' },
        { label: '2026 Schedule', href: '/schedule' },
        { label: 'All F1 Winners', href: '/all-winners' },
    ],
    'More': [
        { label: 'Latest News', href: '/latest-news' },
        { label: 'Results', href: '/results' },
        { label: 'Engineering', href: '/engineering' },
        { label: 'F1 TV', href: '/f1-tv' },
        { label: 'Contact', href: '/contact' },
        { label: 'Sign In', href: '/signin' },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.container}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoLH}>LH</span>
                            <span className={styles.logo44}>44</span>
                        </Link>
                        <p className={styles.tagline}>
                            The definitive fan hub dedicated to Sir Lewis Hamilton — the greatest F1 driver of all time.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://twitter.com/lewishamilton" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">𝕏</a>
                            <a href="https://instagram.com/lewishamilton" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">◎</a>
                            <a href="https://facebook.com/lewishamilton" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">f</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">▶</a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className={styles.linkGroup}>
                            <h4 className={styles.linkGroupTitle}>{category}</h4>
                            <ul className={styles.linkList}>
                                {links.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} LH44 Fan Site. Not affiliated with Mercedes-AMG Petronas, Scuderia Ferrari, or Formula 1®. Fan-made tribute site.
                    </p>
                    <div className={styles.bottomLinks}>
                        <span>Privacy Policy</span>
                        <span className={styles.dot}>·</span>
                        <span>Terms of Use</span>
                        <span className={styles.dot}>·</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
