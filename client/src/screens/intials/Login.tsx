import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container-login">
      <form className="login">
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
      </form>
    </div>
  );
}

export default Login;