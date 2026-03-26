# ⚔️ SERHII VOVNA — STAR WARS PORTFOLIO

> "May the clean code be with you."

A personal developer portfolio themed after the Star Wars universe
with C3PO AI assistant who can provide all reqired info about me <img width="54" height="100" alt="Screenshot 2026-03-26 at 17 08 20" src="https://github.com/user-attachments/assets/86e59825-4612-4d08-99ea-96e03e3dccee" />



🔗 **Live Demo:** https://portfolio-sw-two.vercel.app/


## 🚀 Quick Start

### Online
Just open the [live demo](https://portfolio-sw-two.vercel.app/)

### Local Development

```bash
# Clone the repository
git clone https://github.com/serepanSmart/portfolio-sw.git
cd portfolio-sw

# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
# http://localhost:5173

---

Build:
# Production build
npm run build

# Preview production build
npm run preview

---

🛠️ Tech Stack

React 18
TypeScript
Vite
Zustand
CSS Modules

---

📁 Project structure

portfolio-sw/
├── index.html                         # Entry HTML + FOWT prevention script
├── vite.config.ts                     # Vite + path aliases (@/)
├── tsconfig.json                      # TS project references
├── tsconfig.app.json                  # Strict app TS config
├── eslint.config.js                   # Flat ESLint config
│
├── public/
│   ├── favicon.svg                    # Lightsaber + "SV" initials
│   ├── fonts/star-jedi/               # Star Jedi .woff2 / .woff
│   ├── icons/                         # SW character SVG icons
│   └── images/portfolio/              # Project screenshots (.webp)
│
└── src/
    ├── App.tsx                        # Root layout + React.lazy sections
    ├── app.module.css                 # Root layout styles
    ├── data.ts                        # All portfolio data & content
    ├── main.tsx                       # Entry + synchronous theme init
    │
    ├── components/
    │   ├── features/                  # Page sections
    │   │   ├── header/                #   Fixed nav + saber/death star toggle
    │   │   ├── hero/                  #   "A long time ago..." + SW logo name
    │   │   ├── about/                 #   Bio + Jedi Traits (SW icons) + Stats
    │   │   ├── skills/                #   Grouped animated skill bars
    │   │   ├── experience/            #   Timeline with mission log cards
    │   │   ├── clients/               #   Allied Forces grid + saber accents
    │   │   ├── portfolio/             #   Filterable projects + HUD placeholders
    │   │   ├── certifications/        #   Holocron certification badges
    │   │   ├── contact/               #   Formspree form + contact details
    │   │   └── footer/                #   Random SW quotes + social links
    │   │
    │   └── ui/                        # Reusable components
    │       ├── star-field/            #   Hyperspace canvas animation
    │       ├── section/               #   SW-titled section wrapper
    │       ├── loader/                #   Lightsaber ignite loading animation
    │       ├── scroll-to-top/         #   FAB button
    │       ├── badge/                 #   Tech tag pills
    │       ├── skill-bar/             #   Animated progress bars
    │       └── social-icon/           #   Inline SVG social icons
    │
    ├── hooks/
    │   ├── use-theme.ts               # Theme convenience wrapper
    │   ├── use-scroll-spy.ts          # Active nav section tracking
    │   ├── use-intersection-observer.ts # Scroll-triggered reveal animations
    │   ├── use-scroll-to-top.ts       # FAB visibility + scroll action
    │   └── use-random-quote.ts        # Random Star Wars quote picker
    │
    ├── models/
    │   ├── portfolio.ts               # Domain types
    │   ├── theme.ts                   # Theme types
    │   └── ids.ts                     # Derived literal union types
    │
    ├── stores/
    │   └── theme-store.ts             # Zustand dark/light + localStorage
    │
    └── styles/
        ├── variables.css              # CSS custom properties + theme tokens
        └── reset.css                  # Modern CSS reset + SW defaults


⚡ Features
🌑 Dark Side / ☀️ Light Side Toggle
Theme managed by Zustand store with localStorage persistence. Zero FOWT (Flash of Wrong Theme) — an inline script in the HTML head reads stored preference synchronously before first paint. Theme applied via data-theme attribute on the html element — all CSS custom properties swap automatically. Toggle button shows a Lightsaber SVG in dark mode and a Death Star SVG in light mode.


🚀 Hyperspace Starfield
HTML5 Canvas with 200 stars using 3D→2D perspective projection. Stars fly from a central vanishing point toward the viewer. Motion streaks are drawn from each star's previous position to current position. Semi-transparent frame clearing creates natural motion blur. In light mode, stars render as subtle static dots. Uses requestAnimationFrame for smooth 60fps.


🎬 Opening Sequence
"A long time ago in a galaxy far, far away...." fades in (blue text)
Text fades out after 3 seconds
serhii vovna reveals with Star Wars border lines + Star Jedi font
Subtitle, tagline, CTA buttons, and social links fade up

📡 Working Contact Form
Powered by @formspree/react with the useForm hook. Per-field validation via ValidationError component. Loading, success, and error states handled automatically. No backend required — works on any static hosting.


♿ Accessibility
Semantic HTML (section, nav, header, main, footer)
aria-label, aria-hidden, aria-expanded attributes throughout
:focus-visible keyboard navigation styles
prefers-reduced-motion media query disables all animations
.sr-only screen reader utility class
noscript fallback with contact info and links
