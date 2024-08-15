import { FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import bootCard from "../../assets/image/bootcampcard.jpg";

const BootCampCard = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="card w-full sm:w-80 md:w-96 lg:w-[28rem] h-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <figure>
          <img
            src={bootCard}
            alt="Bootcamp"
            className="h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body p-4 md:p-6">
          <h2 className="card-title text-xl md:text-2xl font-bold text-gray-800">
            Coding Dojo
          </h2>
          <div className="flex justify-between text-xs md:text-sm text-gray-600 mt-2">
            <p className="flex items-center">
              <FaChalkboardTeacher className="mr-2 text-primary" /> Live Class
            </p>
            <p className="flex items-center">
              <FaCalendarAlt className="mr-2 text-primary" /> Dec 1996
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-lg md:text-xl font-semibold text-gray-800">$79</h1>
          </div>
          <div className="flex justify-between mt-6">
            <button className="btn bg-[#754FFE] w-1/2 mr-2">View Details</button>
            <button className="btn bg-[#754FFE]  w-1/2">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootCampCard;
