
import React, { useEffect, useState } from 'react'
import feedbackStore from './../../../../apiRequest/feedbackApi';
import { useParams } from 'react-router-dom';
import { uploadImg } from './../../../../uploadImage/UploadImage';
import Swal from 'sweetalert2';
import Loader from '../../../../components/clideSide/loader/Loader';


const UpdateFeedbackPage = () => {
  const [loader,setLoader] = useState(false);
    const {singleFeedbackDataApi,feedbackByCourseIdDataApi,singleFeedbackData,feedbackUpdateApi} = feedbackStore();
    const { id } = useParams();
    let { img: incomingImg } = singleFeedbackData;
    useEffect(()=>{
        (async()=>{
            await singleFeedbackDataApi(id)
        })()
    },[id]);
    const handleUpdateFeedback = async (e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        const name = e.target.name.value;
        const img = e.target.img.files[0];

        let CourseImageUrl = incomingImg;

        if (!img?.name) {
          CourseImageUrl = incomingImg
        } else {
          CourseImageUrl = await uploadImg(img);
        }
        

          const payload = {
            feedback,
            name,
            img: CourseImageUrl
          };
          setLoader(true);
          let res = await feedbackUpdateApi(id,payload);
          setLoader(false);
          if(res){
            await feedbackByCourseIdDataApi(id)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Feedback updated successfully",
              showConfirmButton: false,
              timer: 1500
            });
            
          }else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Failed to update feedback",
              showConfirmButton: false,
              timer: 1500
            });
          }
          e.target.reset();
    };

  return (
    <div>
      <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Feedback Update Form</h2>
      <form onSubmit={handleUpdateFeedback} className="bg-white shadow-md rounded-lg p-8">
        {/* Course Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            readOnly
            defaultValue={singleFeedbackData[0]?.courseData?.course_name}
            key={Date.now()}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name='name'
            id="name"
            defaultValue={singleFeedbackData[0]?.name}
            key={Date.now()}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img key={Date.now()} src= { singleFeedbackData[0]?.img }  />
            </div>
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="file"
            name='img'
            id="image"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Feedback */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            id="feedback"
            name='feedback'
            rows="4"
            defaultValue={ singleFeedbackData[0]?.feedback }
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
    {
      loader && (
        <div>
          <Loader></Loader>
        </div>
      )
    }
    </div>
  )
}

export default UpdateFeedbackPage
