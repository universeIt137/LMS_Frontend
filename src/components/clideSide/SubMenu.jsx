
import { useState } from "react";
import { CgMail } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";

const SubMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const mainLogo = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png";


    return (
        <nav className="text-black p-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <a href="tel:01323289195" className="flex items-center">
                    <IoIosCall className="mr-2" /> 01323289195
                </a>
                <a href="mailto:alaminbdt50@gmail.com" className=" hidden md:flex items-center">
                    <CgMail className="mr-2" /> alaminbdt50@gmail.com
                </a>
            </div>
            <div className="relative">
                <input
                    type="text"
                    placeholder="English"
                    className="p-2 rounded border border-gray-300 cursor-pointer"
                    onClick={handleInputClick}
                    readOnly
                />
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded w-96"> {/* Modal width fixed */}
                            <h2 className="text-lg font-bold mb-4">Select Language</h2>
                            <ul>
                                <li className="mb-2 cursor-pointer">English</li>
                                <li className="mb-2 cursor-pointer">Spanish</li>
                                <li className="mb-2 cursor-pointer">French</li>
                                <li className="mb-2 cursor-pointer">German</li>
                                {/* Add more languages as needed */}
                            </ul>
                            <button onClick={closeModal} className="mt-4 p-2 rounded bg-gray-300">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default SubMenu;

