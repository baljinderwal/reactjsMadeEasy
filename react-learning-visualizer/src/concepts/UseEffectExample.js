import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [message, setMessage] = useState('');

  // Runs on every render
  useEffect(() => {
    console.log('useEffect: Runs on every render');
    setMessage(`Count is ${count}, Other Count is ${otherCount}`);
  });

  // Runs only on the first render
  useEffect(() => {
    console.log('useEffect: Runs only on first render');
  }, []);

  // Runs when 'count' state changes
  useEffect(() => {
    console.log('useEffect: "count" state changed');
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h3>useEffect Hook Example</h3>
      <p>
        Open your browser's console to see the
        <code>useEffect</code> logs.
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
      <div>
        <h4>Counter 1: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h4>Counter 2: {otherCount}</h4>
        <button onClick={() => setOtherCount(otherCount + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseEffectExample;
