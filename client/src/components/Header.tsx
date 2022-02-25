import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav className="header__nav">
        <h3 className="header__title">Product</h3>
        <ul className="header__ul">
          <li className="header__li">Home</li>
          <li className="header__li">About</li>
          <li className="header__li" onClick={ () => navigate('/login') }>Login</li>
          <li className="header__li" onClick={ () => navigate('/register') }>Register</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;