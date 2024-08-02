import PerformanceCard from "./PerformanceCard";
import PerformanceCardsMobile from "./PerformanceCardsMobile";

const PerformanceCards = () => {
 return (
  <>
 <div className=" hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-4">
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>
   <PerformanceCard></PerformanceCard>

 </div>
  <PerformanceCardsMobile></PerformanceCardsMobile>

 </>
  
 );
};

export default PerformanceCards;