import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavManu = () => {
  const user={
    email:"coderbiplobKumar@gmail.com"
  }
  const navLink=<>  <li><Link to='/admin/dashboard'>Dashbord</Link></li>
  <li><Link to='/course-bundle'>Course Bundles</Link></li>
  <li><Link to='/bootCamp'>Boot Camps</Link></li>
  <li><Link to='/team-training'>Team Trainings</Link></li>
  <li><Link to='/login'>Login</Link></li>
  
  <li>
    <details>
      <summary>Ebook</summary>
      <ul className="p-2 z-50 md:w-60">
        <li><a>Submenu </a></li>
        <li><a>Submenu </a></li>
      </ul>
    </details>
  </li>
</>
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLink}
          </ul>
        </div>
        <div className="navbar-end">
      {
                    user ? <>
                        <span className="hidden md:block"></span>
                        <a  className="btn btn-sm mx-2">Sign out</a>
                    </> 
                    : <Link to="/login">
                        <button className="btn btn-sm">Login</button>
                    </Link>
                }
        
         {user?.photoURL? 
       <img className="h-10 w-10 rounded-full" src={user.photoURL
       } alt="" /> :
       <FaUserTie className="h-10 w-10 rounded-full"  ></FaUserTie>  
      }
      </div>
      </div>
    </div>
  );
};

export default NavManu;