import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './f1-tv.module.css';

export const metadata: Metadata = {
    title: 'F1 TV',
    description: 'Watch Formula 1 races live with F1 TV — the official streaming platform.',
};

const highlights = [
    { title: 'Bahrain 2026 Race Highlights', duration: '12:34', type: 'Highlights', tag: 'tag-orange' },
    { title: 'Hamilton\'s Greatest Overtakes', duration: '18:45', type: 'Compilation', tag: 'tag-red' },
    { title: '2024 Las Vegas GP — LH Wins in Closing Laps', duration: '2:01:20', type: 'Full Race', tag: 'tag-green' },
    { title: 'The W11 Story — The Perfect Car', duration: '45:12', type: 'Documentary', tag: 'tag-blue' },
    { title: '8 Championships — The Hamilton Story', duration: '1:25:00', type: 'Documentary', tag: 'tag-orange' },
    { title: 'Ferrari 2025 — Hamilton\'s First Year in Red', duration: '35:00', type: 'Documentary', tag: 'tag-red' },
];

const plans = [
    {
        name: 'Access',
        price: '£2.99/mo',
        features: ['Live race audio', 'Onboard cameras', 'Timing data', 'Dedicated commentary'],
        cta: 'Get Access',
        highlight: false,
    },
    {
        name: 'Pro',
        price: '£9.99/mo',
        features: ['All Access content', 'Live races', 'Race replays', 'Historic races', '4K quality', 'Multi-stream view'],
        cta: 'Go Pro',
        highlight: true,
    },
    {
        name: 'Annual',
        price: '£79.99/yr',
        features: ['Everything in Pro', 'Save 33%', 'Priority support', 'Download for offline'],
        cta: 'Best Value',
        highlight: false,
    },
];

export default function F1TVPage() {
    return (
        <>
            <PageHero
                badge="Stream F1"
                title="F1"
                highlight="TV"
                subtitle="Watch every Formula 1 race live and on demand. The home of Lewis Hamilton in 2026."
            />

            {/* Plans */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">Subscription</span>
                        <h2>Choose Your <span className="text-orange">Plan</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className={styles.plansGrid}>
                        {plans.map((plan, i) => (
                            <div key={i} className={`${styles.planCard} ${plan.highlight ? styles.highlighted : ''}`}>
                                {plan.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                                <div className={styles.planName}>{plan.name}</div>
                                <div className={styles.planPrice}>{plan.price}</div>
                                <ul className={styles.featureList}>
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={styles.featureItem}>
                                            <span className={styles.checkmark}>✓</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} ${styles.planCta}`} id={`plan-${plan.name.toLowerCase()}`} type="button">
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Video Highlights Grid */}
                    <div className="section-header" style={{ marginTop: '80px' }}>
                        <span className="badge">Watch Now</span>
                        <h2>Featured <span className="text-orange">Content</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className={styles.videoGrid}>
                        {highlights.map((v, i) => (
                            <div key={i} className={styles.videoCard} id={`video-${i}`}>
                                <div className={styles.videoThumb}>
                                    <div className={styles.videoGradient}></div>
                                    <div className={styles.playButton}>▶</div>
                                    <div className={styles.videoDuration}>{v.duration}</div>
                                </div>
                                <div className={styles.videoInfo}>
                                    <span className={`tag ${v.tag}`}>{v.type}</span>
                                    <h4 className={styles.videoTitle}>{v.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* External Link CTA */}
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a
                            href="https://www.formula1.com/en/subscribe-to-f1-tv.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            id="subscribe-f1tv-btn"
                        >
                            Subscribe to F1 TV Official →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
