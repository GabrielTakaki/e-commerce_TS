import React, { useContext, useState } from 'react';
import { Products } from '../../context';

const ProductCreate = () => {
  const { postProducts } = useContext(Products.Context);
  const [productForm, setProductForm] = useState({
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };

  return (
    <div>ProductCreate</div>
  );
}

export default ProductCreate;