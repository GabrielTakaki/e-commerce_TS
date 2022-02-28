import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PropsContext, IUserRegister, IProducts, IContext } from '../interfaces';
import axios from 'axios';

const Context = createContext<IContext>({} as IContext);

const Provider: React.FC<PropsContext> = ({ children }) => {
  const [user, setUser] = useState<IUserRegister[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loginData, setLoginData] = useState([]);

  const register = async (email: string, password: string, role: string, name: string) => {
    try {
      const response = await axios.post('http://localhost:3001/users', { email, password, role, name });
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      setLoginData(response.data);
    } catch (e) {
      console.log(e);
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
    <Context.Provider value={ { login, user, register, getProducts, products, loginData } }>
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
