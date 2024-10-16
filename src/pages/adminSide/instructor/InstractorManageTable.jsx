import React, { useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import instructorStore from '../../../apiRequest/instructorApi';

const InstructorManageTable = ({ courseId }) => {
    const { instructorDataByCourseIdApi, instructorDataByCourseId } = instructorStore();

    useEffect(() => {
        (async () => {
            await instructorDataByCourseIdApi(courseId);
        })();
    }, [courseId]);

    return (
        <div className="container mx-auto mt-10">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b text-center">
                        <th className="py-2 px-4">Serial No</th>
                        <th className="py-2 px-4">Instructor Name</th>
                        <th className="py-2 px-4">Instructor Image</th>
                        <th className="py-2 px-4">Instructor Role</th>
                        <th className="py-2 px-4">Course Name</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {instructorDataByCourseId.map((item, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 text-center">
                            <td className="py-2 px-4">{i + 1}</td>
                            <td className="py-2 px-4">{item?.instructor_name}</td>
                            <td className="py-2 px-4">
                                <img
                                    src={item?.instructor_img}
                                    alt="Instructor"
                                    className="w-12 h-12 rounded-full mx-auto"
                                />
                            </td>
                            <td className="py-2 px-4">{item?.instructor_role}</td>
                            <td className="py-2 px-4">{item?.courseData?.course_name}</td>
                            <td className="py-2 px-4">
                                <div className="flex justify-center space-x-4">
                                    <NavLink to={`/dashboard/instructor/update/${courseId}/${item?._id}`}>
                                        <FaRegEdit size="22px" className="text-blue-500 cursor-pointer" />
                                    </NavLink>
                                    <button className="text-red-500">
                                        <MdDeleteOutline size="22px" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InstructorManageTable;
