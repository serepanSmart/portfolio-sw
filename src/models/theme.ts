export type Theme = 'dark' | 'light';

export type ThemeConfig = {
  readonly DARK: 'dark';
  readonly LIGHT: 'light';
  readonly STORAGE_KEY: string;
  readonly DEFAULT: Theme;
};
