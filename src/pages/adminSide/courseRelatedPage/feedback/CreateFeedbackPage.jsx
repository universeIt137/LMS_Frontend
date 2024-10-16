import React, { useEffect, useState } from 'react';
import courseStore from '../../../../apiRequest/courseApi';
import { useParams } from 'react-router-dom';
import { uploadImg } from './../../../../uploadImage/UploadImage';
import feedbackStore from '../../../../apiRequest/feedbackApi';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Loader from '../../../../components/clideSide/loader/Loader';
import FeedbackTable from './FeedbackTable';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hook/UseAxiosPublic';

const CreateFeedbackPage = () => {
  const { createFeedbackApi , allFeedbackListApi} = feedbackStore();
  const { singleCourseDataApi, singleCourseData } = courseStore();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false); // Loader state

  // useEffect(() => {
  //     (async()=>{
  //       await singleCourseDataApi(id);
  //     })()
  // }, [id]);

  const { data: singleCourse = {} } = useQuery({
    queryKey: ['singleCourse'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/single-course/${id}`);
      return res.data.data;
    }
  })

  console.log(singleCourse)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const course_id = e.target.course_id.value;
    const img = e.target.img.files[0];
    const feedback = e.target.feedback.value;

    let ImageUrl = '';

    if (img?.name) {
      ImageUrl = await uploadImg(img); // Upload image if selected
    }

    const payload = { name, course_id, img: ImageUrl, feedback };

    setLoader(true); // Show loader
    const res = await createFeedbackApi(payload);
    setLoader(false); // Hide loader

    if (res) {
      await allFeedbackListApi()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Feedback created successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to create feedback',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // console.log(singleCourseData);

  return (

    <>
    <Helmet>
      <title>Dashboard | Feedback Create Page </title>
    </Helmet>
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      {loader ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="container flex flex-col items-center mx-auto px-4">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              ({singleCourse?.course_name}) Course Feedback
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              {/* Course ID */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="course_id"
                >
                  Course Name
                </label>
                <select
                  id="course_id"
                  name="course_id"
                  className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  <option value={singleCourseData?._id}>
                    {singleCourse?.course_name}
                  </option>
                </select>
              </div>

              {/* Student img */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="student_id"
                >
                  Student Img
                </label>
                <input
                  id="img"
                  type="file"
                  name="img"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              {/* Feedback */}
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="feedback"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  placeholder="Enter Your Feedback"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    {
      loader && (
        <div>
          <Loader></Loader>
        </div>
      )
    }
    <div className='my-9' >
      <FeedbackTable></FeedbackTable>
    </div>
    </>
  );
};

export default CreateFeedbackPage;
