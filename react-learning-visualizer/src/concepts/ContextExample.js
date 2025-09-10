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
      <div>
        <h3>Context API Example</h3>
        <p>
          This example demonstrates how to use the Context API to pass data
          through the component tree without having to pass props down manually
          at every level.
        </p>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default ContextExample;
