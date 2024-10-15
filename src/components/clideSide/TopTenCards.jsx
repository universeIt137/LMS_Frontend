import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TopTenCard from './TopTenCard';

const TopTenCards = () => {
  return (
    <Swiper
      modules={[ Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop={true}
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false
      // }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
     
    >
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      <SwiperSlide><TopTenCard /></SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default TopTenCards;
