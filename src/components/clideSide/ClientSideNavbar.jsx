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

const ClientSideNavbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        
    );
};

export default ClientSideNavbar;
