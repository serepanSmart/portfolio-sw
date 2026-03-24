import { useState, useCallback } from 'react';

import { SW_QUOTES } from '@/data';

// "Never tell me the odds." — Han Solo

type Quote = {
  text: string;
  author: string;
};

type UseRandomQuoteReturn = {
  quote: Quote;
  nextQuote: () => void;
};

function getRandomIndex(currentIndex: number): number {
  if (SW_QUOTES.length <= 1) {
    return 0;
  }

  let nextIndex: number;

  do {
    nextIndex = Math.floor(Math.random() * SW_QUOTES.length);
  } while (nextIndex === currentIndex);

  return nextIndex;
}

export function useRandomQuote(): UseRandomQuoteReturn {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * SW_QUOTES.length)
  );

  const nextQuote = useCallback((): void => {
    setIndex((prev) => getRandomIndex(prev));
  }, []);

  return {
    quote: {
      text: SW_QUOTES[index].text,
      author: SW_QUOTES[index].author,
    },
    nextQuote,
  };
}
