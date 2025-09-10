import UseStateExample from '../concepts/UseStateExample';
import JsxBasicsExample from '../concepts/JsxBasicsExample';
import PropsExample from '../concepts/PropsExample';
import UseEffectExample from '../concepts/UseEffectExample';
import UseRefExample from '../concepts/UseRefExample';
import ContextExample from '../concepts/ContextExample';
import UseReducerExample from '../concepts/UseReducerExample';
import ReactRouterExample from '../concepts/ReactRouterExample';
import MemoizationExample from '../concepts/MemoizationExample';

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
  {
    id: 'jsx-basics',
    title: 'JSX Basics',
    explanation: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.',
    component: <JsxBasicsExample />,
    code: `
import React from 'react';

const JsxBasicsExample = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  return (
    <div>
      <h3>Hello, {formatName(user)}!</h3>
      <p>This is a simple example of JSX.</p>
      <p>You can embed JavaScript expressions directly in your JSX, like this: 2 + 2 = {2 + 2}</p>
    </div>
  );
};

export default JsxBasicsExample;
    `,
  },
  {
    id: 'props',
    title: 'Props',
    explanation: 'Props (short for properties) are read-only attributes used to pass data from a parent component to a child component.',
    component: <PropsExample />,
    code: `
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h4>Child Component</h4>
      <p>Received message: "{props.message}"</p>
      <p>Number: {props.number}</p>
    </div>
  );
};

const PropsExample = () => {
  return (
    <div>
      <h3>Props Example</h3>
      <p>
        This component passes data down to a child component using props.
      </p>
      <ChildComponent message="Hello from the parent!" number={42} />
      <ChildComponent message="Another message" number={100} />
    </div>
  );
};

export default PropsExample;
    `,
  },
  {
    id: 'useeffect',
    title: 'useEffect Hook',
    explanation:
      'The useEffect hook lets you perform side effects in function components. The dependency array controls when the effect runs.',
    component: <UseEffectExample />,
    code: `
import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Runs on every render (no dependency array)
  useEffect(() => {
    console.log('Runs on every render');
  });

  // Runs only on the first render (empty dependency array)
  useEffect(() => {
    console.log('Runs only on first render');
  }, []);

  // Runs when 'count' state changes
  useEffect(() => {
    console.log('"count" state changed');
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h4>Counter 1: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>Counter 2: {otherCount}</h4>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectExample;
    `,
  },
  {
    id: 'useref',
    title: 'useRef Hook',
    explanation:
      'The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). It can be used to access a DOM element directly.',
    component: <UseRefExample />,
    code: `
import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // \`current\` points to the mounted text input element
    inputEl.current.focus();
    alert(\`Input value: \${inputEl.current.value}\`);
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default UseRefExample;
    `,
  },
  {
    id: 'context-api',
    title: 'Context API',
    explanation:
      'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.',
    component: <ContextExample />,
    code: `
import React, { createContext, useContext, useState } from 'react';

// 1. Create a context
const ThemeContext = createContext();

// 2. Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a component that consumes the context
const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div style={style}>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const ContextExample = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default ContextExample;
    `,
  },
  {
    id: 'usereducer',
    title: 'useReducer Hook',
    explanation:
      'The useReducer hook is an alternative to useState for managing more complex state logic. It is often preferred when you have state that involves multiple sub-values or when the next state depends on the previous one.',
    component: <UseReducerExample />,
    code: `
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default UseReducerExample;
    `,
  },
  {
    id: 'react-router',
    title: 'React Router Basics',
    explanation:
      'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.',
    component: <ReactRouterExample />,
    code: `
import React from 'react';
import { Link, Routes, Route, HashRouter } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const ReactRouterExample = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default ReactRouterExample;
    `,
  },
  {
    id: 'memoization',
    title: 'Memoization',
    explanation:
      'Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. React provides React.memo, useMemo, and useCallback for this purpose.',
    component: <MemoizationExample />,
    code: `
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
  console.log(\`Rendering button: \${children}\`);
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
      <p>Counter: {count}</p>
      <Button onClick={increment}>Increment</Button>
      <p>Other Counter: {otherCount}</p>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other
      </button>
      <ExpensiveCalculationComponent value={5} />
    </div>
  );
};

export default MemoizationExample;
    `,
  },
];
