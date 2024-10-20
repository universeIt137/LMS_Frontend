import React, { useEffect, useState } from "react";
import courseStore from './../../../../apiRequest/courseApi';
import { useParams } from "react-router-dom";
import courseDetailsStore from "../../../../apiRequest/courseDetailsApi";
import toast from "react-hot-toast";
import { uploadVideo } from "../../../../uploadVideo/UploadVideo";
import Swal from "sweetalert2";
import CourseDetailsTable from "./CourseDetailsTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/UseAxiosPublic";
import ManageDataTable from "../ManageDataTable";

const CourseDetailsCreatePage = () => {
  const [loader,setLoader] = useState(false);
  const { singleCourseDataApi, singleCourseData } = courseStore();
  const { createCourseDetailsApi } = courseDetailsStore();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    (async () => {
      await singleCourseDataApi(id);
    })()
  }, [])
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
      title: title_courseDetail,
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


    setLoader(true);
    let res = await createCourseDetailsApi(payload);
    setLoader(false);
    if (res) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Course Details has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      toast.error("Something went wrong");
    }
    e.target.reset();
  };

  const { data: courseDetail = {} } = useQuery({
    queryKey: ['courseDetail'],
    queryFn: async () => {
      const res = await axiosPublic(`get-single-course-details/${id}`);
      return res.data.data[0];
    }
  }) 



  return (
    <>
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
                <option value={singleCourseData?._id} >{singleCourseData?.course_name}</option>
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            {/* total_video */}
            <div className="mb-4">
              <label htmlFor="total_video" className="block text-gray-700">Total Pre-Records Videos</label>
              <input
                type="number"
                id="total_video"
                name="total_video"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter Total Videos"
                required
              />
            </div>
            {/* course_duration */}
            <div className="mb-4">
              <label htmlFor="course_duration" className="block text-gray-700">Course Duration</label>
              <input
                type="number"
                id="course_duration"
                name="course_duration"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Course Duration"
                required
              />
            </div>
            {/* course related video */}
            <div className="mb-4">
              <label htmlFor="course_video" className="block text-gray-700">Course Related Video </label>
              <input
                type="file"
                id="course_video"
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
          <div className="mt-8">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
              disabled={loader} // Disable button when loading
            >
              {loader ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Create Course Details'
              )}
            </button>
          </div>

        </form>


      </div>

    
      <div className="my-8" >
        <ManageDataTable  course_id={id}></ManageDataTable>
      </div>
      
      <div className="my-8" >
        <CourseDetailsTable course_id={id}></CourseDetailsTable>
      </div>
      
    </>
  );
};

export default CourseDetailsCreatePage;
