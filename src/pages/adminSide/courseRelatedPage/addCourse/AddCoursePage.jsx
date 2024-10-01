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
    // You can handle the form submission here (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create New Course</h2>
        <form onSubmit={handleSubmit}>

          {/* Course Name */}
          <div className="mb-4">
            <label htmlFor="course_name" className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              type="text"
              id="course_name"
              name="course_name"
              
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Course Name"
              
            />
          </div>

          {/* Course Image */}
          <div className="mb-4">
            <label htmlFor="course_img" className="block text-sm font-medium text-gray-700">Course Image URL</label>
            <input
              type="file"
              id="course_img"
              name="course_img"
              accept='image'
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Course Image URL"
            />
          </div>

          {/* Instructor Name */}
          <div className="mb-4">
            <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700">Instructor Name</label>
            <input
              type="text"
              id="instructor_name"
              name="instructor_name"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Instructor Name"
            />
          </div>

          {/* Total Sit */}
          <div className="mb-4">
            <label htmlFor="total_sit" className="block text-sm font-medium text-gray-700">Total Sit</label>
            <input
              type="number"
              id="total_sit"
              name="total_sit"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Total Sit"
            />
          </div>

          {/* Batch No */}
          <div className="mb-4">
            <label htmlFor="batch_no" className="block text-sm font-medium text-gray-700">Batch No</label>
            <input
              type="number"
              id="batch_no"
              name="batch_no"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Batch No"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
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
