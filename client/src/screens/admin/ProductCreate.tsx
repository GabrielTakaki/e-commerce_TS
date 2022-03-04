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

  const submitProduct = () => {
    const { name, price, quantity, description, image } = productForm;
    postProducts(name, price, quantity, description, image);
  };

  return (
    <div style={ { color: 'white' } }>
      <h1>Product Create</h1>
      <label htmlFor="name">
        Product name:
        <input
          type="text"
          name="name"
          value={ productForm.name }
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Product price:
        <input
          type="number"
          name="price"
          value={ productForm.price }
          onChange={handleChange}
        />
      </label>
      <label htmlFor="quantity">
        Product quantity: 
        <input
          type="number"
          name="quantity"
          value={ productForm.quantity }
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Product description:
        <input
          type="text"
          name="description"
          value={ productForm.description }
          onChange={handleChange}
        />
      </label>
      <label htmlFor="image">
        Product image:
        <input
          type="file"
          name="image"
          value={ productForm.image }
          onChange={handleChange}
        />
      </label>
      <button onClick={ () => submitProduct() }>Submit Product</button>
    </div>
  );
}

export default ProductCreate;