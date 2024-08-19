import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import StarRatings from 'react-star-ratings'; // Import StarRatings component
import { TfiWorld } from "react-icons/tfi";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";


const CourseDetailsPage = () => {
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


                        {/* course description area */}

                        <div className="mt-14">
                            <div className="flex gap-6 mb-6">
                                <a href="#desc" className="btn border-gray-400 hover:bg-transparent focus:border-2  focus:border-green-100 btn-xs sm:btn-sm md:btn-md border-2 bg-transparent focus:bg-green-100 hover:border-gray-400 text-sm text-gray-700">Description</a>
                                <button className="btn border-gray-400 hover:bg-transparent focus:border-2  focus:border-green-100 btn-xs sm:btn-sm md:btn-md border-2 bg-transparent focus:bg-green-100 hover:border-gray-400 text-sm text-gray-700">Instructor</button>
                                <button className="btn border-gray-400 hover:bg-transparent focus:border-2  focus:border-green-100 btn-xs sm:btn-sm md:btn-md border-2 bg-transparent focus:bg-green-100 hover:border-gray-400 text-sm text-gray-700">Syllabus</button>
                                <button className="btn border-gray-400 hover:bg-transparent focus:border-2  focus:border-green-100 btn-xs sm:btn-sm md:btn-md border-2 bg-transparent focus:bg-green-100 hover:border-gray-400 text-sm text-gray-700">Reviews</button>
                            </div>
                            <hr />
                            <div>
                                <div id='desc' className="desc mt-10">
                                    <h2 className="font-bold text-2xl">Course Description</h2>
                                    <p className="pt-1 text-gray-700 text-lg">This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. </p>
                                </div>

                                <div id='desc' className="desc mt-10 mb-6">
                                    <h2 className="font-bold text-2xl">Certification</h2>
                                    <p className="pt-1 text-gray-700 text-lg">At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field. </p>
                                </div>
                                <hr />

                                <div id='desc' className="desc mt-10 pb-10">
                                    <h2 className="font-bold text-2xl mb-3">Instructor</h2>
                                    <h2 className="text-primary font-bold text-2xl">Sheikh Hasina</h2>
                                    <p>UI/UX Designer</p>

                                    <div className="flex gap-4 items-center mt-4">
                                        <img className="w-28 h-24 rounded-full" src='https://res.cloudinary.com/dsdgb5c7l/image/upload/v1724066484/images_azo3fc.jpg' alt="sh" />
                                        <div className="">
                                            <p className="flex items-center gap-2"><SlBadge /><span>40,548 Reviews</span></p>
                                            <p className="flex items-center gap-2"><RiGraduationCapLine /><span>500 Student</span></p>
                                            <p className="flex items-center gap-2"><CiPlay1 /><span>15 Plays</span></p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-lg pt-4">With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.</p>
                                </div>
                                <hr />
                                <div className="syllabus pt-5">
                                    <h2 className="font-bold text-2xl mb-4">Instructor</h2>

                                    <div tabIndex={0} className="collapse bg-transparent collapse-plus border-base-300 bg-base-200 border rounded-none">
                                        <div className="collapse-title flex items-center text-xl font-medium">
                                            <svg
                                                className="w-4 h-4 mr-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span className="flex-grow font-bold text-lg">Introduction to UX Design</span>
                                            <div className="flex space-x-4 text-sm text-gray-700">
                                                <span>5 lessons</span>
                                                <span>1 hour</span>
                                            </div>
                                        </div>
                                        <div className="collapse-content">
                                            <p tabindex={0}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum incidunt sit, vitae quo quisquam expedita, quaerat debitis eligendi adipisci repellat</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="collapse bg-transparent collapse-plus border-base-300 bg-base-200 border rounded-none">
                                        <div className="collapse-title flex items-center text-xl font-medium">
                                            <svg
                                                className="w-4 h-4 mr-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span className="flex-grow font-bold text-lg">Basics of User-Centered Design</span>
                                            <div className="flex space-x-4 text-sm text-gray-700">
                                                <span>5 lessons</span>
                                                <span>1 hour</span>
                                            </div>
                                        </div>
                                        <div className="collapse-content">
                                            <p tabindex={0} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum incidunt sit, vitae quo quisquam expedita, quaerat debitis eligendi adipisci repellat</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="collapse bg-transparent collapse-plus border-base-300 bg-base-200 border rounded-none">
                                        <div className="collapse-title flex items-center text-xl font-medium">
                                            <svg
                                                className="w-4 h-4 mr-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span className="flex-grow font-bold text-lg">Elements of User Experience</span>
                                            <div className="flex space-x-4 text-sm text-gray-700">
                                                <span>5 lessons</span>
                                                <span>1 hour</span>
                                            </div>
                                        </div>
                                        <div className="collapse-content">
                                            <p tabindex={0}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum incidunt sit, vitae quo quisquam expedita, quaerat debitis eligendi adipisci repellat</p>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="collapse bg-transparent collapse-plus border-base-300 bg-base-200 border rounded-none">
                                        <div className="collapse-title flex items-center text-xl font-medium">
                                            <svg
                                                className="w-4 h-4 mr-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <span className="flex-grow font-bold text-lg">Visual Design Principles</span>
                                            <div className="flex space-x-4 text-sm text-gray-700">
                                                <span>5 lessons</span>
                                                <span>1 hour</span>
                                            </div>
                                        </div>
                                        <div className="collapse-content">
                                            <p tabindex={0}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum incidunt sit, vitae quo quisquam expedita, quaerat debitis eligendi adipisci repellat</p>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>


                    </div>
                    <div className="card rounded-2xl h-max shadow-lg p-5">
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
                            <p className="font-semibold text-center text-lg">Share</p>
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
                                    <FaGithub size={24} />
                                </a>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetailsPage;
