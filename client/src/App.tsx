import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from './context';

import Login from './screens/intials/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Global.Provider>
          <Login />
        </Global.Provider>
      } />
    </Routes>
  );
}

export default App;
