import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './style.scss';

const Carousel = () => {
    return (
        <Swiper
            className="main-banners"
            slidesPerView={1}
        >
            <SwiperSlide>
                <img alt="Banner 1" src="https://picsum.photos/id/1025/1280/688" />
                <h3>Título do Banner 1</h3>
                <Link to="#banner-1">Call to action</Link>
            </SwiperSlide>
            <SwiperSlide>
                <img alt="Banner 2" src="https://picsum.photos/id/1015/1280/688" />
                <h3>Título do Banner 2</h3>
                <Link to="#banner-2">Call to action</Link>
            </SwiperSlide>
            <SwiperSlide>
                <img alt="Banner 3" src="https://picsum.photos/id/102/1280/688" />
                <h3>Título do Banner 3</h3>
                <Link to="#banner-3">Call to action</Link>
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel;