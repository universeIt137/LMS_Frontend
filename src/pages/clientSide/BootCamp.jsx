import BootCampCard from "../../components/clideSide/BootCampCard";
import BootcampSearch from "../../components/clideSide/BootcampSearch";
import BootcapmCategori from "../../components/clideSide/BootcapmCategori";
import CourseBundleBaner from "../../components/clideSide/CourseBundleBaner";

const BootCamp = () => {
  return (
    <div>
      <CourseBundleBaner
        subText={"Bootcamps"}
        titleText={"Bootcamps"}
      ></CourseBundleBaner>

      <div className=" flex justify-end  border mt-8 mb-4">
        <BootcampSearch></BootcampSearch>
      </div>

      <div className="flex flex-col md:flex-row border">
        <div className="w-full md:w-1/4 border">
        <BootcapmCategori></BootcapmCategori>
        </div>
       <div className=" w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
       <BootCampCard></BootCampCard>
       <BootCampCard></BootCampCard>
       <BootCampCard></BootCampCard>
       <BootCampCard></BootCampCard>
       <BootCampCard></BootCampCard>
       </div>
      </div>
    </div>
  );
};

export default BootCamp;
