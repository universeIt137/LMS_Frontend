import React, { useEffect } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDeleteOutline, MdManageAccounts } from 'react-icons/md';
import { FaEdit } from "react-icons/fa";
import {  NavLink, useParams } from 'react-router-dom';
import courseStore from '../../../../apiRequest/courseApi';
import LoderReact from '../../../../components/loder/LoderReact';
import {toast} from 'react-hot-toast';
import { deleteAlert } from '../../../../helper/deleteAlert';
import Swal from 'sweetalert2';
import { FiCommand } from 'react-icons/fi';

const ManageCoursePage = () => {
  const {allCourseList,allCourseListApi,deleteCourseApi} = courseStore();

  useEffect(() => {
    (async()=>{
      await allCourseListApi();
    })()
  }, []);

 

  const handleDeleteCourse  = async (id) => {
    let deleteResp = await deleteAlert();
    if (deleteResp.isConfirmed){
        let resp = await deleteCourseApi(id)
        if (resp){
          await allCourseListApi();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course Data Deleted",
            showConfirmButton: false,
            timer: 1500
          });
        }else {
            errorToast("Delete fail");
        }
    }

};
  
  if(allCourseList === null){
    return (
      <LoderReact />
    )
  }else{
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
                <th className="py-3 px-6 text-left"> Course Details</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              { allCourseList && allCourseList.map((course, index) => (
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
                  <td className="py-3 px-6 flex items-center justify-center text-center">
                    
                    <NavLink to={`/dashboard/course-details-create/${course._id}`} ><FiCommand className='text-center text-3xl' /></NavLink>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center gap-2 text-2xl">
                      <div className='-mr-1' >
                     
                      </div>
                      <div className=' cursor-pointer' onClick={handleDeleteCourse.bind(this,course._id)} >
                        <MdDeleteOutline />
                      </div>
                      <div>
                        <NavLink title='update' to={`/dashboard/course-update/${course._id}`}>
                          <FaEdit className="text-2xl  " />
                        </NavLink>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Responsive Card Layout for Mobile Devices */}
        <div className="block md:hidden">
          { allCourseList && allCourseList.map((course, index) => (
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
}

export default ManageCoursePage

