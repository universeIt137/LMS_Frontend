import React, { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hook/UseAxiosPublic";

const ModuleDetailsForm = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: singleCourse = {} } = useQuery({
        queryKey: ['singleCourse'],
        queryFn: async () => {
          const res = await axiosPublic.get(`/single-course/${id}`);
          return res.data.data;
        }
    })
    
    console.log(singleCourse);

    const [formData, setFormData] = useState({
        module_name: "",
        module_topic: "",
        total_days_module: 0,
        total_live_class: 0,
        total_assignment: 0,
        total_pre_record_video: 0,
        total_quiz_test: 0,
    });

    const [loading, setLoading] = useState(false); // New loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted
        const toastId = toast.loading("Creating module...");

        axiosPublic.post('/module', formData) // Adjust endpoint as needed
            .then((res) => {
                setLoading(false); // Stop loading when done
                toast.success("Module created successfully!", { id: toastId });
                refetch(); // To refresh data
                setFormData({
                    module_name: "",
                    module_topic: "",
                    total_days_module: 0,
                    total_live_class: 0,
                    total_assignment: 0,
                    total_pre_record_video: 0,
                    total_quiz_test: 0,
                });
            })
            .catch((err) => {
                setLoading(false); // Stop loading on error
                toast.error("Failed to create module!", { id: toastId });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Module for {singleCourse.course_name}</h2>
                
                {/* Show loading spinner if data is being uploaded */}
                {loading && (
                    <div className="flex justify-center mb-4">
                        <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Module Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Module Name</label>
                        <input
                            type="text"
                            name="module_name"
                            value={formData.module_name}
                            onChange={handleChange}
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
                            value={formData.module_topic}
                            onChange={handleChange}
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
                            value={formData.total_days_module}
                            onChange={handleChange}
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
                            value={formData.total_live_class}
                            onChange={handleChange}
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
                            value={formData.total_assignment}
                            onChange={handleChange}
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
                            value={formData.total_pre_record_video}
                            onChange={handleChange}
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
                            value={formData.total_quiz_test}
                            onChange={handleChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter total quiz tests"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Creating Module..." : "Create Module"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModuleDetailsForm;