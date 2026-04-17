# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server (port 5173)
npm run build        # tsc -b && vite build
npm run preview      # Preview production build locally
npm run lint         # ESLint on all TS/TSX files
npm run lint:fix     # ESLint with auto-fix
npm run type-check   # TypeScript check (no emit)
npm run format       # Prettier format
npm run format:check # Prettier check (CI-safe)
```

Pre-commit hooks (husky + lint-staged) run ESLint and Prettier automatically on staged files.

## Architecture

Star Wars-themed portfolio SPA. React 19 + TypeScript + Vite + CSS Modules.

**Entry flow:** `index.html` → `src/main.tsx` → `src/App.tsx`

`App.tsx` renders a full-viewport `StarField` canvas, a fixed `Header`, lazy-loaded page sections inside `<Suspense>`, a `Footer`, `ScrollToTop` FAB, and the `Chat` modal.

**Key directories:**

- `src/data.ts` — single source of truth for all portfolio content (skills, experience, clients, projects, certifications, quotes). Edit here to change content.
- `src/components/features/` — page-level sections (hero, about, skills, experience, clients, portfolio, certifications, contact, chat, header, footer).
- `src/components/ui/` — reusable primitives (StarField canvas, Section wrapper, Loader, Badge, SkillBar, SocialIcon, ScrollToTop).
- `src/hooks/` — custom hooks: `useTheme`, `useScrollSpy`, `useIntersectionObserver`, `useScrollToTop`, `useRandomQuote`.
- `src/stores/theme-store.ts` — Zustand store for dark/light theme, persisted to `localStorage`. Theme is also applied via `data-theme` attribute on `<html>` synchronously in `index.html` to prevent FOWT.
- `src/services/chat-service.ts` — Groq API wrapper powering the C3PO chat assistant (model: `llama-3.3-70b-versatile`). Requires `VITE_GROQ_API_KEY` env var.
- `src/models/` — TypeScript types for domain objects (portfolio, theme, chat, section IDs).
- `src/styles/` — global CSS: `variables.css` (CSS custom properties / theme tokens), `reset.css`.

**Path aliases** (`@/*` → `src/*`, plus `@/components`, `@/hooks`, `@/stores`, `@/services`, `@/models`) are configured in both `tsconfig.json` and `vite.config.ts`.

All major sections use `React.lazy()` + `Suspense` for code-splitting. Each component has a co-located `.module.css` file.

## Code Style

- Strict TypeScript (`noImplicitAny`, explicit return types required by ESLint).
- `console.log` is disallowed; `console.warn` and `console.error` are allowed.
- Prettier: 80-char line width, single quotes, trailing commas (ES5), semicolons.
- Imports are organized (ESLint `import` plugin enforces order).

## Environment

`VITE_GROQ_API_KEY` must be set (in `.env.local`) for the C3PO chat feature to work.


## Custom

- Never use `any` type or `as any` type assertions. Use proper typed assertions (e.g. `as SomeType`) or type guards instead.
- Never use non-null assertion `!`. Use proper checks.
- Always run TypeScript check before reporting a task as complete.
- When working with interfaces and parameters always place fields in alphabetical order, optional fields should be at the end, also in alphabetical order: `interface Some { aField: string; bField: string; aFieldOpt?: number }`.
- Always avoid using type casting, strictly always don't use `as any`, and avoid other casting: `as unknown as something`.
- Don't nest ternary operators
