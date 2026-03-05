import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './schedule.module.css';

export const metadata: Metadata = {
    title: '2026 F1 Schedule',
    description: 'The full 2026 Formula 1 World Championship race calendar.',
};

const races = [
    { round: 1, name: 'Bahrain Grand Prix', circuit: 'Bahrain International Circuit', country: '🇧🇭', date: '15 Mar 2026', city: 'Sakhir', status: 'past' },
    { round: 2, name: 'Saudi Arabian Grand Prix', circuit: 'Jeddah Corniche Circuit', country: '🇸🇦', date: '22 Mar 2026', city: 'Jeddah', status: 'upcoming' },
    { round: 3, name: 'Australian Grand Prix', circuit: 'Albert Park', country: '🇦🇺', date: '5 Apr 2026', city: 'Melbourne', status: 'upcoming' },
    { round: 4, name: 'Japanese Grand Prix', circuit: 'Suzuka Circuit', country: '🇯🇵', date: '19 Apr 2026', city: 'Suzuka', status: 'upcoming' },
    { round: 5, name: 'Chinese Grand Prix', circuit: 'Shanghai International Circuit', country: '🇨🇳', date: '26 Apr 2026', city: 'Shanghai', status: 'upcoming' },
    { round: 6, name: 'Miami Grand Prix', circuit: 'Miami International Autodrome', country: '🇺🇸', date: '10 May 2026', city: 'Miami', status: 'upcoming' },
    { round: 7, name: 'Emilia Romagna Grand Prix', circuit: 'Autodromo Enzo e Dino Ferrari', country: '🇮🇹', date: '24 May 2026', city: 'Imola', status: 'upcoming' },
    { round: 8, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', country: '🇲🇨', date: '31 May 2026', city: 'Monte Carlo', status: 'upcoming' },
    { round: 9, name: 'Spanish Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', country: '🇪🇸', date: '14 Jun 2026', city: 'Barcelona', status: 'upcoming' },
    { round: 10, name: 'Canadian Grand Prix', circuit: 'Circuit Gilles Villeneuve', country: '🇨🇦', date: '21 Jun 2026', city: 'Montreal', status: 'upcoming' },
    { round: 11, name: 'Austrian Grand Prix', circuit: 'Red Bull Ring', country: '🇦🇹', date: '5 Jul 2026', city: 'Spielberg', status: 'upcoming' },
    { round: 12, name: 'British Grand Prix', circuit: 'Silverstone Circuit', country: '🇬🇧', date: '12 Jul 2026', city: 'Silverstone', status: 'upcoming' },
    { round: 13, name: 'Belgian Grand Prix', circuit: 'Circuit de Spa-Francorchamps', country: '🇧🇪', date: '26 Jul 2026', city: 'Spa', status: 'upcoming' },
    { round: 14, name: 'Hungarian Grand Prix', circuit: 'Hungaroring', country: '🇭🇺', date: '2 Aug 2026', city: 'Budapest', status: 'upcoming' },
    { round: 15, name: 'Dutch Grand Prix', circuit: 'Circuit Zandvoort', country: '🇳🇱', date: '30 Aug 2026', city: 'Zandvoort', status: 'upcoming' },
    { round: 16, name: 'Italian Grand Prix', circuit: 'Autodromo Nazionale Monza', country: '🇮🇹', date: '6 Sep 2026', city: 'Monza', status: 'upcoming' },
    { round: 17, name: 'Azerbaijan Grand Prix', circuit: 'Baku City Circuit', country: '🇦🇿', date: '20 Sep 2026', city: 'Baku', status: 'upcoming' },
    { round: 18, name: 'Singapore Grand Prix', circuit: 'Marina Bay Street Circuit', country: '🇸🇬', date: '4 Oct 2026', city: 'Singapore', status: 'upcoming' },
    { round: 19, name: 'United States Grand Prix', circuit: 'Circuit of the Americas', country: '🇺🇸', date: '18 Oct 2026', city: 'Austin', status: 'upcoming' },
    { round: 20, name: 'Mexico City Grand Prix', circuit: 'Autodromo Hermanos Rodriguez', country: '🇲🇽', date: '25 Oct 2026', city: 'Mexico City', status: 'upcoming' },
    { round: 21, name: 'São Paulo Grand Prix', circuit: 'Autodromo Jose Carlos Pace', country: '🇧🇷', date: '8 Nov 2026', city: 'São Paulo', status: 'upcoming' },
    { round: 22, name: 'Las Vegas Grand Prix', circuit: 'Las Vegas Strip Circuit', country: '🇺🇸', date: '21 Nov 2026', city: 'Las Vegas', status: 'upcoming' },
    { round: 23, name: 'Qatar Grand Prix', circuit: 'Lusail International Circuit', country: '🇶🇦', date: '29 Nov 2026', city: 'Lusail', status: 'upcoming' },
    { round: 24, name: 'Abu Dhabi Grand Prix', circuit: 'Yas Marina Circuit', country: '🇦🇪', date: '13 Dec 2026', city: 'Abu Dhabi', status: 'upcoming' },
];

export default function SchedulePage() {
    return (
        <>
            <PageHero
                badge="Full Calendar"
                title="2026"
                highlight="Schedule"
                subtitle="24 races across 5 continents — the complete 2026 Formula 1 World Championship calendar."
            />
            <section className="section">
                <div className="container">
                    <div className={styles.raceList}>
                        {races.map((race) => (
                            <div key={race.round} className={`${styles.raceCard} ${race.status === 'past' ? styles.past : ''}`}>
                                <div className={styles.raceRound}>R{race.round}</div>
                                <div className={styles.raceFlag}>{race.country}</div>
                                <div className={styles.raceInfo}>
                                    <div className={styles.raceName}>{race.name}</div>
                                    <div className={styles.raceCircuit}>{race.circuit} · {race.city}</div>
                                </div>
                                <div className={styles.raceDate}>{race.date}</div>
                                {race.status === 'past' && <span className="tag tag-green">Completed</span>}
                                {race.status === 'upcoming' && <span className="tag tag-orange">Upcoming</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
