import React from 'react';

const LoderReact = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Beautiful SVG Loader */}
      <svg className="animate-spin h-16 w-16 text-blue-600" viewBox="0 0 50 50">
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <circle
          className="opacity-75"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="150,200"
          strokeDashoffset="10"
          strokeLinecap="round"
        ></circle>
      </svg>
    </div>
  );
};

export default LoderReact;
