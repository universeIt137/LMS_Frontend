import React, { useEffect, useState } from 'react';
import courseStore from './../../../../apiRequest/courseApi';
import { useParams } from 'react-router-dom';
import moduleStore from '../../../../apiRequest/moduleApi';
import Swal from 'sweetalert2';

const ModuleCreatePage = () => {
  const { singleCourseDataApi, singleCourseData } = courseStore();
  const { moduleCreateApi } = moduleStore();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await singleCourseDataApi(id);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, singleCourseDataApi]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      course_id: e.target.course_id.value,
      module_name: e.target.module_name.value,
      module_topic: e.target.module_topic.value,
      total_days_module: e.target.total_days_module.value,
      total_live_class: e.target.total_live_class.value,
      total_assignment: e.target.total_assignment.value,
      total_pre_record_video: e.target.total_pre_record_video.value,
      total_quiz_test: e.target.total_quiz_test.value,
    };

    const res = await moduleCreateApi(payload);

    if (res) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Module created successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to create module',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-6">Module Create Form</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="course_id" className="block text-gray-700 font-semibold mb-2">
              Course Name
            </label>
            <select
              id="course_id"
              name="course_id"
              className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              defaultValue={singleCourseData?._id || ''}
            >
              <option value={singleCourseData?._id || ''}>
                {singleCourseData?.course_name || 'No course name available'}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="module_name">
              Module Name
            </label>
            <input
              type="text"
              id="module_name"
              name="module_name"
              placeholder="Enter module name"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="module_topic">
              Module Topic
            </label>
            <input
              type="text"
              id="module_topic"
              name="module_topic"
              placeholder="Enter module topic"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total_days_module">
              Total Days for Module
            </label>
            <input
              type="number"
              id="total_days_module"
              name="total_days_module"
              placeholder="Enter total days"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total_live_class">
              Total Live Classes
            </label>
            <input
              type="number"
              id="total_live_class"
              name="total_live_class"
              placeholder="Enter total live classes"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total_assignment">
              Total Assignments
            </label>
            <input
              type="number"
              id="total_assignment"
              name="total_assignment"
              placeholder="Enter total assignments"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total_pre_record_video">
              Total Pre-recorded Videos
            </label>
            <input
              type="number"
              id="total_pre_record_video"
              name="total_pre_record_video"
              placeholder="Enter total videos"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total_quiz_test">
              Total Quiz Tests
            </label>
            <input
              type="number"
              id="total_quiz_test"
              name="total_quiz_test"
              placeholder="Enter total quiz tests"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="mx-auto block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModuleCreatePage;
