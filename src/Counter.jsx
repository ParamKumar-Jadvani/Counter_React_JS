import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, updateCount] = useState(0);

  const decrement = () => {
    if (count > 0) updateCount(count - 1);
  };

  const increment = () => {
    updateCount(count + 1);
  };

  return (
    <div className="counter-container">
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span className="counter-display">Counter: {count}</span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
