import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import { THEME_CONFIG } from '@/data';

import '@/styles/variables.css';
import '@/styles/reset.css';

const getInitialTheme = (): string => {
  try {
    const stored = localStorage.getItem(THEME_CONFIG.STORAGE_KEY);

    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    // localStorage may be unavailable (private browsing, SSR, etc.)
  }

  return THEME_CONFIG.DEFAULT;
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
