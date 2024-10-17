import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import courseStore from '../../../apiRequest/courseApi';
import instructorStore from '../../../apiRequest/instructorApi';
import { uploadImg } from '../../../uploadImage/UploadImage';
import LoderReact from '../../../components/loder/LoderReact';
import InstructorManageTable from './InstractorManageTable';

const InstructorCreatePage = () => {
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const { singleCourseDataApi, singleCourseData } = courseStore();
  const { instructorCreateApi, instructorDataByCourseIdApi } = instructorStore();

  // Fetch course data on component mount
  useEffect(() => {
    (async () => {
      setLoader(true);
      await singleCourseDataApi(id);
      setLoader(false);
    })();
  }, [id, singleCourseDataApi]);

  // Handle form submission
  const handleValueSubmit = async (e) => {
    e.preventDefault();

    const instructor_name = e.target.instructor_name.value;
    const instructor_img = e.target.instructor_img.files[0];
    const instructor_role = e.target.instructor_role.value;
    const course_id = e.target.course_id.value;

    let imageUrl = '';

    // Upload the image if provided
    if (instructor_img) {
      imageUrl = await uploadImg(instructor_img);
    }

    const payload = {
      instructor_name,
      instructor_img: imageUrl,
      instructor_role,
      course_id,
    };

    setLoader(true);
    const res = await instructorCreateApi(payload);
    setLoader(false);

    if (res) {
      // Refresh instructor data
      await instructorDataByCourseIdApi(id);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Instructor created successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed to create instructor',
        text: 'Please try again later',
      });
    }

    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Instructor Create</title>
      </Helmet>

      <div className="flex justify-center items-center min-h-[calc(100vh-135px)]">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            {singleCourseData?.course_name} Instructor Create
          </h2>

          <form onSubmit={handleValueSubmit}>
            {/* Instructor Name */}
            <div className="mb-4">
              <label
                htmlFor="instructor_name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Instructor Name
              </label>
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
              <label
                htmlFor="instructor_img"
                className="block text-gray-700 font-semibold mb-2"
              >
                Instructor Image
              </label>
              <input
                type="file"
                id="instructor_img"
                name="instructor_img"
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Instructor Role */}
            <div className="mb-4">
              <label
                htmlFor="instructor_role"
                className="block text-gray-700 font-semibold mb-2"
              >
                Instructor Role
              </label>
              <input
                type="text"
                id="instructor_role"
                name="instructor_role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter instructor role"
                required
              />
            </div>

            {/* Course Selection */}
            <div className="mb-4">
              <label
                htmlFor="course_id"
                className="block text-gray-700 font-semibold mb-2"
              >
                Course Name
              </label>
              <select
                id="course_id"
                name="course_id"
                className="w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={singleCourseData?._id}>
                  {singleCourseData?.course_name}
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loader}
                className={`${
                  loader ? 'bg-indigo-300' : 'bg-indigo-500 hover:bg-indigo-600'
                } text-white font-semibold px-6 py-2 rounded-md transition duration-300`}
              >
                {loader ? 'Creating...' : 'Submit'}
              </button>
            </div>
          </form>
          {loader && <LoderReact />}
        </div>
      </div>

      

      <InstructorManageTable courseId={id} />
    </div>
  );
};

export default InstructorCreatePage;
