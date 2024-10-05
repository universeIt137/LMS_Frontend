import React, { useEffect, useState } from 'react';


import toast, { ToastIcon } from 'react-hot-toast';
import courseStore from '../../../../apiRequest/courseApi';
import instructorStore from '../../../../apiRequest/instructorApi';
import { useNavigate, useParams } from 'react-router-dom';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import Swal from 'sweetalert2';


const UpdateCoursePage = () => {
  const { courseCreateApi, singleCourseData, allCourseListApi, singleCourseDataApi, updateCourseApi } = courseStore();
  const { instructorNameDropDown, instructorNameDropDownDropDownApi } = instructorStore();
  const { id } = useParams();

  const { course_img: incomingCourseImg } = singleCourseData;

  // console.log(incomingCourseImg);

  useEffect(() => {
    (async () => {
      await instructorNameDropDownDropDownApi();
      await singleCourseDataApi(id);
    })()
  }, []);



  const navigate = useNavigate()



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = e.target.course_img.files[0];
    const course_name = e.target.course_name.value;
    const instructor_name = e.target.instructor_name.value;
    const total_sit = e.target.total_sit.value;
    const batch_no = e.target.batch_no.value;

    let CourseImageUrl = incomingCourseImg;

    if (!image?.name) {
      CourseImageUrl = incomingCourseImg
    } else {
      CourseImageUrl = await uploadImg(image);
    }

    const payload = {
      course_img: CourseImageUrl,
      course_name: course_name,
      instructor_name: instructor_name,
      total_sit: total_sit,
      batch_no: batch_no,

    };
    let res = await updateCourseApi(id, payload);
    if (res) {
      await allCourseListApi();
      navigate("/dashboard/manage-courses");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Course data has been updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex  justify-center min-h-screen bg-gray-50 ">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
        <h2 key={Date.now()} className="text-3xl font-extrabold text-center mb-8 text-indigo-600">Update {singleCourseData?.course_name} Course</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            {/* Course Name */}
            <div className="mb-6">
              <label htmlFor="course_name" className="block text-sm font-medium text-gray-700 mb-2">Course Name</label>
              <input
                type="text"
                id="course_name"
                name="course_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Course Name"
                defaultValue={singleCourseData?.course_name}
                key={Date.now()}
              />
            </div>



            {/* Instructor Name */}
            <div className="mb-6">
              <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700 mb-2">
                Instructor Name
              </label>
              <select name='instructor_name' id="instructor_name" className="block w-full p-2 border border-gray-300 rounded-md">
                <option key={Date.now()} defaultValue={singleCourseData?.instructor_name}>Select Instructor</option>
                {instructorNameDropDown && instructorNameDropDown.map((item, i) => (
                  <option key={i} value={item.instructor_name}>
                    {item?.instructor_name}
                  </option>
                ))}
              </select>
            </div>


            {/* Total Sit */}
            <div className="mb-6">
              <label htmlFor="total_sit" className="block text-sm font-medium text-gray-700 mb-2">Total Sit</label>
              <input
                type="number"
                id="total_sit"
                name="total_sit"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Total Sit"
                defaultValue={singleCourseData?.total_sit}
                key={Date.now()}
              />
            </div>

            {/* Batch No */}
            <div className="mb-6">
              <label htmlFor="batch_no" className="block text-sm font-medium text-gray-700 mb-2">Batch No</label>
              <input
                type="number"
                id="batch_no"
                name="batch_no"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Batch No"
                defaultValue={singleCourseData?.batch_no}
                key={Date.now()}
              />
            </div>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full ">
              <img key={Date.now()} src={singleCourseData?.course_img} />

            </div>
          </div>


          {/* Course Image */}
          <div className="mb-6">
            <label htmlFor="course_img" className="block text-sm font-medium text-gray-700 mb-2">Course Image</label>
            <input
                type="file"
                id="course_img"
                name="course_img"
                accept="image/*"
                
                className="w-full px-4 py-2 border border-dashed border-indigo-500 rounded-lg bg-gray-50 text-indigo-500 file:bg-indigo-500 file:text-white file:px-4 file:py-2 file:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
            >
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoursePage;
