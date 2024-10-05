import React, { useEffect } from 'react'
import courseStore from '../../../../apiRequest/courseApi';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import getInCourseStore from '../../../../apiRequest/getInCourseApi';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import GetInCourseTablePage from '../getInCourseTable/GetInCourseTablePage';
import { useParams } from 'react-router-dom';
const GetInCoursePage = () => {
  const {id} = useParams();
    const {singleCourseData,singleCourseDataApi} = courseStore();
    const {getInCourseCreateApi,getInCourseListApi} = getInCourseStore()
    useEffect(()=>{
        (async()=>{
            await singleCourseDataApi(id);
        })()
    },[]);
    const handleSubmitForm = async (e)=>{
        e.preventDefault();
        const course_id = e.target.course_id.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const logo = e.target.logo.files[0];

        let ImageUrl = '';

        if (!logo?.name) {
            ImageUrl = ''
        } else {
          ImageUrl = await uploadImg(logo);
        }

        const payload = {
            course_id,
            title,
            description,
            logo : ImageUrl
        };

        let res = await getInCourseCreateApi(payload);
        if(res){
          await getInCourseListApi()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Course created successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            toast.error("Course creation failed");
        }
        e.target.reset();
    }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white my-4 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center"> Create Get In Course for {singleCourseData.course_name}  </h1>

        <form onSubmit={handleSubmitForm} className="space-y-6">
          {/* Course ID */}
        <div className="mb-4">
            <label htmlFor="course_id" className="block text-gray-700 font-medium mb-2">Course Name</label>
            <select id="course_id" name="course_id" className="form-select w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
                  <option  value={singleCourseData._id}>{singleCourseData.course_name}</option>
            </select>
        </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Course Title"
              required
            />
          </div>
           {/* Nav Logo */}
           <div>
            <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
              Logo
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
                accept="image/*"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Course Description"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <GetInCourseTablePage></GetInCourseTablePage>
    </>
  )
}

export default GetInCoursePage
