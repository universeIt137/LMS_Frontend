import { MdPlayLesson } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { TbHours24 } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TeamTraingCard = ( {img, title}) => {
  
 return (
 <div className="flex flex-col md:flex-row md:h-[150px]">
    <div className=" w-full  md:w-2/4 lg:1/4 md:h-[100%]">
        <img className="h-full" src={img} alt="img messing" />
    </div>
    <div className=" flex items-center justify-center  md:px-8  md:w-2/4  lg:w-3/4 bg-base-200 shadow-lg">
      <Link to='/'>
      <h2 className=" text md:text-xl">{title}</h2>
      <p className="text-sm md:text[14px]">Create By :Jone Doe</p>
      <div className="flex justify-center  gap-3 md:gap-1 items-center  text-[#6e798a] border-b-2 border-[#6e798a]">
        <p>course</p>
        <p className="hidden lg:block">DESIGN RULES: Principles + Practices for Great UI Design</p>
        <div className="flex md:gap-1">
             <div>
             <RiEnglishInput />
             <p className="text-sm">English</p>
             </div>
             <div>
             <MdPlayLesson />
             <p className="text-sm">Lesson</p>
             </div>
             <div>
             <TbHours24 />
             <p className="text-sm">Hourse</p>
             </div>
        </div>
        
      </div>
      <div className="flex justify-between">
        <span> $4000 </span>
        <span> Months</span>
      </div>
      
      </Link>
    </div>
 </div>
 );
};
// PropTypes validation
TeamTraingCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default TeamTraingCard;