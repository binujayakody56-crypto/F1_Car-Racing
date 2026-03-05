import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './engineering.module.css';

export const metadata: Metadata = {
    title: 'Engineering',
    description: "The technical side of Formula 1 — aerodynamics, power unit, DRS, tyres, and how Lewis Hamilton's cars are engineered.",
};

const sections = [
    {
        icon: '🌬️',
        title: 'Aerodynamics',
        color: '#E8730A',
        details: [
            { label: 'Front Wing', value: 'Carbon fibre multi-element — generates 35% of total downforce', type: 'info' },
            { label: 'Rear Wing', value: 'DRS-activated — reduces drag by ~10–12 km/h on straights', type: 'info' },
            { label: 'Floor & Diffuser', value: 'Ground effect car — generates 50%+ downforce via Venturi tunnels', type: 'info' },
        ],
        content: 'Modern F1 cars generate over 1000kg of downforce at high speed — enough to drive upside down. The 2022 generation introduced ground effect aerodynamics, channelling airflow under the car through Venturi tunnels to create a low-pressure zone.',
    },
    {
        icon: '⚡',
        title: 'Power Unit (PU)',
        color: '#DC143C',
        details: [
            { label: 'Engine', value: '1.6L Turbocharged V6 (Ferrari 066/12)', type: 'info' },
            { label: 'Total Power', value: '~1000 bhp (ICE + ERS combined)', type: 'perf' },
            { label: 'MGU-K', value: 'Motor Generator Unit-Kinetic: 120kW deploy power', type: 'info' },
            { label: 'MGU-H', value: 'Motor Generator Unit-Heat: captures turbo energy (removed 2026)', type: 'info' },
        ],
        content: 'The hybrid power unit is the most complex engine in motorsport history. For 2026, a new PU formula introduces fully electric deployment with no MGU-H, delivering approximately 50/50 ICE/electric power split.',
    },
    {
        icon: '🔄',
        title: 'Braking System',
        color: '#7B1FA2',
        details: [
            { label: 'Material', value: 'Carbon-carbon composite discs & pads', type: 'info' },
            { label: 'Temperature', value: '1000°C+ during braking (orange glow visible)', type: 'perf' },
            { label: 'Braking G-Force', value: 'Up to 6G deceleration — equivalent to hitting a brick wall', type: 'perf' },
        ],
        content: 'F1 brakes can slow a car from 300 km/h to 100 km/h in under 2 seconds. Carbon fibre discs must operate at extreme temperatures and can wear entirely within a race distance.',
    },
    {
        icon: '🛞',
        title: 'Tyres (Pirelli)',
        color: '#FFB300',
        details: [
            { label: 'Compounds', value: 'C1 (hardest) → C5 (softest)', type: 'info' },
            { label: 'Operating Window', value: '80–110°C tyre temperature optimal', type: 'info' },
            { label: 'Tyre Width', value: '18-inch rims (introduced 2022)', type: 'info' },
        ],
        content: 'Tyre management is where Lewis Hamilton particularly excels. His gentle, smooth driving style allows him to preserve rubber better than most, enabling aggressive late-race strategies. The switch to 18-inch low-profile tyres in 2022 reduced overheating.',
    },
    {
        icon: '🧠',
        title: 'Electronics & Software',
        color: '#00C853',
        details: [
            { label: 'Steering Wheel', value: '25+ buttons, switches, dials on a single unit', type: 'info' },
            { label: 'Data Points', value: '200+ sensors generating terabytes of data per race', type: 'info' },
            { label: 'ECU', value: 'FIA-standard McLaren ECU — same across all teams', type: 'info' },
        ],
        content: 'F1 cars are as much computer as they are mechanical. Every wheel corner, every tyre temperature, every energy deployment is managed by sophisticated algorithms. Teams can radio instruction changes mid-corner.',
    },
];

const keySpecs = [
    { label: 'Min. Weight (driver incl.)', value: '800 kg' },
    { label: 'Engine', value: '1.6L V6 Turbo Hybrid' },
    { label: 'Max. Power', value: '~1000 bhp' },
    { label: 'Top Speed', value: '~360 km/h' },
    { label: '0–100 km/h', value: '~2.6 seconds' },
    { label: 'Fuel Limit Per Race', value: '110 kg' },
    { label: 'Wheelbase', value: 'Unrestricted (typically ~3.5m)' },
    { label: 'Cost (PU)', value: ~'Confidential (~$15M+)' },
];

export default function EngineeringPage() {
    return (
        <>
            <PageHero
                badge="Technical"
                title="F1"
                highlight="Engineering"
                subtitle="The science and technology behind Formula 1's fastest machines — designed for Lewis Hamilton's championship."
                bgVideo="/videos/engineering-hero.mp4"
            />

            {/* Key Specs */}
            <section className={styles.specsBar}>
                <div className="container">
                    <div className={styles.specsGrid}>
                        {keySpecs.map((s, i) => (
                            <div key={i} className={styles.specCard}>
                                <div className={styles.specValue}>{s.value}</div>
                                <div className={styles.specLabel}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Sections */}
            <section className="section">
                <div className="container">

                    {/* Featured Visual */}
                    <div className={styles.featuredVisual}>
                        <div className={styles.featuredImageWrapper}>
                            <div
                                className={styles.featuredImage}
                                style={{ backgroundImage: "url('/images/engineering/f1-car-systems.jpg')" }}
                            ></div>
                        </div>
                    </div>

                    <div className="section-header">
                        <span className="badge">Deep Dive</span>
                        <h2>Key <span className="text-orange">Systems</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    <div className={styles.systemsList}>
                        {sections.map((sec, i) => (
                            <div key={i} className={styles.systemCard}>
                                <div className={styles.systemHeader} style={{ borderLeftColor: sec.color }}>
                                    <span className={styles.systemIcon}>{sec.icon}</span>
                                    <div>
                                        <h3 className={styles.systemTitle}>{sec.title}</h3>
                                        <p className={styles.systemIntro}>{sec.content}</p>
                                    </div>
                                </div>
                                <div className={styles.systemDetails}>
                                    {sec.details.map((d, j) => (
                                        <div key={j} className={styles.detail}>
                                            <span className={styles.detailLabel}>{d.label}</span>
                                            <span className={styles.detailValue}>{d.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lewis Technical Strengths */}
            <section className={`section ${styles.lewisSection}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="badge">Driver Edge</span>
                        <h2>Lewis Hamilton's <span className="text-orange">Technical Edge</span></h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className={styles.edgeGrid}>
                        {[
                            { title: 'Tyre Management', desc: 'Arguably the best in F1 history — his smooth inputs preserve rubber better than any rival, enabling one-stop strategies others can\'t.', rating: 98 },
                            { title: 'Rain Performance', desc: 'Lewis has won an extraordinary percentage of races in wet conditions. His car control in low-grip situations is supernatural.', rating: 99 },
                            { title: 'Car Setup', desc: 'Known for providing incredibly precise setup feedback that helps engineers develop the car. Key to Mercedes\' development cycles.', rating: 95 },
                            { title: 'Race Pace', desc: 'His ability to manage gaps, ERS deployment, and fuel consumption simultaneously sets him apart from rivals.', rating: 97 },
                        ].map((e, i) => (
                            <div key={i} className={`card ${styles.edgeCard}`}>
                                <div className={styles.edgeTitleRow}>
                                    <h4 className={styles.edgeTitle}>{e.title}</h4>
                                    <span className={styles.edgeRating}>{e.rating}/100</span>
                                </div>
                                <div className={styles.ratingBar}>
                                    <div className={styles.ratingFill} style={{ width: `${e.rating}%` }}></div>
                                </div>
                                <p className={styles.edgeDesc}>{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
