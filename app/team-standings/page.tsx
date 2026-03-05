import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Team Standings',
    description: '2025 Formula 1 Constructors Championship standings.',
};

const standings = [
    { pos: 1, team: 'McLaren', color: '#FF8700', pts: 555, wins: 8 },
    { pos: 2, team: 'Ferrari', color: '#DC143C', pts: 567, wins: 7 },
    { pos: 3, team: 'Red Bull Racing', color: '#1E41FF', pts: 506, wins: 12 },
    { pos: 4, team: 'Mercedes', color: '#00D2BE', pts: 402, wins: 4 },
    { pos: 5, team: 'Aston Martin', color: '#006F62', pts: 94, wins: 0 },
    { pos: 6, team: 'Alpine', color: '#0090FF', pts: 65, wins: 0 },
    { pos: 7, team: 'Williams', color: '#005AFF', pts: 77, wins: 0 },
    { pos: 8, team: 'Haas', color: '#B6BABD', pts: 58, wins: 0 },
    { pos: 9, team: 'RB', color: '#6692FF', pts: 44, wins: 0 },
    { pos: 10, team: 'Kick Sauber', color: '#00E60D', pts: 4, wins: 0 },
];

export default function TeamStandingsPage() {
    const leader = standings.reduce((a, b) => a.pts > b.pts ? a : b);
    return (
        <>
            <PageHero
                badge="2025 Season"
                title="Constructor"
                highlight="Standings"
                subtitle="The official 2025 Formula 1 Constructors' Championship standings."
            />
            <section className="section">
                <div className="container">
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--dark-border)' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Constructor</th>
                                    <th>Race Wins</th>
                                    <th>Points</th>
                                    <th>Gap to Leader</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.sort((a, b) => b.pts - a.pts).map((s, i) => (
                                    <tr key={s.team}>
                                        <td><span className="rank">{i + 1}</span></td>
                                        <td>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: s.color, flexShrink: 0, display: 'inline-block' }}></span>
                                                <strong style={{ color: 'var(--white)', fontFamily: 'var(--font-heading)', fontSize: '0.85rem' }}>{s.team}</strong>
                                            </span>
                                        </td>
                                        <td>{s.wins}</td>
                                        <td><strong style={{ color: 'var(--white)' }}>{s.pts}</strong></td>
                                        <td style={{ color: 'var(--gray)' }}>{s.pts === leader.pts ? '—' : `-${leader.pts - s.pts}`}</td>
                                        <td style={{ width: '180px' }}>
                                            <div style={{ background: 'var(--dark-border)', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                                                <div style={{ height: '100%', width: `${(s.pts / leader.pts) * 100}%`, background: s.color, borderRadius: '4px', transition: 'width 1s' }}></div>
                                            </div>
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
