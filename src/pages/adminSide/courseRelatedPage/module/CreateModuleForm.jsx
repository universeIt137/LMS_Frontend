import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../hook/UseAxiosPublic";
import { useParams } from "react-router-dom";
import courseStore from "../../../../apiRequest/courseApi";
import moduleStore from './../../../../apiRequest/moduleApi';
import ModulesTable from "./ModuleTable";

const CreateModuleForm = () => {
    const {singleCourseDataApi,singleCourseData} = courseStore();
    const {moduleCreateApi} = moduleStore();
    useEffect(()=>{
        (async()=>{
            await singleCourseDataApi(id);
        })()
    },[]);
    const { id } = useParams();

    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const course_id = e.target.course_id.value;
        const module_name = e.target.module_name.value;
        const module_topic = e.target.module_topic.value;
        const total_days_module = e.target.total_days_module.value;
        const total_live_class = e.target.total_live_class.value;
        const total_assignment = e.target.total_assignment.value;
        const total_pre_record_video = e.target.total_pre_record_video.value;
        const total_quiz_test = e.target.total_quiz_test.value;

        const payload = {
            course_id,
            module_name,
            module_topic,
            total_days_module,
            total_live_class,
            total_assignment,
            total_pre_record_video,
            total_quiz_test,
        };

        let res = await moduleCreateApi(payload);
        if (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Module created successfully',
                showConfirmButton: false,
                timer: 1500,
            });
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error-circle',
                title: 'Module created fail',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    

    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-8  w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Module for {singleCourseData.course_name}</h2>
                
                {/* Show loading spinner if data is being uploaded */}
                {loading && (
                    <div className="flex justify-center mb-4">
                        <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 " >
                    {/* Module Name */}
                        <div className="" >
                            <label className="block text-sm font-medium text-gray-700">Module Name</label>
                            <input
                                type="text"
                                name="module_name"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter module name"
                                required
                            />
                        </div>

                        {/* Module Topic */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Module Topic</label>
                            <input
                                type="text"
                                name="module_topic"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter module topic"
                                required
                            />
                        </div>

                        {/* Total Days Module */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Days</label>
                            <input
                                type="number"
                                name="total_days_module"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter total days"
                                required
                            />
                        </div>

                        {/* Total Live Classes */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Live Classes</label>
                            <input
                                type="number"
                                name="total_live_class"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter total live classes"
                                required
                            />
                        </div>

                        {/* Total Assignments */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Assignments</label>
                            <input
                                type="number"
                                name="total_assignment"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter total assignments"
                                required
                            />
                        </div>

                        {/* Total Pre-recorded Videos */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Pre-recorded Videos</label>
                            <input
                                type="number"
                                name="total_pre_record_video"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter total pre-recorded videos"
                                required
                            />
                        </div>

                        {/* Total Quiz Tests */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Quiz Tests</label>
                            <input
                                type="number"
                                name="total_quiz_test"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter total quiz tests"
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
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className=" px-3 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Creating Module..." : "Create Module"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <ModulesTable courseId = {id} ></ModulesTable>
        </>
    );
};

export default CreateModuleForm;
