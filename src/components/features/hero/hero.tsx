import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data';
import { SocialIcon } from '@/components/ui';

import styles from './hero.module.css';

// "A long time ago in a galaxy far, far away..."

export const Hero = (): React.JSX.Element => (
  <section id="hero" className={styles.hero}>
    <div className={styles.introWrapper}>
      <p className={styles.introText}>
        A long time ago in a galaxy far, far away....
      </p>
    </div>

    <div className={styles.content}>
      <h1 className={styles.name}>
        <span className={styles.nameMain}>serhii</span>
        <span className={styles.nameMain}>vovna</span>
      </h1>
      <div className={styles.crawlWrapper}>
        <div className={styles.crawl}>
          <p className={styles.crawlTitle}>{PERSONAL_INFO.subtitle}</p>
          <p className={styles.crawlTagline}>{PERSONAL_INFO.tagline}</p>
          <p className={styles.crawlBody}>{PERSONAL_INFO.description}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <a href="#contact" className={styles.primaryBtn}>
          Open Channel
        </a>
        <a href="#portfolio" className={styles.secondaryBtn}>
          View Holocron
        </a>
      </div>
      <div className={styles.socials}>
        {SOCIAL_LINKS.map((link) => (
          <SocialIcon
            key={link.id}
            icon={link.icon}
            url={link.url}
            label={link.label}
          />
        ))}
      </div>
    </div>
    <div className={styles.scrollIndicator} aria-hidden="true">
      <span className={styles.scrollLine} />
    </div>
  </section>
);
