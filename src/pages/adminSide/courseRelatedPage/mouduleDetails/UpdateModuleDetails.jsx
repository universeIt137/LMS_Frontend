import React, { useState, useEffect } from 'react';

const UpdateModuleDetails = ({ moduleData, handleUpdate }) => {

    const [formData, setFormData] = useState({
        module_name: '',
        module_topic: '',
        total_days_module: '',
        total_live_class: '',
        total_assignment: '',
        total_pre_record_video: '',
        total_quiz_test: '',
    });

    useEffect(() => {
        if (moduleData) {
            setFormData({
                module_name: moduleData.module_name,
                module_topic: moduleData.module_topic,
                total_days_module: moduleData.total_days_module,
                total_live_class: moduleData.total_live_class,
                total_assignment: moduleData.total_assignment,
                total_pre_record_video: moduleData.total_pre_record_video,
                total_quiz_test: moduleData.total_quiz_test,
            });
        }
    }, [moduleData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(moduleData._id, formData); // Calling the update function passed as a prop
    };


    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Update Module Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Module Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Module Name
                    </label>
                    <input
                        type="text"
                        name="module_name"
                        value={formData.module_name}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
                        value={formData.module_topic}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
                        value={formData.total_days_module}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
                        value={formData.total_live_class}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
                        value={formData.total_assignment}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
                        value={formData.total_pre_record_video}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
                        value={formData.total_quiz_test}
                        onChange={handleChange}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300"
                    >
                        Update Module
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateModuleDetails;