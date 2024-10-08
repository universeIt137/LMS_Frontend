import {  Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";


const Profile = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-2 my-14 ">
     <ProfileSidebar></ProfileSidebar>
     <div className="w-full md:w-3/4"> <Outlet></Outlet></div>
    </div>
  );
};

export default Profile;