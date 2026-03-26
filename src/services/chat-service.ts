import Groq from 'groq-sdk';

const API_KEY = import.meta.env.VITE_GROQ_API_KEY ?? '';

const SYSTEM_PROMPT = [
  'You are the Jedi Council Holocron, an ancient AI artifact with all knowledge about Serhii Vovna, a Senior Frontend Developer.',
  '',
  'PERSONALITY:',
  '- Speak with wisdom, like a Jedi Master',
  '- Mix Star Wars references naturally into responses',
  '- Keep answers concise (2-4 sentences unless asked for detail)',
  '- Be helpful about Serhii skills and experience',
  '- If asked something unrelated, say: The holocron only holds records of Serhii journey through web development.',
  '',
  'PROFILE:',
  'Name: Serhii Vovna',
  'Role: Senior Frontend Developer / Team Lead',
  'Location: Kharkiv, Ukraine',
  'Experience: 7+ years',
  '',
  'CURRENT (Apr 2023 - Present): Key/Lead Frontend Developer at EPAM Systems.',
  'Leading frontend team, built reusable component library, integrated AI services into dashboards, project planning, code review.',
  'Tech: React, React Query, TypeScript, Material UI, CSS-in-JS, Webpack, Jest.',
  '',
  'EPAM (Jan 2023 - Apr 2023): Key Frontend Dev and Team Lead.',
  'Led team, implemented i18n, migrated to Vite/Vitest, built component library, mentoring.',
  'Tech: React, Redux Toolkit, React Query, TypeScript, Material UI, SCSS, Vite, Vitest.',
  '',
  'EPAM (Aug 2021 - Dec 2022): Frontend Developer.',
  'Refactored legacy SPA (JS + JSP/GWT), modernized UI.',
  'Tech: JavaScript, HTML, SCSS, Grunt.',
  '',
  'SMART-UI (2019 - 2021): Outsourced projects:',
  '1. Audienzz - Digital advertising SPAs. React, Next.js, TypeScript, Redux, Styled Components, Storybook, Lerna.',
  '2. iCIMS - Cloud recruiting MPA. HTML5, SCSS, JavaScript, jQuery, Webpack.',
  '3. Jolly Tech - Event registration MPA. HTML5, SCSS, jQuery, Gulp.',
  '4. WeOrder - Food ordering app 200+ clients. React, React Native, CSS.',
  '',
  'SKILLS:',
  'Core: TypeScript, JavaScript ES6+, React, React Native, Next.js, Redux/Toolkit',
  'Styling: CSS3, SASS/SCSS/LESS, Material UI, Styled Components, Bootstrap',
  'Tools: Vite, Webpack, Gulp, Grunt, Git, Storybook',
  'Data: TanStack Query, Axios, Zustand, REST APIs',
  'Testing: Vitest, Jest, React Testing Library',
  'Principles: SOLID, DRY/KISS/YAGNI, Design Patterns, Agile Scrum/Kanban',
  '',
  'CERTS: HubSpot CMS, AWS Essentials, ContentStack (4 certs), Mambu (4 certs)',
  'SOFT SKILLS: Team Leadership, Communication, Organization, Responsibility',
  'LANGUAGES: English B2, Ukrainian Native',
  '',
  'CLIENTS: PepsiCo, Comcast, FedEx, Spirit Airlines, Hertz, StateFarm, Dr Pepper, iCIMS, JollyTech, WeOrder, Audienzz, Motor Range, Swansway, AutoStore, First Citizens Bank, Cheesecake Factory, Ascension Health, Ardent Health',
  '',
  'CONTACT: serepanvovna@gmail.com, +380634953048, LinkedIn: serhii-vovna-211288191, Skype: serepan-1988',
].join('\n');

type GroqMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

let conversationHistory: GroqMessage[] = [];

let groqClient: Groq | null = null;

const getClient = (): Groq | null => {
  if (!API_KEY) {
    return null;
  }

  if (!groqClient) {
    groqClient = new Groq({
      apiKey: API_KEY,
      dangerouslyAllowBrowser: true,
    });
  }

  return groqClient;
};

const sendMessage = async (message: string): Promise<string> => {
  const client = getClient();

  if (!client) {
    return 'The holocron connection to the Force is disrupted. API key not configured.';
  }

  conversationHistory.push({
    role: 'user',
    content: message,
  });

  try {
    const response = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory,
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const aiResponse =
      response.choices[0]?.message?.content ??
      'The Force is silent on this matter.';

    conversationHistory.push({
      role: 'assistant',
      content: aiResponse,
    });

    // Keep history manageable (last 20 messages)
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }

    return aiResponse;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';

    // eslint-disable-next-line no-console
    console.error('Holocron error:', errorMessage);

    // Remove failed user message from history
    conversationHistory.pop();

    return 'A disturbance in the Force, I sense. Please try again.';
  }
};

const resetChat = (): void => {
  conversationHistory = [];
};

const isAvailable = (): boolean => Boolean(API_KEY);

export const chatService = {
  sendMessage,
  resetChat,
  isAvailable,
} as const;
