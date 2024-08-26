import React from 'react'
import {CiStar} from "react-icons/ci";

const CourseCategoryCard = () => {
    return (
        <div>
            <div className={"mt-[55px]"}>
                            <div className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 
                            card  w-[268px] shadow-md hover:outline-none ">
                                <figure>
                                    <img className={"p-4 w-full contrast-100  "}
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1724234479/Rectangle_1080_jnuzwi.png"
                                        alt="Shoes"/>
                                </figure>
                                <div className="card-body mb-0 ">
                                    <h2 className="card-title  ">
                                        <h5 className={"text-[14px] mb-0 text-[#334155] font-semibold "}>Beginner’s
                                            Guide to Design</h5>
                                    </h2>
                                    <p className={"text-[14px] text-[#334155] font-[400] "}>By Ronald Richards</p>
                                    <div className="text-[16px] flex items-center   ">
                                        <div className={"flex items-center "}>
                                            <i className={"text-amber-400 "}> <CiStar></CiStar> </i>
                                            <i className={"text-amber-400 "}> <CiStar></CiStar> </i>
                                            <i className={"text-amber-400 "}> <CiStar></CiStar> </i>
                                            <i className={"text-amber-400 "}> <CiStar></CiStar> </i>
                                            <i className={"text-amber-400 "}> <CiStar></CiStar> </i>
                                        </div>
                                        <div>
                                            <span className={"text-[14px]  block "}>(1200 Ratings)</span>
                                        </div>
                                    </div>
                                    <p className={"text-[12px] font-[400] "}>22 Total Hours. 155 Lectures. Beginner</p>
                                    <h4 className={"text-[20px] block font-semibold text-[#0F172A] "}>$149.9</h4>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default CourseCategoryCard
