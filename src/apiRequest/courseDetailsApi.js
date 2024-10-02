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
}));

export default courseDetailsStore;