import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import microsoftImg from '../../assets/image/microsoft.png'
const SocialLogin = () => {
    const loginBtnStyle = 'w-full border border-gray-400 h-[45px] rounded-lg transition-all duration-300 active:scale-90 text-sm flex gap-1 justify-center items-center'
    return (
        <div className="space-y-4">
            <div className="flex gap-1 items-center">
                <hr className="border-[#94A3B8] w-full" />
                <div className="text-nowrap text-[#94A3B8] text-sm">Sign in with</div>
                <hr className="border-[#94A3B8]  w-full" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button className={`${loginBtnStyle} text-blue-700`}><FaFacebook className=" text-lg" /> Facebook</button>
                <button className={`${loginBtnStyle} text-red-700`}> <FcGoogle className=" text-lg" /> Google</button>
                <button className={`${loginBtnStyle}`}> <img className="size-4" src={microsoftImg} alt="" /> Microsoft</button>
            </div>
        </div>
    );
};

export default SocialLogin;