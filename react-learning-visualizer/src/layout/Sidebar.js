import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { concepts } from '../data/concepts';
import { useTheme } from '../styles/ThemeProvider';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.sidebar.background};
  color: ${({ theme }) => theme.sidebar.text};
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  transition: all 0.50s linear;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ConceptList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin-top: 20px;
`;

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConcepts = concepts.filter((concept) =>
    concept.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarContainer>
      <h3>React Concepts</h3>
      <SearchInput
        type="text"
        placeholder="Search concepts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ConceptList>
        {filteredConcepts.map((concept) => (
          <li key={concept.id}>
            <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
          </li>
        ))}
      </ConceptList>
      <ToggleButton onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
