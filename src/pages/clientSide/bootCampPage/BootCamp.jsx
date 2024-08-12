import { Helmet } from "react-helmet-async";
import CourseBundleBaner from "../../../components/clideSide/CourseBundleBaner";
import BootCampCard from "./BootCampCard";
import BootcampCategory from "./BootcampCategory";
import BootcampSearch from "./BootcampSearch";


const BootCamp = () => {
    return (
        <div>

            <Helmet>
                <title>LMS | BootCamps</title>
            </Helmet>
            <CourseBundleBaner
                subText={"Bootcamps"}
                titleText={"Bootcamps"}
            ></CourseBundleBaner>

            <div className=" flex justify-end  border mt-8 mb-4">
                <BootcampSearch></BootcampSearch>
            </div>

            <div className="flex border">
                <div className="w-1/4 border">
                    <BootcampCategory></BootcampCategory>
                </div>
                <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 ml-4">
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