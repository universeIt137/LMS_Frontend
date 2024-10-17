import React, { useState, useEffect } from 'react';
import moduleStore from '../../../../apiRequest/moduleApi';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateModuleForm = () => {
    const { id } = useParams(); 
    const { singleModuleDataApi, singleModuleData, moduleUpdateApi } = moduleStore();

    // Fetch module data when component mounts
    useEffect(() => {
        (async () => {
            await singleModuleDataApi(id);
        })();
    }, [id]);

    // Handle form submission
    const handleUpdate = async (e) => {
        e.preventDefault();

        const payload = {
            module_name: e.target.module_name.value,
            module_topic: e.target.module_topic.value,
            total_days_module: e.target.total_days_module.value,
            total_live_class: e.target.total_live_class.value,
            total_assignment: e.target.total_assignment.value,
            total_pre_record_video: e.target.total_pre_record_video.value,
            total_quiz_test: e.target.total_quiz_test.value,
            course_name: e.target.course_name.value,
        };

        const res = await moduleUpdateApi(id, payload);
        if (res) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Module updated successfully',
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Module update failed',
            });
        }
    };

    return (
        <div className="mx-auto">
            <h2 className="text-xl text-center font-bold mb-4">
                ({singleModuleData[0]?.module_name}) Update Module
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Module Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Module Name
                        </label>
                        <input
                            type="text"
                            name="module_name"
                            defaultValue={singleModuleData[0]?.module_name}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Module Topic */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Module Topic
                        </label>
                        <input
                            type="text"
                            name="module_topic"
                            defaultValue={singleModuleData[0]?.module_topic}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Total Days */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Total Days
                        </label>
                        <input
                            type="number"
                            name="total_days_module"
                            defaultValue={singleModuleData[0]?.total_days_module}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Live Classes */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Total Live Classes
                        </label>
                        <input
                            type="number"
                            name="total_live_class"
                            defaultValue={singleModuleData[0]?.total_live_class}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Assignments */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Total Assignments
                        </label>
                        <input
                            type="number"
                            name="total_assignment"
                            defaultValue={singleModuleData[0]?.total_assignment}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Pre-recorded Videos */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Total Pre-recorded Videos
                        </label>
                        <input
                            type="number"
                            name="total_pre_record_video"
                            defaultValue={singleModuleData[0]?.total_pre_record_video}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Quiz Tests */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Total Quiz Tests
                        </label>
                        <input
                            type="number"
                            name="total_quiz_test"
                            defaultValue={singleModuleData[0]?.total_quiz_test}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Course Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Course Name
                        </label>
                        <input
                            type="text"
                            name="course_name"
                            defaultValue={singleModuleData[0]?.data?.course_name}
                            key={Date.now()}
                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="px-4 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        Update Module
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateModuleForm;
