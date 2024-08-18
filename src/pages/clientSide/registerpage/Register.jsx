
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import registerImg from '../../../assets/image/register.jpeg'
import Container from "../../../Shared/Container";
import InputLabel from "../../../Shared/InputLabel";
import { inputFieldStyle } from "../../../Shared/InputFieldStyle";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Handle login logic here
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
          <form onSubmit={handleLogin} className="lg:col-span-3 w-full max-w-[600px] mx-auto my-auto p-5">
            <h2 className="text-[32px] font-semibold text-center py-4">Create Your Account</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {/* name  */}
                <div className="space-y-2">
                  <InputLabel text={'First Name'} />
                  <input className={`${inputFieldStyle}`} placeholder="First Name" type="text" />
                </div>
                <div className="space-y-2">
                  <InputLabel text={'Last Name'} />
                  <input className={`${inputFieldStyle}`} placeholder="Last Name" type="text" />
                </div>
              </div>
              {/* username  */}
              <div className="space-y-2">
                <InputLabel text={'Username'} />
                <input className={`${inputFieldStyle}`} placeholder="Username" type="text" />
              </div>
              {/* email  */}
              <div className="space-y-2">
                <InputLabel text={'Email'} />
                <input className={`${inputFieldStyle}`} placeholder="Email" type="email" />
              </div>
              {/* pass  */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <InputLabel text={'Password'} />
                  <input className={`${inputFieldStyle}`} placeholder="Enter Password" type="text" />
                </div>
                <div className="space-y-2">
                  <InputLabel text={'Confirm Password'} />
                  <input className={`${inputFieldStyle}`} placeholder="Confirm Password" type="text" />
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
