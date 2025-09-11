import UseStateExample from '../concepts/UseStateExample';

export const concepts = [
  {
    id: 'usestate',
    title: 'useState Hook',
    explanation: 'The useState hook lets you add state to function components.',
    component: <UseStateExample />,
    code: `
import React, { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseStateExample;
    `,
  },
];
