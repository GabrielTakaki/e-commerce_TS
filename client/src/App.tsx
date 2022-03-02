import React from 'react';
import './styles/style.css';
import { Routes, Route } from 'react-router-dom';
import { Global, Products } from './context';

import Register from './screens/intials/Register';
import Login from './screens/intials/Login';
import Home from './screens/intials/Home';

import LandingPage from './screens/LandingPage';
import ProductCreate from './screens/admin/ProductCreate';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Products.Provider>
          <Home />
        </Products.Provider>
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
      <Route path="/landing" element={
        <Products.Provider>
          <LandingPage />
        </Products.Provider>
      }
      />
            <Route path="/admin" element={
        <Products.Provider>
          <ProductCreate />
        </Products.Provider>
      }
      />
    </Routes>
  );
}

export default App;
