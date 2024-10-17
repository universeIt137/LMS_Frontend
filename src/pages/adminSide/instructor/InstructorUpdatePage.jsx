import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instructorStore from '../../../apiRequest/instructorApi';
import { uploadImg } from '../../../uploadImage/UploadImage';
import { updateAlert } from '../../../helper/updateAlert';

const InstructorUpdatePage = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const {
    instructorUpdateApi,
    singleInstructorDataApi,
    singleInstructorData,
    allInstructorDataListApi,
  } = instructorStore();

  // Fetch single instructor data on component mount
  useEffect(() => {
    (async () => {
      setLoader(true);
      await singleInstructorDataApi(id);
      setLoader(false);
    })();
  }, [id]);

  // Extract the image URL from the API response
  const { instructor_img: upcomingImg } = singleInstructorData[0] || {};

  // Form submission handler
  const updateInstructor = async (e) => {
    e.preventDefault();
    const instructor_name = e.target.instructor_name.value;
    const instructor_img = e.target.instructor_img.files[0];
    const instructor_role = e.target.instructor_role.value;
    const course_name = e.target.course_name.value;

    let ImageUrl = upcomingImg; // Default to the existing image if no new one is uploaded

    if (instructor_img) {
      ImageUrl = await uploadImg(instructor_img); // Upload new image if selected
    }

    const payload = {
      instructor_name,
      instructor_img: ImageUrl,
      instructor_role,
      course_name,
    };

    setLoader(true);
    const res = await instructorUpdateApi(id, payload);
    setLoader(false);

    if (res) {
      await allInstructorDataListApi();
      updateAlert('Instructor updated successfully', 'success');
      e.target.reset();
    } else {
      updateAlert('Instructor update failed', 'error');
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h1 className="text-xl font-bold text-center mb-6">
        ({singleInstructorData[0]?.instructor_name}) {singleInstructorData[0]?.courseData?.course_name} Course Instructor
      </h1>

      <form onSubmit={updateInstructor} className="space-y-6 bg-white p-8 shadow-md rounded-lg">
        {/* Instructor Name */}
        <div>
          <label htmlFor="instructor_name" className="block text-gray-700 font-medium mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor_name"
            name="instructor_name"
            defaultValue={singleInstructorData[0]?.instructor_name}
            placeholder="Enter instructor name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Instructor Role */}
        <div>
          <label htmlFor="instructor_role" className="block text-gray-700 font-medium mb-2">
            Instructor Role
          </label>
          <input
            type="text"
            id="instructor_role"
            name="instructor_role"
            defaultValue={singleInstructorData[0]?.instructor_role}
            placeholder="Enter instructor role"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>



        {/* Course Name */}
        <div>
          <label htmlFor="course_name" className="block text-gray-700 font-medium mb-2">
            Course Name
          </label>
          <input
            type="text"
            id="course_name"
            name="course_name"
            defaultValue={singleInstructorData[0]?.courseData?.course_name}
            readOnly
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

            {/* Instructor Image Preview */}
              <div className="avatar mb-4">
                <div className="w-20 rounded-full">
                    <img
                        key={Date.now()}
                        src={upcomingImg || 'https://via.placeholder.com/80'}
                        alt="Instructor"
                        />
                  </div>
              </div>

        {/* Instructor Image Upload */}
        <div>
          <label htmlFor="instructor_img" className="block text-gray-700 font-medium mb-2">
            Upload Instructor Image
          </label>
          <input
            type="file"
            id="instructor_img"
            name="instructor_img"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ${
            loader && 'opacity-50 cursor-not-allowed'
          }`}
          disabled={loader}
        >
          {loader ? 'Updating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default InstructorUpdatePage;
