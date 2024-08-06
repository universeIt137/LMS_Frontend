import GeneralCard from "./GeneralCard";

const GeneralCards = () => {
 return (
 <div className=" grid grid-cols-1 md:grid-cols-2 md:mx-4 lg:mx-10 p-2 md:p-4 lg:p-8 gap-6">
     <GeneralCard></GeneralCard>
     <GeneralCard></GeneralCard>
     <GeneralCard></GeneralCard>
     <GeneralCard></GeneralCard>
 </div>
 );
};

export default GeneralCards;