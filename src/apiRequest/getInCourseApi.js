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
    }
}));

export default getInCourseStore;