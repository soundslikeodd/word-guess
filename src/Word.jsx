import classNames from 'classnames';
import './Word.scss';

const Word = ({
  guesses,
  word,
  limit
}) => (
  <div
    id="word"
  >
    {
      word.split('').map((l, i) => (
        <div
          key={`${l}${i}`}
          className={
            classNames(
              "word-letter",
              (limit && !guesses.includes(l)) && 'miss'
            )
          }
        >
          {
            limit
              ? l
              : guesses.includes(l)
                ? l
                : '_'
          }
        </div>
      ))
    }
  </div>
);

export default Word;
