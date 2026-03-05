import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'LH44 — Lewis Hamilton Fan Site',
  description: 'The definitive fan hub for Sir Lewis Hamilton — 8x Formula 1 World Champion with 103 wins, 104 poles and an unmatched legacy.',
};

const stats = [
  { value: '8', label: 'World Championships', sub: 'Record-breaking titles' },
  { value: '103', label: 'Race Victories', sub: 'Most in F1 history' },
  { value: '104', label: 'Pole Positions', sub: 'Fastest qualifier ever' },
  { value: '197', label: 'Podium Finishes', sub: 'All-time record' },
  { value: '5765', label: 'Career Points', sub: 'Most ever scored' },
  { value: '18', label: 'Seasons', sub: 'In Formula 1' },
];

const timeline = [
  { year: '1998', event: 'Signs with McLaren juniors aged 13', icon: '🏆' },
  { year: '2006', event: 'Wins GP2 title with ART Grand Prix', icon: '🏎️' },
  { year: '2007', event: 'F1 debut with McLaren — nearly wins title as rookie', icon: '🚀' },
  { year: '2008', event: 'First World Championship at Brazilian GP', icon: '🥇' },
  { year: '2014', event: 'Joins Mercedes — begins dominant era', icon: '⚡' },
  { year: '2014–2020', event: 'Wins 6 more championships with Mercedes', icon: '👑' },
  { year: '2020', event: 'Equals Schumacher\'s record of 7 titles', icon: '💜' },
  { year: '2021', event: 'Heartbreaking Abu Dhabi controversy', icon: '💔' },
  { year: '2024', event: 'Shocks the world — announces move to Ferrari', icon: '🔴' },
  { year: '2025', event: 'Ferrari debut season — chasing title #8', icon: '🎯' },
];

