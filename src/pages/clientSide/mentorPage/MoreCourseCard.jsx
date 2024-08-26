import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import TopTenCard from "../../../components/clideSide/TopTenCard"
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const MoreCourseCard = ({ swiperRef }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop={true}
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
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the Swiper instance in the ref
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

// Adding prop validation
MoreCourseCard.propTypes = {
  swiperRef: PropTypes.shape({
    current: PropTypes.object, // Ensure swiperRef is an object
  }).isRequired, // swiperRef is required
};

export default MoreCourseCard;
