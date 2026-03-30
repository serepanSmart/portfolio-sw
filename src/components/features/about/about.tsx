import { PERSONAL_INFO, SOFT_SKILLS, LANGUAGES, STATS } from '@/data';
import { Section } from '@/components/ui';

import styles from './about.module.css';

export const About = (): React.JSX.Element => (
  <Section id="about">
    <div className={styles.grid}>
      <div className={styles.bio}>
        <div className={styles.avatarWrapper}>
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className={styles.avatar}
            loading="lazy"
          />
        </div>
        <h3 className={styles.name}>{PERSONAL_INFO.name}</h3>
        <p className={styles.role}>{PERSONAL_INFO.title}</p>
        <p className={styles.location}>📍 {PERSONAL_INFO.location}</p>
        <p className={styles.description}>{PERSONAL_INFO.description}</p>
        <div className={styles.languages}>
          <h4 className={styles.subheading}>Languages</h4>
          <ul className={styles.languageList}>
            {LANGUAGES.map((lang) => (
              <li key={lang.id} className={styles.languageItem}>
                <span className={styles.languageName}>{lang.name}</span>
                <span className={styles.languageLevel}>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.softSkills}>
          <h4 className={styles.subheading}>Jedi Traits</h4>
          <ul className={styles.traitGrid}>
            {SOFT_SKILLS.map((skill) => (
              <li key={skill.id} className={styles.traitCard}>
                <span className={`${styles.corner} ${styles.cornerTL}`} />
                <span className={`${styles.corner} ${styles.cornerBR}`} />
                <div className={styles.traitIconWrapper}>
                  <img
                    src={skill.icon}
                    alt=""
                    className={styles.traitIcon}
                    loading="lazy"
                  />
                </div>
                <span className={styles.traitLabel}>{skill.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <span className={styles.statValue}>
                {stat.value.toLocaleString()}
                {stat.suffix}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
