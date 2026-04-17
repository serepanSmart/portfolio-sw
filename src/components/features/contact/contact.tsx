import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data';
import { Section, SocialIcon } from '@/components/ui';
import styles from './contact.module.css';

// "Help me, Obi-Wan Kenobi. You're my only hope."

const FORMSPREE_ID = 'xwvrgzrn';
const REQUIRED_ERROR = 'This field is required';

type FieldKey = 'email' | 'message' | 'name';
type FormErrors = Partial<Record<FieldKey, string>>;
type FormTouched = Partial<Record<FieldKey, boolean>>;
type FormspreeErrors = React.ComponentProps<typeof ValidationError>['errors'];

interface FieldConfig {
  id: FieldKey;
  label: string;
  placeholder: string;
  rows?: number;
  type?: string;
}

interface FormFieldProps {
  config: FieldConfig;
  error: string | undefined;
  formspreeErrors: FormspreeErrors;
  isDisabled: boolean;
  isTouched: boolean | undefined;
  onBlur: (key: FieldKey, value: string) => void;
}

const FORM_FIELDS: FieldConfig[] = [
  { id: 'name', label: 'Name', placeholder: 'Your name, Jedi', type: 'text' },
  { id: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
  {
    id: 'message',
    label: 'Message',
    placeholder: 'Your message across the galaxy...',
    rows: 5,
  },
];

const INITIAL_ERRORS: FormErrors = {
  email: REQUIRED_ERROR,
  message: REQUIRED_ERROR,
  name: REQUIRED_ERROR,
};

const isValidEmail = (v: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const isFormInput = (
  el: Element | RadioNodeList | null,
): el is HTMLInputElement | HTMLTextAreaElement =>
  el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;

const validateField = (key: FieldKey, value: string): string | undefined => {
  if (!value.trim()) {
    return REQUIRED_ERROR;
  }
  if (key === 'email' && !isValidEmail(value)) {
    return 'Enter a valid email address';
  }
  return undefined;
};

const FormField = ({
  config,
  error,
  formspreeErrors,
  isDisabled,
  isTouched,
  onBlur,
}: FormFieldProps): React.JSX.Element => {
  const { id, label, placeholder, rows, type } = config;
  const showError = isTouched && Boolean(error);
  const baseClass = rows ? styles.textarea : styles.input;
  const inputClass = showError ? `${baseClass} ${styles.inputError}` : baseClass;
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    onBlur(id, e.target.value);
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          className={inputClass}
          disabled={isDisabled}
          placeholder={placeholder}
          rows={rows}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={id}
          name={id}
          className={inputClass}
          disabled={isDisabled}
          placeholder={placeholder}
          type={type}
          onBlur={handleBlur}
        />
      )}
      {showError && <span className={styles.errorText}>{error}</span>}
      <ValidationError
        prefix={label}
        field={id}
        errors={formspreeErrors}
        className={styles.errorText}
      />
    </div>
  );
};

export const Contact = (): React.JSX.Element => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
  const [touched, setTouched] = useState<FormTouched>({});

  const hasErrors = Object.values(errors).some(Boolean);

  const handleBlur = (key: FieldKey, value: string): void => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors: FormErrors = {};
    FORM_FIELDS.forEach(({ id }) => {
      const el = form.elements.namedItem(id);
      nextErrors[id] = validateField(id, isFormInput(el) ? el.value : '');
    });
    setErrors(nextErrors);
    setTouched({ email: true, message: true, name: true });
    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }
    void handleSubmit(e);
  };

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
              {FORM_FIELDS.map((config) => (
                <FormField
                  key={config.id}
                  config={config}
                  error={errors[config.id]}
                  formspreeErrors={state.errors}
                  isDisabled={state.submitting}
                  isTouched={touched[config.id]}
                  onBlur={handleBlur}
                />
              ))}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={state.submitting || hasErrors}
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
