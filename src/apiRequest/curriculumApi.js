import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";

const axiosPublic = useAxiosPublic()

const curriculumStore = create((set)=>({
    createCurriculumApi : async (payload)=>{
        console.log("payload",payload);
        let res = await axiosPublic.post(`/curriculum/create`,payload);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    }
}));

export default curriculumStore;