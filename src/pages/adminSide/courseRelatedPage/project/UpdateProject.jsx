import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hook/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import projectStore from '../../../../apiRequest/projectApi';
import { uploadImg } from '../../../../uploadImage/UploadImage';
import Swal from 'sweetalert2';

const UpdateProject = () => {
    const { singleProjectData, singleProjectDataApi } = projectStore();
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        (async () => {
            await singleProjectDataApi(id);
        })();
    }, []);

    console.log(singleProjectData);

    

    // const { data: project = [] } = useQuery({
    //     queryKey: ['project'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/single/project/${id}`);
    //         return res.data.data;
    //     }
    // })

    // let [{ project_img: incomingUrl }] = singleProjectData;
    
    // console.log(incomingUrl);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.project_img.files[0];
        const project_name = form.project_name.value;


        let project_img = '';

        if (!image?.name) {
            project_img = incomingImgUrl;
        } else {
            project_img = await uploadImg(image);
        }

        const data = { project_img, project_name };
        console.log(data);
        axiosPublic.put(`/project/update/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Project data has been Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
            }
            })
            .catch(err => {
                console.log(err.message);
        })


    }


    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100">
                <div
                    className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full"

                >
                    <h2
                        className="text-2xl font-bold text-center mb-6"

                    >
                        Update {singleProjectData[0]?.corseData?.course_name} Course's Project
                    </h2>

                    <form onSubmit={handleSubmit}>
                        {/* Project Image */}
                        <div
                            className="mb-4"

                        >
                            <label htmlFor="project_img" className="block text-gray-700 font-semibold mb-2">
                                Project Image
                            </label>
                            <input
                                type="file"
                                id="project_img"
                                name="project_img"

                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={singleProjectData[0]?.project_img} />
                            </div>
                        </div>


                        {/* Project Name */}
                        <div
                            className="mb-4"

                        >
                            <label htmlFor="project_name" className="block text-gray-700 font-semibold mb-2">
                                Project Name
                            </label>
                            <input
                                type="text"
                                id="project_name"
                                name="project_name"
                                defaultValue={singleProjectData[0]?.project_name}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter project name"
                            />
                        </div>

                        {/* Course ID */}
                        <div
                            className="mb-4"

                        >
                            <label htmlFor="course_id" className="block text-gray-700 font-semibold mb-2">
                                Course Name
                            </label>
                            <select
                                id="course_id"
                                name="course_id"
                                required
                                className="form-select w-full px-3 py-[10px] mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                            >
                                <option value={singleProjectData[0]?._id}>
                                    {singleProjectData[0]?.corseData.course_name}
                                </option>

                            </select>
                        </div>

                        {/* Submit Button without Animation */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;