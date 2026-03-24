import { useThemeStore } from '@/stores';

import type { Theme } from '@/models';

// ─── useTheme ───────────────────────────────
// Convenience hook wrapping the Zustand theme store.
// Provides current theme + toggle + set actions.
//
// "You underestimate the power of the Dark Side."
// ─────────────────────────────────────────────

type UseThemeReturn = {
  theme: Theme;
  isDark: boolean;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export function useTheme(): UseThemeReturn {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return {
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    toggleTheme,
    setTheme,
  };
}
