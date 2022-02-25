import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h3 className="header__title">Product</h3>
        <ul className="header__ul">
          <li className="header__li">Home</li>
          <li className="header__li">About</li>
          <li className="header__li">Login</li>
          <li className="header__li">Register</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;