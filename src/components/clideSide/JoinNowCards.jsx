import JoinNowCard from "./JoinNowCard";

const JoinNowCards = () => {
 return (
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
 <JoinNowCard title={`Join now to start learning`} subtitle={`Learn from our quality instructors!`} btntext={`Get Starte`} img={"	https://demo.creativeitem.com/academy/assets/frontend/default-new/image/image_1.png"}></JoinNowCard>
 <JoinNowCard title={`Become a new instructor`} subtitle={`Teach thousands of students and earn money! `} btntext={`Get Starte`} img={"https://demo.creativeitem.com/academy/assets/frontend/default-new/image/image_2.png"}></JoinNowCard>
 </div>
 );
};

export default JoinNowCards;