import React, { useEffect, useState } from 'react';
import feedbackStore from '../../../../apiRequest/feedbackApi';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteAlert } from '../../../../helper/deleteAlert';
import toast from 'react-hot-toast';


const FeedbackTable = ({courseId}) => {
    const [loader,setLoader] = useState(false);

  const {
    feedbackByCourseIdDataApi,feedbackByCourseIdData,
    feedbackDeleteApi
  } = feedbackStore();

  useEffect(() => {
    (async () => {
        setLoader(true);
      await feedbackByCourseIdDataApi(courseId);
      setLoader(false);
    })();
  }, [courseId]);



  const handleDelete = async (id) => {
    let resp = await deleteAlert();
    if (resp.isConfirmed) {
        let res = await feedbackDeleteApi(id);
        if (res) {
            await feedbackByCourseIdDataApi(courseId);
            toast.success("Feedback deleted successfully")
        }else{
            toast.error("Failed to delete Feedback");
        }
    }
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
            {feedbackByCourseIdData.map((feedback, index) => (
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
                  <NavLink to = {`/dashboard/feedback-update/${feedback["_id"]}`}>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2"
                  >
                    <span> <FaEdit></FaEdit> </span>
                  </button>
                  </NavLink>
                  <button
                    onClick={() => handleDelete(feedback["_id"])}
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
