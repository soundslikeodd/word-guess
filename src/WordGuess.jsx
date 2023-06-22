import {useState} from 'react';
import classNames from 'classnames';
import Letters from './Letters';
import Word from './Word';
import Limit from './Limit';
import WORDS from './words.json';
import './WordGuess.scss';

const genNewGame = prevGame => {
  const {
    word: prevWord,
    usedWords,
  } = prevGame || {
    usedWords: [],
    prevWord: '',
  };
  const reset = usedWords.length + 1 === WORDS.length;
  const newUsedWords = reset ? [] : [...usedWords, prevWord];
  const possibleWords = WORDS.filter(w => !newUsedWords.includes(w));
  const newWord = possibleWords[Math.round(Math.random() * 1000) % possibleWords.length];
  return {
    word: newWord,
    usedWords: newUsedWords,
    guesses: [],
    missCount: 0,
  };
};
const initialState = genNewGame();

const WordGuess = () => {
  const [state, setState] = useState(initialState);
  const {
    word,
    guesses,
    missCount,
  } = state;
  const guessLimit = word.length * 2;
  const won = word.split('').every(l => guesses.includes(l));
  const lost = missCount === guessLimit;
  const reachedLimit = won || lost;
  const makeGuess = reachedLimit
    ? () => {}
    : l => setState(prev => ({
      ...prev,
      word,
      guesses: [...guesses, l],
      missCount: missCount + (word.includes(l) ? 0 : 1),
    }));
  return (
    <main
      id="word-guess-container"
      className={
        classNames({
          lost,
          won,
        })
      }
    >
      <div
        id="top-container"
      >
        <Limit
          count={missCount}
          limit={guessLimit}
        />
        <button
          onClick={() => setState(prev => genNewGame(prev))}
        >
          New Word
        </button>
      </div>
      <Word
        guesses={guesses}
        word={word}
        limit={reachedLimit}
      />
      <Letters
        guesses={guesses}
        onClick={makeGuess}
      />
    </main>
  );
};

export default WordGuess;
