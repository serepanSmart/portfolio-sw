import { useState, useCallback, useMemo } from 'react';

import { PORTFOLIO_ITEMS, PORTFOLIO_FILTERS } from '@/data';
import { Section, Badge } from '@/components/ui';

import styles from './portfolio.module.css';

const PLACEHOLDER_COLORS = [
  ['#1a1a3e', '#0d2847'],
  ['#1a0a2e', '#2d1b4e'],
  ['#0d2a1a', '#1a3a2a'],
  ['#2a1a0a', '#3e2a1a'],
  ['#0a1a2a', '#1a2d4e'],
  ['#2a0a1a', '#3e1a2a'],
  ['#1a2a0a', '#2d3e1a'],
  ['#0a2a2a', '#1a3e3e'],
] as const;

const getInitials = (title: string): string =>
  title
    .split(/[\s—-]+/)
    .filter((word) => word.length > 0)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

interface PortfolioImageProps {
  src: string;
  alt: string;
  index: number;
}

const PortfolioImage = ({
  src,
  alt,
  index,
}: PortfolioImageProps): React.JSX.Element => {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback((): void => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div
        className={styles.placeholder}
        style={{
          background: `linear-gradient(135deg, ${PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length][0]}, ${PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length][1]})`,
        }}
      >
        <span className={styles.placeholderInitials}>{getInitials(alt)}</span>
        <span className={styles.placeholderTitle}>{alt}</span>
        <div className={styles.gridLines} aria-hidden="true">
          <span className={styles.gridLineH} />
          <span className={styles.gridLineH} />
          <span className={styles.gridLineV} />
          <span className={styles.gridLineV} />
        </div>
        <span className={`${styles.corner} ${styles.cornerTL}`} />
        <span className={`${styles.corner} ${styles.cornerTR}`} />
        <span className={`${styles.corner} ${styles.cornerBL}`} />
        <span className={`${styles.corner} ${styles.cornerBR}`} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={styles.image}
      loading="lazy"
      onError={handleError}
    />
  );
};

// ─── Portfolio Section ──────────────────────

export const Portfolio = (): React.JSX.Element => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = useCallback((filterId: string): void => {
    setActiveFilter(filterId);
  }, []);

  const filteredItems = useMemo(
    () =>
      activeFilter === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.filter === activeFilter),
    [activeFilter]
  );

  return (
    <Section id="portfolio">
      <div className={styles.filters}>
        {PORTFOLIO_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.filterActive : ''}`}
            onClick={() => {
              handleFilterClick(filter.id);
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredItems.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <PortfolioImage src={item.image} alt={item.title} index={index} />
              <div className={styles.imageOverlay}>
                <span className={styles.viewText}>View Project →</span>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
