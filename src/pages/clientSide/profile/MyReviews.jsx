import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  return (
    <div>
       <h2 className="text-2xl font-bold mb-4">Reviews <span className="text-sm font-normal"> (12)</span></h2>
      <MyReviewCard></MyReviewCard>
      <MyReviewCard></MyReviewCard>
      <MyReviewCard></MyReviewCard>
      <MyReviewCard></MyReviewCard>
    </div>

  );
};

export default MyReviews;
