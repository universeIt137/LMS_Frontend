import React, { useEffect } from 'react'
import courseStore from './../../../apiRequest/courseApi';
import { uploadImg } from '../../../uploadImage/UploadImage';
import instructorStore from '../../../apiRequest/instructorApi';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import InstructorManageTable from './InstractorManageTable';

const InstructorCreatePage = () => {
  const {id} = useParams();
  console.log(id);
    const {singleCourseDataApi,singleCourseData} = courseStore();
    const {instructorCreateApi} = instructorStore();
    useEffect(()=>{
        (async()=>{
            await singleCourseDataApi(id);
        })()
    },[]);
    const handleValueSubmit = async (e) =>{
        e.preventDefault();
        const instructor_name = e.target.instructor_name.value;
        const instructor_img = e.target.instructor_img.files[0];
        const instructor_role = e.target.instructor_role.value;
        const course_id = e.target.course_id.value;

        let ImageUrl = '';

        if (!instructor_img?.name) {
            ImageUrl = ''
        } else {
          ImageUrl = await uploadImg(instructor_img);
        }

        let payload = {
            instructor_name,
            instructor_img: ImageUrl,
            instructor_role,
            course_id
        };

        let res = await instructorCreateApi(payload);
        if(res){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Instructor created successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Failed to create instructor",
                text: "Please try again later"
            });
        }
        e.target.reset();  
    }
  return (
    <div>
      <div>
        <Helmet>
          <title>Dashboard | Instructor Create</title>
        </Helmet>
      </div>
        <div className="flex justify-center items-center  min-h-[calc(100vh-135px)] ">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6"> {singleCourseData?.course_name}  Instructor Create</h2>
        
        <form onSubmit={handleValueSubmit} >
          {/* Instructor Name */}
          <div className="mb-4">
            <label htmlFor="instructor_name" className="block text-gray-700 font-semibold mb-2">Instructor Name</label>
            <input
              type="text"
              id="instructor_name"
              name="instructor_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter instructor name"
              required
            />
          </div>

          {/* Instructor Image */}
          <div className="mb-4">
            <label htmlFor="instructor_img" className="block text-gray-700 font-semibold mb-2">Instructor Image URL</label>
            <input
              type="file"
              id="instructor_img"
              name = "instructor_img"
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter instructor image URL"
              required
            />
          </div>

          {/* Instructor Role */}
          <div className="mb-4">
            <label htmlFor="instructor_role" className="block text-gray-700 font-semibold mb-2">Instructor Role</label>
            <input
              type="text"
              id="instructor_role"
              name = "instructor_role"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter instructor role"
              required
            />
          </div>

          {/* Course Name */}
          <div className="mb-4">
            <label htmlFor="course_name" className="block text-gray-700 font-semibold mb-2">Course Name</label>
            <select id="course_id" name="course_id" className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
      
                  <option  value={singleCourseData?._id}>{singleCourseData?.course_name}</option>
      
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div>
      <InstructorManageTable courseId = {id} ></InstructorManageTable>
    </div>
    </div>
  )
}

export default InstructorCreatePage
