import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './all-teams.module.css';

export const metadata: Metadata = {
    title: 'All Teams',
    description: '2026 Formula 1 constructors — all 10 teams, their drivers, and key information.',
};

const teamImages = [
    '/images/teams/Gemini_Generated_Image_dpbzw7dpbzw7dpbz.png',
    '/images/teams/Gemini_Generated_Image_vzaz81vzaz81vzaz (1).png',
    '/images/teams/Image_202602222203.jpeg'
];

const teams = [
    { name: 'Scuderia Ferrari', drivers: ['Lewis Hamilton #44', 'Charles Leclerc #16'], hq: 'Maranello, Italy', color: '#DC143C', founded: 1950, titles: 16, emoji: '🏎️', highlight: true, image: teamImages[0] },
    { name: 'Red Bull Racing', drivers: ['Max Verstappen #1', 'Sergio Perez #11'], hq: 'Milton Keynes, UK', color: '#1E41FF', founded: 2005, titles: 6, emoji: '🐂', highlight: false, image: teamImages[1] },
    { name: 'Mercedes-AMG Petronas', drivers: ['George Russell #63', 'Andrea Antonelli #12'], hq: 'Brackley, UK', color: '#00D2BE', founded: 2010, titles: 8, emoji: '⭐', highlight: false, image: teamImages[2] },
    { name: 'McLaren F1 Team', drivers: ['Lando Norris #4', 'Oscar Piastri #81'], hq: 'Woking, UK', color: '#FF8700', founded: 1966, titles: 8, emoji: '🧡', highlight: false, image: teamImages[0] },
    { name: 'Aston Martin F1', drivers: ['Fernando Alonso #14', 'Lance Stroll #18'], hq: 'Silverstone, UK', color: '#006F62', founded: 2021, titles: 0, emoji: '💚', highlight: false, image: teamImages[1] },
    { name: 'BWT Alpine F1', drivers: ['Pierre Gasly #10', 'Nico Hülkenberg #27'], hq: 'Enstone, UK', color: '#0090FF', founded: 2021, titles: 0, emoji: '🔵', highlight: false, image: teamImages[2] },
    { name: 'Williams Racing', drivers: ['Carlos Sainz #55', 'Alex Albon #23'], hq: 'Grove, UK', color: '#005AFF', founded: 1977, titles: 9, emoji: '💙', highlight: false, image: teamImages[0] },
    { name: 'Visa Cash App RB', drivers: ['Yuki Tsunoda #22', 'Daniel Ricciardo #3'], hq: 'Faenza, Italy', color: '#6692FF', founded: 1985, titles: 0, emoji: '🏁', highlight: false, image: teamImages[1] },
    { name: 'MoneyGram Haas', drivers: ['Esteban Ocon #31', 'Kevin Magnussen #20'], hq: 'Kannapolis, USA', color: '#B6BABD', founded: 2016, titles: 0, emoji: '🇺🇸', highlight: false, image: teamImages[2] },
    { name: 'Kick Sauber', drivers: ['Valtteri Bottas #77', 'Guanyu Zhou #24'], hq: 'Hinwil, Switzerland', color: '#00E60D', founded: 1993, titles: 0, emoji: '⚙️', highlight: false, image: teamImages[0] },
];

export default function AllTeamsPage() {
    return (
        <>
            <PageHero
                badge="2026 Season"
                title="All"
                highlight="Teams"
                subtitle="The ten constructors competing in the 2026 FIA Formula 1 World Championship."
            />
            <section className="section">
                <div className="container">
                    <div className={styles.teamsList}>
                        {teams.map((team, i) => (
                            <div key={i} className={`${styles.teamCard} ${team.highlight ? styles.highlight : ''}`}>
                                <div className={styles.teamAccent} style={{ background: team.color }}></div>
                                <div className={styles.teamImageWrapper}>
                                    <div
                                        className={styles.teamImage}
                                        style={{ backgroundImage: `url("${team.image}")` }}
                                    ></div>
                                    <div className={styles.teamImageOverlay}></div>
                                    <div className={styles.teamEmoji}>{team.emoji}</div>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3 className={styles.teamName} style={{ color: team.highlight ? 'var(--orange)' : 'var(--white)' }}>{team.name}</h3>
                                    <div className={styles.teamDrivers}>
                                        {team.drivers.map(d => <span key={d} className={styles.driver}>{d}</span>)}
                                    </div>
                                </div>
                                <div className={styles.teamMeta}>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>HQ</span>
                                        <span className={styles.metaValue}>{team.hq}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Founded</span>
                                        <span className={styles.metaValue}>{team.founded}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Titles</span>
                                        <span className={styles.metaValue} style={{ color: team.titles > 0 ? 'var(--orange)' : 'var(--gray)' }}>{team.titles}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
