import React, { useEffect, useState } from 'react';
import feedbackStore from '../../../../apiRequest/feedbackApi';
import { useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';


const FeedbackTable = () => {
    const [loader,setLoader] = useState(false);
  const { id } = useParams();
  const {
    singleFeedbackDataApi,
    singleFeedbackData,
    allFeedbackListApi,
    allFeedbackList,
  } = feedbackStore();

  useEffect(() => {
    (async () => {
        setLoader(true);
      await allFeedbackListApi();
      setLoader(false);
    })();
  }, [id]);

  const handleEdit = (feedbackId) => {
    console.log(`Edit feedback with ID: ${feedbackId}`);
    // Redirect to edit page or show a modal (implement as per requirement)
  };

  const handleDelete = (feedbackId) => {
    console.log(`Delete feedback with ID: ${feedbackId}`);
    // Call API to delete feedback (implement your delete logic)
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Course Feedback Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Serial No</th>
              <th className="py-3 px-6 text-center">Course Name</th>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Image</th>
              <th className="py-3 px-6 text-center">Feedback</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {allFeedbackList.map((feedback, index) => (
              <tr
                key={feedback.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 text-center px-6">{index + 1}</td>
                <td className="py-3 text-center px-6">{feedback?.courseData?.course_name}</td>
                <td className="py-3 text-center px-6">{feedback.name}</td>
                <td className="py-3 text-center px-6">
                  <img
                    src={feedback.img || 'https://via.placeholder.com/40'}
                    alt={feedback.userName}
                    className="w-10 h-10 mx-auto rounded-full"
                  />
                </td>
                <td className="py-3 px-6 text-center ">{feedback.feedback}</td>
                <td className="py-3 px-6 flex ">
                  <button
                    onClick={() => handleEdit(feedback.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                  >
                    <span> <FaEdit></FaEdit> </span>
                  </button>
                  <button
                    onClick={() => handleDelete(feedback.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackTable;
