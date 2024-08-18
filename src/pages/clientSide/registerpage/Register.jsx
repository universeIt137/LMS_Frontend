
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import registerImg from '../../../assets/image/register.jpeg'
import Container from "../../../Shared/Container";
import InputLabel from "../../../Shared/InputLabel";
import { inputFieldStyle } from "../../../Shared/InputFieldStyle";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const Register = () => {
  const [showInitialPassword, setShowInitialPassword] = useState(false);
  const [isSamePassErr, setIsSamePassErr] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm()
  const onSubmit = async (data) => {
    setIsSamePassErr(false)
    const initialPass = data?.initialPass;
    const confirmPass = data?.confirmPass;
    console.log(confirmPass);
    if (initialPass !== confirmPass) {
      setIsSamePassErr(true)
      return
    }
    console.log(data);

  };

  return (
    <Container>
      <div

      >
        <Helmet>
          <title>LMS || Register</title>
        </Helmet>
        <div className="w-full grid lg:grid-cols-5 gap-5">
          <img className="w-full object-cover hidden lg:block lg:col-span-2 min-h-full" src={registerImg} alt="" />
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 w-full max-w-[600px] mx-auto my-auto p-5">
            <h2 className="text-[32px] font-semibold text-center py-4">Create Your Account</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {/* name  */}
                <div className="space-y-2">
                  <InputLabel text={'First Name'} />
                  <input {...register("firstName", { required: true })} className={`${inputFieldStyle}`} placeholder="First Name" type="text" />
                </div>
                <div className="space-y-2">
                  <InputLabel text={'Last Name'} />
                  <input {...register("lastName", { required: true })} className={`${inputFieldStyle}`} placeholder="Last Name" type="text" />
                </div>
              </div>
              {/* username  */}
              <div className="space-y-2">
                <InputLabel text={'Username'} />
                <input {...register("username", { required: true })} className={`${inputFieldStyle}`} placeholder="Username" type="text" />
              </div>
              {/* email  */}
              <div className="space-y-2">
                <InputLabel text={'Email'} />
                <input {...register("email", { required: true })} className={`${inputFieldStyle}`} placeholder="Email" type="email" />
              </div>
              {/* pass  */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <InputLabel text={'Password'} />
                  <div className="relative">
                    <input {...register("initialPass", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
                    })} className={`${inputFieldStyle}`} placeholder="Enter Password" type={!showInitialPassword ? 'password' : 'text'} />
                    <p className="absolute top-0 flex justify-center items-center right-0 h-full px-2 cursor-pointer text-lg" onClick={() => setShowInitialPassword(!showInitialPassword)}>{!showInitialPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}</p>
                  </div>
                  {errors?.initialPass?.type === 'required' && <span className='text-red-500'>Password invalid</span>}
                  {errors?.initialPass?.type === 'minLength' && <span className='text-red-500 '>Password must be minimum 8 characters</span>}
                  {errors?.initialPass?.type === 'maxLength' && <span className='text-red-500 '>Password must be maximum 20 characters</span>}
                  {errors?.initialPass?.type === 'pattern' && <span className='text-red-500 '>Password must contain at least one digit, one lowercase letter, and one uppercase letter.</span>}
                </div>
                <div className="space-y-2">
                  <InputLabel text={'Confirm Password'} />
                  <div className="relative">
                    <input onChange={() => setIsSamePassErr(false)} {...register("confirmPass", {
                      required: true,
                      onChange: () => {
                        setIsSamePassErr(false);
                        // Additional logic can be added here if needed
                      }
                    })} className={`${inputFieldStyle}`} placeholder="Confirm Password" type={!showConfirmPassword ? 'password' : 'text'} />
                    <p className="absolute top-0 flex justify-center items-center right-0 h-full px-2 cursor-pointer text-lg" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{!showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}</p>
                  </div>
                  {
                    isSamePassErr && <p className="text-red-500">Passwords do not match</p>
                  }
                </div>
              </div>

              <button className="text-sm sm:text-base flex gap-2 items-center h-[45px] px-4 sm:px-7 rounded-lg bg-black text-white">Create Account <FaArrowRightLong /></button>
              <SocialLogin />
            </div>


          </form>

        </div>
      </div>
    </Container>
  );
};

export default Register;
