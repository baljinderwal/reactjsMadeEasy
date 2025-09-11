import React from 'react';
import { useTheme } from '../styles/ThemeProvider';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const Toggler = () => {
  const { theme, toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggler;
