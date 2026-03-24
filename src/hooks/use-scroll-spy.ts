import { useState, useEffect, useCallback, useRef } from 'react';

import { NAV_ITEMS } from '@/data';

import type { NavItemId } from '@/models';

// ─── useScrollSpy ───────────────────────────
// Tracks which section is currently in view
// and returns its ID for active nav highlighting.
//
// "Stay on target." — Gold Five
// ─────────────────────────────────────────────

type UseScrollSpyOptions = {
  offset?: number;
  threshold?: number;
};

type UseScrollSpyReturn = {
  activeSection: NavItemId;
};

export function useScrollSpy(
  options: UseScrollSpyOptions = {}
): UseScrollSpyReturn {
  const { offset = 100, threshold = 0.3 } = options;

  const [activeSection, setActiveSection] = useState<NavItemId>(
    NAV_ITEMS[0].id
  );

  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]): void => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aTop = a.boundingClientRect.top;
          const bTop = b.boundingClientRect.top;
          return Math.abs(aTop) - Math.abs(bTop);
        });

      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries[0];
        const sectionId = topEntry.target.getAttribute('id');

        if (sectionId) {
          setActiveSection(sectionId as NavItemId);
        }
      }
    },
    []
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${String(offset)}px 0px 0px 0px`,
      threshold,
    });

    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return (): void => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection, offset, threshold]);

  return { activeSection };
}
