import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
import { getToken } from "../helper/sessionHelper";

const axiosPublic = useAxiosPublic()
const courseStore = create((set)=>({
    courseCreateApi : async (payload)=>{
        let res = await axiosPublic.post(`/course/create`,payload);
        if(res.data.status === 'success'){
            return res.data
        }else{
            return false;
        }
    },

    singleCourseData : [],
    singleCourseDataApi: async (id) => {
        console.log(id);
        let res = await axiosPublic.get(`/single-course/${id}`);
        if(res.data.status === 'success'){
            set({singleCourseData : res.data.data});
        }else{
            return false;
        }
    },

    allCourseList : null,
    allCourseListApi : async ()=>{
        let res = await axiosPublic.get(`/all-course`);
        if(res.data.status === 'success'){
            set({allCourseList : res.data.data});
        }else{
            return false;
        }
    },

    updateCourseApi : async (id,payload)=>{
        let res = await axiosPublic.put(`/course/update/${id}`,payload);
        if(res.data.status ==='success'){
            return res.data.status
        }else{
            return false;
        }
    },

    deleteCourseApi : async (id)=>{
        let res = await axiosPublic.delete(`/course/delete/${id}`);
        if(res.data.status ==='success'){
            return res.data.status
        }else{
            return false;
        }
    },

    courseNameList : [],
    courseNameListApi : async ()=>{
        let res = await axiosPublic.get(`/all-course-name`);
        if(res.data.status ==='success'){
            set({courseNameList : res.data.data});
        }else{
            return false;
        }
    }
    
}));

export default courseStore;