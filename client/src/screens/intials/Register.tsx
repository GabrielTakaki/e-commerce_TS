import React, { useState, useContext, useEffect } from 'react';
import { Global } from '../../context';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState({ email: '', password: '', name: '', role: 'user' });
  const [click, setClick] = useState(false);
  const [infoErr, setInfoErr] = useState(false);
  const navigate = useNavigate();
  const { register } = useContext(Global.Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  useEffect(() => {
    const { email, password, name, role } = registerForm;
    const passwordMinLength = 6;
    const userMinLength = 12;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const validEmail = Patt.test(email)
    const validPsw = password.length >= passwordMinLength;
    const validName = name.length >= userMinLength;

    if (click) {
      if (!validEmail || !validPsw || !validName) {
        setInfoErr(true);
      } else {
        register(email, password, role, name);
        navigate('/login');
      }
    }
  }, [registerForm, click]);

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
            !infoErr ? null
            : <span
                className="login__error"
              >
                Fill in the fileds with valid data
              </span>
          }
        </label>
        <div className="buttons">
          <button
            className="buttons__register"
            type="button"
            onClick={ () => setClick(true) }
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
