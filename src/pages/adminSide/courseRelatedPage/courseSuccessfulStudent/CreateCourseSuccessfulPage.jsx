import React, { useEffect } from 'react'
import successfulStudentStore from '../../../../apiRequest/successfulStudentApi';
import courseStore from '../../../../apiRequest/courseApi';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../../uploadImage/UploadImage';

const CreateCourseSuccessfulPage = () => {
  const {id} = useParams();
  const {successfulStudentCreate,successfulStudentDataListApi} = successfulStudentStore();
  const {singleCourseDataApi,singleCourseData} = courseStore();
  window.scrollTo(0, 0);
  useEffect(()=>{
    (async()=>{
      await singleCourseDataApi();
    })()
  
  },[id])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const course_id = e.target.course_id.value;
    const student_name = e.target.student_name.value;
    const batch_no = e.target.batch_no.value;
    const position_of_job = e.target.position_of_job.value;
    const company_name = e.target.company_name.value;
    const img = e.target.img.files[0];
    
    let ImageUrl = '';
    if (!img?.name) {
        ImageUrl = ''
    } else {
        ImageUrl = await uploadImg(img);
    }
    
    const payload = {
      course_id,
      student_name,
      batch_no,
      position_of_job,
      company_name,
      img : ImageUrl
    };
    const res = await successfulStudentCreate(payload);
    if(res){
    await successfulStudentDataListApi();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Student Information added successfully",
      });
      e.target.reset();
    }else{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add student information",
      });
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Student Information Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Course name */}
          <div className="mb-4">
            <label htmlFor="course_id" className="block text-sm font-medium text-gray-700 mb-1">
              Course Name
            </label>
            <select id="course_id" name="course_id" className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
                
                  <option  value={singleCourseData?._id}>{singleCourseData?.course_name}</option>
            </select>
          </div>

          {/* Student Name */}
          <div className="mb-4">
            <label htmlFor="student_name" className="block text-sm font-medium text-gray-700 mb-1">
              Student Name
            </label>
            <input
              type="text"
              id="student_name"
              name="student_name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Student Name"
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Batch Number */}
          <div className="mb-4">
            <label htmlFor="batch_no" className="block text-sm font-medium text-gray-700 mb-1">
              Batch Number
            </label>
            <input
              type="number"
              id="batch_no"
              name="batch_no"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Batch Number"
            />
          </div>

          {/* Position of Job */}
          <div className="mb-4">
            <label htmlFor="position_of_job" className="block text-sm font-medium text-gray-700 mb-1">
              Position of Job
            </label>
            <input
              type="text"
              id="position_of_job"
              name="position_of_job"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Position of Job"
            />
          </div>

          {/* Company Name */}
          <div className="mb-6">
            <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Company Name"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default CreateCourseSuccessfulPage
