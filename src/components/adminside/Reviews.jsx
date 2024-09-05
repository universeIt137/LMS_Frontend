import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <>
      <h3 className="text-[20px] font-bold">Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <ReviewsCard text={'Total Reviews'} number={1000} rating={''} bgcolar={''} ></ReviewsCard>
        <ReviewsCard text={'1 star reviews'} number={100} rating={'1.0'} bgcolar={'#EF4444'} ></ReviewsCard>
        <ReviewsCard text={'2 star reviews'} number={100} rating={'2.0'} bgcolar={'#CA8A04'} ></ReviewsCard>
        <ReviewsCard text={'3 star reviews'} number={100} rating={'3.0'} bgcolar={'#FACC15'} ></ReviewsCard>
        <ReviewsCard text={'4 star reviews'} number={100} rating={'4.0'} bgcolar={'#4ADE80'} ></ReviewsCard>
        <ReviewsCard text={'5 star reviews'} number={100} rating={'5.0'} bgcolar={'#16A34A'} ></ReviewsCard>
      </div>
    </>
  );
};

export default Reviews;