import styles from './loader.module.css';

// "Patience you must have, my young Padawan."

export const Loader = (): React.JSX.Element => (
  <div className={styles.wrapper} role="status" aria-label="Loading">
    <div className={styles.crawlText}>Loading...</div>
    <div className={styles.saber}>
      <div className={styles.hilt} />
      <div className={styles.blade} />
    </div>
    <span className="sr-only">Content is loading, please wait.</span>
  </div>
);
