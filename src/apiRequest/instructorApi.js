import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
const axiosPublic = useAxiosPublic()

const instructorStore = create((set)=>({
    instructorNameDropDown : null,
    instructorNameDropDownDropDownApi : async ()=>{
        let res = await axiosPublic.get(`/instructors-name`);
        if(res.data["status"] === 'success'){
            set({instructorNameDropDown : res.data.data});
        } else{
            return false;
        }
    },
    instructorCreateApi : async function(payload){
        let res = await axiosPublic.post(`/instructor/create`,payload);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    }
}));

export default instructorStore;