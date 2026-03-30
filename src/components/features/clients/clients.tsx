import { useState, useMemo } from 'react';
import { CLIENTS } from '@/data';
import { Section } from '@/components/ui';
import styles from './clients.module.css';

// "We are the Rebellion." — Jyn Erso

const INITIAL_COUNT = 6;

const SABER_COLORS = [
  { blade: '#4FA4E0', glow: 'rgba(79, 164, 224, 0.4)' },
  { blade: '#47C747', glow: 'rgba(71, 199, 71, 0.4)' },
  { blade: '#E03030', glow: 'rgba(224, 48, 48, 0.4)' },
  { blade: '#C040E0', glow: 'rgba(192, 64, 224, 0.4)' },
  { blade: '#FFE81F', glow: 'rgba(255, 232, 31, 0.4)' },
  { blade: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.3)' },
] as const;

const shuffleColors = (count: number): (typeof SABER_COLORS)[number][] => {
  const result: (typeof SABER_COLORS)[number][] = [];

  for (let i = 0; i < count; i++) {
    result.push(SABER_COLORS[i % SABER_COLORS.length]);
  }

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const hasMore = CLIENTS.length > INITIAL_COUNT;

export const Clients = (): React.JSX.Element => {
  const [showAll, setShowAll] = useState(false);

  const colors = useMemo(() => shuffleColors(CLIENTS.length), []);
  const handleToggle = (): void => setShowAll((prev) => !prev);

  const visibleClients = showAll ? CLIENTS : CLIENTS.slice(0, INITIAL_COUNT);

  return (
    <Section id="clients">
      <div className={styles.grid}>
        {visibleClients.map((client, index) => {
          const color = colors[index];

          return (
            <a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              title={client.name}
              style={
                {
                  '--saber-color': color.blade,
                  '--saber-glow': color.glow,
                } as React.CSSProperties
              }
            >
              <span className={`${styles.corner} ${styles.tl}`} />
              <span className={`${styles.corner} ${styles.tr}`} />
              <span className={`${styles.corner} ${styles.bl}`} />
              <span className={`${styles.corner} ${styles.br}`} />

              <span className={styles.saber} aria-hidden="true">
                <span className={styles.saberHilt} />
                <span className={styles.saberBlade} />
              </span>

              <span className={styles.name}>{client.name}</span>

              <svg
                className={styles.linkIcon}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M6 2h8v8M14 2L6 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          );
        })}
      </div>

      {hasMore && (
        <div className={styles.toggleWrapper}>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleToggle}
          >
            <span className={styles.btnSaber} aria-hidden="true">
              <span className={styles.btnBladeLeft} />
              <span className={styles.btnHilt} />
            </span>

            <span className={styles.btnText}>
              {showAll
                ? 'Show Less'
                : `Show All ${String(CLIENTS.length)} Allies`}
            </span>

            <span className={styles.btnSaber} aria-hidden="true">
              <span className={styles.btnHilt} />
              <span className={styles.btnBladeRight} />
            </span>
          </button>
        </div>
      )}
    </Section>
  );
};
