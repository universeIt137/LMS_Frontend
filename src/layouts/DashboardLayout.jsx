import React, { useState } from 'react';
import Sidebar from '../components/adminside/Sidebar';
import AdminNavbar from '../components/adminside/AdminNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <AdminNavbar></AdminNavbar>

                {/* Main Dashboard Content */}
                <main className="flex-1 p-8 overflow-auto">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;