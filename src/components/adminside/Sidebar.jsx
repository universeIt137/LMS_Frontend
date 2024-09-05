import React, { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoIosAddCircleOutline, IoMdCard } from 'react-icons/io';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MdAddCircleOutline, MdMenuOpen, MdOutlineAdminPanelSettings, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson, MdOutlineManageSearch, MdOutlinePeopleOutline } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <aside
                className={`bg-dashboard_theme text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'
                    }`}
            >
                <div className="flex justify-between items-center p-4 gap-8">
                    <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                        <p className=''>LMS</p>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                    </button>
                </div>
                <nav className="mt-10 space-y-4">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/dashboard"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:text-dashboard_hover_text"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <MdAddCircleOutline className='font-bold text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='font-bold'>Add Course</p>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                <MdOutlineManageSearch className='font-bold text-xl' />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className='font-bold'>Manage Courses</p>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;