import React, { useState, useMemo, useCallback } from 'react';

const ExpensiveCalculationComponent = ({ value }) => {
  const expensiveCalculation = (num) => {
    console.log('Performing expensive calculation...');
    // Simulate an expensive calculation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(value), [value]);

  return <div>Calculated Value: {calculatedValue}</div>;
};

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

const MemoizationExample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h3>Memoization Example</h3>
      <p>
        Open your browser's console to see when components re-render and
        calculations are performed.
      </p>
      <div>
        <h4>Counter: {count}</h4>
        <Button onClick={increment}>Increment</Button>
      </div>
      <div>
        <h4>Other Counter: {otherCount}</h4>
        <button onClick={() => setOtherCount(otherCount + 1)}>
          Increment Other
        </button>
      </div>
      <ExpensiveCalculationComponent value={5} />
    </div>
  );
};

export default MemoizationExample;
