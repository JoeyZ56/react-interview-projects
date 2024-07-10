import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <button onClick={() => setCount((count) => count + 1)} className="btns">
        +
      </button>
      <h1 className="count">{count}</h1>
      <button onClick={() => setCount((count) => count - 1)} className="btns">
        -
      </button>
    </div>
  );
};

export default Counter;
