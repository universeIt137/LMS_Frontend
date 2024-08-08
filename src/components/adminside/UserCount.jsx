import { FaChalkboardTeacher } from "react-icons/fa";
import { MdEventAvailable, MdOutlineFoodBank } from "react-icons/md";
import { PiStudent } from "react-icons/pi";


const UserCount = () => {
  return (
    <div className="flex justify-around items-center gap-5 m-14 rounded-lg bg-[#FFFFFF] shadow-sm h-[120px] ">
      <div className="flex justify-center items-center gap-3  ">
        <div className="bg-[#4D44B5] p-2 rounded-full">
          <PiStudent className="text-2xl  text-white" />
        </div>
        <div>
          <p className=" text-sm text-[#A098AE]">Student</p>
          <span className=" text-2xl text-[#303972]">932</span>
        </div>

      </div>
      <div className="flex justify-center items-center gap-3  ">
        <div className="bg-[#FB7D5B] p-2 rounded-full">
          <FaChalkboardTeacher className="text-2xl  text-white" />
        </div>
        <div>
          <p className=" text-sm text-[#A098AE]">Teachers</p>
          <span className=" text-2xl text-[#303972]">754</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3  ">
        <div className="bg-[#FCC43E] text-white p-2 rounded-full">
        <MdEventAvailable className="text-2xl  text-blue-600" />
        </div>
        <div>
          <p className=" text-sm text-[#A098AE]">Events</p>
          <span className=" text-2xl text-[#303972]">40</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3  ">
        <div className="bg-[#303972] text-white p-2 rounded-full textw">
        <MdOutlineFoodBank className="text-2xl  text-white" />
        </div>
        <div>
          <p className=" text-sm text-[#A098AE]">Foods</p>
          <span className=" text-2xl text-[#303972]">30k</span>
        </div>
      </div>


    </div>
  );
};

export default UserCount;