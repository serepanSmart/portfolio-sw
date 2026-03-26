/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  readonly VITE_GROQ_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
