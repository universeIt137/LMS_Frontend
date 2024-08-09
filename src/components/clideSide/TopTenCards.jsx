// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TopTenCard from './TopTenCard';
const TopTenCards = () => {
 return (
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      <SwiperSlide><TopTenCard></TopTenCard></SwiperSlide>
      ...
    </Swiper>
 );
};

export default TopTenCards;