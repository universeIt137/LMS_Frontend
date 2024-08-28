import React from 'react'
import { FaStar } from "react-icons/fa";

const Mentors = () => {
    return (
        <div className='' >
            
            <div className=' card w-[100%] shadow-2xl ' >
                <div className=" card-body">
                    <div className='card-img' >
                        <img className='w-full  backdrop-opacity-100' src=
                        "https://res.cloudinary.com/dj2edy2rg/image/upload/v1724577616/Rectangle_1136_m75ky3.png" alt="" />
                    </div>
                    <p className ='text-[#0F172A] text-sm text-center ' >
                        Ronald Richards
                    </p>
                    <p className=' text-sm text-center text-[#334155] font-thin ' >
                        UI/UX Designer
                    </p>
                    <hr />
                    <div className='flex justify-between items-center text-[20px] ' >
                        <div className='flex justify-between items-center  ' >
                                    <i className='text-[yellow] mt-1   ' > <FaStar/></i>
                                    <h6 className = " mx-2 font-semibold mt-2  " >4.9</h6>
                                </div>
                                <div className='flex items-center justify-around mt-2  ' >
                                    <h6 className='mx-2' >2400 </h6>
                                    <h6 className='' >Students</h6>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors

