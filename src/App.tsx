import { lazy, Suspense } from 'react';

import { Header } from '@/components/features/header/header';
import { Hero } from '@/components/features/hero/hero';
import { Footer } from '@/components/features/footer/footer';
import { StarField } from '@/components/ui/star-field/star-field';
import { ScrollToTop } from '@/components/ui/scroll-to-top/scroll-to-top';
import { Loader } from '@/components/ui/loader/loader';

import styles from '@/app.module.css';

// ─── Lazy-loaded sections ───────────────────
// Below-the-fold sections loaded on demand.
// Hero + Header load eagerly (above the fold).
// ─────────────────────────────────────────────

const About = lazy(() =>
  import('@/components/features/about/about').then((m) => ({
    default: m.About,
  }))
);

const Skills = lazy(() =>
  import('@/components/features/skills/skills').then((m) => ({
    default: m.Skills,
  }))
);

const Experience = lazy(() =>
  import('@/components/features/experience/experience').then((m) => ({
    default: m.Experience,
  }))
);

const Clients = lazy(() =>
  import('@/components/features/clients/clients').then((m) => ({
    default: m.Clients,
  }))
);

const Portfolio = lazy(() =>
  import('@/components/features/portfolio/portfolio').then((m) => ({
    default: m.Portfolio,
  }))
);

const Certifications = lazy(() =>
  import('@/components/features/certifications/certifications').then((m) => ({
    default: m.Certifications,
  }))
);

const Contact = lazy(() =>
  import('@/components/features/contact/contact').then((m) => ({
    default: m.Contact,
  }))
);

// ─── App Component ──────────────────────────

export const App = (): React.JSX.Element => (
  <div className={styles.app}>
    {/* Background star field — spans entire page */}
    <StarField />

    {/* Fixed navigation header */}
    <Header />

    {/* Main content */}
    <main className={styles.main}>
      {/* Hero is eagerly loaded — above the fold */}
      <Hero />

      {/* Lazy-loaded sections with loading fallback */}
      <Suspense fallback={<Loader />}>
        <About />
        <Skills />
        <Experience />
        <Clients />
        <Portfolio />
        <Certifications />
        <Contact />
      </Suspense>
    </main>

    {/* Footer with quote & socials */}
    <Footer />

    {/* Scroll-to-top FAB */}
    <ScrollToTop />
  </div>
);
