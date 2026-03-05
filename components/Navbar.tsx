'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Story', href: '/story' },
    { label: 'Gallery', href: '/gallery' },
    {
        label: 'Lewis Hamilton',
        dropdown: [
            { label: 'LH Details', href: '/lewis-hamilton' },
            { label: 'Championships Won', href: '/championships' },
            { label: 'Stats', href: '/stats' },
            { label: 'Cars', href: '/cars' },
            { label: 'Engineering', href: '/engineering' },
        ],
    },
    {
        label: 'F1 Data',
        dropdown: [
            { label: 'All Drivers', href: '/all-drivers' },
            { label: 'All Teams', href: '/all-teams' },
            { label: 'Driver Standings', href: '/driver-standings' },
            { label: 'Team Standings', href: '/team-standings' },
            { label: '2026 Schedule', href: '/schedule' },
            { label: 'Results', href: '/results' },
            { label: 'All F1 Winners', href: '/all-winners' },
        ],
    },
    { label: 'Latest News', href: '/latest-news' },
    { label: 'F1 TV', href: '/f1-tv' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoLH}>LH</span>
                    <span className={styles.logo44}>44</span>
                    <span className={styles.logoSub}>Official Fan Site</span>
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav} ref={dropdownRef}>
                    {navLinks.map((link) => (
                        link.dropdown ? (
                            <div key={link.label} className={styles.dropdownWrapper}>
                                <button
                                    className={`${styles.navLink} ${activeDropdown === link.label ? styles.active : ''}`}
                                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                >
                                    {link.label}
                                    <span className={`${styles.chevron} ${activeDropdown === link.label ? styles.chevronUp : ''}`}>▾</span>
                                </button>
                                {activeDropdown === link.label && (
                                    <div className={styles.dropdown}>
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`${styles.dropdownItem} ${pathname === item.href ? styles.dropdownActive : ''}`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href!}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className={styles.navActions}>
                    <Link href="/signin" className={styles.signInBtn}>Sign In</Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                    id="hamburger-btn"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        link.dropdown ? (
                            <div key={link.label} className={styles.mobileDropdown}>
                                <button
                                    className={styles.mobileDropdownToggle}
                                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                >
                                    {link.label}
                                    <span>{activeDropdown === link.label ? '▲' : '▼'}</span>
                                </button>
                                {activeDropdown === link.label && (
                                    <div className={styles.mobileDropdownItems}>
                                        {link.dropdown.map((item) => (
                                            <Link key={item.href} href={item.href} className={styles.mobileDropdownItem}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href!}
                                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                    <Link href="/signin" className={styles.mobileSignIn}>Sign In</Link>
                </div>
            )}
        </nav>
    );
}
