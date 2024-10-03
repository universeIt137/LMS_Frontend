import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; // React Icons for action buttons
const CourseDetailsTable = ({ courseDetails }) => {
    // const courseDetails = {
    //     "_id": "66fe2890ecefc44d841912a7",
    //     "course_id": "66fbc1bdb1cf47476ac993bf",
    //     "title": "fsdf",
    //     "description": "adfas",
    //     "rating": 4,
    //     "course_fee": 4,
    //     "total_live_class": 3,
    //     "total_project": 30,
    //     "total_video": 34,
    //     "course_duration": 34,
    //     "course_video": "https://res.cloudinary.com/dnvmj9pvk/video/upload/v1727932557/prguqy5jdf5qjfwthalo.mp4",
    //     "youtube_video_url": "4334",
    //     "createdAt": "2024-10-03T05:16:00.023Z",
    //     "updatedAt": "2024-10-03T05:16:00.023Z",
    //     "curriculumData": [],
    //     "getInCourseData": [
    //         {
    //             "_id": "66fe3233e29ba267eb57d3b8",
    //             "course_id": "66fbc1bdb1cf47476ac993bf",
    //             "logo": "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1727935026/acdv1asxhxrkhvn42ot3.png",
    //             "title": "title",
    //             "description": "description",
    //             "createdAt": "2024-10-03T05:57:07.198Z",
    //             "updatedAt": "2024-10-03T05:57:07.198Z"
    //         }
    //     ],
    //     "projectData": [],
    //     "courseSuccessfulStudentData": [],
    //     "feedbackStudentData": [],
    //     "courseInstructorData": []
    // };

    // Function to handle rendering of values, including nested arrays/objects
    const renderValue = (key, value) => {
        if (Array.isArray(value) && value.length > 0) {
            // For arrays, display a specific format
            return value.map((item, index) => (
                <div key={index} className="mb-2">
                    {Object.entries(item).map(([subKey, subValue], subIndex) => (
                        <div key={subIndex} className="text-sm">
                            <strong>{subKey}: </strong>{subValue.toString()}
                        </div>
                    ))}
                </div>
            ));
        } else if (typeof value === 'object' && value !== null) {
            // For objects, render key-value pairs
            return (
                <div className="text-sm">
                    {Object.entries(value).map(([subKey, subValue], index) => (
                        <div key={index}>
                            <strong>{subKey}: </strong>{subValue.toString()}
                        </div>
                    ))}
                </div>
            );
        } else {
            return value.toString(); // For primitive values (number, string, etc.)
        }
    };



    return (
        <>
            <div className="container mx-auto p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="table-auto w-full border-collapse border border-gray-300 bg-gray-800 text-white">
                        <thead>
                            <tr className="bg-gray-900">
                                <th className="px-4 py-2 border text-left">Field Name</th>
                                <th className="px-4 py-2 border text-left">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(courseDetails).map(([key, value], index) => (
                                <tr key={index} className="hover:bg-gray-700">
                                    <td className="px-4 py-2 border font-medium">{key}</td>
                                    <td className="px-4 py-2 border">{renderValue(key, value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsTable;