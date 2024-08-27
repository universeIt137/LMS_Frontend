import { IoMdShare } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ProfileSidebar = () => {
  return (
    <div className=" w-full md:w-1/4 ">
      <div className="  flex flex-col items-center justify-center space-y-2">
        <img src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724757971/xnwatgv2uym08hppsbxe.png" alt="" />
        <h1 className="text-[20px ] font-medium">John Doe</h1>
        <div className="flex gap-2 items-center text-sm">
          <p>Share Profile </p>
          <p><IoMdShare /></p>
        </div>
      </div>
      <div className=" w-full md:w-3/4  flex flex-col  gap-3  md:justify-center mt-6">
        <NavLink
          to="profile/form"
          className={({ isActive, isPending }) =>
            `block text-sm transition duration-300 ${isPending
              ? "pending"
              : isActive
                ? "bg-black text-white p-3 w-full rounded-lg shadow-lg"
                : "bg-gray-200 text-gray-800 p-3 w-full rounded-lg hover:bg-gray-300"
            }`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="profile/my-course"
          className={({ isActive, isPending }) =>
            `block text-sm transition duration-300 ${isPending
              ? "pending"
              : isActive
                ? "bg-black text-white p-3 w-full rounded-lg shadow-lg"
                : "bg-gray-200 text-gray-800 p-3 w-full rounded-lg hover:bg-gray-300"
            }`
          }
        >
        My Courses
        </NavLink>
        <NavLink
          to="profile/my-reviews"
          className={({ isActive, isPending }) =>
            `block text-sm transition duration-300 ${isPending
              ? "pending"
              : isActive
                ? "bg-black text-white p-3 w-full rounded-lg shadow-lg"
                : "bg-gray-200 text-gray-800 p-3 w-full rounded-lg hover:bg-gray-300"
            }`
          }
        >
       My Reviews
        </NavLink>
      </div>

    </div>
  );
};

export default ProfileSidebar;