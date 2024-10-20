import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
const axiosPublic = useAxiosPublic();

const courseDetailsStore = create((set)=>({
    createCourseDetailsApi : async (payload)=>{
        console.log("payload",payload);
        let res = await axiosPublic.post(`/course/details/created`,payload);
        if(res.data["status"]==="success"){
            return res.data["status"];
        }else{
            return false;
        }
    },
    singleCourseDetailsByCourseId : [],
    singleCourseDetailsByCourseIdApi: async (id) => {
        let res = await axiosPublic.get(`/course-details-by-courseId/${id}`);
        if(res.data["status"] ==='success'){
            set({singleCourseDetailsByCourseId : res.data.data});
        } else{
            return false;
        }
    },
    singleCourseDetails : [],
    singleCourseDetailsApi: async (id) => {
        let res = await axiosPublic.get(`/single-course-details/${id}`);
        if(res.data["status"] ==='success'){
            set({singleCourseDetails : res.data.data});
        } else{
            return false;
        }
    },
    updateCourseDetailsApi : async (id,payload)=>{
        let res = await axiosPublic.put(`/curriculum/delete/${id}`,payload);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    },
    deleteCourseDetailsApi : async (id) => {
        let res = await axiosPublic.delete(`/course/details/delete/${id}`);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
}));

export default courseDetailsStore;