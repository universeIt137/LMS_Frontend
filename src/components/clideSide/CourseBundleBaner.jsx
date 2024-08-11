
import { FaArrowRight } from "react-icons/fa";
import cardImg from "../../assets/image/cardbundleimg.png";
const CourseBundleBaner = ({ subText, titleText }) => {
    return (
        <div>
            <div style={{ backgroundImage: `url(https://demo.creativeitem.com/academy/assets/frontend/default-new/image/course-breadcramb.png)` }} className="card  h-48 p-8 overflow-hidden w-full flex ">
                <div className="card-body p-4 flex flex-col  justify-between">
                    <h2 className="card-title text-white">Home <span><FaArrowRight /></span> {subText}</h2>
                    <p className="text-white">{titleText}</p>
                </div>
                <div className="card-actions items-center justify-end">
                    <img className="w-48 max-h-full object-contain" src={cardImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default CourseBundleBaner;