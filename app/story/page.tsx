import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './story.module.css';

export const metadata: Metadata = {
    title: 'The Story',
    description: "Lewis Hamilton's complete life story — from Stevenage to Ferrari, the journey of the greatest F1 driver.",
};

const chapters = [
    {
        era: 'Early Life',
        years: '1985–2006',
        color: '#E8730A',
        icon: '🌱',
        title: 'Born to Race',
        content: `Lewis Carl Davidson Hamilton was born on 7 January 1985 in Stevenage, Hertfordshire, England. Raised by his father Anthony Hamilton after his parents separated, Lewis developed an early passion for kart racing. At just 8 years old, he began racing karts, and by 10, he had won the British karting championship.

Lewis famously approached Ron Dennis, then head of McLaren, at an awards ceremony in 1995, aged just 10, saying: "I want to race for you one day. Can I have your autograph?" Three years later he would sign with the McLaren Driver Development Programme.

Through the ranks, Lewis was dominant — Formula Renault, Formula 3 Euro Series (champion in 2005), and GP2 Series (champion in 2006 with ART Grand Prix). The path to F1 was set.`,
    },
    {
        era: 'F1 Debut',
        years: '2007–2012',
        color: '#C0C0C0',
        icon: '🚀',
        title: 'The McLaren Years',
        content: `In 2007, Lewis Hamilton made his F1 debut with McLaren alongside two-time champion Fernando Alonso. He nearly won the title in his very first season, missing out by just one point to Kimi Räikkönen in a dramatic season finale. The rookie had set the world on fire.

In 2008, Hamilton delivered — clinching his first World Championship at the Brazilian Grand Prix with a heart-stopping pass on Timo Glock on the final lap. He became the youngest F1 world champion at 23 years old.

The McLaren years (2007-2012) were marked by brilliance but inconsistency in machinery. Despite numerous outstanding performances including memorable wins at Monaco, Silverstone in the rain, and the iconic German GP, the title would not come again.`,
    },
    {
        era: 'The Mercedes Era',
        years: '2013–2024',
        color: '#00D0CD',
        icon: '⚡',
        title: 'Building a Dynasty',
        content: `In 2013, Lewis made the shock move to Mercedes, a team not yet at the front. Within a year, they were utterly dominant. The 2014-2020 period saw Hamilton and Mercedes produce one of the most dominant runs in the history of any sport.

Six more championships followed — 2014, 2015, 2017, 2018, 2019, and 2020. Records fell with each passing season. In 2020, at the Bahrain Grand Prix, Hamilton equalled Schumacher's all-time race wins record of 91. At Turkey 2020, he took his 7th title, equalling Schumacher's championship record.

The 2021 season saw the most controversial ending in F1 history — Hamilton was heading for an 8th title before a last-lap safety car restart that cost him the championship to Max Verstappen. A dark chapter, handled with remarkable dignity.`,
    },
    {
        era: 'Ferrari Chapter',
        years: '2025–Present',
        color: '#DC143C',
        icon: '🔴',
        title: 'The Scarlet Dream',
        content: `On 1 February 2024, the motorsport world was stunned when Lewis Hamilton announced he would leave Mercedes to join Scuderia Ferrari for the 2025 season.

"What Ferrari represents is unique in our sport," Hamilton said. "I feel this is the right moment in my career to take up that challenge." His first season in the famous red suit has shown genuine pace and adaptability, with multiple podiums and a hunger that burns as intensely as ever.

At age 40 in 2025, Hamilton continues to defy time and critics, proving that his eighth championship is not just a dream but a genuine possibility. The Maranello move has been described as the most romantic story in modern motorsport.`,
    },
];

const records = [
    { record: 'World Championships', value: '8', previous: 'Schumacher: 7' },
    { record: 'Race Victories', value: '103', previous: 'Schumacher: 91' },
    { record: 'Pole Positions', value: '104', previous: 'Schumacher: 68' },
    { record: 'Podium Finishes', value: '197', previous: 'Vettel: 122' },
    { record: 'Career Points', value: '5765', previous: 'Vettel: 3098' },
    { record: 'Fastest Laps', value: '67', previous: 'Schumacher: 77' },
];

