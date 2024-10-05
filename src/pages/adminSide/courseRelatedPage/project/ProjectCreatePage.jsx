import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import courseStore from '../../../../apiRequest/courseApi';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import projectStore from '../../../../apiRequest/projectApi';
import Swal from 'sweetalert2';
import ProjectTable from './ProjectTable';
import useAxiosPublic from '../../../../hook/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ProjectCreatePage = () => {
  const { courseNameList, courseNameListApi } = courseStore();
  const { projectCreateApi } = projectStore();
  const axiosPublic = useAxiosPublic();

  // const { data: projects = [] } = useQuery({
  //   queryKey: ['projects'],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get('')
  //   }
  // })

  useEffect(() => {
    (async () => {
      await courseNameListApi();
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course_id = e.target.course_id.value;
    const project_name = e.target.project_name.value;
    const project_img = e.target.project_img.files[0];

    let ImageUrl = '';

    if (!project_img?.name) {
      ImageUrl = '';
    } else {
      ImageUrl = await uploadImg(project_img);
    }

    const payload = {
      course_id,
      project_name,
      project_img: ImageUrl
    };
    const res = await projectCreateApi(payload);
    if (res) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Project created successfully",
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to create project",
      });
    }
    e.target.reset();
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100">
        <motion.div
          className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Create New Project
          </motion.h2>

        <form onSubmit={handleSubmit}>
          {/* Project Image */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="project_img" className="block text-gray-700 font-semibold mb-2">
              Project Image
            </label>
            <input
              type="file"
              id="project_img"
              name="project_img"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          {/* Project Name */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="project_name" className="block text-gray-700 font-semibold mb-2">
              Project Name
            </label>
            <input
              type="text"
              id="project_name"
              name="project_name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter project name"
            />
          </motion.div>

          {/* Course ID */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="course_id" className="block text-gray-700 font-semibold mb-2">
              Course Name
            </label>
            <select
              id="course_id"
              name="course_id"
              required
              className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            >
              <option value="">Select Course</option>
              {courseNameList.map((course, index) => (
                <option key={index} value={course._id}>
                  {course.course_name}
                </option>
              ))}
            </select>
          </motion.div>

            {/* Submit Button without Animation */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <div className="">
        <ProjectTable></ProjectTable>
      </div>
    </>
  );
};

export default ProjectCreatePage;
