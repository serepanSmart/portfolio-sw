import { CLIENTS } from '@/data';
import { Section } from '@/components/ui';
import styles from './clients.module.css';

// "We are the Rebellion." — Jyn Erso

export const Clients = (): React.JSX.Element => (
  <Section id="clients">
    <div className={styles.grid}>
      {CLIENTS.map((client) => (
        <a
          key={client.id}
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          title={client.name}
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
      ))}
    </div>
  </Section>
);
