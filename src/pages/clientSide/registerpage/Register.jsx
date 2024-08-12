import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle registration logic here
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?w=740&t=st=1723483192~exp=1723483792~hmac=7c894aa9d1772e06a28a7efc1ce0aba4a9779a48ca596f2e25702d4d28cd1e99)`,
      }}
      className="flex items-center justify-center min-h-screen  bg-no-repeat bg-cover bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <Helmet>
        <title> LMS Register Page</title>
      </Helmet>
      <div className="w-full max-w-md p-8 my-10 space-y-8  bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100">Create an Account</h1>
          <p className="mt-2 text-sm text-gray-200">
            Please fill in the information below
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-gray-100 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-100 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="relative space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-gray-100 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-gray-500" />
              ) : (
                <AiFillEye className="text-gray-500" />
              )}
            </button>
          </div>
          <div className="relative space-y-1">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-200"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 text-gray-100 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible className="text-gray-500" />
              ) : (
                <AiFillEye className="text-gray-500" />
              )}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <FcGoogle className="text-2xl" />
            <p className="text-gray-100">Continue with Google</p>
          </div>
          <p className="text-center text-sm text-gray-200">
            Already have an account?{" "}
            <Link
              className="font-medium text-blue-300 hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
