import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './styles/ThemeProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ConceptPage from './pages/ConceptPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/concept/:conceptId" element={<ConceptPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
