import React, { useContext, useEffect } from 'react';
import '../../styles/style.css';
import { Global } from '../../context';
import Header from '../../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import Swiper styles
import 'swiper/css';

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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          products && products.map((product, index) => index < 3 && (
              images.map((image) => (
                <SwiperSlide className="section">
                  <img className="section__image" src={ image.src } alt="iphone" />
                  <h1 className="section__title">{product.name}</h1>
                  <p className="section__desc">{product.description}</p>
                  <p className="section__price">{product.price}</p>
                  <button>
                    Buy Now
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
