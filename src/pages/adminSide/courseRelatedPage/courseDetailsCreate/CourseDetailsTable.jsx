import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; // React Icons for action buttons
const CourseDetailsTable = ({ detail }) => {
    const courseData = detail.data[0];
    // const courseData = {
    //     course_id: "66fd35c446cdd7a41a617636",
    //     title: "Full Stack Web Development with JavaScript (MERN)",
    //     description: "১ বারই কোর্স কিনুন। ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং ব্যাকেন্ড ওয়েব ডেভেলপমেন্ট - ২ টা ক্যারিয়ার ট্র্যাকের দরজাই ওপেন রাখুন। কারন এক্সেস তো থাকবে লাইফটাইমই! আর সাথে ৩ টা জিনিস রাখবেন- ল্যাপটপ বা কম্পিউটার, ইন্টারনেট কানেকশন ও শেখার অদম্য ইচ্ছা। বিজয় আপনারই!",
    //     rating: "313",
    //     course_fee: "8000",
    //     total_live_class: "55",
    //     total_project: "20",
    //     total_video: "456",
    //     course_duration: "6",
    //     course_video: "upload video",
    //     youtube_video_url: "fldaldsds"
    // };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Course Details</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg mb-6">
                <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                        <tr className="bg-indigo-600 text-white">
                            <th className="px-4 py-3 border">Field</th>
                            <th className="px-4 py-3 border">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(courseData).map(([key, value]) => (
                            <tr key={key} className="hover:bg-gray-100 transition-colors">
                                <td className="px-4 py-3 border font-medium capitalize">{key.replace('_', ' ')}</td>
                                <td className="px-4 py-3 border">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Centered Action Buttons for the Whole Course */}
            <div className="flex justify-center space-x-4">
                <button className="flex items-center px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">
                    <FiEdit className="mr-2" /> Update Course
                </button>
                <button className="flex items-center px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300">
                    <FiTrash2 className="mr-2" /> Delete Course
                </button>
            </div>
        </div>
    );
};

export default CourseDetailsTable;