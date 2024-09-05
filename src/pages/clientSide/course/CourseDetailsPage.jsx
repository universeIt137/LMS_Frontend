import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { SiFormspree } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import GetCourse from "./GetCourse";
import Project from "./Project";
import Instructor from "./Instructor";

const CourseDetailsPage = () => {
  // State to hold the rating value
  const [rating, setRating] = useState(4); // Default rating is set to 4

  // Function to handle rating change
  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="pt-16 pb-16 ">
      <div>
        <div className="flex-1">
          <div className="flex items-center w-32 py-2 px-2 bg-red-200 rounded-3xl">
            <div>
              <img
                src="https://cdn.ostad.app/public/upload/2024-05-13T11-13-35.024Z-LiveClass-line.svg"
                alt="Live Course"
              />
            </div>
            <div>
              <p className="text-sm text-red-600 ml-2 font-bold">লাইভ কোর্স</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 my-3">
            Full Stack Web Development with JavaScript <br /> (MERN)
          </h1>
          <div className="flex items-baseline ">
            <div>
              <p className="text-[12px] font-bold ">4.8</p>
            </div>
            <div className="ml-2">
              <StarRatings
                className="text-[4px]"
                rating={rating} // Use state variable
                starRatedColor="#20b486"
                changeRating={changeRating} // Use state update function
                numberOfStars={1}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
              />
            </div>
          </div>
          <p className="mt-2 text-[#7b7b7d] text-sm font-[500] ">
            ১ বারই কোর্স কিনুন। ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব
            ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখুন। কারন এক্সেস
            তো থাকবে লাইফটাইমই! আর সাথে ৩ টা জিনিস রাখবেন- ল্যাপটপ বা কম্পিউটার,
            ইন্টারনেট কানেকশন ও শেখার অদম্য ইচ্ছা। বিজয় আপনারই!
          </p>
          <div className="flex items-center my-2 ">
            <div>
              <NavLink to={"/checkout"}>
                <button class="btn bg-[#e7a500] font-[600] ">
                  ব্যাচে ভর্তি হোন
                </button>
              </NavLink>
            </div>
            <dir>
              <h1 className="text-xl font-bold -ml-5 text-[#000000] ">
                ৳৮,০০০
              </h1>
            </dir>
          </div>
          <div className="flex flex-wrap items-center gap-2 ">
            <div
              className="flex items-center text-[11px] font-[500]
                            shadow-md w-40 p-2 rounded-md bg-[#f3f4f7] "
            >
              <div className="ml-5">
                <i>
                  {" "}
                  <SiFormspree></SiFormspree>{" "}
                </i>
              </div>
              <div className="">
                <p className="ml-1">৪৮ টি লাইভ ক্লাস</p>
              </div>
            </div>
            <div
              className="flex items-center text-[11px] font-[500]
                            shadow-md w-40 p-2 rounded-md bg-[#f3f4f7] "
            >
              <div className="ml-5">
                <i className="">
                  {" "}
                  <GoProjectRoadmap></GoProjectRoadmap>{" "}
                </i>
              </div>
              <div className="ml-2">
                <p>১০ টি প্রজেক্ট</p>
              </div>
            </div>
            <div
              className="flex items-center text-[11px] font-[500]
                            shadow-md w-28 p-2 rounded-md bg-[#f3f4f7] "
            >
              <div className="ml-1">
                <i>
                  {" "}
                  <FaCalendarAlt></FaCalendarAlt>{" "}
                </i>
              </div>
              <div className="ml-1">
                <p>২৫ দিন বাকি</p>
              </div>
            </div>
            <div
              className="flex items-center text-[11px]  font-[500]
                            shadow-md w-48 p-2 rounded-md bg-[#f3f4f7] "
            >
              <div className="">
                <i>
                  {" "}
                  <MdOutlineVideoLibrary></MdOutlineVideoLibrary>{" "}
                </i>
              </div>
              <div className="ml-1">
                <p>৮০৭ টি প্রি রেকর্ডেড ভিডিও</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>

        {/* live class time support class time start */}

        <div className=" grid lg:grid-cols-4 md:grid-col-3  gap-2 mt-10 ">
          <div
            className=" bg-slate-300  shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    "
          >
            <p className="text-center">
              ব্যাচ শুরু <br /> বৃহস্পতিবার ২৬ সেপ্টেম্বর
            </p>
          </div>
          <div
            className=" bg-slate-300  shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    "
          >
            <p className="text-center">
              লাইভ ক্লাস <br /> রাত ১০:১৫- ১১:৪৫ (বৃহ,শনি)
            </p>
          </div>
          <div
            className=" bg-[#eae9ef] shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    "
          >
            <p className="text-center">৩০০ সিট বাকি</p>
          </div>
          <div
            className=" bg-[#dfdee7] shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    "
          >
            <p className="text-center  ">ভর্তি চলছে ৮ম ব্যাচে</p>
          </div>
        </div>

        {/* live class time support class time end */}

        {/* menubar start */}

        <div className=" mx-auto ">
          <nav className="">
            <ul
              className="flex flex-wrap lg:flex gap-6 lg:justify-between lg:items-center
                        lg:py-8 md:py-6 my-8
                        "
            >
              <li>
                <NavLink to={"#curriculum"}>কারিকুলাম</NavLink>
                {/* <a href="curriculum">কারিকুলাম</a> */}
              </li>
              <li>
                <NavLink to={"#get-course"}>কোর্সে আপনি পাচ্ছেন</NavLink>
              </li>
              <li>
                <NavLink to={""}>প্রজেক্টসমুহ</NavLink>
              </li>
              <li>
                <NavLink to={""}>কোর্সটি যাদের জন্য</NavLink>
              </li>
              <li>
                {/* <NavLink to={""}>ইন্সট্রাক্টর</NavLink> */}
                {/* <Link to="#instructor">ইন্সট্রাক্টর</Link> */}
                <a href="#instructor">ইন্সট্রাক্টর</a>
              </li>
              <li>
                <NavLink to={""}>জব পেয়েছে যারা</NavLink>
              </li>
              <li>
                <NavLink to={""}>রিভিউ</NavLink>
              </li>
              <li>
                <NavLink to={""}>FAQ</NavLink>
              </li>
              <li>
                <NavLink to={""}>পেমেন্ট</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* menubar end */}

        {/* curriculum area start */}
        <div>
          <div className=" flex justify-center items-center gap-4 lg:flex lg:justify-center lg:items-center lg:gap-x-10 ">
            <div className="flex items-center gap-3 ">
              <img
                className="w-6  "
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725428379/apps-line_tidbif.svg"
                alt=""
              />
              <p>৪৪ মডিউল</p>
            </div>
            <div className="flex items-center gap-3 ">
              <img
                className="w-6  "
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725428338/broadcast-line_oiydnu.svg"
                alt=""
              />
              <p>৪৮ লাইভ ক্লাস</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-8 lg:py-12">
          <div className="collapse collapse-plus bg-base-200 my-4 transition-all duration-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <div className="flex gap-5 items-center">
                <div className="w-[75px] bg-[#20b486] p-2 text-center rounded-2xl text-white">
                  <p className="text-sm font-bold">সপ্তাহ ০</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    শুরুর আগের শুরু (ক্লাস শুরুর আগেই যারা ইনরোল করেছেন তাদের
                    জন্য)
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className="flex items-center bg-[#eaecf0] w-[165px] rounded-md px-1 gap-3">
                <div>
                  <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725429764/video-icon_ylmamc.svg"
                    alt="video-icon"
                  />
                </div>
                <div>
                  <p className="text-sm text-[#322b28]">77 recorded video</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second accordion */}
          <div className="collapse collapse-plus my-4 bg-base-200 transition-all duration-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">
              <div className="flex gap-5 items-center">
                <div className="w-[75px] bg-[#20b486] p-2 text-center rounded-2xl text-white">
                  <p className="text-sm font-bold">সপ্তাহ ১</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    [Foundation] ইন্ট্রোডাকশন অব ওয়েব ডেভেলপমেন্ট এবং HTML
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse-content  ">
              <div className="flex items-center justify-between bg-[#eaecf0] rounded-md px-1 gap-2">
                <div className="flex items-center py-2 px-3">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725429764/video-icon_ylmamc.svg"
                      alt="video-icon"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#322b28]">77 recorded video</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725433042/live-class_i2kxac.png"
                      alt="live-class-icon"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#322b28]">3 live class</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725432891/checkbox-1_csxtfo.png"
                      alt="quiz-icon"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#322b28]">1 Quiz</p>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  VS Code Setup for HTML | Structural Tags | Text Formatting |
                  List | Link | Image and Multimedia | Table | Form | Semantic
                  Tags | Scripting | Interactive Element | Special Purpose Tags
                  | Advance web page structure | Meta | SEO Meta | HTTP-Equiv
                  Meta | Open Graph | Twitter Card | Mobile Device Meta |
                  Security Meta | Cache Control Meta Tags | Manifest
                  Configurations | Meta tags for progressive web application
                  (PWA)
                </p>
              </div>
            </div>
          </div>

          {/* Third accordion */}
          <div className="collapse my-4 collapse-plus bg-base-200 transition-all duration-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>

          {/* Fourth accordion */}
          <div className="collapse my-4 collapse-plus bg-base-200 transition-all duration-500">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>

        {/* curriculum area end */}
      </div>

        {/* get the course  */}

        <div id="get-course" >
            <GetCourse></GetCourse>
        </div>
        <div>
            <Project></Project>
        </div>
        <div id="instructor">
            <Instructor></Instructor>
        </div>

    </div>
  );
};

export default CourseDetailsPage;
