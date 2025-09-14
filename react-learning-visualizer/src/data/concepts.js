export const concepts = [
  {
    id: 'usestate',
    title: 'useState Hook',
    explanation: 'The useState hook lets you add state to function components.',
    code: `
const UseStateExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    updateInspector('state', { count });
  }, [count]);

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

render(<UseStateExample />);
    `,
  },
  {
    id: 'jsx-basics',
    title: 'JSX Basics',
    explanation: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.',
    code: `
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

render(<JsxBasicsExample />);
    `,
  },
  {
    id: 'props',
    title: 'Props',
    explanation: 'Props (short for properties) are read-only attributes used to pass data from a parent component to a child component.',
    code: `
const ChildComponent = (props) => {
  // This component is now a simple, presentational component.
  // It receives props and renders them.
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h4>Child Component (id: {props.id})</h4>
      <p>Received message: "{props.message}"</p>
      <p>Number: {props.number}</p>
    </div>
  );
};

const PropsExample = () => {
  // The parent component defines the props for its children.
  const child1Props = { message: "Hello from the parent!", number: 42, id: "child1" };
  const child2Props = { message: "Another message", number: 100, id: "child2" };

  // The parent is responsible for reporting the props to the inspector.
  // This useEffect runs only once, providing a stable view of the props.
  useEffect(() => {
    updateInspector('PropsExample', {
      'Props for child1': child1Props,
      'Props for child2': child2Props
    });
  }, []);

  return (
    <div>
      <h3>Props Example</h3>
      <p>
        This component passes data down to a child component using props.
      </p>
      <ChildComponent {...child1Props} />
      <ChildComponent {...child2Props} />
    </div>
  );
};

render(<PropsExample />);
    `,
  },
  {
    id: 'useeffect',
    title: 'useEffect Hook',
    explanation:
      'The useEffect hook lets you perform side effects in function components. The dependency array controls when the effect runs.',
    code: `
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

render(<UseEffectExample />);
    `,
  },
  {
    id: 'useref',
    title: 'useRef Hook',
    explanation:
      'The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). It can be used to access a DOM element directly.',
    code: `
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

render(<UseRefExample />);
    `,
  },
  {
    id: 'context-api',
    title: 'Context API',
    explanation:
      'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.',
    code: `
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

render(<ContextExample />);
    `,
  },
  {
    id: 'usereducer',
    title: 'useReducer Hook',
    explanation:
      'The useReducer hook is an alternative to useState for managing more complex state logic. It is often preferred when you have state that involves multiple sub-values or when the next state depends on the previous one.',
    code: `
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

  useEffect(() => {
    updateInspector('state', state);
  }, [state.count]);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

render(<UseReducerExample />);
    `,
  },
  {
    id: 'react-router',
    title: 'React Router Basics',
    explanation:
      'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.',
    code: `
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

render(<ReactRouterExample />);
    `,
  },
  {
    id: 'memoization',
    title: 'Memoization',
    explanation:
      'Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. React provides React.memo, useMemo, and useCallback for this purpose.',
    code: `
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

render(<MemoizationExample />);
    `,
  },
  {
    id: 'conditional-rendering',
    title: 'Conditional Rendering',
    explanation:
      'Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.',
    code: `
const UserGreeting = () => <h2>Welcome back!</h2>;
const GuestGreeting = () => <h2>Please sign up.</h2>;

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    updateInspector('state', { isLoggedIn });
  }, [isLoggedIn]);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {isLoggedIn ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
      <hr />
      <p>
        In this example, we are showing different greetings based on the
        'isLoggedIn' state. This is a common way to do conditional rendering in
        React.
      </p>
    </div>
  );
};

render(<ConditionalRenderingExample />);
    `,
  },
  {
    id: 'lists-and-keys',
    title: 'Lists and Keys',
    explanation:
      'Keys help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique. They are used to give elements in an array a stable identity.',
    code: `
const NumberList = ({ numbers }) => {
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
};

const ListsAndKeysExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const fruits = ['apple', 'banana', 'orange'];

  return (
    <div>
      <h3>Rendering a list of numbers:</h3>
      <NumberList numbers={numbers} />
      <h3>Rendering a list of strings:</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <hr />
      <p>
        Keys help React identify which items have changed, are added, or are
        removed. Keys should be stable, predictable, and unique.
      </p>
    </div>
  );
};

render(<ListsAndKeysExample />);
    `,
  },
  {
    id: 'controlled-components',
    title: 'Controlled Components',
    explanation:
      'In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState(). We can combine the two by making the React state be the “single source of truth”. An input form element whose value is controlled by React in this way is called a “controlled component”.',
    code: `
const ControlledComponentsExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + inputValue);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>Current input value: {inputValue}</h3>
      <hr />
      <p>
        In a controlled component, form data is handled by the component's state. The state is the single source of truth.
      </p>
    </div>
  );
};

render(<ControlledComponentsExample />);
    `,
  },
];
