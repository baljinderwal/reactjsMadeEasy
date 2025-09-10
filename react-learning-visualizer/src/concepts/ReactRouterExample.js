import React from 'react';
import { Link, Routes, Route, MemoryRouter } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const ReactRouterExample = () => {
  return (
    <MemoryRouter>
      <div>
        <h3>React Router Basics Example</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </MemoryRouter>
  );
};

export default ReactRouterExample;
