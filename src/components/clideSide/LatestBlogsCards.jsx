import LatestBlogsCard from "./LatestBlogsCard";

const LatestBlogsCards = () => {
 return (
 <div className="grid gap-10  grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
<LatestBlogsCard></LatestBlogsCard>
<LatestBlogsCard></LatestBlogsCard>
<LatestBlogsCard></LatestBlogsCard>
 </div>
 );
};

export default LatestBlogsCards;