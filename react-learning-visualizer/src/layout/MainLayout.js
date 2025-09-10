import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

import Sidebar from './Sidebar';
import Toggler from '../components/Toggler';

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        <Toggler />
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default MainLayout;
