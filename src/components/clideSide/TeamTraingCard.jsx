import { MdPlayLesson } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { TbHours24 } from "react-icons/tb";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TeamTraingCard = ({ img, title }) => {
  return (
    <div className="flex py-3 flex-col md:flex-row h-[500px] md:h-[250px] rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="w-full md:w-2/4 lg:w-1/3 h-[300px] md:h-full">
        <img 
          className="w-full h-full object-cover  px-4 md:px-0 rounded-t-lg md:rounded-t-none md:rounded-l-lg transition-transform duration-300 hover:scale-105" 
          src={img} 
          alt="Training" 
        />
      </div>
      <div className="flex flex-col justify-between h-full p-4 md:px-8 w-full md:w-2/4 lg:w-2/3 bg-base-200">
        <Link to='/' className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-primary">{title}</h2>
            <p className="text-sm md:text-[14px] text-gray-600 mt-1">Created By: John Doe</p>
          </div>
          <div className="">
            <div className="flex flex-wrap justify-between items-center text-sm md:text-base text-gray-600">
              <p className="font-semibold">Course</p>
              <p className="hidden lg:block text-sm text-gray-500">
                DESIGN RULES: Principles + Practices for Great UI Design
              </p>
            </div>
            <div className="flex justify-start md:justify-between gap-3  text-gray-600">
              <div className="flex items-center gap-1">
                <RiEnglishInput className="text-xl" />
                <p>English</p>
              </div>
              <div className="flex items-center gap-1">
                <MdPlayLesson className="text-xl" />
                <p>Lesson</p>
              </div>
              <div className="flex items-center gap-1">
                <TbHours24 className="text-xl" />
                <p>Hours</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  border-t  text-gray-600">
            <span className="font-semibold text-lg">$4000</span>
            <span>Months</span>
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
