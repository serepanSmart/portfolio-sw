// ============================================
// "Do. Or do not. There is no try." — Yoda
// ============================================

// ─── Navigation ─────────────────────────────

export const NAV_ITEMS = [
  { id: 'hero', label: 'Home Base' },
  { id: 'about', label: 'The Force' },
  { id: 'skills', label: 'Arsenal' },
  { id: 'experience', label: 'Missions' },
  { id: 'clients', label: 'Allies' },
  { id: 'portfolio', label: 'Holocron' },
  { id: 'contact', label: 'Transmissions' },
] as const;

// ─── Personal Info ──────────────────────────

export const PERSONAL_INFO = {
  name: 'serhii vovna',
  title: 'Senior/Lead Frontend Developer',
  subtitle: 'React / TypeScript Jedi',
  tagline: 'May the clean code be with you.',
  description:
    '7+ years wielding the Force of web development. Disciplined, analytical, and ready to lead your frontend squad into battle. Specializing in React ecosystems, TypeScript mastery, and scalable architecture.',
  location: 'Ukraine',
  avatar: '/images/avatar.png',
} as const;

// ─── Contact Info ───────────────────────────

export const CONTACT_INFO = {
  phone: '+380634953048',
  email: 'serepanvovna@gmail.com',
  skype: 'serepan-1988',
  viber: '+380634953048',
  telegram: '+380634953048',
  whatsapp: '+380634953048',
} as const;

// ─── Social Links ───────────────────────────

export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/serhii-vovna-211288191/',
    icon: 'linkedin',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/serepan',
    icon: 'facebook',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    url: 'https://t.me/+380634953048',
    icon: 'telegram',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/serepanSmart',
    icon: 'github',
  },
] as const;

// ─── Skills (The Arsenal) ───────────────────

