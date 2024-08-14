import lms1 from "../../assets/image/logo-demolms.png";
import logo2 from "../../assets/image/logo-sm2.png";

const ClientNavbar = () => {
  return (
    <>
      <div className="navbar bg-[#E6F1EB] p-4">
        <div className="flex-1">
          <img src={lms1} alt="Logo" className="hidden md:block h-8 md:h-10 lg:h-12" />
        </div>
        <div className="flex-none gap-2 w-full md:w-auto">
          <div className="form-control flex items-center border border-gray-300 bg-transparent p-2 rounded w-full md:w-auto">
            <div className="flex w-full">
              <img src={logo2} alt="Logo" className="h-6 w-6 mr-2" />
              <input
                type="text"
                placeholder="Academis LMS"
                className="bg-transparent border-none text-[#181c32] flex-grow focus:outline-none"
              />
            </div>
          </div>
          <div className="dropdown dropdown-end ml-2">
            <button
              type="button"
              className="text-white bg-orange-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-full md:w-auto dark:focus:ring-blue-800"
            >
              Buy Course
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-54 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientNavbar;