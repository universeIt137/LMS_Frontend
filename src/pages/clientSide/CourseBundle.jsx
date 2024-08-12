
import { Helmet } from "react-helmet-async";
import CompleateBundleCard from "../../components/clideSide/CompleateBundleCard";
import CourseBundleBaner from "../../components/clideSide/CourseBundleBaner";
import CoursebundleHaderSearch from "../../components/clideSide/CoursebundleHaderSearch";

const CourseBundle = () => {
    return (
        <div>
            <Helmet>
                <title>LMS | Course Bundles</title>
            </Helmet>
             <CourseBundleBaner  subText={"Course bundle"} titleText={'Course bundle'} ></CourseBundleBaner>
             <CoursebundleHaderSearch></CoursebundleHaderSearch>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <CompleateBundleCard></CompleateBundleCard>
           <CompleateBundleCard></CompleateBundleCard>
           <CompleateBundleCard></CompleateBundleCard>
           <CompleateBundleCard></CompleateBundleCard>
           <CompleateBundleCard></CompleateBundleCard>
           <CompleateBundleCard></CompleateBundleCard>
           </div>

            
        </div>
    );
};

export default CourseBundle;