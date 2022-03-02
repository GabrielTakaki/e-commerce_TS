import React, { useEffect, useContext } from 'react';
import { Products } from '../../context';

const ProductCard: React.FC = () => {
  const { getProducts, products } = useContext(Products.Context);
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      oi
    </div>
  );
}

export default ProductCard;