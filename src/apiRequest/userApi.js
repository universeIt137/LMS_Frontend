import axios from "axios";
import {setToken} from "../helper/sessionHelper"

const baseUrl = `https://lms-server-theta.vercel.app/api/v1`;

export const registration = async (postBody)=>{
    try {
        let res = await axios.post(`${baseUrl}/user/sign-up`,postBody);
        if(res.data["status"]==="success"){
            return res.data["status"];
        }
    } catch (error) {
        return [false, error.response.data.msg];
    }
};

export const login = async(postBody)=>{
    try {
        let res = await axios.post(`${baseUrl}/user/sign-in`,postBody);
        if(res.data["status"]==="success"){
            setToken(res.data["token"]);
            return res.data["status"];
        }
    } catch (error) {
        return false;
    }
};