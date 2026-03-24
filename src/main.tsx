import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';

import '@/styles/variables.css';
import '@/styles/reset.css';

const STORAGE_KEY = 'sv-portfolio-theme';
const DEFAULT_THEME = 'dark';

const getInitialTheme = (): string => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    // localStorage may be unavailable (private browsing, SSR, etc.)
  }

  return DEFAULT_THEME;
};

document.documentElement.setAttribute('data-theme', getInitialTheme());

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
