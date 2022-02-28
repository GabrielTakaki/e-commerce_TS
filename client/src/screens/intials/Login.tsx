import React, { useState, useContext } from 'react';
import { Global } from '../../context';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(Global.Context);

  return (
    <div className="container-login">
      <div className="greeting">
        <h3 className="greeting__greet">Welcome to</h3>
        <h3 className="greeting__title">GT. Commerce</h3>
      </div>
      <form className="login">
        <p className="login__title">Login</p>
        <label htmlFor="email" className="login__label">
          <span className="login__span">Email:</span>
          <input
            className="login__input"
            type="email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password" className="login__label">
        <span className="login__span">Password:</span>
          <input
            className="login__input"
            type="password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <div className="buttons"></div>
        <button className="buttons__login" type="button" onClick={ () => login(email, password) }>Login</button>
        <span className="buttons__span">Or</span>
        <button className="buttons__register" type="button" onClick={ () => navigate('/register') }>Register</button>
      </form>
      <img src="https://www.pngmart.com/files/11/E-Commerce-PNG-Free-Download.png" alt="e-commerce" className="login__img" />
    </div>
  );
}

export default Login;