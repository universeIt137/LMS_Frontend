import LearnerRating from "./LearnerRating";
import LearnerReview from "./LearnerReview";

const LearnerReviews = () => {
  return (
    <div>
      <h1 className="text-[20px] font-medium my-5">Learner Reviews</h1>

      <div className="flex flex-col md:flex-row  gap-14">
        <LearnerRating ></LearnerRating>
        <LearnerReview></LearnerReview>
      </div>
    </div>
  );
};

export default LearnerReviews;