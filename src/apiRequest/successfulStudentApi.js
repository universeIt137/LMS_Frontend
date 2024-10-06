import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";

const useAxios = useAxiosPublic();

const successfulStudentStore = create((set)=>({
    successfulStudentCreate : async (payload)=>{
        let res = await useAxios.post(`/student/create`,payload);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    successfulStudentUpdate : async (id,payload)=>{
        let res = await useAxios.put(`/student/update/${id}`,payload);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    successfulStudentDelete : async (id) => {
        let res = await useAxios.delete(`/student/delete/${id}`);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    successfulStudentDataList : [],
    successfulStudentDataListApi: async () => {
        let res = await useAxios.get(`all-successful-student`);
        if(res.data["status"] ==='success'){
            set({successfulStudentDataList : res.data.data});
        } else{
            return false;
        }
    },

    singleSuccessStudentData : [],
    singleSuccessStudentDatApi: async (id)=>{
        let res = await useAxios.get(`/single/successful-student/${id}`);
        if(res.data["status"] ==='success'){
            set({singleSuccessStudentData : res.data.data});
        } else{
            return false;
        }

    },

}));

export default successfulStudentStore;