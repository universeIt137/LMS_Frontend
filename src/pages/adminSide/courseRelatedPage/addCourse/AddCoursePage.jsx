import React, { useState } from 'react';

const AddCoursePage = () => {
  const [formData, setFormData] = useState({
    course_name: '',
    course_img: '',
    instructor_name: '',
    total_sit: '',
    batch_no: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex  justify-center min-h-screen bg-gray-50 ">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-600">Create New Course</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            {/* Course Name */}
            <div className="mb-6">
              <label htmlFor="course_name" className="block text-sm font-medium text-gray-700 mb-2">Course Name</label>
              <input
                type="text"
                id="course_name"
                name="course_name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Course Name"
                required
              />
            </div>

          

            {/* Instructor Name */}
            <div className="mb-6">
              <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700 mb-2">Instructor Name</label>
              <input
                type="text"
                id="instructor_name"
                name="instructor_name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Instructor Name"
                required
              />
            </div>

            {/* Total Sit */}
            <div className="mb-6">
              <label htmlFor="total_sit" className="block text-sm font-medium text-gray-700 mb-2">Total Sit</label>
              <input
                type="number"
                id="total_sit"
                name="total_sit"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Total Sit"
                required
              />
            </div>

            {/* Batch No */}
            <div className="mb-6">
              <label htmlFor="batch_no" className="block text-sm font-medium text-gray-700 mb-2">Batch No</label>
              <input
                type="number"
                id="batch_no"
                name="batch_no"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Batch No"
                required
              />
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
                onChange={handleChange}
                className="w-full px-4 py-2 border border-dashed border-indigo-500 rounded-lg bg-gray-50 text-indigo-500 file:bg-indigo-500 file:text-white file:px-4 file:py-2 file:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoursePage;
