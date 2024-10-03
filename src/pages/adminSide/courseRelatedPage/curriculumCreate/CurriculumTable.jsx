import React from 'react'

const CurriculumTable = () => {
  return (
    <div className="container mx-auto flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Course Curriculums</h2>

          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Course ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Record Video</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Live Class</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Quiz</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">66f149017b3d989a04d2ea09</td>
                <td className="border border-gray-300 px-4 py-2">20</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">dfsd;fjsd;fldsjfdf;</td>
                <td className="border border-gray-300 px-4 py-2">dsfsdffroikdljsfsdhferwfjfajkskgaklfdsh</td>
                <td className="border border-gray-300 px-4 py-2">update Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CurriculumTable
