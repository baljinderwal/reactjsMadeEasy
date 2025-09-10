import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { concepts } from '../data/concepts';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #f0f0f0;
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
          <li key={concept.id}>
            <Link to={`/concept/${concept.id}`}>{concept.title}</Link>
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
