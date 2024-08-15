import LatestBlogsCard from "./LatestBlogsCard";

const LatestBlogsCards = () => {
 return (
 <div className="grid gap-10  grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
<LatestBlogsCard img={`https://demo.creativeitem.com/academy/uploads/blog/thumbnail/cd729a9e1214bcc51e7eb6b3f2c07492.png`}></LatestBlogsCard>
<LatestBlogsCard img={`https://demo.creativeitem.com/academy/uploads/blog/thumbnail/f987ff9e08dc0a20fa73e9f4fd6b04e7.png`}></LatestBlogsCard>
<LatestBlogsCard img={`https://demo.creativeitem.com/academy/uploads/blog/thumbnail/2e29eece1cf79087ddc529c3fd2e229e.png`}></LatestBlogsCard>
 </div>
 );
};

export default LatestBlogsCards;