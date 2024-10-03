import React, { useEffect, useState } from "react";
import courseStore from './../../../../apiRequest/courseApi';
import { useParams } from "react-router-dom";
import courseDetailsStore from "../../../../apiRequest/courseDetailsApi";
import toast from "react-hot-toast";
import { uploadVideo } from "../../../../uploadVideo/UploadVideo";
import Swal from "sweetalert2";

const CourseDetailsCreatePage = () => {
  const {singleCourseDataApi,singleCourseData} = courseStore();
  const {createCourseDetailsApi} = courseDetailsStore();
  const {id} = useParams();
  useEffect(()=>{
    (async()=>{
      await singleCourseDataApi(id);
    })()
  },[])
const handleCourseDetailsCreate = async (e) => {
  e.preventDefault();
  const course_id = e.target.course_id.value;
  const title_courseDetail = e.target.title_courseDetail.value;
  const description = e.target.description.value;
  const rating = e.target.rating.value;
  const course_fee = e.target.course_fee.value;
  const total_live_class = e.target.total_live_class.value;
  const youtube_video_url = e.target.youtube_video_url.value;
  const total_project = e.target.total_project.value;
  const total_video = e.target.total_video.value;
  const course_duration = e.target.course_duration.value;
  const course_video = e.target.course_video.files[0];


  let VideoUrl = '';

    if (!course_video?.name) {
      VideoUrl = ''
    } else {
      VideoUrl = await uploadVideo(course_video);
  }
  
  console.log(VideoUrl);

  const payload = {
    course_id,
    title:title_courseDetail,
    description,
    rating,
    course_fee,
    total_live_class,
    total_project,
    total_video,
    course_duration,
    youtube_video_url,
    course_video: VideoUrl,
  }



  let res = await createCourseDetailsApi(payload);
  if(res){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Course Details has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }else{
    toast.error("Something went wrong");
  }
  e.target.reset();
};

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleCourseDetailsCreate}
        className="w-full  bg-white p-8 rounded shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create {singleCourseData?.course_name} Course Details </h2>

        <div className="grid grid-cols-2 gap-4">
        {/* Course Name */}
        <div className="mb-4">
            <label htmlFor="course_id" className="block text-gray-700 font-medium mb-2">Course Name</label>
            <select id="course_id" name="course_id" className="form-select w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
              <option value= {singleCourseData?._id} >{singleCourseData?.course_name}</option>
            </select>
        </div>

        {/* title    */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title_courseDetail"
              id="title"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Course Title"
            />
          </div>
          {/* description    */}
          <div className="mb-4 col-span-2">
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              rows={"5"}
              placeholder="Enter Course Description"
            ></textarea>
          </div>
          {/* rating */}
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700">Rating</label>
            <input
              type="number"
              id="rating"
              
              name="rating"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Rating (1-5)"
            />
          </div>
          {/* course_fee */}
          <div className="mb-4">
            <label htmlFor="course_fee" className="block text-gray-700">Course Fee</label>
            <input
              type="number"
              id="course_fee"
              name="course_fee"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Course Fee"
            />
          </div>
          {/* total_live_class */}
          <div className="mb-4">
            <label htmlFor="total_live_class" className="block text-gray-700">Total Live Classes</label>
            <input
              type="number"
              name="total_live_class"
              id="total_live_class"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Total Live Classes"
            />
          </div>
          {/* total_project */}
          <div className="mb-4">
            <label htmlFor="total_project" className="block text-gray-700">Total Projects</label>
            <input
              type="number"
              name="total_project"
              id="total_project"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Total Projects"
            />
          </div>
          {/* total_video */}
          <div className="mb-4">
            <label htmlFor="total_video" className="block text-gray-700">Total Pre-Records Videos</label>
            <input
              type="number"
              id = "total_video"
              name="total_video"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter Total Videos"
            />
          </div>
          {/* course_duration */}
          <div className="mb-4">
            <label htmlFor="course_duration" className="block text-gray-700">Course Duration</label>
            <input
              type="number"
              id = "course_duration"
              name="course_duration"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Course Duration"
            />
          </div>
          {/* course related video */}
          <div className="mb-4">
            <label htmlFor="course_video" className="block text-gray-700">Course Related Video </label>
            <input
              type="file"
              id = "course_video"
              name="course_video"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          {/* youtube_video_url    */}
          <div className="mb-4">
            <label htmlFor="youtube_video_url" className="block text-gray-700">Or put youtube link of Video</label>
            <input
              type="text"
              name="youtube_video_url"
              id="title"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="youtube_video_url"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Create Course Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseDetailsCreatePage;
