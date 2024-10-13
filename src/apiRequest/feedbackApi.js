import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";

const useAxios = useAxiosPublic();


const feedbackStore = create((set)=>({
    createFeedbackApi : async (payload)=>{
        let res = await useAxios.post(`/feedback/create`,payload);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },
    allFeedbackList : [],
    allFeedbackListApi : async ()=>{
        let res = await useAxios.get(`/all-feedback`);
        if(res.data["status"] ==='success'){
            set(state=>({allFeedbackList: res.data["data"]}));
        } else{
            return false;
        }
    },

    singleFeedbackData : [],
    singleFeedbackDataApi: async (id)=>{
        let res = await useAxios.get(`/single-feedback/${id}`);
        if(res.data["status"] ==='success'){
            set({singleFeedbackData : res.data["data"]});
        } else{
            return false;
        }
    },

}));

export default feedbackStore;