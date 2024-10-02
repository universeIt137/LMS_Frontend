import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
import { getToken } from "../helper/sessionHelper";
const config = {
    headers: {
      'Authorization': `${getToken()}`
    }
  }
const axiosPublic = useAxiosPublic()
const courseStore = create((set)=>({
    courseCreateApi : async (payload)=>{
        let res = await axiosPublic.post(`/course/create`,payload,config);
        if(res.data.status === 'success'){
            return res.data
        }else{
            return false;
        }
    }
}));

export default courseStore;