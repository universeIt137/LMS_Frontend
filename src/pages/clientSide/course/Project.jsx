import React from "react";

const Project = () => {
  return (
    <div className="lg:py-9 my-6 ">
      <h1 className="text-center md:text-2xl lg:text-3xl  ">
        যেসকল রিয়েল লাইফ প্রোজেক্ট করানো হবে
      </h1>
      <div className="grid md:grid-cols-2 md:my-2 lg:grid-cols-3 lg:gap-10 gap-5 lg:my-10 my-5  ">
      <div className="card card-compact bg-base-100   shadow-xl">
          <figure>
            <img className=" p-2 "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725439654/project-1_znhkei.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto ">
            <h2 className="card-title lg:text-[19px] pb-0">ফুল স্ট্যাক ই-কমার্স প্রজেক্ট </h2>            
          </div>
        </div>

        {/* 2nd project */}

        <div className="card card-compact bg-base-100   shadow-xl">
          <figure>
            <img className="  p-2 "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725439654/project-1_znhkei.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto ">
            <h2 className="card-title lg:text-[19px] pb-0 ">ফুল স্ট্যাক ই-কমার্স প্রজেক্ট </h2>            
          </div>
        </div>

         {/* 3rd project */}

        <div className="card card-compact bg-base-100  shadow-xl">
          <figure>
            <img className=" p-2 "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725439654/project-1_znhkei.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto ">
            <h2 className="card-title lg:text-[19px] pb-0 ">ফুল স্ট্যাক ই-কমার্স প্রজেক্ট </h2>            
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Project;
