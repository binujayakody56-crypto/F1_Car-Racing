import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './stats.module.css';

export const metadata: Metadata = {
    title: 'Career Stats',
    description: "Lewis Hamilton's complete Formula 1 career statistics — wins, poles, podiums, championships and more.",
};

const careerSeasons = [
    { year: 2007, team: 'McLaren', wins: 4, poles: 6, podiums: 12, pts: 109, pos: 2 },
    { year: 2008, team: 'McLaren', wins: 5, poles: 7, podiums: 11, pts: 98, pos: 1 },
    { year: 2009, team: 'McLaren', wins: 2, poles: 3, podiums: 5, pts: 49, pos: 5 },
    { year: 2010, team: 'McLaren', wins: 3, poles: 1, podiums: 8, pts: 240, pos: 4 },
    { year: 2011, team: 'McLaren', wins: 3, poles: 1, podiums: 12, pts: 227, pos: 5 },
    { year: 2012, team: 'McLaren', wins: 4, poles: 7, podiums: 8, pts: 190, pos: 4 },
    { year: 2013, team: 'Mercedes', wins: 1, poles: 5, podiums: 5, pts: 189, pos: 4 },
    { year: 2014, team: 'Mercedes', wins: 11, poles: 7, podiums: 16, pts: 384, pos: 1 },
    { year: 2015, team: 'Mercedes', wins: 10, poles: 11, podiums: 17, pts: 381, pos: 1 },
    { year: 2016, team: 'Mercedes', wins: 10, poles: 12, podiums: 17, pts: 380, pos: 2 },
    { year: 2017, team: 'Mercedes', wins: 9, poles: 11, podiums: 13, pts: 363, pos: 1 },
    { year: 2018, team: 'Mercedes', wins: 11, poles: 11, podiums: 17, pts: 408, pos: 1 },
    { year: 2019, team: 'Mercedes', wins: 11, poles: 5, podiums: 17, pts: 413, pos: 1 },
    { year: 2020, team: 'Mercedes', wins: 11, poles: 10, podiums: 14, pts: 347, pos: 1 },
    { year: 2021, team: 'Mercedes', wins: 8, poles: 9, podiums: 17, pts: 387, pos: 2 },
    { year: 2022, team: 'Mercedes', wins: 0, poles: 0, podiums: 3, pts: 240, pos: 6 },
    { year: 2023, team: 'Mercedes', wins: 0, poles: 0, podiums: 2, pts: 234, pos: 3 },
    { year: 2024, team: 'Mercedes', wins: 2, poles: 0, podiums: 7, pts: 211, pos: 7 },
    { year: 2025, team: 'Ferrari', wins: 1, poles: 2, podiums: 8, pts: 196, pos: 4 },
];

const careerTotals = [
    { label: 'World Championships', value: '8', max: 8 },
    { label: 'Race Wins', value: '103', max: 103 },
    { label: 'Pole Positions', value: '104', max: 104 },
    { label: 'Podium Finishes', value: '197', max: 197 },
    { label: 'Fastest Laps', value: '67', max: 67 },
    { label: 'Career Points', value: '5765', max: 5765 },
    { label: 'Races Entered', value: '349', max: 349 },
    { label: 'Laps Led', value: '5765+', max: 100 },
];

export default function StatsPage() {
    return (
        <>
            <PageHero
                badge="Statistics"
                title="Career"
                highlight="Statistics"
                subtitle="Every number telling the story of the greatest Formula 1 driver in history."
            />

            <section className="section">
                <div className="container">
                    {/* Career Totals */}
                    <div className="section-header">
                        <span className="badge">All-Time Records</span>
                        <h2>Career <span className="text-orange">Totals</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className={styles.totalsGrid}>
                        {careerTotals.map((item, i) => (
                            <div key={i} className={`card ${styles.totalCard}`}>
                                <div className={styles.totalValue}>{item.value}</div>
                                <div className={styles.totalLabel}>{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Season by Season */}
                    <div className="section-header" style={{ marginTop: '80px' }}>
                        <span className="badge">Year by Year</span>
                        <h2>Season <span className="text-orange">Breakdown</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Season</th>
                                    <th>Team</th>
                                    <th>Wins</th>
                                    <th>Poles</th>
                                    <th>Podiums</th>
                                    <th>Points</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...careerSeasons].reverse().map((s) => (
                                    <tr key={s.year}>
                                        <td>
                                            <span className={styles.seasonYear}>{s.year}</span>
                                        </td>
                                        <td>
                                            <span className={`tag ${s.team === 'Ferrari' ? 'tag-red' : s.team === 'McLaren' ? 'tag-orange' : 'tag-blue'}`}>
                                                {s.team}
                                            </span>
                                        </td>
                                        <td className={s.wins >= 10 ? styles.highlight : ''}>{s.wins}</td>
                                        <td>{s.poles}</td>
                                        <td>{s.podiums}</td>
                                        <td>{s.pts}</td>
                                        <td>
                                            <span className={`rank ${s.pos === 1 ? styles.p1 : ''}`}>
                                                {s.pos === 1 ? '🏆 ' : ''}P{s.pos}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Wins Bar Chart */}
                    <div className="section-header" style={{ marginTop: '80px' }}>
                        <span className="badge">Visual</span>
                        <h2>Wins Per <span className="text-orange">Season</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className={styles.barChart}>
                        {careerSeasons.map((s) => (
                            <div key={s.year} className={styles.barItem}>
                                <div className={styles.barContainer}>
                                    <div
                                        className={styles.bar}
                                        style={{ height: `${(s.wins / 11) * 100}%` }}
                                    >
                                        {s.wins > 0 && <span className={styles.barValue}>{s.wins}</span>}
                                    </div>
                                </div>
                                <span className={styles.barYear}>{s.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
