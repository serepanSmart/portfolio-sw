import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data';
import { useRandomQuote } from '@/hooks';
import { SocialIcon } from '@/components/ui';

import styles from './footer.module.css';

// ─── Footer ─────────────────────────────────
// Star Wars quote, social links, copyright.
//
// "This is the way." — The Mandalorian
// ─────────────────────────────────────────────

export const Footer = (): React.JSX.Element => {
  const { quote, nextQuote } = useRandomQuote();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Star Wars Quote */}
        <button
          type="button"
          className={styles.quoteBtn}
          onClick={nextQuote}
          title="Click for another quote"
          aria-label="Show another Star Wars quote"
        >
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>&ldquo;{quote.text}&rdquo;</p>
            <cite className={styles.quoteAuthor}>— {quote.author}</cite>
          </blockquote>
        </button>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Social Links */}
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

        {/* Copyright */}
        <p className={styles.copyright}>
          © {currentYear}
          {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className={styles.tagline}>
          Built with the Force, React & TypeScript.
        </p>
      </div>
    </footer>
  );
};
