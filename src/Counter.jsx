import { useState } from "react";

const Counter = () => {
  const [count, updateCount] = useState(0);

  const decrement = () => {
    if (count > 0) updateCount(count - 1);
  };

  const increment = () => {
    updateCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrement}> - </button>
      <span>Counter: {count}</span>
      <button onClick={increment}> + </button>
    </div>
  );
};

export default Counter;
