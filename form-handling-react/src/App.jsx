import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormikForm from './formikForm.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to the Form Handling App</h1>} />
          <Route path="/register" element={<FormikForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
