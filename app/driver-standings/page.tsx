import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
    title: 'Driver Standings',
    description: '2025 Formula 1 Driver Championship standings.',
};

const standings = [
    { pos: 1, num: 1, name: 'Max Verstappen', team: 'Red Bull', nat: '🇳🇱', pts: 437, wins: 12, color: '#1E41FF' },
    { pos: 2, num: 4, name: 'Lando Norris', team: 'McLaren', nat: '🇬🇧', pts: 374, wins: 6, color: '#FF8700' },
    { pos: 3, num: 16, name: 'Charles Leclerc', team: 'Ferrari', nat: '🇲🇨', pts: 356, wins: 5, color: '#DC143C' },
    { pos: 4, num: 44, name: 'Lewis Hamilton', team: 'Ferrari', nat: '🇬🇧', pts: 211, wins: 2, color: '#DC143C', lh: true },
    { pos: 5, num: 63, name: 'George Russell', team: 'Mercedes', nat: '🇬🇧', pts: 201, wins: 2, color: '#00D2BE' },
    { pos: 6, num: 81, name: 'Oscar Piastri', team: 'McLaren', nat: '🇦🇺', pts: 181, wins: 2, color: '#FF8700' },
    { pos: 7, num: 14, name: 'Fernando Alonso', team: 'Aston Martin', nat: '🇪🇸', pts: 73, wins: 0, color: '#006F62' },
    { pos: 8, num: 11, name: 'Sergio Perez', team: 'Red Bull', nat: '🇲🇽', pts: 69, wins: 0, color: '#1E41FF' },
    { pos: 9, num: 55, name: 'Carlos Sainz', team: 'Williams', nat: '🇪🇸', pts: 65, wins: 0, color: '#005AFF' },
    { pos: 10, num: 23, name: 'Alex Albon', team: 'Williams', nat: '🇹🇭', pts: 12, wins: 0, color: '#005AFF' },
];

export default function DriverStandingsPage() {
    const leader = standings[0];
    return (
        <>
            <PageHero
                badge="2025 Season"
                title="Driver"
                highlight="Standings"
                subtitle="The official 2025 Formula 1 Drivers' Championship standings."
            />
            <section className="section">
                <div className="container">
                    {/* Podium Preview */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
                        {[standings[1], standings[0], standings[2]].map((s, i) => (
                            <div key={s.pos} className="card" style={{ textAlign: 'center', borderColor: i === 1 ? 'var(--orange)' : 'var(--dark-border)', padding: '28px 20px', background: i === 1 ? 'rgba(232,115,10,0.06)' : undefined }}>
                                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{i === 0 ? '🥈' : i === 1 ? '🥇' : '🥉'}</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--gray)', marginBottom: '8px' }}>P{i === 0 ? 2 : i === 1 ? 1 : 3}</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '4px' }}>{s.name}</div>
                                <div style={{ fontSize: '0.75rem', color: s.lh ? 'var(--orange)' : s.color }}>{s.team}</div>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--orange)', marginTop: '12px' }}>{s.pts}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--gray)', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>POINTS</div>
                            </div>
                        ))}
                    </div>

                    {/* Full Table */}
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--dark-border)' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>No.</th>
                                    <th>Driver</th>
                                    <th>Team</th>
                                    <th>Wins</th>
                                    <th>Points</th>
                                    <th>Gap to Leader</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.map((s) => (
                                    <tr key={s.pos} style={s.lh ? { background: 'rgba(232,115,10,0.06)' } : {}}>
                                        <td><span className="rank">{s.pos}</span></td>
                                        <td><span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: s.color }}>{s.num}</span></td>
                                        <td>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                {s.nat} <strong style={{ color: s.lh ? 'var(--orange)' : 'var(--white)' }}>{s.name}</strong>
                                                {s.lh && <span className="tag tag-orange" style={{ fontSize: '0.55rem' }}>LH44</span>}
                                            </span>
                                        </td>
                                        <td><span style={{ color: s.color, fontFamily: 'var(--font-heading)', fontSize: '0.75rem' }}>{s.team}</span></td>
                                        <td>{s.wins}</td>
                                        <td><strong style={{ color: 'var(--white)' }}>{s.pts}</strong></td>
                                        <td style={{ color: 'var(--gray)' }}>{s.pos === 1 ? '—' : `-${leader.pts - s.pts}`}</td>
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
