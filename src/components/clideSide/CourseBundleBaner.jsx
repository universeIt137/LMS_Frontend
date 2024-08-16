import { FaArrowRight } from "react-icons/fa";
import cardImg from "../../assets/image/cardbundleimg.png";
import { IoHomeOutline } from "react-icons/io5";

const CourseBundleBaner = ({ subText, titleText }) => {
    return (
        <div className="relative bg-gradient-to-r from-blue-900 to-indigo-700 rounded-lg shadow-lg overflow-hidden">
            <div
                style={{
                    backgroundImage: `url(https://demo.creativeitem.com/academy/assets/frontend/default-new/image/course-breadcramb.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.7)",
                }}
                className="absolute inset-0"
            ></div>
            <div className="relative z-10 flex items-center h-48 p-8">
                <div className="flex-1">
                    <h2 className="text-white text-xl md:text-2xl font-bold flex items-center gap-2">
                    <IoHomeOutline />   Home <FaArrowRight className="" /> {subText}
                    </h2>
                    <p className="text-white text-sm md:text-lg mt-2">{titleText}</p>
                </div>
                <div className="flex-shrink-0">
                    <img
                        className="w-48 max-h-full object-contain transform transition-transform duration-300 hover:scale-110"
                        src={cardImg}
                        alt="Course Bundle"
                    />
                </div>
            </div>
        </div>
    );
};

export default CourseBundleBaner;
