import React, { useEffect, useContext } from 'react';
import { Products } from '../../context';

const ProductCard: React.FC = () => {
  const { getProducts, products } = useContext(Products.Context);
  
  useEffect(() => {
    getProducts();
  }, []);

  const images = [
    { src: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG29.png' },
    { src: 'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Picture.png' },
    { src: 'https://www.freeiconspng.com/uploads/new-iphone-x-photo-18.png' }
  ];

  const productWithImage = products && products.map((item, idx) => ({
    ...item,
    image: images[idx]
  }));

  return (
    <>
      {
        productWithImage && productWithImage.map((product, index) => index < 3 && (
          <div key={index}>
            <img src={ product.image.src } alt="product" />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))
      }
    </>
  );
}

export default ProductCard;