import React, { useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import getInCourseStore from '../../../../apiRequest/getInCourseApi';
import { deleteAlert } from '../../../../helper/deleteAlert';
import { NavLink, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const GetInCourseTablePage = () => {
  const { getInCourseDeleteApi, getInCourseUpdateApi, getInCourseSingleDataApi, getInCourseSingleData, getInCourseDataList, getInCourseListApi } = getInCourseStore();
  const { id } = useParams();

  useEffect(() => {
    (async()=>{
      await getInCourseListApi();
    })()
  },[])

  const handleDelete = async function (id) {
    console.log(id);
    let res = await deleteAlert();
    if (res.isConfirmed) {
      await getInCourseDeleteApi(id);
      toast.success('Course deleted successfully');
      await getInCourseListApi(); 
    }else{
      toast.error('Failed to delete ');
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Get In Course Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">Course Name</th>
                <th className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">Title</th>
                <th className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-center">Logo</th>
                <th className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-left">Description</th>
                <th className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {getInCourseDataList &&
                getInCourseDataList.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-100 border">
                    <td className="py-2 px-4 border-b text-left">{item.courseData.course_name}</td>
                    <td className="py-2 px-4 border-b text-left">{item.title}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <img src={item.logo} alt="Course Logo" className="w-12 h-12 inline-block" />
                    </td>
                    <td className="py-2 px-4 border-b text-left">{item.description}</td>
                    <td className="py-[26px] px-4 text-center flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 no-underline">
                        <NavLink to={`/dashboard/update/${item._id}`} ><FaRegEdit /></NavLink>
                      </button>
                      <button
                        onClick={handleDelete.bind(this, item._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 no-underline"
                      >
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetInCourseTablePage;