export default function StoryPage() {
    return (
        <>
            <PageHero
                badge="Biography"
                title="The"
                highlight="Story"
                subtitle="From a Stevenage kart track to the Ferrari garage in Maranello — the unbelievable journey of Sir Lewis Hamilton."
                bgVideo="/videos/story-hero.mp4"
            />

            {/* Intro Quote */}
            <section className={styles.quoteSection}>
                <div className="container">
                    <div className={styles.quote}>
                        <span className={styles.quoteMarks}>"</span>
                        <p className={styles.quoteText}>
                            I always believed, even when people doubted me. My dad and I built something from nothing, and I will always carry that with me.
                        </p>
                        <span className={styles.quoteAuthor}>— Sir Lewis Hamilton</span>
                    </div>
                </div>
            </section>

            {/* Chapters */}
            <section className="section">
                <div className="container">
                    {chapters.map((ch, i) => (
                        <div key={i} className={`${styles.chapter} ${i % 2 !== 0 ? styles.chapterReverse : ''}`}>
                            <div className={styles.chapterVisual} style={{ borderColor: ch.color + '44' }}>
                                <div className={styles.chapterIcon} style={{ background: ch.color + '22', borderColor: ch.color + '66' }}>
                                    <span>{ch.icon}</span>
                                </div>
                                <div className={styles.chapterYears} style={{ color: ch.color }}>{ch.years}</div>
                                <div className={styles.chapterEra}>{ch.era}</div>
                            </div>
                            <div className={styles.chapterContent}>
                                <h2 className={styles.chapterTitle}>{ch.title}</h2>
                                {ch.content.split('\n\n').map((para, j) => (
                                    <p key={j} className={styles.chapterPara}>{para}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Records Section */}
            <section className={`section ${styles.recordsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="badge">Unmatched</span>
                        <h2>All-Time <span className="text-orange">Records</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className={styles.recordsGrid}>
                        {records.map((r, i) => (
                            <div key={i} className={`card ${styles.recordCard}`}>
                                <div className={styles.recordValue}>{r.value}</div>
                                <div className={styles.recordName}>{r.record}</div>
                                <div className={styles.recordPrev}>{r.previous}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legacy Section */}
            <section className={`section ${styles.legacySection}`}>
                <div className="container">
                    <div className={styles.legacyContent}>
                        <div>
                            <span className="badge">The Legacy</span>
                            <h2 style={{ marginTop: '16px', marginBottom: '20px' }}>
                                Beyond the <span className="text-orange">Track</span>
                            </h2>
                            <p style={{ marginBottom: '16px' }}>
                                Lewis Hamilton's impact extends far beyond the racing circuit. Knighted by King Charles III in 2021, he has used his platform to champion racial equality, environmental sustainability, and LGBTQ+ rights in racing and beyond.
                            </p>
                            <p>
                                His Mission 44 foundation has reached over 1 million young people from underrepresented backgrounds, funding education and mentorship programmes across the UK. His clothing line (+44), vegan lifestyle, and relentless social advocacy have made him one of the most influential sportspeople of his generation.
                            </p>
                        </div>
                        <div className={styles.legacyStats}>
                            <div className={styles.legacyStat}>
                                <span className={styles.legacyNum}>1M+</span>
                                <span className={styles.legacyLabel}>Young People Reached by Mission 44</span>
                            </div>
                            <div className={styles.legacyStat}>
                                <span className={styles.legacyNum}>2021</span>
                                <span className={styles.legacyLabel}>Knighted by the British Monarchy</span>
                            </div>
                            <div className={styles.legacyStat}>
                                <span className={styles.legacyNum}>40+</span>
                                <span className={styles.legacyLabel}>Countries Lewis Has Raced In</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
