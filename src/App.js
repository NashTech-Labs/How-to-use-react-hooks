import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;