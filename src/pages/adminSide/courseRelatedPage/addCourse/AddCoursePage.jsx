import React, { useEffect, useState } from 'react';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import courseStore from '../../../../apiRequest/courseApi';
import instructorStore from '../../../../apiRequest/instructorApi';


const AddCoursePage = () => {
  const {courseCreateApi} = courseStore();
  const {instructorNameDropDown,instructorNameDropDownDropDownApi} = instructorStore();
  const [formData, setFormData] = useState({
    course_name: '',
    course_img: '',
    instructor_name: '',
    total_sit: '',
    batch_no: ''
  });

  useEffect(()=>{
    (async()=>{
      await instructorNameDropDownDropDownApi();
    })()
  },[]);


  



  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = e.target.course_img.files[0];

    let ImageUrl = '';

    if (!image?.name) {
        ImageUrl = ''
    } else {
      ImageUrl = await uploadImg(image);
    }

    formData.course_img = ImageUrl ;

    let res = await courseCreateApi(formData);
    if(res){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      toast.error("Failed to create course");
    }
    
    e.target.reset();

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
              <label htmlFor="instructor_name" className="block text-sm font-medium text-gray-700 mb-2">
                Instructor Name
              </label>
              <select name='instructor_name' onChange={handleChange} id="instructor_name" className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select Instructor</option>
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
