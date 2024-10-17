import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";

const axiosPublic = useAxiosPublic();


const moduleStore = create((set)=>({
    moduleCreateApi : async (payload)=>{
        let res = await axiosPublic.post(`/module/create`,payload);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    },
    moduleByCourseId : [],
    moduleByCourseIdApi: async (courseId) => {
        let res = await axiosPublic.get(`/module-by-course-id/${courseId}`);
        if(res.data["status"] ==='success'){
            set({moduleByCourseId : res.data.data});
        } else{
            console.log("error",res.data);
        }
    },

    moduleUpdateApi : async (id,payload)=>{
        let res = await axiosPublic.put(`/module/update/${id}`,payload);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    },

    singleModuleData : [],
    singleModuleDataApi: async (id) => {
        let res = await axiosPublic.get(`/get/single/module/${id}`);
        if(res.data.status === 'success'){
            set({singleModuleData : res.data.data});
        } else{
            return false;
        }
    },

    moduleDeleteApi : async (id)=>{
        let res = await axiosPublic.delete(`/module/delete/${id}`);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    },

}));

export default moduleStore;