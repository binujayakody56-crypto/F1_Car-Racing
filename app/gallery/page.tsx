import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import styles from './gallery.module.css';

export const metadata: Metadata = {
    title: 'Gallery',
    description: "Lewis Hamilton photo gallery — race moments, celebrations, behind-the-scenes images.",
};

const categories = ['All', 'Race Wins', 'Championships', 'Ferrari Era', 'Celebrations', 'Off Track'];

const imageFiles = [
    '/images/gallery/Gemini_Generated_Image_fibrtgfibrtgfibr.png',
    '/images/gallery/Gemini_Generated_Image_h3up4vh3up4vh3up.png',
    '/images/gallery/Gemini_Generated_Image_x1soa9x1soa9x1so.png',
    '/images/gallery/WhatsApp Image 2026-02-22 at 23.38.51.jpeg',
    '/images/gallery/trophy_1.png',
    '/images/gallery/trophy_2.png',
    '/images/gallery/trophy_3.png'
];

const images = [
    { id: 1, title: 'Bahrain 2008 — First Win', year: '2008', cat: 'Race Wins', aspect: 'wide', src: imageFiles[0] },
    { id: 2, title: 'Brazilian GP 2008 — Championship', year: '2008', cat: 'Championships', aspect: 'tall', src: imageFiles[1] },
    { id: 3, title: 'Abu Dhabi 2014 — Dominant', year: '2014', cat: 'Championships', aspect: 'square', src: imageFiles[2] },
    { id: 4, title: 'Silverstone 2016 — Home Win', year: '2016', cat: 'Race Wins', aspect: 'wide', src: imageFiles[3] },
    { id: 5, title: 'Japan 2017 — Title Clinched', year: '2017', cat: 'Championships', aspect: 'square', src: imageFiles[4] },
    { id: 6, title: 'German GP 2018 — Rain Master', year: '2018', cat: 'Race Wins', aspect: 'tall', src: imageFiles[5] },
    { id: 7, title: 'Bahrain 2020 — 92nd & Beyond', year: '2020', cat: 'Race Wins', aspect: 'wide', src: imageFiles[6] },
    { id: 8, title: 'Turkey 2020 — Title No.7', year: '2020', cat: 'Championships', aspect: 'square', src: imageFiles[4] },
    { id: 9, title: 'Abu Dhabi 2021 — The Heartbreak', year: '2021', cat: 'Off Track', aspect: 'tall', src: imageFiles[6] },
    { id: 10, title: 'Ferrari Launch Day 2025', year: '2025', cat: 'Ferrari Era', aspect: 'wide', src: imageFiles[5] },
    { id: 11, title: 'Maranello Testing 2025', year: '2025', cat: 'Ferrari Era', aspect: 'square', src: imageFiles[2] },
    { id: 12, title: 'Monaco 2025 — Red Power', year: '2025', cat: 'Ferrari Era', aspect: 'tall', src: imageFiles[3] },
    { id: 13, title: 'Celebration Parade 2019', year: '2019', cat: 'Celebrations', aspect: 'wide', src: imageFiles[0] },
    { id: 14, title: 'Mission 44 Event 2023', year: '2023', cat: 'Off Track', aspect: 'square', src: imageFiles[1] },
    { id: 15, title: 'Spa-Francorchamps 2015 — Rain King', year: '2015', cat: 'Race Wins', aspect: 'tall', src: imageFiles[2] },
    { id: 16, title: 'Monza 2018 — Italian Job', year: '2018', cat: 'Race Wins', aspect: 'wide', src: imageFiles[3] },
];

const gradients = [
    'linear-gradient(135deg, #1a1a2e, #E8730A55)',
    'linear-gradient(135deg, #200000, #DC143C55)',
    'linear-gradient(135deg, #001a00, #00C85355)',
    'linear-gradient(135deg, #0a001a, #7B1FA255)',
    'linear-gradient(135deg, #1a1000, #FF9A3C55)',
    'linear-gradient(135deg, #001a1a, #1E88E555)',
];

export default function GalleryPage() {
    return (
        <>
            <PageHero
                badge="Visual Archive"
                title="Photo"
                highlight="Gallery"
                subtitle="A visual journey through Lewis Hamilton's legendary Formula 1 career."
            />

            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <div className={styles.filterBar}>
                        {categories.map((cat) => (
                            <button key={cat} className={`${styles.filterBtn} ${cat === 'All' ? styles.filterActive : ''}`} id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    <div className={styles.masonryGrid}>
                        {images.map((img, i) => (
                            <div
                                key={img.id}
                                className={`${styles.galleryItem} ${styles[img.aspect]}`}
                                id={`gallery-item-${img.id}`}
                            >
                                <div
                                    className={styles.galleryBg}
                                    style={{
                                        backgroundImage: `url(${img.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative'
                                    }}
                                >
                                    {/* Overlay Gradient for readability */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)',
                                        zIndex: 1
                                    }}></div>

                                    {/* Decorative F1 elements */}
                                    <div className={styles.galleryDecor} style={{ zIndex: 2 }}>
                                        <div className={styles.galleryCircle}></div>
                                        <span className={styles.galleryNum}>{44}</span>
                                    </div>
                                </div>
                                <div className={styles.galleryOverlay} style={{ zIndex: 3 }}>
                                    <span className={`tag tag-orange ${styles.galleryTag}`}>{img.cat}</span>
                                    <h3 className={styles.galleryTitle}>{img.title}</h3>
                                    <span className={styles.galleryYear}>{img.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className={styles.galleryStats}>
                        <div className={styles.gStatCard}>
                            <div className={styles.gStatNum}>349+</div>
                            <div className={styles.gStatLabel}>Races Covered</div>
                        </div>
                        <div className={styles.gStatCard}>
                            <div className={styles.gStatNum}>18</div>
                            <div className={styles.gStatLabel}>Seasons</div>
                        </div>
                        <div className={styles.gStatCard}>
                            <div className={styles.gStatNum}>5</div>
                            <div className={styles.gStatLabel}>Teams</div>
                        </div>
                        <div className={styles.gStatCard}>
                            <div className={styles.gStatNum}>30+</div>
                            <div className={styles.gStatLabel}>Countries Raced</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
