import React, { useEffect } from 'react'
import getInCourseStore from '../../../../apiRequest/getInCourseApi'
import { useNavigate, useParams } from 'react-router-dom';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import Swal from 'sweetalert2';

const UpdateGetInCoursePage = () => {
  window.scrollTo(0, 0);
  let {getInCourseSingleDataApi,getInCourseSingleData,getInCourseUpdateApi,getInCourseListApi} = getInCourseStore();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    (async()=>{
      await getInCourseSingleDataApi(id);
    })()
  }, [id]);
  
  console.log(getInCourseSingleData);
  let { logo: incomingLogo } = getInCourseSingleData;
  
  const handleUpdate = async (e) => {
    e.preventDefault();

    const course_name = e.target.course_name.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const logo = e.target.logo.files[0];

  
    
    let CourseImageUrl = incomingLogo;
  
    if (!logo?.name) {
      CourseImageUrl = incomingLogo;
    } else {
      CourseImageUrl = await uploadImg(logo);
    }
  
    const payload = {
      course_name,
      title,
      description,
      logo: CourseImageUrl,
    };
  
    let res = await getInCourseUpdateApi(id,payload);
    if (res) {
      await getInCourseListApi();
      navigate("/dashboard/get-in-course");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Get in course data has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6"> Update Get IN Course For {getInCourseSingleData[0]?.courseData?.course_name} </h2>
        <form onSubmit={handleUpdate} >
          {/* Course Name */}
          <div className="mb-4">
            <label htmlFor="course_name" className="block text-sm font-medium text-gray-700 mb-1">
              Course Name
            </label>
            <input
              type="text"
              id="course_name"
              name = "course_name"
              defaultValue={getInCourseSingleData[0]?.courseData?.course_name}
              key={Date.now()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter course name"
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name='title'
              defaultValue={getInCourseSingleData[0]?.title}
              key={Date.now()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter title"
            />
          </div>

          <div className="avatar">
            <div className="w-12">
              <img src= {getInCourseSingleData[0]?.logo}  />
            </div>
          </div>

          {/* Logo */}
          <div className="mb-4">
            <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
              Logo URL
            </label>
            <input
              type="file"
              id="logo"
              name='logo'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter logo URL"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name='description'
              defaultValue={getInCourseSingleData[0]?.description}
              key={Date.now()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter course description"
              rows="4"
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

export default UpdateGetInCoursePage
