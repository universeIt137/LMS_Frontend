import React, { useEffect } from 'react'
import courseStore from '../../../../apiRequest/courseApi';
import { useNavigate, useParams } from 'react-router-dom';
import successfulStudentStore from '../../../../apiRequest/successfulStudentApi';
import { complex } from 'framer-motion';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import Swal from 'sweetalert2';

const CourseSuccessfulStudentUpdatePage = () => {
    const {singleCourseDataApi,singleCourseData} = courseStore();
    const {singleSuccessStudentData,singleSuccessStudentDatApi,successfulStudentUpdate,successfulStudentDataListApi} = successfulStudentStore();
    const { img: incomingCourseImg } = singleSuccessStudentData;
    window.scrollTo(0, 0);
    const { id } = useParams();
    
    useEffect(()=>{
        (async()=>{
            await singleSuccessStudentDatApi(id);
        })()
    },[]);

    useEffect(()=>{
        (async()=>{
            await singleCourseDataApi(id);
        })()
    },[]);
    const navigate = useNavigate();
    const handleUpdate = async (e)=>{
        e.preventDefault();
        const course_id = e.target.course_id.value;
        const student_name = e.target.student_name.value;
        const img = e.target.img.files[0];
        const batch_no = e.target.batch_no.value;
        const position_of_job = e.target.position_of_job.value;
        const company_name = e.target.company_name.value;

        let CourseImageUrl = incomingCourseImg;

        if (!img?.name) {
          CourseImageUrl = incomingCourseImg
        } else {
          CourseImageUrl = await uploadImg(img);
        }

        const payload = {
            student_name,
            img: CourseImageUrl,
            batch_no,
            position_of_job,
            company_name
        };

        let res = await successfulStudentUpdate(id, payload);
        if (res) {
            await successfulStudentDataListApi();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successful Student Updated successfully",
            });
        }else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to Update Successful Student",
            });
        }
        e.target.reset();

    };

  return (
    <div className="flex  items-center justify-center bg-gray-100 ">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800"> ({singleCourseData?.course_name}) Course Update Successful Student</h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course_id">
                Course Name
              </label>
              <input
                id="course_id"
                name='course_id'
                type="text"
                defaultValue={singleCourseData?.course_name}
                key={Date.now()}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
              />
            </div>

            <div className="avatar">
                <div className="w-12">
                <img src= { singleSuccessStudentData[0]?.img } />
                </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img">
                Student Img
              </label>
              <input
                id="img"
                type="file"
                name='img'
                placeholder="Enter Image URL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="student_name">
                Student Name
              </label>
              <input
                id="student_name"
                type="text"
                name='student_name'
                defaultValue={singleSuccessStudentData[0]?.student_name}
                key={Date.now()}
                placeholder="Enter Student Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="batch_no">
                Batch No
              </label>
              <input
                id="batch_no"
                type="text"
                name='batch_no'
                defaultValue={singleSuccessStudentData[0]?.batch_no}
                placeholder="Enter Batch Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position_of_job">
                Position of Job
              </label>
              <input
                id="position_of_job"
                type="text"
                name='position_of_job'
                defaultValue={singleSuccessStudentData[0]?.position_of_job}
                key={Date.now()}
                placeholder="Enter Position of Job"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                Company Name
              </label>
              <input
                id="company_name"
                type="text"
                name='company_name'
                defaultValue={singleSuccessStudentData[0]?.company_name}
                placeholder="Enter Company Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CourseSuccessfulStudentUpdatePage
