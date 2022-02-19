import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PropsContext, IUserRegister } from '../interfaces';
import axios from 'axios';

const Context = createContext({})

const Provider: React.FC<PropsContext> = ({ children }) => {
  const [user, setUser] = useState<IUserRegister[]>([]);
  
  const login = async (email: string, password: string, role: string, name: string) => {
    try {
      const response = await axios.post('http://localhost:3001/register', { email, password, role, name });
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Context.Provider value={ { login, user } }>
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
