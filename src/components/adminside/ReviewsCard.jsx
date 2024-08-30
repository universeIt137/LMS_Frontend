const ReviewsCard = ({ text, number, rating, bgcolar }) => {
  return (
    <div className="flex ">
      <div className=" justify-center  px-7 py-4 items-center space-y-2  border ">

        <div>
          <p className=" text-sm text-[#334155]">{text}</p>
          <div className="flex  gap-1 items-center ">
            <span className=" text-[24px] font-bold">{number}</span>
            {rating ? <p  style={{backgroundColor:bgcolar}} className="py-1 px-3  rounded-sm text-sm">{rating}</p> : ""}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewsCard;