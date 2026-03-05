import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './cars.module.css';

export const metadata: Metadata = {
    title: 'Lewis Hamilton Cars',
    description: "All of Lewis Hamilton's Formula 1 cars from 2007 to present — McLaren MP4 series and Mercedes W series.",
};

const cars = [
    { year: 2007, team: 'McLaren', model: 'MP4/22', color: '#C0C0C0', engine: 'Mercedes 2.4L V8', wins: 4, highlight: 'Near-miss rookie championship', emoji: '🥈' },
    { year: 2008, team: 'McLaren', model: 'MP4/23', color: '#C0C0C0', engine: 'Mercedes 2.4L V8', wins: 5, highlight: '1st World Championship', emoji: '🏆' },
    { year: 2009, team: 'McLaren', model: 'MP4/24', color: '#C0C0C0', engine: 'Mercedes 2.4L V8', wins: 2, highlight: 'Overturned race ban at Melbourne', emoji: '🏎️' },
    { year: 2010, team: 'McLaren', model: 'MP4/25', color: '#C0C0C0', engine: 'Mercedes 2.4L V8', wins: 3, highlight: 'Competitive season, 4th overall', emoji: '📍' },
    { year: 2011, team: 'McLaren', model: 'MP4/26', color: '#C0C0C0', engine: 'Mercedes 2.4L V8', wins: 3, highlight: 'Controversial season with many incidents', emoji: '💥' },
    { year: 2012, team: 'McLaren', model: 'MP4/27', color: '#C0C0C0', engine: 'Mercedes 2.4L V8', wins: 4, highlight: 'Final McLaren season, 4th overall', emoji: '👋' },
    { year: 2013, team: 'Mercedes', model: 'W04', color: '#00D0CD', engine: 'Mercedes 2.4L V8', wins: 1, highlight: 'First season at Mercedes — learning year', emoji: '🌱' },
    { year: 2014, team: 'Mercedes', model: 'W05', color: '#00D0CD', engine: 'Mercedes PU106A Hybrid', wins: 11, highlight: '2nd World Championship — dominant year', emoji: '🏆' },
    { year: 2015, team: 'Mercedes', model: 'W06', color: '#00D0CD', engine: 'Mercedes PU106B Hybrid', wins: 10, highlight: '3rd World Championship', emoji: '🏆' },
    { year: 2016, team: 'Mercedes', model: 'W07', color: '#00D0CD', engine: 'Mercedes PU106C Hybrid', wins: 10, highlight: 'Lost title to Rosberg by 5 points', emoji: '💔' },
    { year: 2017, team: 'Mercedes', model: 'W08', color: '#00D0CD', engine: 'Mercedes M08 EQ Power+', wins: 9, highlight: '4th World Championship — Ferrari battle', emoji: '🏆' },
    { year: 2018, team: 'Mercedes', model: 'W09', color: '#00D0CD', engine: 'Mercedes M09 EQ Power+', wins: 11, highlight: '5th World Championship', emoji: '🏆' },
    { year: 2019, team: 'Mercedes', model: 'W10', color: '#00D0CD', engine: 'Mercedes M10 EQ Power+', wins: 11, highlight: '6th World Championship', emoji: '🏆' },
    { year: 2020, team: 'Mercedes', model: 'W11 "The Blackout"', color: '#111111', engine: 'Mercedes M11 EQ Performance', wins: 11, highlight: '7th World Championship — greatest car ever?', emoji: '🏆' },
    { year: 2021, team: 'Mercedes', model: 'W12', color: '#00D0CD', engine: 'Mercedes M12 EQ Performance', wins: 8, highlight: 'Abu Dhabi heartbreak — lost title', emoji: '💔' },
    { year: 2022, team: 'Mercedes', model: 'W13', color: '#00D0CD', engine: 'Mercedes M13 EQ Performance', wins: 0, highlight: 'Difficult porpoising season — zero wins', emoji: '😮' },
    { year: 2023, team: 'Mercedes', model: 'W14', color: '#00D0CD', engine: 'Mercedes M14 EQ Performance', wins: 0, highlight: 'Recovery year — 3rd in championship', emoji: '📈' },
    { year: 2024, team: 'Mercedes', model: 'W15', color: '#00D0CD', engine: 'Mercedes M15 EQ Performance', wins: 2, highlight: 'Final Mercedes year — farewell in style', emoji: '👑' },
    { year: 2025, team: 'Ferrari', model: 'SF-25', color: '#DC143C', engine: 'Ferrari 066/11', wins: 1, highlight: 'Ferrari debut — multiple podiums', emoji: '🔴' },
    { year: 2026, team: 'Ferrari', model: 'SF-26', color: '#DC143C', engine: 'Ferrari 066/12', wins: 0, highlight: 'Current car — chasing title #8', emoji: '🎯' },
];

