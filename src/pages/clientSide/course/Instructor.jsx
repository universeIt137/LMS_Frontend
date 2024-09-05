import React from "react";

const Instructor = () => {
  return (
    <div className="lg:py-8">
      <h1 className="text-center md:text-2xl lg:text-2xl font-bold text-[#ffab00] ">
        ইন্সট্রাক্টর
      </h1>
      <div className=" grid lg:grid-cols-3 md:gap-4 md:grid-cols-2 lg:gap-8 py-3  md:py-6  lg:py-10 ">
        {/* 1st instructor */}
        <div className="flex shadow-md px-2 py-5 rounded-2xl  ">
          <div className="mt-3">
            <h1 className=" text-[#101828] font-bold text-[18px] text-center">
              Rabbil Hasan
            </h1>
            <p className="text-[#101828]  text-[14px] ml-2 text-center ">
              Founder of Learn With Rabbil Hasan
            </p>
            <div className="bg-[#20b486] text-[14px]  flex justify-center items-center lg:flex-row py-2 md:items-center gap-2 md:justify-center lg:items-center lg:justify-center text-white rounded mt-2 lg:mt-5 ">
              <div>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725443564/lead_rms3qi.png"
                  alt=""
                />
              </div>
              <div>
                <h1>Lead Instructor</h1>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[70%] ml-10 "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725442303/rabbil-hasan_ktijlb.jpg"
              alt=""
            />
          </div>
        </div>

        {/* 2nd instrutor */}

        <div className="flex shadow-md px-2 py-5 rounded-2xl ">
          <div className="mt-3">
            <h1 className=" text-[#101828] font-bold text-[18px] text-center">
              Rabbil Hasan
            </h1>
            <p className="text-[#101828]  text-[14px] ml-2 text-center ">
              Founder of Learn With Rabbil Hasan
            </p>
            <div className="bg-[#20b486] text-[14px]  flex justify-center items-center lg:flex-row py-2 md:items-center gap-2 md:justify-center lg:items-center lg:justify-center text-white rounded mt-2 lg:mt-5 ">
              <div>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725443564/lead_rms3qi.png"
                  alt=""
                />
              </div>
              <div>
                <h1>Lead Instructor</h1>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[70%] ml-10 "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725442303/rabbil-hasan_ktijlb.jpg"
              alt=""
            />
          </div>
        </div>

        {/* 3 rd instructor */}

        <div className="flex shadow-md px-2 py-5 rounded-2xl ">
          <div className="mt-3">
            <h1 className=" text-[#101828] font-bold text-[18px] text-center">
              Rabbil Hasan
            </h1>
            <p className="text-[#101828]  text-[14px] ml-2 text-center ">
              Founder of Learn With Rabbil Hasan
            </p>
            <div className="bg-[#20b486] text-[14px]  flex justify-center items-center lg:flex-row py-2 md:items-center gap-2 md:justify-center lg:items-center lg:justify-center text-white rounded mt-2 lg:mt-5 ">
              <div>
                <img
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725443564/lead_rms3qi.png"
                  alt=""
                />
              </div>
              <div>
                <h1>Lead Instructor</h1>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[70%] ml-10 "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725442303/rabbil-hasan_ktijlb.jpg"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Instructor;
