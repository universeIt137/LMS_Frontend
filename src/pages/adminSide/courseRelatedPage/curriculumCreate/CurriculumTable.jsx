import React, { useEffect } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { NavLink, useParams } from 'react-router-dom'
import curriculumStore from '../../../../apiRequest/curriculumApi'

const CurriculumTable = () => {
  const { allCurriculumDataApi, allCurriculumDataList } = curriculumStore();
  const {id} = useParams();
  useEffect(() => {
    (async () => {
      await allCurriculumDataApi();
    })()
  }, []);

  return (
    <div className="ml-5 w-full mx-auto flex items-center justify-center my-10 bg-gray-100">
      <div className="w-full mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Course Curriculums</h2>

          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="border border-gray-300 px-4 py-2 text-center">Course Name</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Record Video</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Live Class</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Quiz</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allCurriculumDataList &&
                allCurriculumDataList.map((item, i) => {
                  return (
                    <tr key={i} className="hover:bg-gray-100 text-center ">
                      <td className="border border-gray-300 px-4 py-2">{ item?.courseData?.course_name } </td>
                      <td className="border border-gray-300 px-4 py-2"> {item?.record_video} </td>
                      <td className="border border-gray-300 px-4 py-2"> { item?.live_class } </td>
                      <td className="border border-gray-300 px-4 py-2"> {item?.quiz} </td>
                      <td className="border border-gray-300 px-4 py-2"> { item?.title.slice(0,6) }.. </td>
                      <td className="border border-gray-300 px-4 py-2"> { item?.description.slice(0,10) }... </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <div className='flex text-xl gap-2 font-bold'>
                          <NavLink title='update' to={`/dashboard/curriculum-update/${item._id}`}><FaRegEdit /></NavLink>
                          <span title='delete' className='cursor-pointer text-[22px]'><MdDeleteOutline /></span>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CurriculumTable
