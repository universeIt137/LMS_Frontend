import { FaAccusoft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const PerformanceCard = () => {
  return (
    <div className="card bg-base-200 h-[300px]  shadow-xl  sm:w-full my-10 md:my-0 ">
     <div className="flex justify-around items-center h-5 py-4  md:py-10 border border-white ">
       <div className="text-4xl"><FaAccusoft /></div>
       <div className="grid grid-cols-3 gap-[-10px] items-center"> 
        <img className="w-10 h-10  rounded-full  " src="https://media.istockphoto.com/id/1342368897/photo/while-quarantine-a-women-watching-live-streaming-by-application-on-smartphone.jpg?s=612x612&w=0&k=20&c=2xnVkioh2nZZWtUwx2KsjNgzbzKFybRdEWzIQN5Z-lg=" alt="mobile image" />
        <img className="w-10 h-10 rounded-full  " src="https://media.istockphoto.com/id/1342368897/photo/while-quarantine-a-women-watching-live-streaming-by-application-on-smartphone.jpg?s=612x612&w=0&k=20&c=2xnVkioh2nZZWtUwx2KsjNgzbzKFybRdEWzIQN5Z-lg=" alt="mobile image" />
        <img className="w-10 h-10 rounded-full  " src="https://media.istockphoto.com/id/1342368897/photo/while-quarantine-a-women-watching-live-streaming-by-application-on-smartphone.jpg?s=612x612&w=0&k=20&c=2xnVkioh2nZZWtUwx2KsjNgzbzKFybRdEWzIQN5Z-lg=" alt="mobile image" />
        
       </div>
     </div>
      <div className="card-body items-center text-center">
       <div className=" my:2 md:my-4">
       <h2 className="card-title">Top 5 Categories!</h2>
       <p>Popular categories</p>
       </div>
        <div className="card-actions">
          <button className=" flex items-center gap-3">Explore Products <FaArrowRight /> </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;