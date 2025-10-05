import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signin from './Pages/Signin';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signin />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown paths to login */}
      </Routes>
    </div>
  );
}

export default App;
