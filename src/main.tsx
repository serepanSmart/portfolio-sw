import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';

import '@/styles/variables.css';
import '@/styles/reset.css';

// ─── Theme Initialization ───────────────────
// Apply saved theme BEFORE React renders to prevent
// flash of wrong theme (FOWT). Falls back to "dark"
// (the Dark Side is the default path).
// ─────────────────────────────────────────────

const STORAGE_KEY = 'sv-portfolio-theme';
const DEFAULT_THEME = 'dark';

function getInitialTheme(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    // localStorage may be unavailable (private browsing, SSR, etc.)
  }

  return DEFAULT_THEME;
}

document.documentElement.setAttribute('data-theme', getInitialTheme());

// ─── React Root ─────────────────────────────

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure <div id="root"></div> exists in index.html.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
