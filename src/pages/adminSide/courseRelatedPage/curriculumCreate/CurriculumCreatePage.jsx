import React, { useEffect } from 'react'
import courseStore from '../../../../apiRequest/courseApi';

const CurriculumCreatePage = () => {
  const {courseNameList,courseNameListApi} = courseStore();
  useEffect(()=>{
    (async()=>{
        await courseNameListApi();
    })()
},[]);
const handelSubmitValue  = async (e) =>{
  e.preventDefault();
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Curriculum Form</h1>

        <form onSubmit={handelSubmitValue} className="space-y-6">
          {/* Grid for two input fields per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course ID */}
            <div>
              <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">
                Course Name
              </label>
              <select id="course_id" name="course_id" className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200">
                <option value="">Select Course</option>
              {
                courseNameList.map((course, index) => (
                  <option key={index} value={course._id}>{course.course_name}</option>
                ))
              }
            </select>
            </div>

            {/* Record Video */}
            <div>
              <label htmlFor="record_video" className="block text-sm font-medium text-gray-700">
              Total Record Video
              </label>
              <input
                type="number"
                id="record_video"
                name="record_video"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Total Record Video"
              />
            </div>

            {/* Live Class */}
            <div>
              <label htmlFor="live_class" className="block text-sm font-medium text-gray-700">
              Total Live Class
              </label>
              <input
                type="number"
                id="live_class"
                name="live_class"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Total Live Class"
              />
            </div>

            {/* Quiz */}
            <div>
              <label htmlFor="quiz" className="block text-sm font-medium text-gray-700">
              Total Quiz
              </label>
              <input
                type="number"
                id="quiz"
                name="quiz"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Total Quiz"
              />
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Curriculum Title"
              />
            </div>
            
          </div>

          {/* Description */}

          <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Curriculum Description"
                rows="4"
              />
            </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CurriculumCreatePage
