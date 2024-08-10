
import CompleateBundleCard from "../../components/clideSide/CompleateBundleCard";
import CourseBundleBaner from "../../components/clideSide/CourseBundleBaner";
import CoursebundleHaderSearch from "../../components/clideSide/CoursebundleHaderSearch";

const CourseBundle = () => {
    return (
        <div>
             <CourseBundleBaner></CourseBundleBaner>
             <CoursebundleHaderSearch></CoursebundleHaderSearch>
           <div className="grid grid-cols-2 gap-10">
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