import React, { useEffect, useState } from 'react'
import courseDetailsStore from '../../../../apiRequest/courseDetailsApi';
import { useParams } from 'react-router-dom';

const CourseDetailsUpdatePage = () => {
  const {singleCourseDetailsApi,singleCourseDetails} = courseDetailsStore();
  const [] = useState(false);
  const {id} = useParams();
  useEffect(()=>{
    (async()=>{
        await singleCourseDetailsApi(id);
    })()
  },[id])
  return (
    <div>
      <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Course Details Update form </h2>

        <form className="grid grid-cols-2 gap-6">
          {/* Course Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Course Name
            </label>
            <input
              type="text"
              placeholder="Enter course name"
              readOnly
              defaultValue={singleCourseDetails[0]?.courseData?.course_name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              name='title'
              placeholder="Enter course title"
              defaultValue={singleCourseDetails[0]?.title}
              key={Date.now()}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter course description"
              name='description'
              rows="4"
              defaultValue={singleCourseDetails[0]?.description}
              key={Date.now()}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Rating (Out of 5)
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={singleCourseDetails[0]?.rating}
              key={Date.now()}
              placeholder="Enter rating"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Course Fee */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Course Fee ($)
            </label>
            <input
              type="number"
              name="course_fee"
              placeholder="Enter course fee"
              defaultValue={singleCourseDetails[0]?.course_fee}
              key={Date.now()}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Total Live Classes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Total Live Classes
            </label>
            <input
              type="number"
              name='total_live_class'
              defaultValue={singleCourseDetails[0]?.total_live_class}
              placeholder="Enter total live classes"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Total Projects */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Total Projects
            </label>
            <input
              type="number"
              name = "total_project"
              placeholder="Enter total projects"
              defaultValue={singleCourseDetails[0]?.total_project}
              key={Date.now()}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Course Duration */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Course Duration (in Weeks)
            </label>
            <input
              type="number"
              name='course_duration'
              placeholder="Enter course duration"
              defaultValue={singleCourseDetails[0]?.course_duration}
              key={Date.now()}

              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Course Videos */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Total Course Videos
            </label>
            <input
              type="number"
              name='course_video'
              defaultValue={singleCourseDetails[0]?.course_video}
              key={Date.now()}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* YouTube Video URL */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              YouTube Video URL
            </label>
            <input
              type="url"
              name='youtube_video_url'
              defaultValue={singleCourseDetails[0]?.youtube_video_url}
              key={Date.now()}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
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

export default CourseDetailsUpdatePage;
