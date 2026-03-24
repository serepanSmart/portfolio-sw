import styles from './badge.module.css';

// "I am one with the Force." — Chirrut Îmwe

type BadgeVariant = 'default' | 'accent' | 'outline' | 'glow';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  className = '',
}: BadgeProps): React.JSX.Element => (
  <span className={`${styles.badge} ${styles[variant]} ${className}`}>
    {children}
  </span>
);
