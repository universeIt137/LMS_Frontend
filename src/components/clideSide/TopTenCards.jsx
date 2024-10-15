import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopTenCard from './TopTenCard';

const TopTenCards = () => {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      speed={1000}
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
    </Swiper>
  );
};

export default TopTenCards;
