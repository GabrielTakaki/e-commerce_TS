import React, { useState, useContext } from 'react';
import { Global } from '../../context';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState({ email: '', password: '', name: '', role: 'user' });
  const navigate = useNavigate();
  const { register, registerErr } = useContext(Global.Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = () => {
    const { email, password, name, role } = registerForm;
  
    console.log(registerErr);
    register(email, password, role, name);
  };

  return (
    <div className="container-login">
      <div className="greeting">
        <h3 className="greeting__greet">Create your account</h3>
        {/* <h3 className="greeting__title">GT. Commerce</h3> */}
      </div>
      <form className="login">
        <p className="login__title">Register</p>
        <label htmlFor="name" className="login__label">
          <span className="login__span">Name:</span>
          <input
            className="login__input"
            type="name"
            name="name"
            value={ registerForm.name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email" className="login__label">
          <span className="login__span">Email:</span>
          <input
            className="login__input"
            type="email"
            name="email"
            value={ registerForm.email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password" className="login__label">
          <span className="login__span">Password:</span>
          <input
            className="login__input"
            type="password"
            name="password"
            value={ registerForm.password }
            onChange={ handleChange }
          />
          {
            !registerErr.badReq ? null
            : <span
                className="login__error"
              >
                Fill in the fileds with valid data
              </span>
          }
          {
            !registerErr.conflict ? null
            : <span
                className="login__error"
              >
                Email already exists
              </span>
          }
        </label>
        <div className="buttons">
          <button
            className="buttons__register"
            type="button"
            onClick={ () => handleSubmit() }
          >
            Register
          </button>
          <span className="buttons__span">Or</span>
          <button className="buttons__login" type="button" onClick={ () => navigate('/login') }>Login</button>
        </div>
      </form>
      <img src="https://www.pngmart.com/files/11/E-Commerce-PNG-Free-Download.png" alt="e-commerce" className="login__img" />
    </div>
  );
}

export default Register;
