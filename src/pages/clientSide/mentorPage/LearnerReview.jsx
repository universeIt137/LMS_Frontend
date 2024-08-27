import LearnerReviewCard from "./LearnerReviewCard";

const LearnerReview = () => {
  return (
    <div className="w-full space-y-5">
      <LearnerReviewCard></LearnerReviewCard>
      <LearnerReviewCard></LearnerReviewCard>
      <LearnerReviewCard></LearnerReviewCard>
      <div className="my-6">
        <button className="btn btn-outline ">View more Reviews</button>
      </div>
    </div>
  );
};

export default LearnerReview;