import TeamTraingCard from "./TeamTraingCard";

const TeamTraingCards = () => {
 return (
 <div className=" grid  gap-6">
<TeamTraingCard img={`https://www.ambiciative.com/assets/img/python-course.jpg`} title={`Become a UI Designer in 2 Months`}></TeamTraingCard>
<TeamTraingCard img={`https://ashokitech.com/uploads/course/react-js-online-training.png`} title={`React a UI Designer in 2 Months`}></TeamTraingCard>
 </div>
 );
};

export default TeamTraingCards;