import React from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
const courses = [
  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },

  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },

  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },


  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },

  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },

  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },


  {
    course_name: "Next.js 3",
    course_img: "https://via.placeholder.com/150", // Placeholder image
    instructor_name: "Ishan",
    total_sit: 300,
    batch_no: 2,
  },
  // Add more courses here if needed
];
const ManageCoursePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Course Management</h2>

      {/* Table on Larger Screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Course Image</th>
              <th className="py-3 px-6 text-left">Course Name</th>
              <th className="py-3 px-6 text-left">Instructor Name</th>
              <th className="py-3 px-6 text-left">Total Seats</th>
              <th className="py-3 px-6 text-left">Batch No</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {courses.map((course, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={course.course_img}
                        alt={course.course_name}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium">{course.course_name}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <span>{course.instructor_name}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <span>{course.total_sit}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <span>{course.batch_no}</span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center gap-2 text-2xl">
                    <IoMdAddCircleOutline />
                    <MdDeleteOutline />
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Card Layout for Mobile Devices */}
      <div className="block md:hidden">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center mb-4">
              <img
                src={course.course_img}
                alt={course.course_name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{course.course_name}</h3>
                <p className="text-sm text-gray-600">Instructor: {course.instructor_name}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">Total Seats:</span> {course.total_sit}
              </div>
              <div>
                <span className="font-medium">Batch No:</span> {course.batch_no}
              </div>
            </div>
            <div className="flex justify-end mt-4 text-2xl">
            <IoMdAddCircleOutline />
            <MdDeleteOutline />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageCoursePage

