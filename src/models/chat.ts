export type ChatMessage = {
  readonly id: string;
  readonly role: 'user' | 'assistant';
  readonly content: string;
};
