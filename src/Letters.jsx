import './Letters.scss';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const Letters = ({
  guesses,
  onClick
}) => (
  <div
    id="letter-container"
  >
    {
      ALPHABET.split('').map(l => (
        <div
          key={l} 
        >
          {
            guesses.includes(l)
              ? (<div className="letter picked">{l}</div>)
              : (<div className="letter" onClick={() => onClick(l)}>{l}</div>)
          }
        </div>
      ))
    }
  </div>
);

export default Letters;
