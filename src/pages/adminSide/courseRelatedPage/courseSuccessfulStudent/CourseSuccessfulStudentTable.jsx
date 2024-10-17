import React, { useEffect } from 'react';
import successfulStudentStore from '../../../../apiRequest/successfulStudentApi';
import { RxUpdate } from 'react-icons/rx';
import { MdDeleteOutline } from 'react-icons/md';
import { NavLink, useParams } from 'react-router-dom';
import { deleteAlert } from '../../../../helper/deleteAlert';
import toast from 'react-hot-toast';

const CourseSuccessfulStudentTable = ({courseId}) => {
    window.scrollTo(0, 0);
  const {successfulStudentDelete,successfulStudentByCourseIdApi,successfulStudentByCourseIdData } = successfulStudentStore();
  
  useEffect(() => {
    (async () => {
      await successfulStudentByCourseIdApi(courseId);
    })();
  }, []);

  const handleDeleteStudent = async(id)=>{
    let res = await deleteAlert();
    if (res.isConfirmed) {
        let resp = await successfulStudentDelete(id);
        if (resp) {
            await successfulStudentByCourseIdApi(courseId);
            toast.success('Student deleted successfully');
        }
    }else{
        toast.error('Delete operation cancelled');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Course Successful Student Information</h2>

          <table className="table-auto w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200  ">
                <th className="border border-gray-300 px-4 py-2">Course Name</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Student Name</th>
                <th className="border border-gray-300 px-4 py-2">Batch No</th>
                <th className="border border-gray-300 px-4 py-2">Position of Job</th>
                <th className="border border-gray-300 px-4 py-2">Company Name</th>
                <th className="border border-b border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {successfulStudentByCourseIdData && successfulStudentByCourseIdData.map((item, i) => (
                <tr key={i} className="hover:bg-gray-100 border border-b border-gray-300 ">
                  <td className="border border-gray-300 px-4 py-2">{item?.courseData?.course_name}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={item?.img}
                      alt="img"
                      className="inline-block w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{item?.student_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item?.batch_no}</td>
                  <td className="border border-gray-300 px-4 py-2">{item?.position_of_job}</td>
                  <td className="border border-gray-300 px-4 py-2">{item?.company_name}</td>
                  <td className=" px-4 py-2 flex justify-center gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-2">
                      <NavLink title='update' to={`/dashboard/course-successful-student-update/${item._id}`}>
                        <RxUpdate className="text-xl" /> 
                      </NavLink>
                    </button>
                    <button onClick={handleDeleteStudent.bind(this,item._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg flex items-center gap-2">
                      <MdDeleteOutline className="text-xl" title='delete' /> 
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

export default CourseSuccessfulStudentTable;
