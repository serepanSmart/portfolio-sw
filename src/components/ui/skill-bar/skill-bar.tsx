import { useIntersectionObserver } from '@/hooks';
import styles from './skill-bar.module.css';

// "The Force is strong with this one."

type SkillBarProps = {
  name: string;
  level: number;
  delay?: number;
};

export const SkillBar = ({
  name,
  level,
  delay = 0,
}: SkillBarProps): React.JSX.Element => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.level}>{level}%</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${String(level)}%`}
      >
        <div
          className={`${styles.fill} ${isVisible ? styles.animate : ''}`}
          style={{
            width: isVisible ? `${String(level)}%` : '0%',
            transitionDelay: `${String(delay)}ms`,
          }}
        />
      </div>
    </div>
  );
};