const news = [
  {
    date: 'Mar 2, 2026',
    category: 'Race Report',
    title: 'Hamilton secures stunning Bahrain podium in Ferrari SF-26',
    excerpt: 'Lewis Hamilton delivered a masterclass performance in Bahrain, claiming a sensational P2 finish in just his second season with Ferrari.',
    tag: 'tag-orange',
  },
  {
    date: 'Feb 28, 2026',
    category: 'Technical',
    title: 'Ferrari unveil massive upgrade package for 2026 season',
    excerpt: 'Maranello confirms a significant development push targeting the aerodynamic regulations, improving downforce generation by an estimated 15%.',
    tag: 'tag-red',
  },
  {
    date: 'Feb 26, 2026',
    category: 'Off Track',
    title: 'Hamilton\'s Mission 44 Foundation reaches 1 million young people',
    excerpt: 'The Mission 44 charity, founded by Lewis to support underrepresented youth in motorsport and education, celebrates a major milestone.',
    tag: 'tag-green',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <video autoPlay loop muted playsInline className={styles.heroVideo}>
            <source src="/videos/home-cover.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroGrid}></div>
          <div className={styles.heroGlow1}></div>
          <div className={styles.heroGlow2}></div>
          <div className={styles.speedLines}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            2026 F1 Season — Ferrari SF-26
          </div>

          <div className={styles.heroNumber}>44</div>

          <h1 className={styles.heroTitle}>
            Sir Lewis<br />
            <span className={styles.heroTitleOrange}>Hamilton</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Eight-time Formula 1 World Champion. 103 race victories. The greatest racing driver of all time.
          </p>

          <div className={styles.heroActions}>
            <Link href="/story" className="btn btn-primary">
              <span>Explore His Story</span>
              <span>→</span>
            </Link>
            <Link href="/stats" className="btn btn-outline">
              Career Stats
            </Link>
          </div>

          <div className={styles.heroScrollHint}>
            <span className={styles.scrollIcon}>↓</span>
            <span>Scroll to explore</span>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroCard}>
            <div className={styles.cardNumber}>8×</div>
            <div className={styles.cardLabel}>World Champion</div>
          </div>
          <div className={styles.heroRingOuter}>
            <div className={styles.heroRingInner}></div>
          </div>
        </div>
      </section>

      {/* ======= LIVE STATS BANNER ======= */}
      <section className={styles.statsBanner}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statSub}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= TIMELINE ======= */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="badge">The Journey</span>
            <h2>A Legacy Built Over <span className="text-orange">Two Decades</span></h2>
            <p>From Stevenage kart tracks to Ferrari red — the extraordinary career of Lewis Hamilton.</p>
            <div className="section-divider"></div>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={i} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineIcon}>{item.icon}</span>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <p className={styles.timelineEvent}>{item.event}</p>
                </div>
                <div className={styles.timelineDot}></div>
              </div>
            ))}
            <div className={styles.timelineLine}></div>
          </div>

          <div className={styles.timelineCta}>
            <Link href="/story" className="btn btn-outline">Read Full Story →</Link>
          </div>
        </div>
      </section>

      {/* ======= CHAMPIONSHIPS PREVIEW ======= */}
      <section className={`section ${styles.champSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Records</span>
            <h2>Championship <span className="text-orange">Legacy</span></h2>
            <p>Eight titles that redefined the limits of human achievement in motorsport.</p>
            <div className="section-divider"></div>
          </div>
          <div className={styles.champGrid}>
            {[2008, 2014, 2015, 2017, 2018, 2019, 2020, 'TBC'].map((year, i) => (
              <div key={i} className={`${styles.champCard} ${year === 'TBC' ? styles.champCardTbc : ''}`}>
                <div className={styles.champTrophy}>🏆</div>
                <div className={styles.champYear}>{year}</div>
                {year !== 'TBC' && <div className={styles.champTeam}>{year === 2008 ? 'McLaren' : 'Mercedes'}</div>}
                {year === 'TBC' && <div className={styles.champTeam}>Ferrari • Upcoming</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/championships" className="btn btn-primary">View All Championships →</Link>
          </div>
        </div>
      </section>

      {/* ======= LATEST NEWS ======= */}
      <section className={`section ${styles.newsSection}`}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="badge">Latest</span>
              <h2 style={{ marginTop: '12px' }}>News & <span className="text-orange">Updates</span></h2>
            </div>
            <Link href="/latest-news" className="btn btn-outline">All News →</Link>
          </div>

          <div className={styles.newsGrid}>
            {news.map((item, i) => (
              <article key={i} className={`card ${styles.newsCard}`}>
                <div className={styles.newsMeta}>
                  <span className={`tag ${item.tag}`}>{item.category}</span>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <p className={styles.newsExcerpt}>{item.excerpt}</p>
                <Link href="/latest-news" className={styles.newsReadMore}>
                  Read More <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FERRARI / CAR CTA ======= */}
      <section className={styles.carCta}>
        <div className="container">
          <div className={styles.carCtaContent}>
            <div>
              <span className="badge">2026 Season</span>
              <h2 style={{ marginTop: '16px', marginBottom: '16px' }}>
                Ferrari <span className="text-orange">SF-26</span>
              </h2>
              <p style={{ maxWidth: '460px', marginBottom: '28px' }}>
                Discover the engineering marvel powering Hamilton's quest for an eighth World Championship. From the V6 hybrid power unit to the revolutionary aerodynamics.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/cars" className="btn btn-primary">Explore the Car →</Link>
                <Link href="/engineering" className="btn btn-outline">Engineering Details</Link>
              </div>
            </div>
            <div className={styles.carCtaVisual}>
              <div className={styles.carCtaNumber}>SF<span>26</span></div>
              <div className={styles.carCtaSpecs}>
                <div className={styles.specItem}>
                  <div className={styles.specLabel}>Power Unit</div>
                  <div className={styles.specValue}>Ferrari 066/12</div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specLabel}>Engine</div>
                  <div className={styles.specValue}>1.6L V6 Hybrid</div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specLabel}>Top Speed</div>
                  <div className={styles.specValue}>~360 km/h</div>
                </div>
                <div className={styles.specItem}>
                  <div className={styles.specLabel}>0–100 km/h</div>
                  <div className={styles.specValue}>~2.6 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= MISSION 44 CTA ======= */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionContent}>
            <span className="badge">Beyond Racing</span>
            <h2 style={{ marginTop: '16px', marginBottom: '16px' }}>
              Mission <span className="text-orange">44</span>
            </h2>
            <p style={{ maxWidth: '560px', margin: '0 auto 28px' }}>
              Lewis Hamilton's foundation dedicated to unlocking the potential of young people from underrepresented backgrounds in motorsport and beyond.
            </p>
            <a href="https://mission44.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Learn More About Mission 44 →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