export const SKILL_CATEGORIES = [
  {
    id: 'core',
    title: 'Core Force Powers',
    icon: '⚡',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'Redux / Redux Toolkit', level: 90 },
      { name: 'Zustand', level: 95 },
    ],
  },
  {
    id: 'styling',
    title: 'visual holocrons',
    icon: '🎨',
    skills: [
      { name: 'CSS3 / SASS / SCSS / LESS', level: 95 },
      { name: 'Material UI', level: 90 },
      { name: 'Styled Components / CSS-in-JS', level: 85 },
      { name: 'Bootstrap', level: 85 },
      { name: 'HTML5', level: 95 },
    ],
  },
  {
    id: 'tools',
    title: 'Lightsaber Tools',
    icon: '🔧',
    skills: [
      { name: 'Vite', level: 90 },
      { name: 'Webpack', level: 85 },
      { name: 'Gulp / Grunt', level: 75 },
      { name: 'Git / GitHub / GitLab', level: 90 },
      { name: 'Storybook', level: 80 },
    ],
  },
  {
    id: 'data',
    title: 'Data Hyperdrive',
    icon: '🚀',
    skills: [
      { name: 'TanStack (React) Query', level: 90 },
      { name: 'Axios', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    id: 'testing',
    title: 'Defense Systems',
    icon: '🛡️',
    skills: [
      { name: 'Vitest', level: 85 },
      { name: 'Jest', level: 85 },
      { name: 'React Testing Library', level: 85 },
    ],
  },
  {
    id: 'principles',
    title: 'The Jedi Code',
    icon: '📜',
    skills: [
      { name: 'SOLID', level: 90 },
      { name: 'DRY / KISS / YAGNI', level: 90 },
      { name: 'JS Design Patterns', level: 85 },
      { name: 'Agile (Scrum, Kanban)', level: 90 },
    ],
  },
] as const;

// ─── Work Experience (Missions) ─────────────

export const EXPERIENCE = [
  {
    id: 'epam-lead-2',
    company: 'EPAM Systems',
    role: 'Key / Lead Frontend Developer',
    period: 'Apr 2023 – Present',
    location: 'Remote',
    description:
      'Leading the frontend squadron. Building common components, integrating AI-based services into custom dashboards, and commanding code review operations.',
    achievements: [
      'Key/lead frontend developer on enterprise project',
      'Project scope planning, refinement & task decomposition',
      'Built common reusable component library',
      'Service integration into custom dashboard',
      'Integration of UI with AI-based services',
      'Automated unit testing with Jest & React Testing Library',
    ],
    tech: [
      'React',
      'React Query',
      'TypeScript',
      'Material UI',
      'CSS-in-JS',
      'Webpack',
      'Jest',
    ],
  },
  {
    id: 'epam-lead-1',
    company: 'EPAM Systems',
    role: 'Key Frontend Developer & Team Lead',
    period: 'Jan 2023 – Apr 2023',
    location: 'Remote',
    description:
      'Stepped into leadership. Defined project scope, delegated missions, and implemented critical features including i18n localization and Vite migration.',
    achievements: [
      'Frontend team lead responsibilities',
      'Project scope definition, planning & prioritization',
      'Implemented localization (i18n)',
      'Migrated build system to Vite & testing to Vitest',
      'Established import aliases architecture',
      'Built common components library',
      'Code review & mentoring',
    ],
    tech: [
      'React',
      'Redux',
      'Redux Toolkit',
      'React Query',
      'TypeScript',
      'Material UI',
      'SCSS',
      'Vite',
      'Vitest',
    ],
  },
  {
    id: 'epam-dev',
    company: 'EPAM Systems',
    role: 'Frontend Developer',
    period: 'Aug 2021 – Dec 2022',
    location: 'Remote',
    description:
      'Refactored legacy SPA built with JS core and Java Server Pages/GWT. Modernized UI components and improved codebase quality.',
    achievements: [
      'Refactored legacy SPA (JS core + JSP/GWT)',
      'Modernized UI components',
      'Improved code maintainability with SCSS & Grunt',
    ],
    tech: ['JavaScript', 'HTML', 'SCSS', 'Grunt', 'Java Server Pages', 'GWT'],
  },
  {
    id: 'smart-ui-audienzz',
    company: 'SMART-UI',
    client: 'Audienzz',
    role: 'Frontend Developer (Outsourced)',
    period: '2019 – 2021',
    location: 'Kharkiv, Ukraine',
    description:
      'Digital advertising specialist — built home website and adconsole dashboard SPAs.',
    url: 'https://www.audienzz.ch/home',
    achievements: [
      'Migrated from SCSS to Styled Components',
      'Created UI-kit with Storybook',
      'Built new components & refactored existing ones',
    ],
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux',
      'Styled Components',
      'Storybook',
      'Monorepo (Lerna)',
      'Webpack',
    ],
  },
  {
    id: 'smart-ui-icims',
    company: 'SMART-UI',
    client: 'iCIMS',
    role: 'Frontend Developer (Outsourced)',
    period: '2019 – 2021',
    location: 'Kharkiv, Ukraine',
    description:
      'Cloud-based recruiting software for commercial and global employers.',
    url: 'https://www.icims.com',
    achievements: [
      'Created MPA (Front End) for iCIMS customers',
      'Worked across two frontend teams',
    ],
    tech: [
      'HTML5',
      'CSS3',
      'SASS/SCSS/LESS',
      'JavaScript',
      'jQuery',
      '.dot templates',
      'Webpack',
    ],
  },
  {
    id: 'smart-ui-jollytech',
    company: 'SMART-UI',
    client: 'Jolly Tech',
    role: 'Frontend Developer (Outsourced)',
    period: '2019 – 2021',
    location: 'Kharkiv, Ukraine',
    description:
      'Mobile apps, software and systems for online event registration, visitor management, and printing photos.',
    url: 'https://www.jollytech.com',
    achievements: [
      'Refactored existing MPA and updated UI',
      'Modernized frontend stack',
    ],
    tech: [
      'HTML5',
      'CSS3',
      'SASS/SCSS/LESS',
      'JavaScript',
      'jQuery',
      'PHP Templates',
      'Gulp',
    ],
  },
  {
    id: 'smart-ui-weorder',
    company: 'SMART-UI',
    client: 'WeOrder / QuickOrder',
    role: 'Frontend Developer (Outsourced)',
    period: '2019 – 2021',
    location: 'Kharkiv, Ukraine',
    description: 'Food ordering application with 200+ client styling sets.',
    url: 'https://app.weorder.com/',
    achievements: [
      'Modified React/React Native app views for 200+ clients',
      'Styling customization without markup access',
    ],
    tech: ['React', 'React Native', 'CSS'],
  },
] as const;

// ─── Clients (Allies in the Galaxy) ─────────

