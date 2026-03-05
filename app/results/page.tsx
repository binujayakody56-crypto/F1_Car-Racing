import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './results.module.css';

export const metadata: Metadata = {
    title: 'Race Results',
    description: '2026 Formula 1 race results and podiums.',
};

const results = [
    {
        race: 'Bahrain Grand Prix', round: 1, date: '15 Mar 2026', circuit: 'Bahrain International Circuit',
        p1: { driver: 'Max Verstappen', team: 'Red Bull', time: '1:33:02.345', nat: '🇳🇱' },
        p2: { driver: 'Lewis Hamilton', team: 'Ferrari', time: '+4.218s', nat: '🇬🇧', lh: true },
        p3: { driver: 'Charles Leclerc', team: 'Ferrari', time: '+8.091s', nat: '🇲🇨' },
        fastest: { driver: 'Lando Norris', team: 'McLaren', time: '1:32.456' },
    },
];

const previousResults = [
    { race: 'Abu Dhabi GP 2025', p1: 'Max Verstappen', p2: 'Lando Norris', p3: 'Charles Leclerc', lhPos: 5 },
    { race: 'Las Vegas GP 2025', p1: 'Lewis Hamilton 🏆', p2: 'George Russell', p3: 'Max Verstappen', lhPos: 1 },
    { race: 'Qatar GP 2025', p1: 'Max Verstappen', p2: 'Charles Leclerc', p3: 'Lewis Hamilton 🥉', lhPos: 3 },
    { race: 'São Paulo GP 2025', p1: 'Max Verstappen', p2: 'Lewis Hamilton 🥈', p3: 'Oscar Piastri', lhPos: 2 },
    { race: 'Mexico City GP 2025', p1: 'Carlos Sainz', p2: 'Lando Norris', p3: 'Charles Leclerc', lhPos: 8 },
];

export default function ResultsPage() {
    return (
        <>
            <PageHero
                badge="Race Reports"
                title="2026"
                highlight="Results"
                subtitle="Race-by-race results from the 2026 Formula 1 World Championship."
            />
            <section className="section">
                <div className="container">
                    {/* Latest Race */}
                    <div className="section-header">
                        <span className="badge">Most Recent</span>
                        <h2>Round 1 — <span className="text-orange">Bahrain GP</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    {results.map((r, i) => (
                        <div key={i} className={styles.raceResult}>
                            <div className={styles.raceHeader}>
                                <div>
                                    <div className={styles.raceMeta}>{r.date} · {r.circuit}</div>
                                    <h3 className={styles.raceName}>{r.race}</h3>
                                </div>
                            </div>

                            {/* Podium */}
                            <div className={styles.podium}>
                                {[
                                    { pos: 1, ...r.p1, medal: '🥇' },
                                    { pos: 2, ...r.p2, medal: '🥈' },
                                    { pos: 3, ...r.p3, medal: '🥉' },
                                ].map((p) => (
                                    <div key={p.pos} className={`${styles.podiumCard} ${(p as any).lh ? styles.lhCard : ''}`}>
                                        <div className={styles.podiumMedal}>{p.medal}</div>
                                        <div className={styles.podiumPos}>P{p.pos}</div>
                                        <div className={styles.podiumNat}>{p.nat}</div>
                                        <div className={styles.podiumDriver}>{p.driver}</div>
                                        <div className={styles.podiumTeam}>{p.team}</div>
                                        <div className={styles.podiumTime}>{p.time}</div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.fastestLap}>
                                ⚡ Fastest Lap: <strong>{r.fastest.driver}</strong> ({r.fastest.team}) — {r.fastest.time}
                            </div>
                        </div>
                    ))}

                    {/* Previous Results */}
                    <div className="section-header" style={{ marginTop: '80px' }}>
                        <span className="badge">Recent History</span>
                        <h2>Recent <span className="text-orange">Results</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--dark-border)' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Race</th>
                                    <th>🥇 Winner</th>
                                    <th>🥈 P2</th>
                                    <th>🥉 P3</th>
                                    <th>LH Finish</th>
                                </tr>
                            </thead>
                            <tbody>
                                {previousResults.map((r) => (
                                    <tr key={r.race}>
                                        <td><strong style={{ color: 'var(--white)', fontFamily: 'var(--font-heading)', fontSize: '0.8rem' }}>{r.race}</strong></td>
                                        <td style={{ color: r.p1.includes('Hamilton') ? 'var(--orange)' : 'var(--gray-light)' }}>{r.p1}</td>
                                        <td style={{ color: r.p2.includes('Hamilton') ? 'var(--orange)' : 'var(--gray-light)' }}>{r.p2}</td>
                                        <td style={{ color: r.p3.includes('Hamilton') ? 'var(--orange)' : 'var(--gray-light)' }}>{r.p3}</td>
                                        <td>
                                            <span style={{ color: r.lhPos <= 3 ? 'var(--orange)' : 'var(--gray)' }}>
                                                P{r.lhPos} {r.lhPos === 1 ? '🏆' : r.lhPos <= 3 ? '🏅' : ''}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
