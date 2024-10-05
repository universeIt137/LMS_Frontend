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
    },
    allCurriculumDataList : [],
    allCurriculumDataApi : async ()=>{
        let res = await axiosPublic.get(`/all/curriculum/admin`);
        if(res.data["status"] ==='success'){
            set({allCurriculumDataList : res.data.data});
        } else{
            return false;
        }
    },
    singleCurriculumData : [],
    singleCurriculumDataApi : async (id) => {
        let res = await axiosPublic.get(`/single/curriculum/${id}`);
        if(res.data["status"] ==='success'){
            set({singleCurriculumData : res.data.data});
        } else{
            return false;
        }
    },
    updateCurriculumDataApi : async (id,payload) => {
        let res = await axiosPublic.put(`/curriculum/update/${id}`,payload);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    },
    deleteCurriculumDataApi : async (id) => {
        let res = await axiosPublic.delete(`/curriculum/delete/${id}`);
        if(res.data["status"]==="success"){
            return res.data["status"];
        } else{
            return false;
        }
    }
}));

export default curriculumStore;