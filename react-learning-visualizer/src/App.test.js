import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React Concepts Visualizer/i);
  expect(titleElement).toBeInTheDocument();
});
