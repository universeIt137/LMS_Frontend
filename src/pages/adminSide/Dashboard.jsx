
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="md:mx-6 lg:mx-14 h-[60vh] bg-[#134571]">
      <div className="flex bg-[#FEFEFE]  ">
        <SideBar ></SideBar>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>

    </div>
  );
};

export default Dashboard;