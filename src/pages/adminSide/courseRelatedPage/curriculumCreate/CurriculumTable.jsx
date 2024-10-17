import React, { useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { NavLink, useParams } from 'react-router-dom';
import curriculumStore from '../../../../apiRequest/curriculumApi';
import courseStore from '../../../../apiRequest/courseApi';
import { deleteAlert } from '../../../../helper/deleteAlert';
import toast from 'react-hot-toast';

const CurriculumTable = ({courseId}) => {
  const {singleCourseDataApi,singleCourseData} = courseStore();
  const { curriculumByCourseIdDataApi, curriculumByCourseIdData,deleteCurriculumDataApi} = curriculumStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await curriculumByCourseIdDataApi(courseId);
      await singleCourseDataApi(id);
    })();
  }, []);

  const handleDeleteCurriculum = async (id) => {
    const res = await deleteAlert();
    if (res.isConfirmed) {
      let res = await deleteCurriculumDataApi(id);
      if (res) {
        await curriculumByCourseIdDataApi(courseId);
        toast.success(res);
      }
    }else{
      toast.error('Delete operation cancelled');
    }
  };

  return (
    <div className="ml-5 w-full mx-auto flex items-center justify-center my-10 bg-gray-100">
      <div className="w-full mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800"> {singleCourseData.course_name} Course Curriculums</h2>

          {/* Add overflow-x-auto for responsiveness */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Course Name</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Record Video</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Live Class</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Quiz</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Title</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Description</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  curriculumByCourseIdData &&
                  curriculumByCourseIdData.map((item, i) => {
                    return (
                      <tr key={i} className="hover:bg-gray-100 text-center">
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          {item?.courseData?.course_name}
                        </td>
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          {item?.record_video}
                        </td>
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          {item?.live_class}
                        </td>
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          {item?.quiz}
                        </td>
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          {item?.title.slice(0, 6)}..
                        </td>
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          {item?.description.slice(0, 10)}...
                        </td>
                        <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                          <div className="flex justify-center text-xl gap-2 font-bold">
                            <NavLink title="update" to={`/dashboard/curriculum-update/${item._id}`}>
                              <FaRegEdit />
                            </NavLink>
                            <span title="delete" className="cursor-pointer text-[22px]">
                             <div onClick={handleDeleteCurriculum.bind(this, item._id)} >
                             <MdDeleteOutline />
                             </div>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumTable;
