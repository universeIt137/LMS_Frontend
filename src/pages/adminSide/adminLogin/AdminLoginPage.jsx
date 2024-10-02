import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AdminLoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { emailLogin, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
    } else {
      setError("");
      // Handle traditional login here (e.g., API call)
      // console.log("Logging in with", email, password);
      emailLogin(email, password)
        .then(res => {
          console.log(res.user);
          navigate("/dashboard");
        })
        .catch(err => {
          console.log(err.message);
      })
    }

    const data = { email, password };
    console.log(data);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(res => {
        console.log(res.user);
        navigate("/dashboard");
      })

  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Traditional Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <Link to={'/admin-register'}><p className="text-xs mt-2 text-blue-600">Or Register as Admin</p></Link>


        
        {/* Google Login Button */}
        
      </div>
    </div>
  );
};

export default AdminLoginPage;