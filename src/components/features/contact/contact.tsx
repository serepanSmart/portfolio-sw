import { useForm, ValidationError } from '@formspree/react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data';
import { Section, SocialIcon } from '@/components/ui';
import styles from './contact.module.css';
import { useCallback } from 'react';

// "Help me, Obi-Wan Kenobi. You're my only hope."

const FORMSPREE_ID = 'xwvrgzrn';

export const Contact = (): React.JSX.Element => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      void handleSubmit(e);
    },
    [handleSubmit]
  );

  return (
    <Section id="contact">
      <div className={styles.grid}>
        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>Send a Transmission</h3>

          {state.succeeded ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✅</span>
              <p className={styles.successText}>
                Transmission received! I&apos;ll respond at lightspeed.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your name, Jedi"
                  required
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className={styles.errorText}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  required
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className={styles.errorText}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Your message across the galaxy..."
                  rows={5}
                  required
                  disabled={state.submitting}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className={styles.errorText}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={state.submitting}
              >
                {state.submitting ? (
                  'Transmitting...'
                ) : (
                  <>
                    <span className={styles.btnIcon}>📡</span>
                    Send Transmission
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right: Contact Info */}
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Contact Details</h3>

          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={styles.contactLink}
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>📱</span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={styles.contactLink}
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>💬</span>
              <span className={styles.contactText}>
                Telegram / Viber / WhatsApp
              </span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>🖥️</span>
              <span className={styles.contactText}>
                Skype: {CONTACT_INFO.skype}
              </span>
            </li>
          </ul>

          <div className={styles.socials}>
            <h4 className={styles.socialsTitle}>Find Me On</h4>
            <div className={styles.socialLinks}>
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
        </div>
      </div>
    </Section>
  );
};
