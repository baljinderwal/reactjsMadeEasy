import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  sidebar: {
    background: '#f0f0f0',
    text: '#363537'
  }
};

const darkTheme = {
  body: '#000000',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#000000',
  sidebar: {
    background: '#000000',
    text: '#FAFAFA'
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
