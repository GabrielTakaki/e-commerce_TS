import React, { useContext, useEffect } from 'react';
import '../../styles/style.css';
import { Global } from '../../context';
import Header from '../../components/Header';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsCart3 } from 'react-icons/bs';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const Home = () => {
  const { getProducts, products } = useContext(Global.Context);
  SwiperCore.use([Autoplay])

  useEffect(() => {
    getProducts();
  }, []);

  const images = [
    { src: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG31.png' },
    // { src: 'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png' },
    // { src: 'https://www.transparentpng.com/thumb/-iphone-x/v8dHCT-apple-iphone.png' }
  ]
  return (
    <>
      <Header />
      <Swiper
        loop={true}
        speed={900}
        autoplay={{
          delay: 2000,
        disableOnInteraction: false,
      }}>
        {
          products && products.map((product, index) => index < 3 && (
              images.map((image, index) => (
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
