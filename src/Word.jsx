import './Word.scss';

const Word = ({
  guesses,
  word
}) => (
  <div
    id="word"
  >
    {
      word.split('').map((l, i) => (
        <div
          key={`${l}${i}`}
          className="word-letter"
        >
          {
            guesses.includes(l)
              ? l
              : '_'
          }
        </div>
      ))
    }
  </div>
);

export default Word;
