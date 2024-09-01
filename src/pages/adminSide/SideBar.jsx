import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/backend img/A.png"
import logoText from "../../assets/backend img/Akademi.png"
import homeLago from "../../assets/backend img/Vector.png"
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
homeLago
const SideBar = () => {

  return (
    //  this is admin lago 
    <div className="bg-[#0F172A] w-[240px] h-[100%] text-[#E2E8F0] text-sm">
      <Link to='/'>
        <div className=" flex justify-center items-center  gap-3 h-[54px] mb-5">
          <img className="bg-[#FB7D5B] rounded-md h-[30px] w-8" src={logo} alt="" />
          <img src={logoText} alt="" />
        </div>
      </Link>
      {/* this is nav link  */}
      <div className=" flex justify-end  ">
        <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
          <FaHome className="w-[20px] h-[15px] gap-2" />
          <NavLink
            to="/admin/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending   " : isActive ? "active text-[#3B82F6] " : ""
            }
          >
            Dashboard
          </NavLink>

        </div>
      </div>
      <div className=" flex justify-end  ">
        <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
          <PiStudentBold className="w-[20px] h-[15px] gap-2" />
          <NavLink
            to="/admin/students"
            className={({ isActive, isPending }) =>
              isPending ? "pending   " : isActive ? "active text-[#3B82F6] " : ""
            }
          >
            Students
          </NavLink>

        </div>
      </div>
      <div className=" flex justify-end  ">
        <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
          <GiTeacher className="w-[20px] h-[15px] gap-2" />
          <NavLink
            to="/admin/teachers"
            className={({ isActive, isPending }) =>
              isPending ? "pending   " : isActive ? "active text-[#3B82F6] " : ""
            }
          >
            Teachers
          </NavLink>

        </div>
      </div>


    </div>

  );
};

export default SideBar;