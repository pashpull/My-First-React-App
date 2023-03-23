import { useState } from 'react';
import './Counter.css';

const Counter = ({ counterDel, id }) => {
  const [count, setCount] = useState(0);

  const countDec = () => {
    setCount(count - 1);
  };

  const countInc = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter" id={id}>
      <div className="counter__content">
        <h2 className="counter__num">Counter value: {count}</h2>
        <div className="counter__controls">
          <button className="counter__btn" onClick={countInc}>
            +
          </button>
          <button className="counter__btn" onClick={countDec}>
            -
          </button>
          <button className="counter__btn" onClick={counterDel}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
