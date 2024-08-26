
import MoreCourseCard from "./MoreCourseCard";
import { useRef } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const MoreCourse = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative space-y-7">
      <div className="flex flex-col md:flex-row justify-center  items-center md:justify-between">
        <div>
          <p className="text-[24px] w-[300px]">
            More Courses by <span className="text-[#2563EB]">Ronald Richards</span>
          </p>
        </div>
        <div className=" flex items-center space-x-8">
          {/* Left Arrow */}
          <button
            className="p-2 rounded-[8px] shadow bg-[#94A3B8]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MdNavigateBefore />
          </button>
          {/* Right Arrow */}
          <button
            className="p-2 rounded-[8px] shadow bg-[#94A3B8]"
            onClick={() => swiperRef.current?.slideNext()}
          >
           <MdNavigateNext />
          </button>
        </div>
      </div>
      <MoreCourseCard swiperRef={swiperRef} />
    </div>
  );
};

export default MoreCourse;
