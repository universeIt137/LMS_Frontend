import { useState } from "react";
import { Helmet } from "react-helmet-async";
import registerImg from "../../../assets/image/register.jpeg";
import Container from "../../../Shared/Container";
import InputLabel from "../../../Shared/InputLabel";
import { inputFieldStyle } from "../../../Shared/InputFieldStyle";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { registration } from "../../../apiRequest/userApi";
import { isEmail, isEmpty } from "../../../helper/fromHelper";
import { Toaster,toast  } from "react-hot-toast";
import {useNavigate } from "react-router-dom";
const Register = () => {
  const [showInitialPassword, setShowInitialPassword] = useState(false);
  const [isSamePassErr, setIsSamePassErr] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [data,setData] = useState({
    firstName : "",
    lastName:"",
    username : "",
    email : "" ,
    password : "",
    confirmPassword : "" ,
  });

  const {firstName,lastName,username,email,password,confirmPassword} = data;

  const getInputValue = (Name,value)=>{
    setData((prev)=>({
      ...prev,
      [Name] : value
    }))
  };
  const navigate = useNavigate()
  const submitFromValue = async (e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      toast.error("Password & confirm password not match");
    }
    else if(isEmail(email)){
      toast.error("Please enter your email");
    }else{
      let res = await registration(data);
      if(res){
        navigate("/login");
        toast.success("Account create successfully");
        
      }else{
        toast.error("Something went wrong");
      }
    }
    

  }

  return (
    <Container>
      <div>
        <Helmet>
          <title>LMS || Register</title>
        </Helmet>
        <div className="w-full grid lg:grid-cols-5 gap-5">
          <img
            className="w-full object-cover hidden lg:block lg:col-span-2 min-h-full"
            src={registerImg}
            alt=""
          />
          <form onSubmit={submitFromValue}
            
            className="lg:col-span-3 w-full max-w-[600px] mx-auto my-auto p-5"
          >
            <h2 className="text-[32px] font-semibold text-center py-4">
              Create Your Account
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {/* name  */}
                <div className="space-y-2">
                  <InputLabel text={"First Name"} />
                  <input
                    className={`${inputFieldStyle}`}
                    onChange={(e)=>{getInputValue("firstName",e.target.value)}}
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                  />
                </div>
                <div className="space-y-2">
                  <InputLabel text={"Last Name"} />
                  <input
                    className={`${inputFieldStyle}`}
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e)=>{getInputValue("lastName",e.target.value)}}
                  />
                </div>
              </div>
              {/* username  */}
              <div className="space-y-2">
                <InputLabel text={"Username"} />
                <input
                  className={`${inputFieldStyle}`}
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e)=>{getInputValue("username",e.target.value)}}
                />
              </div>
              {/* email  */}
              <div className="space-y-2">
                <InputLabel text={"Email"} />
                <input
                  className={`${inputFieldStyle}`}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e)=>{getInputValue("email",e.target.value)}}
                />
              </div>
              {/* pass  */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <InputLabel text={"Password"} />
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e)=>{getInputValue("password",e.target.value)}}
                      className={`${inputFieldStyle}`}
                      placeholder="Enter Password"
                      type={!showInitialPassword ? "password" : "text"}
                    />
                    <p
                      className="absolute top-0 flex justify-center items-center right-0 h-full px-2 cursor-pointer text-lg"
                      onClick={() =>
                        setShowInitialPassword(!showInitialPassword)
                      }
                    >
                      {!showInitialPassword ? (
                        <IoEyeOffOutline />
                      ) : (
                        <IoEyeOutline />
                      )}
                    </p>
                  </div>
                  
                </div>
                <div className="space-y-2">
                  <InputLabel text={"Confirm Password"} />
                  <div className="relative">
                    <input
                      value={confirmPassword}
                      onChange={(e)=>{getInputValue("confirmPassword",e.target.value)}}
                      className={`${inputFieldStyle}`}
                      placeholder="Confirm Password"
                      type={!showConfirmPassword ? "password" : "text"}
                    />
                    <p
                      className="absolute top-0 flex justify-center items-center right-0 h-full px-2 cursor-pointer text-lg"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {!showConfirmPassword ? (
                        <IoEyeOffOutline />
                      ) : (
                        <IoEyeOutline />
                      )}
                    </p>
                  </div>
                  {isSamePassErr && (
                    <p className="text-red-500">Passwords do not match</p>
                  )}
                </div>
              </div>

              <button className="text-sm sm:text-base flex gap-2 items-center h-[45px] px-4 sm:px-7 rounded-lg bg-black text-white">
                Create Account <FaArrowRightLong />
              </button>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false}
/>
    </Container>
  );
};

export default Register;
