import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './lewis-hamilton.module.css';

export const metadata: Metadata = {
    title: 'Lewis Hamilton Details',
    description: "In-depth profile of Sir Lewis Hamilton — personal info, achievements, records, quotes, and more.",
};

const personalInfo = [
    { label: 'Full Name', value: 'Sir Lewis Carl Davidson Hamilton CBE' },
    { label: 'Date of Birth', value: '7 January 1985' },
    { label: 'Nationality', value: '🇬🇧 British' },
    { label: 'Birthplace', value: 'Stevenage, Hertfordshire, England' },
    { label: 'Car Number', value: '#44' },
    { label: '2026 Team', value: 'Scuderia Ferrari' },
    { label: 'Championships', value: '8 (2008, 2014–2015, 2017–2020)' },
    { label: 'F1 Debut', value: '2007 Australian Grand Prix' },
];

const achievements = [
    { icon: '🏆', title: '8x World Champion', desc: 'The most F1 titles ever won by a single driver' },
    { icon: '🥇', title: '103 Race Wins', desc: 'All-time record — surpassing Schumacher\'s 91' },
    { icon: '⚡', title: '104 Pole Positions', desc: 'Most poles in Formula 1 history' },
    { icon: '🎯', title: '197 Podium Finishes', desc: 'Over 50% podium rate in 349 career starts' },
    { icon: '🌟', title: 'Knighted in 2021', desc: 'Sir Lewis — honour by the British Crown' },
    { icon: '📍', title: 'Mission 44 Founder', desc: 'Charitable foundation supporting underrepresented youth' },
    { icon: '♻️', title: 'Sustainability Advocate', desc: 'Committed to carbon neutrality and plant-based lifestyle' },
    { icon: '✊', title: 'Equality Champion', desc: 'Leading voice for racial equality in motorsport' },
];

const quotes = [
    { text: 'I have always had this dream that I could be the best. And I still believe that.', context: 'On ambition' },
    { text: 'You can\'t put a limit on anything. The more you dream, the farther you get.', context: 'On dreaming big' },
    { text: 'I don\'t have hobbies. Racing is my life. Everything I do is focused towards it.', context: 'On dedication' },
    { text: 'Trying to be the best every day, that\'s what drives me.', context: 'On motivation' },
];

const helmet = [
    { year: '2007–2012', color: 'Yellow & White', era: 'McLaren', desc: 'British flag inspired design, predominantly yellow with silver McLaren accents' },
    { year: '2013–2024', color: 'Purple & Gold', era: 'Mercedes', desc: 'Iconic purple helmet paying tribute to his mother Carmen\'s favourite colour' },
    { year: '2025–', color: 'Red & Gold', era: 'Ferrari', desc: 'Special edition Ferrari collaboration, keeping the gold accents with Ferrari red' },
];

export default function LewisHamiltonPage() {
    return (
        <>
            <PageHero
                badge="Driver Profile"
                title="Sir Lewis"
                highlight="Hamilton"
                subtitle="An in-depth look at the man behind the helmet — career, values, records, and personality."
            />

            <section className="section">
                <div className="container">
                    <div className={styles.layout}>
                        {/* Left: Personal Info */}
                        <div className={styles.sideCard}>
                            <div className={styles.driverVisual}>
                                <div className={styles.driverNumber}>44</div>
                                <div className={styles.driverFlag}>🇬🇧 SIR LEWIS HAMILTON</div>
                            </div>
                            <h3 className={styles.sideTitle}>Personal Info</h3>
                            {personalInfo.map((item, i) => (
                                <div key={i} className={styles.infoRow}>
                                    <span className={styles.infoLabel}>{item.label}</span>
                                    <span className={styles.infoValue}>{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Right: Content */}
                        <div className={styles.mainContent}>
                            {/* Achievements Grid */}
                            <div className={styles.sectionBlock}>
                                <h2 className={styles.blockTitle}>Career <span className="text-orange">Achievements</span></h2>
                                <div className={styles.achievementsGrid}>
                                    {achievements.map((a, i) => (
                                        <div key={i} className={`card ${styles.achieveCard}`}>
                                            <span className={styles.achieveIcon}>{a.icon}</span>
                                            <span className={styles.achieveTitle}>{a.title}</span>
                                            <span className={styles.achieveDesc}>{a.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quotes */}
                            <div className={styles.sectionBlock}>
                                <h2 className={styles.blockTitle}>Famous <span className="text-orange">Quotes</span></h2>
                                <div className={styles.quotesGrid}>
                                    {quotes.map((q, i) => (
                                        <div key={i} className={styles.quoteCard}>
                                            <span className={styles.quoteIcon}>"</span>
                                            <p className={styles.quoteText}>{q.text}</p>
                                            <span className={styles.quoteCtx}>{q.context}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Helmet History */}
                            <div className={styles.sectionBlock}>
                                <h2 className={styles.blockTitle}>Helmet <span className="text-orange">History</span></h2>
                                {helmet.map((h, i) => (
                                    <div key={i} className={styles.helmetCard}>
                                        <div className={styles.helmetColor} style={{
                                            background: h.era === 'McLaren' ? 'linear-gradient(135deg, #FFD700, #C0C0C0)' :
                                                h.era === 'Ferrari' ? 'linear-gradient(135deg, #DC143C, #FFD700)' :
                                                    'linear-gradient(135deg, #6A0DAD, #FFD700)'
                                        }}></div>
                                        <div className={styles.helmetInfo}>
                                            <div className={styles.helmetEra}>{h.era} Era ({h.year})</div>
                                            <div className={styles.helmetColor_v}>{h.color}</div>
                                            <p className={styles.helmetDesc}>{h.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
