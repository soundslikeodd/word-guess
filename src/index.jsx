import { createRoot } from 'react-dom/client';
import WordGuess from './WordGuess';

const root = createRoot(document.getElementById('word-guess'));
root.render(
  <WordGuess />,
);
