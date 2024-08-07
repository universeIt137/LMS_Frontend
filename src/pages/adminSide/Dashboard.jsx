import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="md:mx-6 lg:mx-10 h-[60vh] ">

     <div className="flex">
             <div><SideBar ></SideBar></div>
             <div className="bg-[#F3F4FF]" >
             <Navbar></Navbar>
             <Outlet></Outlet>
             </div>
     </div>

    </div>
  );
};

export default Dashboard;