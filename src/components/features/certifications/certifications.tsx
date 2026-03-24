import { CERTIFICATIONS } from '@/data';
import { Section } from '@/components/ui';

import styles from './certifications.module.css';

// ─── Certifications ─────────────────────────
// Holocron badges for completed Jedi trials.
//
// "Your training is complete." — Emperor
// ─────────────────────────────────────────────

export const Certifications = (): React.JSX.Element => (
  <Section id="certifications">
    <div className={styles.grid}>
      {CERTIFICATIONS.map((cert) => (
        <div key={cert.id} className={styles.card}>
          <div className={styles.icon}>📜</div>
          <div className={styles.info}>
            <h3 className={styles.name}>{cert.name}</h3>
            <span className={styles.issuer}>{cert.issuer}</span>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
