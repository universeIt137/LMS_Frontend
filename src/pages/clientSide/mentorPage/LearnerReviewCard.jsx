const LearnerReviewCard = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-14 p-5 w-full border">
      <div className="flex gap-1 items-center text-[#334155]">

        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 mr-4 rounded-full ring ring-offset-2">
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724761417/LMS/lt7agjgd15ok2ktoquow.png" />
          </div>
        </div>

        <p className="font-bold text-[18px] w-40">Mark Doe</p>
      </div>
      <div>
        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-custom-yellow w-[20px] h-[20px]"
              style={{ backgroundColor: '#EAB308', width: '20px', height: '20px' }}

            />
            <p className="font-bold mr-8 ml-1">5</p>
            <p>Reviewed on 22nd March, 2024</p>
          </div>
          <p >
            I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnerReviewCard;