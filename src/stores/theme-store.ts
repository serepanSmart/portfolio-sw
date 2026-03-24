import { create } from 'zustand';

import { THEME_CONFIG } from '@/data';

import type { Theme } from '@/models';

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

function isValidTheme(value: unknown): value is Theme {
  return value === THEME_CONFIG.DARK || value === THEME_CONFIG.LIGHT;
}

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_CONFIG.STORAGE_KEY);

    if (isValidTheme(stored)) {
      return stored;
    }
  } catch {
    // localStorage may be unavailable (private browsing, etc.)
  }

  return THEME_CONFIG.DEFAULT;
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);

  try {
    localStorage.setItem(THEME_CONFIG.STORAGE_KEY, theme);
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

// ─── Store ──────────────────────────────────
// "You underestimate the power of the Dark Side."
// Default theme: dark. Toggle to join the Light Side.
// ─────────────────────────────────────────────

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getStoredTheme(),

  toggleTheme: (): void => {
    const current = get().theme;
    const next: Theme =
      current === THEME_CONFIG.DARK ? THEME_CONFIG.LIGHT : THEME_CONFIG.DARK;

    applyTheme(next);
    set({ theme: next });
  },

  setTheme: (theme: Theme): void => {
    if (!isValidTheme(theme)) {
      return;
    }

    applyTheme(theme);
    set({ theme });
  },
}));
