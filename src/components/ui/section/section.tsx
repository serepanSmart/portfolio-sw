import { useIntersectionObserver } from '@/hooks';
import { SECTION_TITLES } from '@/data';
import styles from './section.module.css';

// "The Force will be with you. Always."

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  showTitle?: boolean;
  fullWidth?: boolean;
}

export const Section = ({
  id,
  children,
  className = '',
  showTitle = true,
  fullWidth = false,
}: SectionProps): React.JSX.Element => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.05,
    triggerOnce: true,
  });

  const titleData = SECTION_TITLES[id as keyof typeof SECTION_TITLES];

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {showTitle && titleData && (
        <header className={styles.header}>
          <span className={styles.subtitle}>{titleData.subtitle}</span>
          <h2 className={styles.title}>{titleData.title}</h2>
          <div className={styles.saber}>
            <span className={styles.saberBlade} />
          </div>
        </header>
      )}
      <div className={`${styles.content} ${fullWidth ? styles.fullWidth : ''}`}>
        {children}
      </div>
    </section>
  );
};
