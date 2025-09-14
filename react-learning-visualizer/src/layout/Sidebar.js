import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { concepts } from '../data/concepts';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.sidebar.background};
  color: ${({ theme }) => theme.sidebar.text};
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  transition: all 0.50s linear;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>React Concepts</h3>
      <ul>
        {concepts.map((concept) => (
          <li key={concept.id}>
            <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
