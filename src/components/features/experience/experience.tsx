import { EXPERIENCE } from '@/data';
import { Section, Badge } from '@/components/ui';

import styles from './experience.module.css';

// ─── Experience ─────────────────────────────
// Work history timeline with Star Wars mission
// log aesthetic.
//
// "In my experience, there's no such thing as luck."
// ─────────────────────────────────────────────

export const Experience = (): React.JSX.Element => (
  <Section id="experience">
    <div className={styles.timeline}>
      {EXPERIENCE.map((entry, index) => (
        <div
          key={entry.id}
          className={`${styles.entry} ${index % 2 === 0 ? styles.left : styles.right}`}
        >
          {/* Timeline node */}
          <div className={styles.node}>
            <div className={styles.dot} />
          </div>

          {/* Card */}
          <div className={styles.card}>
            {/* Header */}
            <div className={styles.cardHeader}>
              <span className={styles.period}>{entry.period}</span>
              <span className={styles.location}>{entry.location}</span>
            </div>

            <h3 className={styles.company}>
              {entry.company}
              {entry.client && (
                <span className={styles.client}> → {entry.client}</span>
              )}
            </h3>

            <p className={styles.role}>{entry.role}</p>
            <p className={styles.description}>{entry.description}</p>

            {/* URL */}
            {entry.url && (
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                🔗 {entry.url}
              </a>
            )}

            {/* Achievements */}
            <ul className={styles.achievements}>
              {entry.achievements.map((achievement) => (
                <li key={achievement} className={styles.achievement}>
                  <span className={styles.bullet}>▸</span>
                  {achievement}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className={styles.tech}>
              {entry.tech.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Timeline line */}
      <div className={styles.line} />
    </div>
  </Section>
);
