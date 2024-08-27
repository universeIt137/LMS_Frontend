const MyReviewCard = () => {
  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
     
      <div className="mb-4 flex gap-1">
        <p className="text-lg font-medium">Course Name:</p>
        <p className="text-xl font-semibold">Beginner’s Guide to Design</p>
      </div>

      <div className="mb-4 flex gap-1">
        <p className="text-lg font-medium">Rating:</p>
        <div className="rating flex items-center">
          <input type="radio" name="rating-2" className="mask mask-star-2 text-[10px] bg-[#FEC84B]" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" defaultChecked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
        </div>
      </div>

      <div className="flex gap-1">
        <p className="text-lg font-medium mb-2">Review:</p>
        <p className="text-base leading-relaxed">
          I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
        </p>
      </div>
    </div>
  );
};

export default MyReviewCard;