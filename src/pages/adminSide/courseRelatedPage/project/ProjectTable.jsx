import React from 'react';

const ProjectTable = ({ projectS }) => {
    const project = {
        project_img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1727763619/project-images/t1r0pmnmfysg6laqoxie.png",
        project_name: "Task Manager",
        corseData: {
          course_name: "Next Js"
        }
      };
  return (
    <div className="w-full mx-auto flex items-center justify-center my-10 bg-gray-100">
      <div className="w-full mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Project Details</h2>

          {/* Responsive table container */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Project Image</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Project Name</th>
                  <th className="border border-gray-300 px-2 py-2 text-center text-xs sm:text-sm">Course Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 text-center">
                  {/* Display the project image with a max width */}
                  <td className="border border-gray-300 px-2 py-2">
                    <img 
                      src={project?.project_img} 
                      alt={project?.project_name} 
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                    {project?.project_name}
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                    {project?.corseData?.course_name}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
