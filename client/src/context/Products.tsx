import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PropsContext, IProducts, IContext } from '../interfaces/context.products';
import axios from 'axios';

const Context = createContext<IContext>({} as IContext);

const Provider: React.FC<PropsContext> = ({ children }) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const postProducts = async (name: string, price:number, quantity:number, description:string, image?: string) => {
    try {
      const response = await axios.post('http://localhost:3001/products', {
        name,
        price,
        quantity,
        description,
        image,
      }, { withCredentials: true });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Context.Provider value={ { getProducts, products, postProducts } }>
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
