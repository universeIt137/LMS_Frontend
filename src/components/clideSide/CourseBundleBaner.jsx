
import cardImg from "../../assets/image/cardbundleimg.png";
const CourseBundleBaner = () => {
    return (
        <div>
            <div className="card bg-[#7245E9] h-48 p-8 overflow-hidden w-full flex "> 
                <div className="card-body p-4 flex flex-col  justify-between">
                    <h2 className="card-title text-white">Home > courseBundlee</h2>
                    <p className="text-white">Course bundle</p>
                
                </div>
                <div className="card-actions items-center justify-end">
                    <img className="w-48 max-h-full object-contain" src={cardImg} alt="" /> 
                </div>
            </div>

        </div>
    );
};

export default CourseBundleBaner;