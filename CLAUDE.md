# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Type-check + production build (tsc -b && vite build)
npm run lint         # ESLint (flat config, TypeScript-aware)
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier write (src/**/*.{ts,tsx,css})
npm run format:check # Prettier check
npm run type-check   # tsc --noEmit (no emit, just type errors)
npm run preview      # Preview production build
```

## Architecture

**React 19 + TypeScript + Vite portfolio site with a Star Wars theme.**

### Data flow

`src/data.ts` is the single source of truth for all portfolio content — typed `as const` constants. Components import directly from it; there is no API fetching for content, no prop drilling, and no context for static data.

### Component split

- `src/components/features/` — page sections (stateful, domain-aware): `hero`, `about`, `experience`, `portfolio`, `skills`, `clients`, `certifications`, `contact`, `chat`, `header`, `footer`
- `src/components/ui/` — reusable primitives: `Badge`, `Loader`, `Section`, `SkillBar`, `SocialIcon`, `StarField`, `ScrollToTop`

`App.tsx` lazy-loads all below-fold sections (`About` through `Contact`) with a single `<Suspense>`. `Header`, `Hero`, `Footer`, `Chat`, and `StarField` are eagerly loaded.

### Theming

CSS custom properties only — no CSS-in-JS. All theme tokens live in `src/styles/variables.css` under `[data-theme="light"]` / `[data-theme="dark"]` selectors. `main.tsx` sets `data-theme` on `<html>` synchronously from `localStorage` to prevent flash. The single Zustand store (`src/stores/theme-store.ts`) + `src/hooks/use-theme.ts` manage runtime toggling.

### AI chat service

`src/services/chat-service.ts` is a module-level singleton wrapping the Groq SDK (`llama-3.3-70b-versatile`). It maintains `conversationHistory` (capped at 20 messages) outside React state. The system prompt encodes a "Holocron" Star Wars persona with the full CV baked in.

### Path aliases

`@` maps to `src/`, with sub-aliases `@/components`, `@/services`, `@/stores`, `@/hooks`, `@/models`. Defined in both `vite.config.ts` and `tsconfig.app.json`.

### TypeScript strictness

`strict`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly` are all enabled. `no-explicit-any` is an ESLint error. Explicit function return types are warned.

### Pre-commit hooks

Husky + lint-staged run ESLint (auto-fix) and Prettier on staged `.ts/.tsx/.css/.json` files before every commit.
