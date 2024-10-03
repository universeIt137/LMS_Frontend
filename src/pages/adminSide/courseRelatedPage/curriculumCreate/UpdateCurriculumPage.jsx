import React, { useEffect } from 'react';
import curriculumStore from '../../../../apiRequest/curriculumApi';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const UpdateCurriculumPage = () => {
  const { id } = useParams();
  const { singleCurriculumData, updateCurriculumDataApi, singleCurriculumDataApi } = curriculumStore();

  useEffect(() => {
    (async () => {
      await singleCurriculumDataApi(id);
    })();
  }, []);

  const handleUpdateValue = async (e) => {
    e.preventDefault();
    const record_video = e.target.record_video.value;
    const live_class = e.target.live_class.value;
    const quiz = e.target.quiz.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const course_name = e.target.course_name.value;
    const payload = {
      record_video,
      live_class,
      quiz,
      title,
      description,
      course_name
    };
    let res = await updateCurriculumDataApi(id, payload);
    if (res) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Curriculum updated successfully',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      toast.error('Curriculum update failed');
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Course Curriculum Update Form</h2>

          <form onSubmit={handleUpdateValue}>
            <div className="grid grid-cols-2 gap-4">
              {/* Course Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course_name">
                  Course Name
                </label>
                <input
                  type="text"
                  id="course_name"
                  name="course_name"
                  defaultValue={singleCurriculumData[0]?.courseData?.course_name}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Course Name"
                  key={Date.now()}
                  readOnly
                />
              </div>

              {/* Record Video */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="record_video">
                  Record Video
                </label>
                <input
                  type="text"
                  id="record_video"
                  name="record_video"
                  defaultValue={singleCurriculumData[0]?.record_video}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Record Video Number"
                  key={Date.now()}
                />
              </div>

              {/* Live Class */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="live_class">
                  Live Class
                </label>
                <input
                  type="text"
                  id="live_class"
                  name="live_class"
                  defaultValue={singleCurriculumData[0]?.live_class}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Live Class Number"
                  key={Date.now()}
                />
              </div>

              {/* Quiz */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quiz">
                  Quiz
                </label>
                <input
                  type="text"
                  id="quiz"
                  name="quiz"
                  defaultValue={singleCurriculumData[0]?.quiz}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Quiz Number"
                  key={Date.now()}
                />
              </div>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={singleCurriculumData[0]?.title}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Title"
                  key={Date.now()}
                />
              </div>
            </div>

            {/* Description (Full Width) */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                defaultValue={singleCurriculumData[0]?.description}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Description"
                rows="4"
                key={Date.now()}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCurriculumPage;
