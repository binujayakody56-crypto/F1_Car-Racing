import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './latest-news.module.css';

export const metadata: Metadata = {
    title: 'Latest News',
    description: 'The latest Formula 1 news, race reports, and Lewis Hamilton updates.',
};

const news = [
    { date: 'Mar 2, 2026', cat: 'Race Report', title: 'Hamilton secures stunning Bahrain podium in Ferrari SF-26', excerpt: 'Lewis Hamilton delivered a masterclass performance in Bahrain, claiming a sensational P2 finish with perfectly executed tyre management over 57 laps.', tag: 'tag-orange', hot: true },
    { date: 'Feb 28, 2026', cat: 'Technical', title: 'Ferrari unveil massive upgrade package for 2026 season launch', excerpt: 'Maranello confirms a significant development push targeting the aerodynamic regulations, improving downforce generation by estimated 15%.', tag: 'tag-red', hot: false },
    { date: 'Feb 26, 2026', cat: 'Mission 44', title: 'Hamilton\'s Mission 44 Foundation reaches 1 million young people', excerpt: 'The Mission 44 charity celebrates a major milestone having provided mentorship and educational support to over one million young people.', tag: 'tag-green', hot: false },
    { date: 'Feb 20, 2026', cat: 'Testing', title: 'Ferrari\'s development pace impresses across Bahrain pre-season testing', excerpt: 'Hamilton and Leclerc showed promising pace on both short and long runs, suggesting a strong SF-26 performance window heading into the season.', tag: 'tag-orange', hot: false },
    { date: 'Feb 15, 2026', cat: 'Analysis', title: 'Why Hamilton\'s move to Ferrari could produce an 8th championship', excerpt: 'In-depth analysis of why the 2026 technical regulations play into Lewis Hamilton\'s driving style strengths and Ferrari\'s development trajectory.', tag: 'tag-blue', hot: false },
    { date: 'Feb 10, 2026', cat: 'Interview', title: 'Hamilton exclusive: "I feel more motivated than ever in Ferrari red"', excerpt: 'In a revealing interview, Lewis Hamilton discusses settling into the Maranello culture, his relationship with crew, and what drives him at 41.', tag: 'tag-orange', hot: false },
    { date: 'Jan 30, 2026', cat: 'Car Launch', title: 'Ferrari SF-26 officially unveiled — sleeker, faster, more aggressive design', excerpt: 'The Ferrari SF-26 takes a bold new direction in aerodynamic design, with a significantly reshaped floor and revised front wing for 2026 regulations.', tag: 'tag-red', hot: false },
    { date: 'Jan 25, 2026', cat: 'F1 News', title: 'FIA confirms 2026 power unit regulations and teams\' engine specifications', excerpt: 'Details of the 2026 power unit formula confirmed — a 50/50 thermal/electrical split, with all manufacturers presenting to FIA technical delegates.', tag: 'tag-blue', hot: false },
    { date: 'Jan 15, 2026', cat: 'Tribute', title: 'Lewis Hamilton named most influential sports personality of the decade', excerpt: 'A panel of sports journalists voted Hamilton as the most influential sporting personality of the 2010s-2020s decade in a landmark survey.', tag: 'tag-green', hot: false },
];

export default function LatestNewsPage() {
    const [featured, ...rest] = news;
    return (
        <>
            <PageHero
                badge="News Hub"
                title="Latest"
                highlight="News"
                subtitle="The latest from Lewis Hamilton, Ferrari, and the world of Formula 1."
            />
            <section className="section">
                <div className="container">
                    {/* Featured Article */}
                    <div className={styles.featured}>
                        <div className={styles.featuredBg}></div>
                        <div className={styles.featuredContent}>
                            <div className={styles.featuredMeta}>
                                <span className={`tag tag-orange ${styles.featuredHot}`}>🔥 Breaking</span>
                                <span className={styles.featuredDate}>{featured.date}</span>
                            </div>
                            <h2 className={styles.featuredTitle}>{featured.title}</h2>
                            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                            <button className="btn btn-primary" id="featured-read-btn">Read Full Report →</button>
                        </div>
                    </div>

                    {/* News Grid */}
                    <div className={styles.grid}>
                        {rest.map((item, i) => (
                            <article key={i} className={`card ${styles.newsCard}`} id={`news-${i}`}>
                                <div className={styles.meta}>
                                    <span className={`tag ${item.tag}`}>{item.cat}</span>
                                    <span className={styles.date}>{item.date}</span>
                                </div>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.excerpt}>{item.excerpt}</p>
                                <button className={styles.readMore} type="button">Read More →</button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