export const CLIENTS = [
  { id: 'icims', name: 'iCIMS', url: 'https://www.icims.com' },
  { id: 'jollytech', name: 'JollyTech', url: 'https://www.jollytech.com' },
  { id: 'pepsico', name: 'PepsiCo', url: 'https://www.pepsicojobs.com/main/' },
  { id: 'comcast', name: 'Comcast', url: 'https://jobs.comcast.com/' },
  { id: 'fedex', name: 'FedEx', url: 'https://careers.fedex.com/' },
  {
    id: 'spirit-airlines',
    name: 'Spirit Airlines',
    url: 'https://careers.spirit.com/careers-home/',
  },
  {
    id: 'hertz',
    name: 'Hertz',
    url: 'https://jobs.hertzcareers.com/#en/sites/CX_1',
  },
  {
    id: 'statefarm',
    name: 'StateFarm',
    url: 'https://jobs.statefarm.com/main/',
  },
  {
    id: 'dr-pepper',
    name: 'Dr Pepper',
    url: 'https://careers.keurigdrpepper.com/en',
  },
  { id: 'weorder', name: 'WeOrder', url: 'https://app.weorder.com/' },
  {
    id: 'audienzz',
    name: 'Audienzz',
    url: 'https://www.audienzz.ch/home',
  },
  {
    id: 'motor-range',
    name: 'Motor Range',
    url: 'https://www.motorrange.com',
  },
  { id: 'swansway', name: 'Swansway', url: 'https://www.swansway.com' },
  { id: 'autostore', name: 'AutoStore', url: 'https://www.autostore.com' },
  {
    id: 'first-citizens',
    name: 'First Citizens Bank',
    url: 'https://jobs.firstcitizens.com/',
  },
  {
    id: 'cheesecake-factory',
    name: 'Cheesecake Factory',
    url: 'https://www.cakecareers.com/main/',
  },
  {
    id: 'ascension-health',
    name: 'Ascension Health',
    url: 'https://jobs.ascension.org/us/en/all-jobs',
  },
  {
    id: 'ardenthealth-health',
    name: 'Ardent Health',
    url: 'https://jobs.ardenthealth.com/careers/',
  },
  {
    id: 'wipro',
    name: 'Wipro',
    url: 'https://careers.wipro.com/',
  },
  {
    id: 'aloha-petroleum',
    name: 'Aloha Petroleum',
    url: 'https://www.alohagas.com/careers/careers-at-aloha-petroleum',
  },
] as const;

// ─── Portfolio / Projects (Holocron Archive) ─

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Missions' },
  { id: 'spa', label: 'SPA / Dashboard' },
  { id: 'mpa', label: 'MPA / Websites' },
  { id: 'mobile', label: 'Mobile' },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 'audienzz-home',
    title: 'Audienzz — Home',
    description:
      'Digital advertising platform home website built with Next.js & Styled Components.',
    url: 'https://www.audienzz.ch/home',
    tags: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
    filter: 'spa',
    image: '/images/portfolio/audienzz.png',
  },
  {
    id: 'adconsole',
    title: 'Audienzz — AdConsole',
    description:
      'Modular advertising dashboard for comprehensive ad marketing management.',
    url: 'https://www.adconsole.ch/login',
    tags: ['React', 'Redux', 'TypeScript', 'Storybook'],
    filter: 'spa',
    image: '/images/portfolio/adconsole.png',
  },
  {
    id: 'weorder',
    title: 'WeOrder/QuickOrder',
    description:
      'Custom-themed WeOrder client application, food ordering platform with 200+ custom client styling sets.',
    url: 'https://app.weorder.com/?app=voksenaasen',
    tags: ['React', 'CSS Customization'],
    filter: 'mobile',
    image: '/images/portfolio/weorder.png',
  },
  {
    id: 'jollytech',
    title: 'JollyTech Platform',
    description:
      'Online event registration, visitor management and photo printing systems.',
    url: 'https://www.jollytech.com',
    tags: ['HTML5', 'SCSS', 'jQuery', 'Gulp'],
    filter: 'mpa',
    image: '/images/portfolio/jollytech.png',
  },
  {
    id: 'icims',
    title: 'iCIMS Recruiting Sites',
    description: 'Cloud-based recruiting software MPA for global employers.',
    url: 'https://www.icims.com',
    tags: ['HTML5', 'SCSS', 'JavaScript', 'Webpack'],
    filter: 'mpa',
    image: '/images/portfolio/icims.png',
  },
  {
    id: 'epam-dashboard',
    title: 'Enterprise AI Dashboard',
    description:
      'Custom dashboard with robust Asset Management and AI-based service integrations.',
    url: 'https://cloud.unity.com/',
    tags: ['React', 'React Query', 'TypeScript', 'Material UI'],
    filter: 'spa',
    image: '/images/portfolio/UAM.png',
  },
] as const;

// ─── Certifications (Jedi Trials) ───────────

export const CERTIFICATIONS = [
  {
    id: 'hubspot',
    name: 'Certified HubSpot CMS Developer',
    issuer: 'HubSpot',
  },
  { id: 'aws', name: 'AWS Essentials', issuer: 'A Cloud Guru' },
  {
    id: 'cs-essentials',
    name: 'ContentStack: Essentials',
    issuer: 'ContentStack',
  },
  {
    id: 'cs-modeling',
    name: 'ContentStack Content Modeling',
    issuer: 'ContentStack',
  },
  {
    id: 'cs-dev',
    name: 'ContentStack Developer Onboarding',
    issuer: 'ContentStack',
  },
  {
    id: 'cs-workflow',
    name: 'ContentStack Workflow Foundations',
    issuer: 'ContentStack',
  },
  { id: 'mambu-orient', name: 'Mambu Orientation', issuer: 'Mambu' },
  { id: 'mambu-sales', name: 'Mambu Sales I', issuer: 'Mambu' },
  {
    id: 'mambu-sc1',
    name: 'Mambu Solution Consultant I',
    issuer: 'Mambu',
  },
  {
    id: 'mambu-sc2',
    name: 'Mambu Solution Consultant II',
    issuer: 'Mambu',
  },
] as const;

