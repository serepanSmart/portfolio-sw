import { useEffect, useRef } from 'react';

import { ANIMATION } from '@/data';
import { useTheme } from '@/hooks';

import styles from './star-field.module.css';

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  radius: number;
  opacity: number;
}

// "Punch it, Chewie!" — Han Solo

const SPEED = 0.004;
const MAX_DEPTH = 1000;
const STREAK_LENGTH = 6;

const createStar = (width: number, height: number): Star => {
  const z = Math.random() * MAX_DEPTH;

  return {
    x: (Math.random() - 0.5) * width * 2,
    y: (Math.random() - 0.5) * height * 2,
    z,
    prevZ: z,
    radius: Math.random() * 1.2 + 0.3,
    opacity: Math.random() * 0.6 + 0.4,
  };
};

const createStars = (width: number, height: number): Star[] =>
  Array.from({ length: ANIMATION.STAR_COUNT }, () => createStar(width, height));

export const StarField = (): React.JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = (): void => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars(width, height);
    };

    handleResize();

    const animate = (): void => {
      // Semi-transparent clear for motion trail
      ctx.fillStyle = isDark
        ? 'rgba(0, 0, 0, 0.15)'
        : 'rgba(245, 240, 225, 0.2)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      starsRef.current.forEach((star) => {
        // Store previous z for streak
        star.prevZ = star.z;

        // Move star toward viewer
        star.z -= SPEED * MAX_DEPTH;

        // Reset star when it passes the viewer
        if (star.z <= 0) {
          star.z = MAX_DEPTH;
          star.prevZ = MAX_DEPTH;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        // Project 3D → 2D (current position)
        const scale = 300 / star.z;
        const sx = cx + star.x * scale;
        const sy = cy + star.y * scale;

        // Project 3D → 2D (previous position for streak)
        const prevScale = 300 / star.prevZ;
        const prevSx = cx + star.x * prevScale;
        const prevSy = cy + star.y * prevScale;

        // Size & brightness increase as star gets closer
        const depth = 1 - star.z / MAX_DEPTH;
        const alpha = isDark
          ? star.opacity * depth
          : star.opacity * depth * 0.25;
        const size = star.radius * scale * 0.5;

        // Skip if outside viewport
        if (sx < -50 || sx > width + 50 || sy < -50 || sy > height + 50) {
          return;
        }

        // Color
        const color = isDark
          ? `rgba(200, 220, 255, ${String(alpha)})`
          : `rgba(160, 150, 130, ${String(alpha)})`;

        if (isDark && depth > 0.3) {
          // Draw streak line (hyperspace effect — dark mode only)
          const streakAlpha = alpha * 0.6;
          ctx.beginPath();
          ctx.moveTo(prevSx, prevSy);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = `rgba(200, 220, 255, ${String(streakAlpha)})`;
          ctx.lineWidth = Math.min(size * STREAK_LENGTH, 3);
          ctx.stroke();
        }

        // Draw star point
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(size, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Glow for close/bright stars (dark mode)
        if (isDark && depth > 0.7 && size > 1) {
          ctx.beginPath();
          ctx.arc(sx, sy, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${String(alpha * 0.08)})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', handleResize);

    return (): void => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
};
