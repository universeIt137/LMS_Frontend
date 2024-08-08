import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";

const LanguageModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded">
                <h2 className="text-lg font-bold mb-4">Select Language</h2>
                <ul>
                    <li className="mb-2 cursor-pointer">English</li>
                    <li className="mb-2 cursor-pointer">Spanish</li>
                    <li className="mb-2 cursor-pointer">French</li>
                    <li className="mb-2 cursor-pointer">German</li>
                    {/* Add more languages as needed */}
                </ul>
                <button onClick={onClose} className="mt-4 bg-gray-800 text-white p-2 rounded">Close</button>
            </div>
        </div>
    );
};

const SubMenu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <a href="tel:01323289195" className="text-white flex items-center">
                    <IoIosCall className="mr-2" /> 01323289195
                </a>
                <a href="mailto:alaminbdt50@gmail.com" className="text-white flex items-center">
                    <CgMail className="mr-2" /> alaminbdt50@gmail.com
                </a>
            </div>
            <div className="relative">
                <input
                    type="text"
                    placeholder="English"
                    className="p-2 rounded border border-gray-300"
                    onClick={handleInputClick}
                    readOnly
                />
            </div>
            <LanguageModal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
};

export default SubMenu;