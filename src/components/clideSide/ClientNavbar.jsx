import { AiFillCode, AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";
import { FaBars, FaCode, FaDatabase, FaPencilRuler, FaShoppingCart } from "react-icons/fa";
import { SiHtml5, SiJavascript, SiPython, SiReact } from "react-icons/si";
import { Link } from "react-router-dom";

const ClientNavbar = () => {
  const user = {
    email: "",
    photoURL: "",
  };

  const navLink = <>
    <li className="bg-[#E0D7FF]  ">
      <details className="group">
        <summary className="cursor-pointer list-none group-open:before:rotate-90 before:content-none p-2 flex items-center text-[#754ffd]">
          <FaBars className="mr-2" /> Courses
        </summary>
        <ul className="p-2 z-50 md:w-60 bg-white  shadow-lg">
          <li className="py-1">
            <Link to="#" className="hover:text-purple-700 flex items-center">
              <FaCode className="mr-2" /> Web Development
            </Link>
            <ul className="pl-4">
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <SiHtml5 className="mr-2" /> HTML & CSS
                </Link>
              </li>
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <SiJavascript className="mr-2" /> JavaScript
                </Link>
              </li>
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <SiReact className="mr-2" /> React
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-1">
            <Link to="#" className="hover:text-purple-700 flex items-center">
              <FaDatabase className="mr-2" /> Data Science
            </Link>
            <ul className="pl-4">
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <SiPython className="mr-2" /> Python
                </Link>
              </li>
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <AiOutlineLineChart className="mr-2" /> Machine Learning
                </Link>
              </li>
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <AiOutlineBarChart className="mr-2" /> Data Visualization
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-1">
            <Link to="#" className="hover:text-purple-700 flex items-center">
              <FaPencilRuler className="mr-2" /> Graphic Design
            </Link>
            <ul className="pl-4">
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <AiFillCode className="mr-2" /> Adobe Photoshop
                </Link>
              </li>
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <AiFillCode className="mr-2" /> Illustrator
                </Link>
              </li>
              <li className="py-1">
                <Link to="#" className="hover:text-purple-700 flex items-center">
                  <AiFillCode className="mr-2" /> InDesign
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </details>
    </li>
    <li><Link to='/course-category'>Course Category</Link></li>
    <li><Link to='/course-bundle'>Course Bundles</Link></li>

    <li><Link to='/courseDetails'>Course Details</Link></li>

    <li><Link to='/bootCamp'>Boot Camps</Link></li>
    <li><Link to='/team-training'>Team Trainings</Link></li>
  

    
  </>

  return (
    <div className="navbar bg-white shadow-lg">
      <div className="flex items-center justify-between w-full px-2 md:px-6">
        <div className="flex items-center gap-5">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 bg-base-100 rounded-box shadow">
              {navLink}
            </ul>
          </div>

          <Link to="/" className="flex items-center ">
            <img
              src="https://universeitinstitute-7e0ff.web.app/assets/mainLogo-BI908wdQ.png"
              alt="Logo"
              className="w-20 h-auto lg:w-24"
            />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal mx-2 font-medium">
            {navLink}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/checkout">
            <FaShoppingCart className="text-xl cursor-pointer hover:text-purple-700" />
          </Link>
          {user?.email ? (
            <>
              <span className="hidden md:block">{user.email}</span>
              <button className="btn btn-sm ">Sign out</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
          )}
          <Link className=" btn btn-sm  text-white bg-[#334155]" to="/register">
            Sign Up
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ClientNavbar;
