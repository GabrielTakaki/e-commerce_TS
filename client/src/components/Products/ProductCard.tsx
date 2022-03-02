import React, { useEffect, useContext } from 'react';
import { Products } from '../../context';

const ProductCard: React.FC = () => {
  const { getProducts, products } = useContext(Products.Context);
  
  useEffect(() => {
    getProducts();
  }, []);

  const images = [
    { src: 'https://www.pngmart.com/files/21/iPhone-13-Pro-PNG-Image.png' },
    { src: 'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Picture.png' },
    { src: 'https://www.freeiconspng.com/uploads/new-iphone-x-photo-18.png' }
  ];

  const productWithImage = products && products.map((item, idx) => ({
    ...item,
    image: images[idx]
  }));

  return (
    <div className="card__wrapper">
      {
        productWithImage && productWithImage.map((product, index) => index < 3 && (
          <div key={index} className="card">
            <img className="card__img" src={ product.image.src } alt="product" />
            <h4 className="card__title">{product.name}</h4>
            <p className="card__price">{product.price}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ProductCard;