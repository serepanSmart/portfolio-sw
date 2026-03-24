import { PERSONAL_INFO, SOFT_SKILLS, LANGUAGES, STATS } from '@/data';
import { Section } from '@/components/ui';

import styles from './about.module.css';

const swIcons: Record<string, () => React.JSX.Element> = {
  // Rebel Alliance Logo (Commander / Leadership)
  commander: () => (
    <svg viewBox="0 0 100 100" className={styles.swIcon} aria-hidden="true">
      <path
        d="M50 5 L58 35 L90 35 L63 55 L73 88 L50 68 L27 88 L37 55 L10 35 L42 35 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  ),

  // Crossed Lightsabers (Team Player)
  wookiee: () => (
    <svg viewBox="0 0 100 100" className={styles.swIcon} aria-hidden="true">
      {/* Left saber */}
      <line
        x1="15"
        y1="85"
        x2="75"
        y2="15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="15"
        y1="85"
        x2="75"
        y2="15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.15"
      />
      <rect
        x="8"
        y="78"
        width="14"
        height="6"
        rx="2"
        transform="rotate(-45 15 85)"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Right saber */}
      <line
        x1="85"
        y1="85"
        x2="25"
        y2="15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="85"
        y1="85"
        x2="25"
        y2="15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.15"
      />
      <rect
        x="78"
        y="78"
        width="14"
        height="6"
        rx="2"
        transform="rotate(45 85 85)"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Center spark */}
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  ),

  // Hologram / Signal (Communication)
  r2d2: () => (
    <svg viewBox="0 0 100 100" className={styles.swIcon} aria-hidden="true">
      {/* Signal source */}
      <circle cx="50" cy="70" r="6" fill="currentColor" opacity="0.6" />
      {/* Signal waves */}
      <path
        d="M50 60 Q50 45 35 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M50 60 Q50 45 65 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M50 55 Q50 35 28 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M50 55 Q50 35 72 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M50 50 Q50 25 20 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M50 50 Q50 25 80 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Base */}
      <rect
        x="40"
        y="76"
        width="20"
        height="10"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  ),

  // Galactic Empire Logo (Organization / Order)
  vader: () => (
    <svg viewBox="0 0 100 100" className={styles.swIcon} aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Imperial spokes */}
      <line
        x1="50"
        y1="8"
        x2="50"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="50"
        y1="80"
        x2="50"
        y2="92"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="50"
        x2="20"
        y2="50"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="50"
        x2="92"
        y2="50"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="20"
        x2="28"
        y2="28"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="72"
        y1="72"
        x2="80"
        y2="80"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="80"
        y1="20"
        x2="72"
        y2="28"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="20"
        y1="80"
        x2="28"
        y2="72"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Center */}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.4" />
    </svg>
  ),

  // Mandalorian Mythosaur Skull (Responsibility)
  mandalorian: () => (
    <svg viewBox="0 0 100 100" className={styles.swIcon} aria-hidden="true">
      {/* Skull */}
      <ellipse
        cx="50"
        cy="42"
        rx="28"
        ry="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Eyes */}
      <path d="M35 38 L42 32 L42 44 Z" fill="currentColor" opacity="0.5" />
      <path d="M65 38 L58 32 L58 44 Z" fill="currentColor" opacity="0.5" />
      {/* Horns */}
      <path
        d="M22 42 Q10 25 8 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M78 42 Q90 25 92 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Jaw / tusks */}
      <path
        d="M35 58 L50 72 L65 58"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Nose line */}
      <line
        x1="50"
        y1="46"
        x2="50"
        y2="56"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  ),

  // Jedi Order Logo (Purposefulness / The Force)
  grogu: () => (
    <svg viewBox="0 0 100 100" className={styles.swIcon} aria-hidden="true">
      {/* Wings / flame */}
      <path
        d="M50 10 C50 10 30 30 30 55 C30 70 38 82 50 90 C62 82 70 70 70 55 C70 30 50 10 50 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Inner flame */}
      <path
        d="M50 28 C50 28 40 40 40 55 C40 65 44 72 50 78 C56 72 60 65 60 55 C60 40 50 28 50 28 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Star / light center */}
      <circle cx="50" cy="55" r="5" fill="currentColor" opacity="0.4" />
      {/* Horizontal line */}
      <line
        x1="30"
        y1="55"
        x2="70"
        y2="55"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.25"
      />
    </svg>
  ),
};

// ─── Character names for hover reveal ───────

const CHARACTER_NAMES: Record<string, string> = {
  leader: 'Rebel Alliance',
  teamwork: 'Crossed Sabers',
  communication: 'Holotransmitter',
  organization: 'Galactic Empire',
  responsibility: 'Mythosaur Skull',
  purpose: 'Jedi Order',
};

// ─── About Section ──────────────────────────

export const About = (): React.JSX.Element => (
  <Section id="about">
    <div className={styles.grid}>
      {/* Left: Bio */}
      <div className={styles.bio}>
        <div className={styles.avatarWrapper}>
          <img
            src={PERSONAL_INFO.avatar}
            alt={PERSONAL_INFO.name}
            className={styles.avatar}
            loading="lazy"
            width={200}
            height={200}
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

      {/* Right: Traits + Stats */}
      <div className={styles.details}>
        <div className={styles.softSkills}>
          <h4 className={styles.subheading}>Jedi Traits</h4>
          <ul className={styles.traitGrid}>
            {SOFT_SKILLS.map((skill) => {
              const IconComponent = swIcons[skill.icon];

              return (
                <li key={skill.id} className={styles.traitCard}>
                  <div className={styles.traitIconWrapper}>
                    {IconComponent ? <IconComponent /> : null}
                  </div>
                  <span className={styles.traitLabel}>{skill.label}</span>
                  <span className={styles.traitCharacter}>
                    {CHARACTER_NAMES[skill.id]}
                  </span>
                </li>
              );
            })}
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
