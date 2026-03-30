import { useState } from 'react';

import { SW_QUOTES } from '@/data';
import type { SWQuote } from '@/models';

// "Never tell me the odds." — Han Solo

type UseRandomQuoteReturn = {
  quote: SWQuote;
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

  const nextQuote = (): void => {
    setIndex((prev) => getRandomIndex(prev));
  };

  return {
    quote: {
      text: SW_QUOTES[index].text,
      author: SW_QUOTES[index].author,
    },
    nextQuote,
  };
}
