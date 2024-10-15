import React from 'react'

const ModuleDataTable = () => {
  return (
    <div>
       <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Course Module Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Course ID</th>
              <th className="py-3 px-6 text-left">Module Name</th>
              <th className="py-3 px-6 text-left">Module Topic</th>
              <th className="py-3 px-6 text-left">Total Days</th>
              <th className="py-3 px-6 text-left">Live Classes</th>
              <th className="py-3 px-6 text-left">Assignments</th>
              <th className="py-3 px-6 text-left">Pre-recorded Videos</th>
              <th className="py-3 px-6 text-left">Quiz Tests</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">C101</td>
              <td className="py-3 px-6">Introduction to React</td>
              <td className="py-3 px-6">JSX and Components</td>
              <td className="py-3 px-6">7</td>
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6">2</td>
              <td className="py-3 px-6">5</td>
              <td className="py-3 px-6">1</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">C102</td>
              <td className="py-3 px-6">Advanced JavaScript</td>
              <td className="py-3 px-6">ES6 and Beyond</td>
              <td className="py-3 px-6">10</td>
              <td className="py-3 px-6">4</td>
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6">6</td>
              <td className="py-3 px-6">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default ModuleDataTable
