import React from 'react';
import styled from 'styled-components';
import { concepts } from '../data/concepts';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.sidebarBg};
  padding: 20px;
  height: 100%;
  overflow-y: auto;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>React Concepts</h3>
      <ul>
        {concepts.map((concept) => (
          <li key={concept.id}>{concept.title}</li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
