import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container-login">
      <div className="greeting">
        <h3 className="greeting__greet">Welcome to</h3>
        <h3 className="greeting__title">GT. Commerce</h3>
      </div>
      <form className="login">
        <p className="login__title">Login</p>
        <label htmlFor="email" className="login__label">
          email
          <input
            className="login__input"
            type="email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password" className="login__label">
          password
          <input
            className="login__input"
            type="password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button className="login__button" type="button">Login</button>
      </form>
      <img src="https://www.pngmart.com/files/11/E-Commerce-PNG-Free-Download.png" alt="e-commerce" className="login__img" />
    </div>
  );
}

export default Login;