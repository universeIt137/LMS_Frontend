import Instructor from "./Instructor";
import LearnerReviews from "./LearnerReviews";
import MoreCourse from "./MoreCourse";

const Mentor = () => {
 return (
 <div className="my-10">
<Instructor></Instructor>
<MoreCourse></MoreCourse>
<LearnerReviews></LearnerReviews>
 </div>
 );
};

export default Mentor;