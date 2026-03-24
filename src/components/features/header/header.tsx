import { useState, useCallback } from 'react';

import { NAV_ITEMS, PERSONAL_INFO } from '@/data';
import { useTheme, useScrollSpy } from '@/hooks';

import styles from './header.module.css';

// "I have the high ground." — Obi-Wan Kenobi

// ─── Lightsaber Icon (shown in dark mode → click to go light) ──
const LightsaberIcon = (): React.JSX.Element => (
  <svg
    className={styles.themeIconSvg}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    {/* Hilt */}
    <rect x="2" y="14" width="10" height="5" rx="1" fill="#808080" />
    <rect x="4" y="15" width="2" height="3" rx="0.5" fill="#606060" />
    <rect x="8" y="15" width="2" height="3" rx="0.5" fill="#606060" />
    {/* Blade — blue lightsaber */}
    <rect x="12" y="15" width="18" height="3" rx="1.5" fill="#4FA4E0" />
    {/* Glow */}
    <rect
      x="12"
      y="14"
      width="18"
      height="5"
      rx="2.5"
      fill="#4FA4E0"
      opacity="0.3"
    />
    <rect
      x="12"
      y="13"
      width="18"
      height="7"
      rx="3.5"
      fill="#4FA4E0"
      opacity="0.1"
    />
  </svg>
);

// ─── Death Star Icon (shown in light mode → click to go dark) ──
const DeathStarIcon = (): React.JSX.Element => (
  <svg
    className={styles.themeIconSvg}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    {/* Main sphere */}
    <circle
      cx="16"
      cy="16"
      r="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Equator trench */}
    <ellipse
      cx="16"
      cy="16"
      rx="13"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      opacity="0.5"
    />
    {/* Superlaser dish */}
    <circle
      cx="12"
      cy="10"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="12" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
    {/* Surface details */}
    <line
      x1="3"
      y1="20"
      x2="29"
      y2="20"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.3"
    />
    <line
      x1="5"
      y1="24"
      x2="27"
      y2="24"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.2"
    />
  </svg>
);

export const Header = (): React.JSX.Element => {
  const { isDark, toggleTheme } = useTheme();
  const { activeSection } = useScrollSpy({ offset: 80 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
      e.preventDefault();
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      setIsMobileMenuOpen(false);
    },
    []
  );

  const handleToggleMobile = useCallback((): void => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMobile = useCallback((): void => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo} aria-label="Home">
          <span className={styles.logoText}>
            {PERSONAL_INFO.name.toLowerCase()}
          </span>
        </a>

        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={(e) => {
                  handleNavClick(e, item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Side' : 'Switch to Dark Side'}
            title={isDark ? 'Join the Light Side' : 'Join the Dark Side'}
          >
            <span className={styles.themeIcon}>
              {isDark ? <LightsaberIcon /> : <DeathStarIcon />}
            </span>
            <span className={styles.themeLabel}>
              {isDark ? 'Light Side' : 'Dark Side'}
            </span>
          </button>

          <button
            type="button"
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={handleToggleMobile}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={styles.overlay}
            onClick={handleCloseMobile}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                handleCloseMobile();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />
        )}

        <ul
          className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={(e) => {
                  handleNavClick(e, item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
