import SectionTittle from "./SectionTittle";
import TopTenCards from "./TopTenCards";

const TopTenCourse = () => {
 return (
 <div>
  <SectionTittle title={"Top 10 Latest courses"} subtitle={"These are the most latest courses among listen courses learners worldwide"}></SectionTittle>
  <TopTenCards></TopTenCards>
 </div>
 );
};

export default TopTenCourse;