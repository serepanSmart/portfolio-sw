import { useScrollToTop } from '@/hooks';

import styles from './scroll-to-top.module.css';

// ─── ScrollToTop ────────────────────────────
// Floating action button — appears after scrolling.
// Smooth scrolls to top on click.
//
// "Punch it, Chewie!" — Han Solo
// ─────────────────────────────────────────────

export const ScrollToTop = (): React.JSX.Element => {
  const { isVisible, scrollToTop } = useScrollToTop({
    visibilityThreshold: 400,
  });

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};