// ─── Stats (Galactic Metrics) ───────────────

export const STATS = [
  { id: 'experience', label: 'Years of Force', value: 7, suffix: '+' },
  { id: 'projects', label: 'Missions Completed', value: 25, suffix: '+' },
  { id: 'clients', label: 'Allies Served', value: 15, suffix: '+' },
  { id: 'coffee', label: 'Cups of Caf', value: 12000, suffix: '+' },
] as const;

// ─── Soft Skills (Jedi Traits) ──────────────

export const SOFT_SKILLS = [
  {
    id: 'leader',
    label: 'Team Lead / Commander',
    icon: '/icons/vader.png',
  },
  {
    id: 'teamwork',
    label: 'Team Player',
    icon: '/icons/mill.png',
  },
  {
    id: 'communication',
    label: 'Communication Skills',
    icon: '/icons/ds.png',
  },
  {
    id: 'organization',
    label: 'Organizational Skills',
    icon: '/icons/yoda.png',
  },
  {
    id: 'responsibility',
    label: 'Responsibility',
    icon: '/icons/r2.png',
  },
  {
    id: 'purpose',
    label: 'Purposefulness',
    icon: '/icons/mando.png',
  },
] as const;

// ─── Languages ──────────────────────────────

export const LANGUAGES = [
  { id: 'english', name: 'English', level: 'Upper-Intermediate (B2 CEFR)' },
  { id: 'ukrainian', name: 'Ukrainian', level: 'Native' },
  { id: 'russian', name: 'Russian', level: 'Native' },
] as const;

// ─── Testimonials (Hologram Messages) ───────

export const TESTIMONIALS = [
  {
    id: 'brett',
    name: 'Brett Changus',
    company: 'JollyTech',
    role: 'Project Manager',
    text: 'Serhii is an incredibly talented and dedicated developer. His attention to detail and ability to deliver high-quality work on tight deadlines makes him a true asset to any team.',
    avatar: '/images/testimonials/brett.webp',
  },
] as const;

// ─── Theme Config ───────────────────────────

export const THEME_CONFIG = {
  DARK: 'dark',
  LIGHT: 'light',
  STORAGE_KEY: 'sv-portfolio-theme',
  DEFAULT: 'dark',
} as const;

// ─── Star Wars Quotes (Easter Eggs) ─────────

export const SW_QUOTES = [
  { text: 'Do. Or do not. There is no try.', author: 'Yoda' },
  {
    text: 'The Force will be with you. Always.',
    author: 'Obi-Wan Kenobi',
  },
  {
    text: "In my experience, there's no such thing as luck.",
    author: 'Obi-Wan Kenobi',
  },
  { text: 'Never tell me the odds.', author: 'Han Solo' },
  {
    text: 'I find your lack of faith disturbing.',
    author: 'Darth Vader',
  },
  {
    text: 'The ability to speak does not make you intelligent.',
    author: 'Qui-Gon Jinn',
  },
  {
    text: 'Your focus determines your reality.',
    author: 'Qui-Gon Jinn',
  },
  { text: "Great, kid. Don't get cocky.", author: 'Han Solo' },
  { text: 'Stay on target.', author: 'Gold Five' },
  { text: 'This is the way.', author: 'The Mandalorian' },
] as const;

// ─── Section Titles (Crawl Text Style) ──────

export const SECTION_TITLES = {
  hero: { title: 'A New Developer', subtitle: 'Episode VII' },
  about: { title: 'The Force Awakens', subtitle: 'About Me' },
  skills: { title: 'The Arsenal', subtitle: 'Technical Skills' },
  experience: { title: 'Mission Logs', subtitle: 'Work Experience' },
  clients: {
    title: 'Allied Forces',
    subtitle: "Companies I've Worked With And Sites I've Contributed To",
  },
  portfolio: { title: 'Holocron Archive', subtitle: 'Featured Projects' },
  certifications: { title: 'Jedi Trials', subtitle: 'Certifications' },
  contact: { title: 'open channel', subtitle: 'Get In Touch' },
} as const;

// ─── Animations ─────────────────────────────

export const ANIMATION = {
  STAR_COUNT: 200,
  LIGHTSABER_GLOW_DURATION: 2,
  SECTION_REVEAL_DELAY: 0.15,
  SECTION_REVEAL_DURATION: 0.6,
} as const;
