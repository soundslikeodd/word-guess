import {useState} from 'react';
import Letters from './Letters';
import Word from './Word';
import Limit from './Limit';
import './WordGuess.scss';
import classNames from 'classnames';

const WORDS = [
  'apple',
  'avoid',
  'basic',
  'cable',
  'craft',
  'delay',
  'equal',
  'found',
  'happy',
  'glass',
  'minor',
  'north',
  'lucky',
  'order',
  'movie',
  'pilot',
  'scope',
  'quite',
  'today',
  'water',
  'visit',
  'youth',
  'virus',
];
const pickWord = () => WORDS[Math.round(Math.random() * 1000) % WORDS.length];

const genNewGame = () => ({
  word: pickWord(),
  guesses: [],
  missCount: 0,
});

const WordGuess = ({}) => {
  const [state, setState] = useState(genNewGame());
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
    : l => setState({
      word,
      guesses: [...guesses, l],
      missCount: missCount + (word.includes(l) ? 0 : 1),
    });
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
          onClick={() => setState(genNewGame())}
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
