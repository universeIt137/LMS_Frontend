import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { SiFormspree } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const CourseDetailsPage = () => {
    // State to hold the rating value
    const [rating, setRating] = useState(4); // Default rating is set to 4

    // Function to handle rating change
    const changeRating = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className='pt-16 pb-16 '>
            <div>
                <div className='max-w-[50%]' >
                    <div className='flex items-center w-32 py-2 px-2 bg-red-200 rounded-3xl'>
                    <div>
                            <img 
                                src="https://cdn.ostad.app/public/upload/2024-05-13T11-13-35.024Z-LiveClass-line.svg" 
                                alt="Live Course" 
                            />
                    </div>
                    <div>
                            <p className='text-sm text-red-600 ml-2 font-bold'>লাইভ কোর্স</p>
                    </div>
                </div>
                    <h1 className='text-2xl font-bold text-slate-900 my-3'>
                    Full Stack Web Development with JavaScript <br /> (MERN)
                    </h1>
                    <div className='flex items-baseline ' >
                        <div>
                            <p className='text-[12px] font-bold ' >4.8</p>
                        </div>
                    <div className='ml-2' >
                        <StarRatings className="text-[4px]"
                            rating={rating} // Use state variable
                            starRatedColor="#20b486"
                            changeRating={changeRating} // Use state update function
                            numberOfStars={1}
                            name='rating'
                            starDimension="15px"
                            starSpacing = "2px"
                        />
                    </div>
                </div>
                <p className='mt-2 text-[#7b7b7d] text-sm font-[500] ' >
                    ১ বারই কোর্স কিনুন। ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখুন। কারন এক্সেস তো থাকবে লাইফটাইমই! আর সাথে ৩ টা জিনিস রাখবেন- ল্যাপটপ বা কম্পিউটার, ইন্টারনেট কানেকশন ও শেখার অদম্য ইচ্ছা। বিজয় আপনারই!
                </p>
                    <div className='flex items-center my-2 ' >
                        <div>
                            <NavLink to={"/checkout"} >
                            <button class="btn btn-warning font-[600] ">
                                ব্যাচে ভর্তি হোন
                            </button>
                            </NavLink>
                        </div>
                        <dir>
                            <h1 className='text-xl font-bold -ml-5 text-[#000000] ' >
                                ৳৮,০০০
                            </h1>
                        </dir>
                    </div>
                    <div className='flex items-center gap-2 ' >
                        <div className='flex items-center text-[11px] font-[500]
                            shadow-md w-40 p-2 rounded-md bg-[#f3f4f7] ' >
                            <div className='ml-5' >
                                <i> <SiFormspree></SiFormspree> </i>
                            </div>
                            <div className='' >
                                <p className='ml-1' >৪৮ টি  লাইভ ক্লাস</p>
                            </div>
                        </div>
                        <div className='flex items-center text-[11px] font-[500]
                            shadow-md w-40 p-2 rounded-md bg-[#f3f4f7] ' >
                            <div className='ml-5' >
                                <i className=''  > <GoProjectRoadmap></GoProjectRoadmap> </i>
                            </div>
                            <div className='ml-2' >
                                <p  >১০ টি প্রজেক্ট</p>
                            </div>
                        </div>
                        <div className='flex items-center text-[11px] font-[500]
                            shadow-md w-28 p-2 rounded-md bg-[#f3f4f7] ' >
                            <div className='ml-1' >
                                <i  > <FaCalendarAlt></FaCalendarAlt> </i>
                            </div>
                            <div className='ml-1' >
                                <p  >২৫ দিন বাকি</p>
                            </div>
                        </div>
                        <div className='flex items-center text-[11px]  font-[500]
                            shadow-md w-48 p-2 rounded-md bg-[#f3f4f7] ' >
                            <div className='' >
                                <i> <MdOutlineVideoLibrary></MdOutlineVideoLibrary> </i>
                            </div>
                            <div className='ml-1' >
                                <p >৮০৭ টি  প্রি রেকর্ডেড ভিডিও</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[50%]' >
                    
                </div>

                {/* live class time support class time start */}

                <div className=' grid lg:grid-cols-4 md:grid-col-2  gap-2 mt-10 ' >
                    <div className=' bg-slate-300  shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    '>
                        <p className='text-center' >
                            ব্যাচ শুরু <br /> বৃহস্পতিবার ২৬ সেপ্টেম্বর
                        </p>
                    </div>
                    <div className=' bg-slate-300  shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    ' >
                        <p className='text-center' >
                        লাইভ ক্লাস <br /> রাত ১০:১৫- ১১:৪৫ (বৃহ,শনি)
                        </p>
                    </div>
                    <div className=' bg-slate-300 shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    ' >
                        <p className='text-center' >
                            ৩০০ সিট বাকি
                        </p>
                    </div>
                    <div className=' bg-slate-300 shadow-md
                    h-[110px] p-10 
                    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-3xl hover:text-[white]
                    ' >
                        <p className='text-center' >
                            ভর্তি চলছে ৮ম ব্যাচে
                        </p>
                    </div>
                </div>

                {/* live class time support class time end */}



            </div>
        </div>
    );
};

export default CourseDetailsPage;
