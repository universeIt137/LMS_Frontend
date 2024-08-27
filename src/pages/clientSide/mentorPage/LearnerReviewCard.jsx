const LearnerReviewCard = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-14 p-5 w-full border">
      <div className="flex gap-1 items-center text-[#334155]">
        <img className="w-[60px] h-[60px]" src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724704870/Ellipse_19_y2eppf.png" alt="" />
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