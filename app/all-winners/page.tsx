import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './all-winners.module.css';

export const metadata: Metadata = {
    title: 'All F1 World Champions',
    description: 'Complete list of Formula 1 World Champions from 1950 to present.',
};

const winners = [
    { year: 2026, driver: 'TBC', team: 'TBC', nat: '?', titles: 1, tbc: true },
    { year: 2025, driver: 'Max Verstappen', team: 'Red Bull Racing', nat: '🇳🇱', titles: 5 },
    { year: 2024, driver: 'Max Verstappen', team: 'Red Bull Racing', nat: '🇳🇱', titles: 4 },
    { year: 2023, driver: 'Max Verstappen', team: 'Red Bull Racing', nat: '🇳🇱', titles: 3 },
    { year: 2022, driver: 'Max Verstappen', team: 'Red Bull Racing', nat: '🇳🇱', titles: 2 },
    { year: 2021, driver: 'Max Verstappen', team: 'Red Bull Racing', nat: '🇳🇱', titles: 1 },
    { year: 2020, driver: 'Lewis Hamilton', team: 'Mercedes', nat: '🇬🇧', titles: 7, lh: true },
    { year: 2019, driver: 'Lewis Hamilton', team: 'Mercedes', nat: '🇬🇧', titles: 6, lh: true },
    { year: 2018, driver: 'Lewis Hamilton', team: 'Mercedes', nat: '🇬🇧', titles: 5, lh: true },
    { year: 2017, driver: 'Lewis Hamilton', team: 'Mercedes', nat: '🇬🇧', titles: 4, lh: true },
    { year: 2016, driver: 'Nico Rosberg', team: 'Mercedes', nat: '🇩🇪', titles: 1 },
    { year: 2015, driver: 'Lewis Hamilton', team: 'Mercedes', nat: '🇬🇧', titles: 3, lh: true },
    { year: 2014, driver: 'Lewis Hamilton', team: 'Mercedes', nat: '🇬🇧', titles: 2, lh: true },
    { year: 2013, driver: 'Sebastian Vettel', team: 'Red Bull Racing', nat: '🇩🇪', titles: 4 },
    { year: 2012, driver: 'Sebastian Vettel', team: 'Red Bull Racing', nat: '🇩🇪', titles: 3 },
    { year: 2011, driver: 'Sebastian Vettel', team: 'Red Bull Racing', nat: '🇩🇪', titles: 2 },
    { year: 2010, driver: 'Sebastian Vettel', team: 'Red Bull Racing', nat: '🇩🇪', titles: 1 },
    { year: 2009, driver: 'Jenson Button', team: 'Brawn GP', nat: '🇬🇧', titles: 1 },
    { year: 2008, driver: 'Lewis Hamilton', team: 'McLaren', nat: '🇬🇧', titles: 1, lh: true },
    { year: 2007, driver: 'Kimi Räikkönen', team: 'Ferrari', nat: '🇫🇮', titles: 1 },
    { year: 2006, driver: 'Fernando Alonso', team: 'Renault', nat: '🇪🇸', titles: 2 },
    { year: 2005, driver: 'Fernando Alonso', team: 'Renault', nat: '🇪🇸', titles: 1 },
    { year: 2004, driver: 'Michael Schumacher', team: 'Ferrari', nat: '🇩🇪', titles: 7 },
    { year: 2003, driver: 'Michael Schumacher', team: 'Ferrari', nat: '🇩🇪', titles: 6 },
    { year: 2002, driver: 'Michael Schumacher', team: 'Ferrari', nat: '🇩🇪', titles: 5 },
    { year: 2001, driver: 'Michael Schumacher', team: 'Ferrari', nat: '🇩🇪', titles: 4 },
    { year: 2000, driver: 'Michael Schumacher', team: 'Ferrari', nat: '🇩🇪', titles: 3 },
    { year: 1999, driver: 'Mika Häkkinen', team: 'McLaren', nat: '🇫🇮', titles: 2 },
    { year: 1998, driver: 'Mika Häkkinen', team: 'McLaren', nat: '🇫🇮', titles: 1 },
    { year: 1997, driver: 'Jacques Villeneuve', team: 'Williams', nat: '🇨🇦', titles: 1 },
    { year: 1996, driver: 'Damon Hill', team: 'Williams', nat: '🇬🇧', titles: 1 },
    { year: 1995, driver: 'Michael Schumacher', team: 'Benetton', nat: '🇩🇪', titles: 2 },
    { year: 1994, driver: 'Michael Schumacher', team: 'Benetton', nat: '🇩🇪', titles: 1 },
    { year: 1993, driver: 'Alain Prost', team: 'Williams', nat: '🇫🇷', titles: 4 },
    { year: 1992, driver: 'Nigel Mansell', team: 'Williams', nat: '🇬🇧', titles: 1 },
    { year: 1991, driver: 'Ayrton Senna', team: 'McLaren', nat: '🇧🇷', titles: 3 },
    { year: 1990, driver: 'Ayrton Senna', team: 'McLaren', nat: '🇧🇷', titles: 2 },
    { year: 1989, driver: 'Alain Prost', team: 'McLaren', nat: '🇫🇷', titles: 3 },
    { year: 1988, driver: 'Ayrton Senna', team: 'McLaren', nat: '🇧🇷', titles: 1 },
    { year: 1987, driver: 'Nelson Piquet', team: 'Williams', nat: '🇧🇷', titles: 3 },
    { year: 1986, driver: 'Alain Prost', team: 'McLaren', nat: '🇫🇷', titles: 2 },
    { year: 1985, driver: 'Alain Prost', team: 'McLaren', nat: '🇫🇷', titles: 1 },
    { year: 1984, driver: 'Niki Lauda', team: 'McLaren', nat: '🇦🇹', titles: 3 },
    { year: 1983, driver: 'Nelson Piquet', team: 'Brabham', nat: '🇧🇷', titles: 2 },
    { year: 1982, driver: 'Keke Rosberg', team: 'Williams', nat: '🇫🇮', titles: 1 },
    { year: 1981, driver: 'Nelson Piquet', team: 'Brabham', nat: '🇧🇷', titles: 1 },
    { year: 1980, driver: 'Alan Jones', team: 'Williams', nat: '🇦🇺', titles: 1 },
    { year: 1960, driver: 'Jack Brabham', team: 'Cooper', nat: '🇦🇺', titles: 2 },
    { year: 1959, driver: 'Jack Brabham', team: 'Cooper', nat: '🇦🇺', titles: 1 },
    { year: 1958, driver: 'Mike Hawthorn', team: 'Ferrari', nat: '🇬🇧', titles: 1 },
    { year: 1957, driver: 'Juan Manuel Fangio', team: 'Maserati', nat: '🇦🇷', titles: 5 },
    { year: 1956, driver: 'Juan Manuel Fangio', team: 'Ferrari', nat: '🇦🇷', titles: 4 },
    { year: 1955, driver: 'Juan Manuel Fangio', team: 'Mercedes', nat: '🇦🇷', titles: 3 },
    { year: 1954, driver: 'Juan Manuel Fangio', team: 'Mercedes/Maserati', nat: '🇦🇷', titles: 2 },
    { year: 1953, driver: 'Alberto Ascari', team: 'Ferrari', nat: '🇮🇹', titles: 2 },
    { year: 1952, driver: 'Alberto Ascari', team: 'Ferrari', nat: '🇮🇹', titles: 1 },
    { year: 1951, driver: 'Juan Manuel Fangio', team: 'Alfa Romeo', nat: '🇦🇷', titles: 1 },
    { year: 1950, driver: 'Nino Farina', team: 'Alfa Romeo', nat: '🇮🇹', titles: 1 },
];

export default function AllWinnersPage() {
    return (
        <>
            <PageHero
                badge="F1 History"
                title="All F1"
                highlight="Champions"
                subtitle="Every Formula 1 World Champion from 1950 to present — a complete historical record."
            />

            {/* Top stats */}
            <section className="section-sm" style={{ background: 'rgba(232,115,10,0.06)', borderBottom: '1px solid var(--dark-border)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
                        {[
                            { v: '75+', l: 'Seasons of F1' },
                            { v: '35', l: 'Different Champions' },
                            { v: '8', l: 'Hamilton Titles (Record)' },
                            { v: '1950', l: 'First Season' },
                        ].map(({ v, l }) => (
                            <div key={l} style={{ textAlign: 'center', padding: '20px', borderRight: '1px solid var(--dark-border)' }}>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--orange)' }}>{v}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--gray)', marginTop: '6px' }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--dark-border)' }}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Champion</th>
                                    <th>Team</th>
                                    <th>Cumulative Titles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {winners.map((w) => (
                                    <tr key={w.year} style={(w as any).lh ? { background: 'rgba(232,115,10,0.06)' } : {}}>
                                        <td>
                                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: (w as any).tbc ? 'var(--gray)' : 'var(--white)' }}>
                                                {w.year}
                                            </span>
                                        </td>
                                        <td>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                {w.nat}
                                                <strong style={{ color: (w as any).lh ? 'var(--orange)' : (w as any).tbc ? 'var(--gray)' : 'var(--white)' }}>
                                                    {w.driver}
                                                </strong>
                                                {(w as any).lh && <span className="tag tag-orange" style={{ fontSize: '0.55rem' }}>LH44</span>}
                                                {(w as any).tbc && <span className="tag" style={{ fontSize: '0.55rem', background: 'rgba(255,255,255,0.05)', color: 'var(--gray)', border: '1px solid var(--dark-border)' }}>In Progress</span>}
                                            </span>
                                        </td>
                                        <td style={{ color: 'var(--gray-light)' }}>{w.team}</td>
                                        <td>
                                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: w.titles >= 5 ? 'var(--orange)' : 'var(--gray-light)' }}>
                                                {'🏆'.repeat(Math.min(w.titles, 8))} ×{w.titles}
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
