import React, { useContext, useEffect } from 'react';
import '../../styles/style.css';
import { Global } from '../../context';
import Header from '../../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsCart3 } from 'react-icons/bs';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Home = () => {
  const { getProducts, products } = useContext(Global.Context);

  useEffect(() => {
    getProducts();
  }, []);

  const images = [
    { src: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG31.png' },
  ]
  return (
    <>
      <Header />
      <Swiper
        className="swiper"
        lazy={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          products && products.map((product, index) => index < 3 && (
              images.map((image) => (
                <SwiperSlide className="section">
                  <img className="section__image" src={ image.src } alt="iphone" />
                  <h1 className="section__title">{product.name}</h1>
                  <button className="section__button">
                    <span className="section__span">Buy Now</span>
                    <BsCart3 className="section__icon" />
                  </button>
                </SwiperSlide>
              ))
          ))
        }
      </Swiper>
    </>
  );
}

export default Home;
