import { useState, useRef, useEffect } from 'react';

import { chatService } from '@/services';

import type { ChatMessage } from '@/models';

import styles from './chat.module.css';

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: chatService.isAvailable()
    ? "Greetings, traveler. I am the Jedi Council's Holocron. Ask me anything about Serhii Vovna — his skills, experience, or missions across the galaxy."
    : "The holocron's connection to the Force is not yet established. AI features coming soon.",
};

export const Chat = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimmed = input.trim();

    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    void chatService.sendMessage(trimmed).then((response: string): void => {
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: response,
      };

      setMessages((prev: ChatMessage[]) => [...prev, aiMessage]);
      setIsTyping(false);
    });
  };

  return (
    <>
      {/* C-3PO Hologram Trigger */}
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerHidden : ''}`}
        onClick={handleToggle}
        aria-label="Open Jedi Council chat"
        title="Ask the Jedi Council"
      >
        <div className={styles.holoBeam} aria-hidden="true">
          <div className={styles.holoBeamInner} />
        </div>

        <div className={styles.holoText} aria-hidden="true">
          <span className={styles.holoTextInner}>Ask the Council</span>
        </div>

        <div className={styles.c3poWrapper}>
          <img
            src="/icons/c3.png"
            alt="C-3PO Hologram"
            className={styles.c3poImage}
            width={80}
            height={80}
          />
          <div className={styles.c3poGlow} />
        </div>
      </button>

      {/* Chat Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.headerDot} />
            <span className={styles.headerTitle}>Jedi Council Holocron</span>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close chat"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={styles.closeIcon}
            >
              <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className={styles.scanlines} aria-hidden="true" />

        <div className={styles.messages}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.message} ${msg.role === 'user' ? styles.messageUser : styles.messageAi}`}
            >
              {msg.role === 'assistant' && (
                <span className={styles.messageAvatar}>⚔</span>
              )}
              <div
                className={`${styles.messageBubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleAi}`}
              >
                <p className={styles.messageText}>{msg.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className={`${styles.message} ${styles.messageAi}`}>
              <span className={styles.messageAvatar}>⚔</span>
              <div className={`${styles.messageBubble} ${styles.bubbleAi}`}>
                <div className={styles.typing}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Ask the Council..."
            value={input}
            onChange={handleInputChange}
            disabled={isTyping}
          />
          <button
            type="submit"
            className={styles.sendBtn}
            disabled={isTyping || !input.trim()}
            aria-label="Send message"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className={styles.sendIcon}
            >
              <path d="M2 10l7-7v4h9v6h-9v4z" transform="rotate(-90 10 10)" />
            </svg>
          </button>
        </form>

        <div className={styles.flicker} aria-hidden="true" />
      </div>
    </>
  );
};
