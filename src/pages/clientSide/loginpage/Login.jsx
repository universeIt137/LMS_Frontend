
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import loginImg from '../../../assets/image/login.jpeg'
import Container from "../../../Shared/Container";
import InputLabel from "../../../Shared/InputLabel";
import { inputFieldStyle } from "../../../Shared/InputFieldStyle";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [passErr, setPassErr] = useState(false)
  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    

  }
  return (
    <Container>
      <div

      >
        <Helmet>
          <title>LMS Login Page</title>
        </Helmet>
        <div className="w-full grid lg:grid-cols-5 gap-5 max-h-[100vh] overflow-hidden">

          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 w-full max-w-[600px] mx-auto my-auto p-5">
            <h2 className="text-[32px] font-semibold text-center py-4">Sign in to your account</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <InputLabel text={'Email'} />
                <input {...register("email", { required: true })} className={`${inputFieldStyle}`} placeholder="Email" type="email" />
              </div>
              <div className="space-y-2">
                <InputLabel text={'Password'} />
                <div className="relative">
                  <input onChange={() => setPassErr(false)} {...register("password", {
                    required: true,
                    onChange: () => {
                      setPassErr(false);
                    }
                  })} className={`${inputFieldStyle}`} placeholder="Confirm Password" type={!showPass ? 'password' : 'text'} />
                  <p className="absolute top-0 flex justify-center items-center right-0 h-full px-2 cursor-pointer text-lg" onClick={() => setShowPass(!showPass)}>{!showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}</p>
                </div>
                {
                  passErr && <p className="text-red-500">Passwords do not match</p>
                }
              </div>
              <button className="text-sm sm:text-base flex gap-2 items-center h-[45px] px-4 sm:px-7 rounded-lg bg-black text-white">Sign in <FaArrowRightLong /></button>
              <SocialLogin />
            </div>


          </form>
          <img className="max-h-[100vh] w-full object-cover hidden lg:block lg:col-span-2" src={loginImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
