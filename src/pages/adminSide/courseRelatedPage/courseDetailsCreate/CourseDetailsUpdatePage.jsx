import React, { useEffect, useState } from 'react';
import courseDetailsStore from '../../../../apiRequest/courseDetailsApi';
import { useParams } from 'react-router-dom';
import { uploadVideo } from '../../../../uploadVideo/UploadVideo';
import { updateAlert } from '../../../../helper/updateAlert';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const CourseDetailsUpdatePage = () => {
  const { singleCourseDetailsApi, singleCourseDetails, updateCourseDetailsApi } = courseDetailsStore();
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await singleCourseDetailsApi(id);
    })();
  }, [id]);

  const { course_video: upcomingVideo } = singleCourseDetails;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    let updatedVideo = upcomingVideo;
    const courseVideoFile = e.target.course_video.files[0];

    if (courseVideoFile) {
      try {
        updatedVideo = await uploadVideo(courseVideoFile);
      } catch (error) {
        toast.error('Video upload failed');
        return;
      }
    }

    payload.course_video = updatedVideo;

    const confirmation = await updateAlert();
    if (confirmation.isConfirmed) {
      setLoader(true);
      const res = await updateCourseDetailsApi(id, payload);
      setLoader(false);

      if (res) {
        Swal.fire({
          title: 'Updated!',
          text: 'Your course details have been updated.',
          icon: 'success',
        });
      } else {
        toast.error('Failed to update course details');
      }
    }
  };

  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Course Details Update Form</h2>

        <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Course Name</label>
            <input
              type="text"
              readOnly
              defaultValue={singleCourseDetails[0]?.courseData?.course_name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={singleCourseDetails[0]?.title}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              rows="4"
              defaultValue={singleCourseDetails[0]?.description}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Rating (Out of 5)</label>
            <input
              type="number"
              name="rating"
              defaultValue={singleCourseDetails[0]?.rating}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Course Fee ($)</label>
            <input
              type="number"
              name="course_fee"
              defaultValue={singleCourseDetails[0]?.course_fee}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Total Live Classes</label>
            <input
              type="number"
              name="total_live_class"
              defaultValue={singleCourseDetails[0]?.total_live_class}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Total Projects</label>
            <input
              type="number"
              name="total_project"
              defaultValue={singleCourseDetails[0]?.total_project}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Course Duration (in Weeks)</label>
            <input
              type="number"
              name="course_duration"
              defaultValue={singleCourseDetails[0]?.course_duration}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Course Videos</label>
            <input
              type="file"
              name="course_video"
              accept="video/*"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">YouTube Video URL</label>
            <input
              type="url"
              name="youtube_video_url"
              defaultValue={singleCourseDetails[0]?.youtube_video_url}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
                'Course Details Update'
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CourseDetailsUpdatePage;
