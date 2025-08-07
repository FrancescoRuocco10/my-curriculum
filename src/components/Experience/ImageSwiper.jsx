import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from './image/supermercato.png';
import image2 from './image/lavoro1.jpeg';
import image3 from './image/lavoro2.jpeg';
import image4 from './image/lavoro3.jpeg';
import image5 from './image/lavoro4.jpeg';
import image6 from './image/lavoro5.jpeg';
import image7 from './image/lavoro6.jpeg';
import image8 from './image/lavoro7.jpeg';
import image9 from './image/lavoro8.jpeg';
import image10 from './image/lavoro9.jpeg';
import image11 from './image/lavoro10.jpeg';
import image12 from './image/lavoro11.jpeg';
import image13 from './image/lavoro12.jpeg';
import image14 from './image/lavoro13.jpeg';
import image15 from './image/lavoro14.jpeg';
import image16 from './image/lavoro15.jpeg';
import image17 from './image/lavoro16.jpeg';
import image18 from './image/lavoro17.jpeg';
import image19 from './image/lavoro18.jpeg';
import image20 from './image/lavoro19.jpeg';
import image21 from './image/lavoro20.jpeg';
import image22 from './image/lavoro21.jpeg';
import image23 from './image/lavoro22.jpeg';
import image24 from './image/lavoro23.jpeg';
import image25 from './image/lavoro24.jpeg';
import image26 from './image/lavoro25.jpeg';
import image27 from './image/lavoro26.jpeg';
import image28 from './image/lavoro27.jpeg';
import image29 from './image/lavoro28.jpeg';
import image30 from './image/lavoro29.jpeg';
import image31 from './image/lavoro30.jpeg';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
];

export default function ImageSwiper() {
    return (
        <Swiper

            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}

        >

            {images.map((img, index) => (

                <SwiperSlide key={index}>
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        style={{ width: '100%', borderRadius: '10px' }}
                    />
                </SwiperSlide>

            ))}
            
        </Swiper>
    );
}