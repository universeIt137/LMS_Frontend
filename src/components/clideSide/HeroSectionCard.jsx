import { FaKey } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";

const HeroSectionCard = () => {
  return (
    <div className="card gap-4 md:gap-0 bg-[#FAEBE5] w-auto mb-10 p-6 rounded-lg shadow-lg z-0">
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0 border borderre">
        <div className="flex items-center mb-4 md:mb-0 md:border-r border-black">
          <IoBagHandle className="text-3xl mr-4" />
          <div className="md:mr-6">
            <h1 className="text-xl font-semibold">Expert instruction</h1>
            <p className="text-sm">Find the right course for you</p>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0 md:border-r border-black ">
          <RiGraduationCapFill className="text-3xl mr-4" />
          <div className="md:mr-6" >
            <h1 className="text-xl font-semibold">16 Online courses</h1>
            <p className="text-sm">Explore a variety of fresh topics</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaKey className="text-3xl mr-4" />
          <div>
            <h1 className="text-xl font-semibold">Lifetime access</h1>
            <p className="text-sm">Learn on your schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionCard;
