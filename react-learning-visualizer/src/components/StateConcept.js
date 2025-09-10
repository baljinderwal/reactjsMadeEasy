import React, { useState } from 'react';

const StateConcept = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>useState Hook Example</h2>
      <p>
        This component demonstrates the <code>useState</code> hook in React. The
        counter below has its own state, which is managed by the{' '}
        <code>useState</code> hook.
      </p>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div style={{ marginTop: '20px', textAlign: 'left', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h4>How it works:</h4>
        <ul>
          <li>
            <strong><code>const [count, setCount] = useState(0);</code></strong>: This line initializes the state. <code>useState(0)</code> returns a pair of values: the current state (<code>count</code>) and a function that updates it (<code>setCount</code>). We initialize the count to 0.
          </li>
          <li>
            <strong><code>{count}</code></strong>: This displays the current value of the <code>count</code> state variable.
          </li>
          <li>
            <strong><code>onClick=&#123;increment&#125;</code></strong>: When you click the 'Increment' button, the <code>increment</code> function is called.
          </li>
          <li>
            <strong><code>setCount(count + 1)</code></strong>: Inside the <code>increment</code> function, <code>setCount</code> is called with the new value. This tells React to re-render the component with the updated <code>count</code>. The same logic applies to the 'Decrement' button.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StateConcept;
