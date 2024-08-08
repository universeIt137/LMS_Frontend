import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserNav = ({ user, link }) => {
  return (
    <div className="flex justify-between items-center   mx-10 py-5 h-[60px] overflow-hidden">
      {/*  this is search nav */}
      <div>
        <div>
          <div className="flex gap-1 items-center bg-white px-3 py-1 rounded-xl">
          <CiSearch />
            <input className="h-auto hover:outline-none " placeholder="Search here..." />
          </div>
        </div>
      </div>
      <div className="flex  gap-4">
        {/* this is  filtter nav  */}
        <div className=" h-10">

          <select className="select rounded-xl  h-3 ">
            <option disabled selected>Filter</option>
            <option>Newest</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
        </div>
        {/* this is  crate nav  */}
        <div>
          <div className="indicator">
            <Link to={link}>
            <button className="btn join-item  bg-[#4D44B5] text-white"> <span> <FaPlus /></span>{user}</button>
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
};

export default UserNav;