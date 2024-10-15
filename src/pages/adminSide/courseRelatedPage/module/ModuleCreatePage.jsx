// src/components/ModuleTable.jsx
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ModuleTable = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Course Module Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-center text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Course ID</th>
              <th className="py-3 px-6 text-left">Module Name</th>
              <th className="py-3 px-6 text-left">Module Topic</th>
              <th className="py-3 px-6 text-left">Total Days</th>
              <th className="py-3 px-6 text-left">Live Classes</th>
              <th className="py-3 px-6 text-left">Assignments</th>
              <th className="py-3 px-6 text-left">Pre-recorded Videos</th>
              <th className="py-3 px-6 text-left">Quiz Tests</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
          
            </tr>
            <tr className="border-b border-gray-200 text-center hover:bg-gray-100">
              <td className="py-3 px-6">C102</td>
              <td className="py-3 px-6">Advanced JavaScript</td>
              <td className="py-3 px-6">ES6 and Beyond</td>
              <td className="py-3 px-6">10</td>
              <td className="py-3 px-6">4</td>
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6">6</td>
              <td className="py-3 px-6">2</td>
              <td className="py-3 px-6 text-center flex ">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2">
                <span> <FaEdit></FaEdit> </span>
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                <MdDeleteOutline />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModuleTable;
