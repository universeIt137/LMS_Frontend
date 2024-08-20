import { FaBars, FaCode, FaDatabase, FaPencilRuler, FaSearch, FaShoppingCart, FaTimes, FaUserTie } from 'react-icons/fa';
import { SiHtml5, SiJavascript, SiReact, SiPython } from 'react-icons/si';
import { AiFillCode, AiOutlineLineChart, AiOutlineBarChart } from 'react-icons/ai';

import { Link } from "react-router-dom";
import { useState } from 'react';



const NavManu = () => {
  const user={
    email:"",
    photoURL:"",
  }

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

    <li><Link to='/course-bundle'>Course Bundles</Link></li>

    <li><Link to='/courseDetails'>Course Details</Link></li>

    <li><Link to='/bootCamp'>Boot Camps</Link></li>
    <li><Link to='/team-training'>Team Trainings</Link></li>
    <li>
      <details>
        <summary className="cursor-pointer p-2">Ebook</summary>
        <ul className="p-2 z-50 md:w-60 bg-white  shadow-lg">
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Kids</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Science Fiction & Fantasy</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Politics</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Cooking & Foods</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Motivation</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Freelancing & Outsourcing</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Programming Language</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Education</a>
          </li>
        </ul>
      </details>
    </li>
    <li><Link to='/login'>Find a tutor</Link></li>
    <li>
      <details>
        <summary className="cursor-pointer p-2 text-black">More</summary>
        <ul className="p-2 z-50 md:w-60 bg-white  shadow-lg">
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-1</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-2</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-3</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-4</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-5</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-6</a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-purple-700">Preview Home Page-7</a>
          </li>
        </ul>
      </details>
    </li>


  </>
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLink}
            </ul>
          </div>
          <Link to='/' className=" w-40"> <img src="https://demo.creativeitem.com/academy/uploads/system/e0d3336caa3bf40ceae5b4efeeedf541.png" alt="" /></Link>
        </div>
        <div className="navbar-center  hidden lg:flex lg:items-center">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end flex items-center space-x-4">
         

          <button
            className="btn btn-ghost flex items-center p-2"
            type="button"
            onClick={toggleDropdown}
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaSearch className="text-xl" />
            )}
          </button>

          <Link to="/checkout">
            <FaShoppingCart className="text-xl cursor-pointer" />
          </Link>
           {user?.email ?(
            <>
              <span className="hidden md:block"></span>
              <a className="btn btn-sm mx-2">Sign out</a>
            </>
          ) : (
            <Link to="/login">
             Login
            </Link>
          )}
            <Link to="/join">
              Join Now
            </Link>
          

        </div>
      </div>
    </div>
  );
};

export default NavManu;