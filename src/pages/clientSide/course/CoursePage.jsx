import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub   } from 'react-icons/fa'; 
import StarRatings from 'react-star-ratings'; // Import StarRatings component
import { TfiWorld } from "react-icons/tfi";

const CoursePage = () => {
    return (
        <div className="">
            <div className="container mx-auto py-11">
                <div className="lg:grid grid-cols-3 gap-10 justify-between">
                    <div className='col-span-2'>
                        <div className='font-semibold text-sm'>
                            <Link to="/">Home</Link> <span> &gt; </span>
                            <Link to="/categories">Categories</Link> <span> &gt; </span>
                            <Link to="/course/introduction-to-user-experience-design">
                                Introduction to User Experience Design
                            </Link>
                        </div>
                        <div className='py-10'>
                            <h1 className="font-bold text-3xl leading-10">Introduction to User Experience Design</h1>
                            <p className="text-gray-700 text-lg">This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.</p>
                        </div>
                        <div>
                        <div className="mt-6">
                            <div className="flex items-center space-x-4">
                                <p className='text-gold text-2xl'>4.6</p>
                                <StarRatings
                                rating={4.6} // Default rating
                                starRatedColor="gold"
                                numberOfStars={5}
                                name="rating"
                                starDimension="25px"
                                starSpacing="1px"
                                />
                                <p className="text-sm text-gray-700">
                                (651651 ratings) | 22 Total Hours. 155 Lectures. All levels
                                </p>
                            </div>
                            <div className='pt-6 flex items-center gap-2'>
                                <img className='w-10 rounded-full h-10' src="https://res.cloudinary.com/dsdgb5c7l/image/upload/v1723976525/image_4_flarz1.png" alt="cardimage" />
                                <p>Created By <Link className='text-blue-600'>Your Daddy</Link></p>

                            </div>
                            <div className='pt-6 flex items-center gap-2'>
                                <TfiWorld />
                                <p className='text-lg'>English, Spanish, Italian, German</p>

                            </div>
                            </div>
                        </div>


                    </div>
                    <div className="card rounded-2xl shadow-lg p-5">
                        <img src="https://res.cloudinary.com/dsdgb5c7l/image/upload/v1723976525/image_4_flarz1.png" alt="cardimage" />
                        <div className="p-7">
                           <div className="flex items-center gap-4">
                                <h2 className="font-semibold text-2xl">$49.5</h2>
                                <h2 className="font-semibold text-lg text-gray-900"><del>$99.5</del></h2>
                                <h2 className="font-semibold text-lg text-green-600">$50% off</h2>
                           </div>
                           <Link className='btn hover:bg-white hover:text-neutral-900 hover:border-2 hover:border-neutral-900 border-0 bg-neutral-900 text-white w-full rounded-md text-sm'>Add to Cart</Link>
                           <Link className='btn mt-4 hover:bg-neutral-900 hover:text-white bg-white border-2 hover:border-0 border-neutral-900 text-black w-full rounded-md text-sm'>Buy Now</Link>
                           <hr className="my-4 border-gray-300" />
                            <div className="flex justify-center space-x-4 mt-4">
                                {/* Social Icons */}
                                <a href="#" className="text-blue-600 hover:text-blue-800 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50">
                                <FaFacebookF size={24} />
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-600 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50">
                                <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-blue-700 hover:text-blue-900 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50">
                                <FaLinkedinIn size={24} />
                                </a>
                                <a href="#" className="text-gray-900 hover:text-gray-950 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50">
                                <FaGithub  size={24} />
                                </a>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoursePage;
