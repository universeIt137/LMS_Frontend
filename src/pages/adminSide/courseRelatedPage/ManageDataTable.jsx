import React from 'react'
import { IoCreateOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const ManageDataTable = () => {
    const data = [
        {
          curriculum: 'Full Stack Web Development',
          get_in_course: 'MERN Stack',
          project: 'E-commerce Website',
          instructor: 'John Doe',
          course_successful_student: '100+ students',
          feedback: 'Excellent course',
        },
        {
          curriculum: 'Data Science',
          get_in_course: 'Python and ML',
          project: 'AI-based Recommendation System',
          instructor: 'Jane Smith',
          course_successful_student: '200+ students',
          feedback: 'Very informative',
        },
        {
          curriculum: 'Mobile App Development',
          get_in_course: 'React Native',
          project: 'Social Media App',
          instructor: 'Mike Johnson',
          course_successful_student: '150+ students',
          feedback: 'Great learning experience',
        }
      ];
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Course Data Table</h2>

          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left w-1/2">Topic</th>
              <th className="border border-gray-300 px-4 py-2 text-left w-1/2">Action</th>
                {/* <th className="border border-gray-300 px-4 py-2 text-left">Curriculum</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Get in Course</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Project</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Instructor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Successful Students</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Feedback</th> */}
              </tr>
            </thead>
            <tbody>
                <tr  className="hover:bg-gray-100">
                  {/* <td className="border border-gray-300 px-4 py-2">curriculum</td>
                  <td className="border border-gray-300 px-4 py-2">get_in_course</td>
                  <td className="border border-gray-300 px-4 py-2">project</td>
                  <td className="border border-gray-300 px-4 py-2">instructor</td> */}
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Curriculum</td>
                  <td className="  px-4 py-2 w-1/2 ">
                    <div className="flex gap-10 text-2xl items-center">
                     <Link to="/dashboard/curriculum-create"><IoCreateOutline /></Link>
                     {/* <RxUpdate /> <MdDeleteOutline /> */}
                    </div>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ManageDataTable
