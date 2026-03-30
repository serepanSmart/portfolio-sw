import { useState, useEffect } from 'react';

// "Punch it, Chewie!" — Han Solo

type UseScrollToTopOptions = {
  visibilityThreshold?: number;
};

type UseScrollToTopReturn = {
  isVisible: boolean;
  scrollToTop: () => void;
};

export function useScrollToTop(
  options: UseScrollToTopOptions = {}
): UseScrollToTopReturn {
  const { visibilityThreshold = 400 } = options;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > visibilityThreshold);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibilityThreshold]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { isVisible, scrollToTop };
}
