import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import styles from './championships.module.css';

export const metadata: Metadata = {
    title: 'Championships Won',
    description: "Lewis Hamilton's 8 Formula 1 World Championships — a detailed breakdown of each title-winning season.",
};

const championships = [
    {
        year: 2008,
        team: 'McLaren',
        car: 'MP4/23',
        teamColor: '#C0C0C0',
        wins: 5,
        poles: 7,
        points: 98,
        margin: 1,
        finalRace: 'Brazilian GP — dramatic last-lap pass on Glock',
        highlight: 'Youngest world champion at 23. Became only the third Briton to win the title.',
        champion: true,
    },
    {
        year: 2014,
        team: 'Mercedes',
        car: 'W05',
        teamColor: '#00D0CD',
        wins: 11,
        poles: 7,
        points: 384,
        margin: 67,
        finalRace: 'Abu Dhabi GP — dominant double-points finale',
        highlight: 'Beginning of the Mercedes dynasty. Hamilton vs Rosberg rivalry begins.',
        champion: true,
    },
    {
        year: 2015,
        team: 'Mercedes',
        car: 'W06',
        teamColor: '#00D0CD',
        wins: 10,
        poles: 11,
        points: 381,
        margin: 59,
        finalRace: 'US GP — clinched with three races to spare',
        highlight: 'Most dominant season to that point. 11 pole positions in a year.',
        champion: true,
    },
    {
        year: 2017,
        team: 'Mercedes',
        car: 'W08',
        teamColor: '#00D0CD',
        wins: 9,
        poles: 11,
        points: 363,
        margin: 46,
        finalRace: 'Mexican GP — closely fought against Vettel',
        highlight: 'Epic season-long battle with Sebastian Vettel and Ferrari.',
        champion: true,
    },
    {
        year: 2018,
        team: 'Mercedes',
        car: 'W09',
        teamColor: '#00D0CD',
        wins: 11,
        poles: 11,
        points: 408,
        margin: 88,
        finalRace: 'Mexican GP — secured 5th title',
        highlight: 'Record-equalling fifth championship, putting him alongside Schumacher and Fangio.',
        champion: true,
    },
    {
        year: 2019,
        team: 'Mercedes',
        car: 'W10',
        teamColor: '#00D0CD',
        wins: 11,
        poles: 5,
        points: 413,
        margin: 87,
        finalRace: 'US GP — team also won constructors',
        highlight: 'Dominated from start to finish. Record 6th constructors title for Mercedes.',
        champion: true,
    },
    {
        year: 2020,
        team: 'Mercedes',
        car: 'W11',
        teamColor: '#00D0CD',
        wins: 11,
        poles: 10,
        points: 347,
        margin: 124,
        finalRace: 'Turkish GP — clinched in the rain',
        highlight: 'Equalled Schumacher\'s 7 titles. The W11 considered the greatest F1 car ever built.',
        champion: true,
    },
    {
        year: '2026?',
        team: 'Ferrari',
        car: 'SF-26',
        teamColor: '#DC143C',
        wins: 0,
        poles: 0,
        points: 0,
        margin: 0,
        finalRace: 'Season in progress...',
        highlight: 'The dream of an 8th championship in Ferrari red. The sport holds its breath.',
        champion: false,
    },
];

export default function ChampionshipsPage() {
    const wonChamps = championships.filter(c => c.champion);

    return (
        <>
            <PageHero
                badge="All Titles"
                title="Championships"
                highlight="Won"
                subtitle="Eight titles that redefined the limits of what is possible in Formula 1 racing."
                bgVideo="/videos/championships-hero.mp4"
            />

            {/* Count Banner */}
            <section className={styles.countBanner}>
                <div className="container">
                    <div className={styles.countGrid}>
                        <div className={styles.countItem}>
                            <div className={styles.countNum}>8</div>
                            <div className={styles.countLabel}>World Championships</div>
                        </div>
                        <div className={styles.countItem}>
                            <div className={styles.countNum}>81</div>
                            <div className={styles.countLabel}>Championship Wins (across title seasons)</div>
                        </div>
                        <div className={styles.countItem}>
                            <div className={styles.countNum}>69</div>
                            <div className={styles.countLabel}>Pole Positions in title seasons</div>
                        </div>
                        <div className={styles.countItem}>
                            <div className={styles.countNum}>2794</div>
                            <div className={styles.countLabel}>Points scored in title seasons</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Championship Cards */}
            <section className="section">
                <div className="container">
                    <div className={styles.champList}>
                        {championships.map((ch, i) => (
                            <div key={i} className={`${styles.champCard} ${!ch.champion ? styles.champCardTbc : ''}`}>
                                <div className={styles.champLeft}>
                                    <div className={styles.champTrophy}>{ch.champion ? '🏆' : '🎯'}</div>
                                    <div className={styles.champYear} style={{ color: ch.teamColor }}>{ch.year}</div>
                                </div>

                                <div className={styles.champInfo}>
                                    <div className={styles.champTop}>
                                        <span className={`tag`} style={{ background: ch.teamColor + '22', color: ch.teamColor, border: `1px solid ${ch.teamColor}55` }}>
                                            {ch.team} — {ch.car}
                                        </span>
                                    </div>
                                    <p className={styles.champHighlight}>{ch.highlight}</p>
                                    <p className={styles.champFinal}><strong>Decisive Moment:</strong> {ch.finalRace}</p>
                                </div>

                                {ch.champion && (
                                    <div className={styles.champStats}>
                                        <div className={styles.cStat}>
                                            <div className={styles.cStatNum}>{ch.wins}</div>
                                            <div className={styles.cStatLbl}>Wins</div>
                                        </div>
                                        <div className={styles.cStat}>
                                            <div className={styles.cStatNum}>{ch.poles}</div>
                                            <div className={styles.cStatLbl}>Poles</div>
                                        </div>
                                        <div className={styles.cStat}>
                                            <div className={styles.cStatNum}>{ch.points}</div>
                                            <div className={styles.cStatLbl}>Points</div>
                                        </div>
                                        {ch.margin > 0 && (
                                            <div className={styles.cStat}>
                                                <div className={styles.cStatNum}>+{ch.margin}</div>
                                                <div className={styles.cStatLbl}>Margin</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-sm" style={{ textAlign: 'center', borderTop: '1px solid var(--dark-border)' }}>
                <div className="container">
                    <Link href="/stats" className="btn btn-primary" style={{ marginRight: '12px' }}>View Full Career Stats</Link>
                    <Link href="/story" className="btn btn-outline">Read the Full Story</Link>
                </div>
            </section>
        </>
    );
}
