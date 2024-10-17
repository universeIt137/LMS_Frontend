import React from 'react'
import { IoCreateOutline } from 'react-icons/io5';
import { MdDeleteOutline, MdOutlineKeyboardCommandKey } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const ManageDataTable = ({course_id}) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Add Other Course Data</h2>

            <table className="table-auto w-full border-collapse border text-center border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 w-1/2">Topic</th>
                  <th className="border border-gray-300 px-4 py-2 w-1/2">Manage Topic</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Curriculum</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/curriculum-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Get_in_course</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/get-in-course/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Project</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/project-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Instructor</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/instructor-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Course Successful Student</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/successful-course-student-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Feedback</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/feedback-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Module</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/module-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Module Details</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/module-details/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Assignment</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/assignment-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Resources</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to="/dashboard/resources-create">
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Pre-Recorded Videos</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to={`/dashboard/pre-recorded-videos-create/${course_id}`}>
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold w-1/2">Live Class</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <Link to="/dashboard/live-class-create">
                      <MdOutlineKeyboardCommandKey className="text-3xl" />
                    </Link>
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
