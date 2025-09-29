import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Add Routes and Route imports
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;