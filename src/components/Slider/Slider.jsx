import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slider1 from '../../assets/2.jpg';
import slider2 from '../../assets/3.jpg';
import slider3 from '../../assets/4.jpg';
import slider4 from '../../assets/5.jpg';
import slider5 from '../../assets/6.jpg';
import slider6 from '../../assets/7.jpg';

// Instalar módulos de Swiper

const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6

];

const Slider = () => {
    return (
        <Box width="80%" height="100%" mx="auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        {/* <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                        <img src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default Slider;
