

import logo2 from "../../assets/image/logo-sm2.png";
const ClientNavbar = () => {

  const mainLogo = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png";

  return (
    <>
      <div className="navbar bg-[#E6F1EB]">
        <div className="flex-1">
          <img src={mainLogo} alt="Logo" className="w-32" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control flex items-center border border-gray-300 bg-transparent p-1 rounded">
            <div className="flex">
              <img src={logo2} alt="Logo" className="h-6 w-6 mr-2" />
              <input
                type="text"
                placeholder="Academis lms"
                className="bg-transparent border-none text-[#181c32] flex focus:outline-none"
              />
            </div>
          </div>
          <div className="dropdown dropdown-end ml-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Buy
              </button>
            </div>
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