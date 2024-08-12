import { MdPlayLesson } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { TbHours24 } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TeamTraingCard = ( {img, title}) => {
  
 return (
 <div className="flex h-[150px]">
    <div className="w-1/4 h-[100%]">
        <img src={img} alt="img messing" />
    </div>
    <div className=" flex items-center  px-8 w-3/4 bg-base-200 shadow-lg">
      <Link to='/'>
      <h2 className="text-xl">{title}</h2>
      <p>Create By :Jone Doe</p>
      <div className="grid grid-cols-3 text-[#6e798a] border-b-2 border-[#6e798a]">
        <p>course</p>
        <p>DESIGN RULES: Principles + Practices for Great UI Design</p>
        <div className="flex gap-1">
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