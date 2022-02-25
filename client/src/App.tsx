import React from 'react';
import './styles/style.css';
import { Routes, Route } from 'react-router-dom';
import { Global } from './context';

import Register from './screens/intials/Register';
import Login from './screens/intials/Login';
import Home from './screens/intials/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Global.Provider>
          <Home />
        </Global.Provider>
      } />
      <Route path="/login" element={
        <Global.Provider>
          <Login />
        </Global.Provider>
      } />
      <Route path="/register" element={
        <Global.Provider>
          <Register />
        </Global.Provider>
      } />
    </Routes>
  );
}

export default App;
