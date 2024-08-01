
const Navbar = () => {
  return (
    <div
      className="bg-[#051462]
      container flex items-center w-full h-full transition-[padding,background-color,border-color] ease-in-out duration-300 box bg-transparent border-transparent shadow-none 
      group-[.top-bar--active]:box group-[.top-bar--active]:px-5
      group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2
    "
    >
      <div className="flex items-center gap-1 xl:hidden">
        <a href="" className="p-2 text-white rounded-full hover:bg-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify stroke-[1] w-[18px] h-[18px]"
          >
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
        </a>
        <a href="" className="p-2 text-white rounded-full hover:bg-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search stroke-[1] w-[18px] h-[18px]"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </a>
      </div>
      <nav className="flex flex-1  xl:block" aria-label="breadcrumb">
        <ol className="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
          <li className="">
            <a href="/">App</a>
          </li>
          <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-black">
            <a href="/">Dashboards</a>
          </li>
          <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-black text-white/70">
            <a href="/">Analytics</a>
          </li>
        </ol>
      </nav>
      {/*  this is navbar search */}
      <div className="join bg-[#051462] overflow-hidde my-3" >
        <div>
          <div>
            <input className="input  focus:outline-none bg-[#27477A]   text-[#687AA2]" placeholder="Search" />
          </div>
        </div>
        <select className="select focus:outline-none  bg-[#27477A] text-white  join-item">
          <option disabled selected className=" text-[#687AA2]">Filter</option>
          <option className=" text-[#687AA2]">Sci-fi</option>
          <option className=" text-[#687AA2]">Drama</option>
          <option className=" text-[#687AA2]">Action</option>
        </select>
        <div className="indicator">
          <button className="btn  join-item">Search</button>
        </div>
      </div>

      <div className="flex items-center flex-1">
        <div className="flex items-center gap-1 ml-auto">
          <a href="" className="p-2 text-white rounded-full hover:bg-white/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-grid stroke-[1] w-[18px] h-[18px]"
            >
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
          </a>
          <a href="" className="p-2 text-white rounded-full hover:bg-white/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-expand stroke-[1] w-[18px] h-[18px]"
            >
              <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
              <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
              <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
              <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
            </svg>
          </a>
          <a href="" className="p-2 text-white rounded-full hover:bg-white/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bell stroke-[1] w-[18px] h-[18px]"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </a>
        </div>
        <div className="relative ml-5" data-headlessui-state="">
          <button
            className="cursor-pointer overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-white/[0.15] image-fit"
            id="headlessui-menu-button-:r0:"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <img
              alt="Tailwise - Admin Dashboard Template"
              src="/assets/user8-50x50-NVYSWW6g.jpg"
            />
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Navbar;