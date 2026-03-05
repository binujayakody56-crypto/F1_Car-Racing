import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './all-drivers.module.css';

export const metadata: Metadata = {
    title: 'All Drivers',
    description: '2026 Formula 1 driver lineup — all 20 drivers, their teams, nationalities, and car numbers.',
};

const drivers = [
    { num: 44, name: 'Lewis Hamilton', team: 'Ferrari', nat: '🇬🇧', highlight: true },
    { num: 16, name: 'Charles Leclerc', team: 'Ferrari', nat: '🇲🇨', highlight: false },
    { num: 1, name: 'Max Verstappen', team: 'Red Bull Racing', nat: '🇳🇱', highlight: false },
    { num: 11, name: 'Sergio Perez', team: 'Red Bull Racing', nat: '🇲🇽', highlight: false },
    { num: 63, name: 'George Russell', team: 'Mercedes', nat: '🇬🇧', highlight: false },
    { num: 12, name: 'Andrea Kimi Antonelli', team: 'Mercedes', nat: '🇮🇹', highlight: false },
    { num: 14, name: 'Fernando Alonso', team: 'Aston Martin', nat: '🇪🇸', highlight: false },
    { num: 18, name: 'Lance Stroll', team: 'Aston Martin', nat: '🇨🇦', highlight: false },
    { num: 4, name: 'Lando Norris', team: 'McLaren', nat: '🇬🇧', highlight: false },
    { num: 81, name: 'Oscar Piastri', team: 'McLaren', nat: '🇦🇺', highlight: false },
    { num: 55, name: 'Carlos Sainz', team: 'Williams', nat: '🇪🇸', highlight: false },
    { num: 23, name: 'Alex Albon', team: 'Williams', nat: '🇹🇭', highlight: false },
    { num: 77, name: 'Valtteri Bottas', team: 'Kick Sauber', nat: '🇫🇮', highlight: false },
    { num: 24, name: 'Guanyu Zhou', team: 'Kick Sauber', nat: '🇨🇳', highlight: false },
    { num: 31, name: 'Esteban Ocon', team: 'Haas', nat: '🇫🇷', highlight: false },
    { num: 20, name: 'Kevin Magnussen', team: 'Haas', nat: '🇩🇰', highlight: false },
    { num: 22, name: 'Yuki Tsunoda', team: 'RB', nat: '🇯🇵', highlight: false },
    { num: 3, name: 'Daniel Ricciardo', team: 'RB', nat: '🇦🇺', highlight: false },
    { num: 10, name: 'Pierre Gasly', team: 'Alpine', nat: '🇫🇷', highlight: false },
    { num: 27, name: 'Nico Hülkenberg', team: 'Alpine', nat: '🇩🇪', highlight: false },
];

const teamColors: Record<string, string> = {
    'Ferrari': '#DC143C',
    'Red Bull Racing': '#1E41FF',
    'Mercedes': '#00D2BE',
    'McLaren': '#FF8700',
    'Aston Martin': '#006F62',
    'Williams': '#005AFF',
    'Kick Sauber': '#00E60D',
    'Haas': '#B6BABD',
    'RB': '#6692FF',
    'Alpine': '#0090FF',
};

export default function AllDriversPage() {
    return (
        <>
            <PageHero
                badge="2026 Season"
                title="All"
                highlight="Drivers"
                subtitle="The 20 drivers competing in the 2026 Formula 1 World Championship."
            />
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {drivers.map((d) => (
                            <div key={d.num} className={`${styles.driverCard} ${d.highlight ? styles.highlight : ''}`}>
                                <div className={styles.teamAccent} style={{ background: teamColors[d.team] || '#888' }}></div>
                                <div className={styles.cardTop}>
                                    <span className={styles.driverNum} style={{ color: d.highlight ? 'var(--orange)' : teamColors[d.team] }}>{d.num}</span>
                                    <span className={styles.flag}>{d.nat}</span>
                                </div>
                                <div className={styles.driverName}>{d.name}</div>
                                <div className={styles.driverTeam} style={{ color: teamColors[d.team] }}>{d.team}</div>
                                {d.highlight && <div className={styles.lhBadge}>⭐ LH44</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
