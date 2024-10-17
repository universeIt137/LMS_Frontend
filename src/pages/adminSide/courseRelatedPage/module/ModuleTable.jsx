import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moduleStore from "../../../../apiRequest/moduleApi";
import { deleteAlert } from "../../../../helper/deleteAlert";
import toast from "react-hot-toast";

const ModulesTable = ({ courseId}) => {
    const {moduleByCourseIdApi,moduleByCourseId,moduleDeleteApi} = moduleStore();
    useEffect(() => {
        (async () => {
            await moduleByCourseIdApi(courseId);
        })();
    }, [courseId]);
    const moduleDelete = async (id)=>{
        let resp = await deleteAlert();
        if(resp.isConfirmed){
            let res = await moduleDeleteApi(id);
            if(res){
                await moduleByCourseIdApi(courseId);
                toast.success("Module deleted successfully");
            }else{
                toast.error("Failed to delete module");
            }
        }
    }
    return (
        <div className="overflow-x-auto mt-3 rounded-2xl border">
            <table className="min-w-full bg-white ">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Module Name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Module Topic
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Total Days
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Live Classes
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Assignments
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Pre-recorded Videos
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Quiz Tests
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-900">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {moduleByCourseId?.map((module) => (
                        <tr key={module._id} className="border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.module_name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.module_topic}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.total_days_module}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.total_live_class}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.total_assignment}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.total_pre_record_video}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {module.total_quiz_test}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">

                                <Link to={`/dashboard/module-update/${module._id}`}>
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2"
                                    >
                                        Update
                                    </button>
                                </Link>

                                <button onClick={moduleDelete.bind(this,module._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"

                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ModulesTable;
