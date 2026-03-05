import styles from './PageHero.module.css';

interface PageHeroProps {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    children?: React.ReactNode;
    bgVideo?: string;
}

export default function PageHero({ badge, title, highlight, subtitle, children, bgVideo }: PageHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.bg}>
                {bgVideo && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.bgVideoElement}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                )}
                <div className={styles.grid}></div>
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientRight}></div>
            </div>
            <div className={styles.container}>
                {badge && <span className={styles.badge}>{badge}</span>}
                <h1 className={styles.title}>
                    {title}{' '}
                    {highlight && <span className={styles.highlight}>{highlight}</span>}
                </h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                {children && <div className={styles.extra}>{children}</div>}
                <div className={styles.bottomLine}></div>
            </div>
        </section>
    );
}
