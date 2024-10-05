import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";

const useAxios = useAxiosPublic();

const getInCourseStore = create((set)=>({

    getInCourseCreateApi : async (payload)=>{
        console.log("payload",payload);
        let res = await useAxios.post(`/get/in/course/create`,payload);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    
    getInCourseDataList : [],
    getInCourseListApi : async ()=>{
        let res = await useAxios.get(`get/in/course/admin`);
        if(res.data["status"] ==='success'){
            set({getInCourseDataList : res.data.data});
        } else{
            return false;
        }

    },
    getInCourseUpdateApi : async (id,payload)=>{
        let res = await useAxios.put(`/get/in/course/update/${id}`,payload);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    getInCourseDeleteApi : async (id)=>{
        let res = await useAxios.delete(`/get/in/course/delete/${id}`);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    getInCourseSingleData:[] ,
    getInCourseSingleDataApi : async (id)=>{
        let res = await useAxios.get(`/get/in/course/${id}`);
        if(res.data["status"] ==='success'){
            set({getInCourseSingleData : res.data.data});
        } else{
            return false;
        }
    },
}));

export default getInCourseStore;