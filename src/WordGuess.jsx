import {useState} from 'react';
import Letters from './Letters';
import Word from './Word';
import Man from './Man';
import './WordGuess.scss';

const secretWord = 'schaadt';

const WordGuess = ({}) => {
  const [guesses, setGuesses] = useState([]);
  const makeGuess = l => setGuesses([...guesses, l]);
  return (
    <main
      id="word-guess-container"
    >
      <Man
        count={guesses.length}
      />
      <Word
        guesses={guesses}
        word={secretWord}
      />
      <Letters
        guesses={guesses}
        onClick={makeGuess}
      />
    </main>
  );
};

export default WordGuess;
