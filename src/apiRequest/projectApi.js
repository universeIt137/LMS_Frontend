import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";

const axiosPublic = useAxiosPublic();

const projectStore = create((set)=>({
    projectCreateApi : async function(payload) {
        let res = await axiosPublic.post(`/project/create`,payload);
        if(res.data.status ==='success'){
            return res.data;
        } else{
            return false;
        }
    },

}));

export default projectStore;