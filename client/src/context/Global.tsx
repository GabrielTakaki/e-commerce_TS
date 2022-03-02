import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PropsContext, IUserRegister, IProducts, IContext } from '../interfaces';
import axios from 'axios';

const Context = createContext<IContext>({} as IContext);

const Provider: React.FC<PropsContext> = ({ children }) => {
  const [user, setUser] = useState<IUserRegister[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);

  // Error handling
  const [registerErr, setRegisterErr] = useState({ badReq: '', conflict: '' });
  const [loginErr, setLoginErr] = useState('');

  const register = async (email: string, password: string, role: string, name: string) => {
    try {
      const response = await axios.post('http://localhost:3001/users', { email, password, role, name });
      setRegisterErr({ ...registerErr, conflict: '', badReq: '' });
      setUser(response.data);
    } catch (e: any) {
      if (e.message.includes('409')) {
        setRegisterErr({ badReq: '', conflict: 'Email already exists.' });
      }
      if (e.message.includes('400')) {
        setRegisterErr({ conflict: '', badReq: 'Invalid data.' });
      }
    }
  };
  
  const login = async (email: string, password: string) => {
    try {
      await axios.post('http://localhost:3001/login', { email, password }, { withCredentials: true });
      setLoginErr('')
    } catch (e) {
      if (e) {
        setLoginErr('Invalid email or password.');
      }
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Context.Provider value={ { login, user, register, getProducts, products, registerErr, loginErr } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const exportDefault = {
  Context,
  Provider,
};

export default exportDefault;
