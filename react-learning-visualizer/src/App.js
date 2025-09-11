import React from 'react';
import { ThemeProvider } from './styles/ThemeProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import MainLayout from './layout/MainLayout';
import ConceptPage from './pages/ConceptPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <MainLayout>
        {/* For simplicity, we'll just render the first concept page. */}
        <ConceptPage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
