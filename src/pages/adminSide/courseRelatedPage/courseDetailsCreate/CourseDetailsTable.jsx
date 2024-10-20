import React, { useEffect } from 'react'
import courseDetailsStore from '../../../../apiRequest/courseDetailsApi'
import { NavLink } from 'react-router-dom';

const CourseDetailsTable = ({course_id}) => {
    const {singleCourseDetailsByCourseIdApi,singleCourseDetailsByCourseId} = courseDetailsStore();
    useEffect(()=>{
        (()=>{
            singleCourseDetailsByCourseIdApi(course_id);
        }) ()
    },[course_id])
  return (
    <div className='max-w-screen-xl mx-auto ' >
      <div className="">
      <h1 className="text-3xl font-bold text-center mb-8">Course Details List</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className='' >
              <th className="px-6 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-700 uppercase">
                Course Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200  text-sm font-semibold text-gray-700 uppercase text-center ">
                Course Fee
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-700 uppercase">
                Live Class
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-700 uppercase">
                Instructor Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold text-gray-700 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 text-center ">
                {singleCourseDetailsByCourseId[0]?.courseData?.course_name}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 text-center ">
                { singleCourseDetailsByCourseId[0]?.course_fee}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 text-center ">
                {
                    singleCourseDetailsByCourseId[0]?.total_live_class
                }
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-800 text-center ">
                {singleCourseDetailsByCourseId[0]?.courseData?.instructor_name}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded mr-2">
                  <NavLink to={`/dashboard/course-details-update/${singleCourseDetailsByCourseId[0]?._id}`} >Edit</NavLink>
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default CourseDetailsTable
