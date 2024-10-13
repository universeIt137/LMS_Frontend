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
    }
}));

export default moduleStore;