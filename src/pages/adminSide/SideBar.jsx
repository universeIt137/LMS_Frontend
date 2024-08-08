import { NavLink } from "react-router-dom";
import logo from "../../assets/backend img/A.png"
import logoText from "../../assets/backend img/Akademi.png"
import homeLago from "../../assets/backend img/Vector.png"
import { FaHome, FaUserCheck } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdEventNote, MdOutlineFoodBank } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { TbActivity } from "react-icons/tb";
homeLago
const SideBar = () => {

  return (
    //  this is admin lago 
    <div className="bg-[#4D44B5] w-[345px] h-[100%] text-[#C1BBEB]">
      <div className=" flex justify-center items-center  gap-3 h-[54px] mb-5">
        <img className="bg-[#FB7D5B] rounded-md h-[30px] w-8" src={logo} alt="" />
        <img src={logoText} alt="" />
      </div>
      {/* this is nav link  */}
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <FaHome className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Dashboard
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <PiStudentBold className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/students"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Students
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <GiTeacher className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/teachers"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Teachers
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <MdEventNote className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Event
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <FaHandHoldingDollar e className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Finance
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <MdOutlineFoodBank className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Food
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <FaUserCheck className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          User
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <IoIosChatbubbles  className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Chat
        </NavLink>

      </div>
       </div>
       <div className=" flex justify-end  ">
       <div className="flex  items-center gap-5  py-2 px-4 hover:text-[#4D44B5] hover:rounded-2xl hover:bg-[#F3F4FF] w-[300px] my-4 ">
        <TbActivity  className="w-10 h-10 gap-2" />
        <NavLink
          to="/admin/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending   " : isActive ? "active text-2xl " : ""
          }
        >
          Lastest Activity
        </NavLink>

      </div>
       </div>
      

    </div>

  );
};

export default SideBar;