const generations = [
    { id: '1950s', title: 'The Pioneers', era: '1950s — Front-Engine Era', img: '/images/generations/f1_1950s.png' },
    { id: '1980s', title: 'Turbo Monsters', era: '1980s — Ground Effect & Turbo', img: '/images/generations/f1_1980s.png' },
    { id: '2000s', title: 'V10 Screamers', era: '2000s — Aerodynamic War', img: '/images/generations/f1_2000s.png' },
    { id: 'modern', title: 'Hybrid Giants', era: 'Modern — V6 Turbo Hybrids', img: '/images/generations/f1_modern.png' },
];

export default function CarsPage() {
    return (
        <>
            <PageHero
                badge="All Cars"
                title="Lewis Hamilton's"
                highlight="Cars"
                subtitle="Every Formula 1 car Lewis Hamilton has driven — from the McLaren MP4/22 to the Ferrari SF-26."
            />
            <section className="section">
                <div className="container">

                    {/* Generations of Cars Section */}
                    <div className={styles.genSection}>
                        <div className={styles.genHeader}>
                            <h2>Generations of F1 Cars</h2>
                            <p>Tracing the evolution of Formula 1 machines through the decades.</p>
                        </div>
                        <div className={styles.genGrid}>
                            {generations.map(gen => (
                                <div key={gen.id} className={styles.genCard}>
                                    <div
                                        className={styles.genBg}
                                        style={{ backgroundImage: `url(${gen.img})` }}
                                    ></div>
                                    <div className={styles.genOverlay}>
                                        <h3 className={styles.genTitle}>{gen.title}</h3>
                                        <span className={styles.genEra}>{gen.era}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hamilton's Cars Timeline */}
                    <div className={styles.timelineHeader}>
                        <h2>Lewis Hamilton's F1 Cars (2007 - Present)</h2>
                    </div>

                    <div className={styles.carsList}>
                        {[...cars].reverse().map((car) => (
                            <div key={car.year} className={`${styles.carCard} ${car.wins >= 9 ? styles.champCar : ''}`}>
                                <div className={styles.carAccent} style={{ background: car.color === '#111111' ? '#333' : car.color }}></div>
                                <div className={styles.carLeft}>
                                    <div className={styles.carYear}>{car.year}</div>
                                    <div className={styles.carEmoji}>{car.emoji}</div>
                                </div>
                                <div className={styles.carInfo}>
                                    <div className={styles.carModel}>{car.model}</div>
                                    <div className={styles.carTeam} style={{ color: car.color === '#111111' ? '#888' : car.color }}>{car.team}</div>
                                    <div className={styles.carEngine}>{car.engine}</div>
                                    <p className={styles.carHighlight}>{car.highlight}</p>
                                </div>
                                <div className={styles.carStats}>
                                    <div className={styles.cStat}>
                                        <div className={styles.cNum}>{car.wins}</div>
                                        <div className={styles.cLbl}>Wins</div>
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
