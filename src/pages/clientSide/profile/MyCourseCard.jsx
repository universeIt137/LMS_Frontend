const MyCourseCard = () => {
  return (
    <div className="space-y-3 w-4/5">
      <div>
        <img src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724783079/kpenp4xyvv30lcgbm6we.png" alt="" />
        <h1 className="text-[16px ] font-bold ">Beginner’s Guide to Design</h1>
        <p>By Ronald Richards</p>
        <progress className="progress progress-primary w-full" value="70" max="100"></progress>
        <div className="rating items-center  ">
                <input type="radio" name="rating-2" className="mask mask-star-2 text-[10px] bg-[#FEC84B]" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#FEC84B]"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                <input type="radio" name="rating-2" className=" defaultChecked mask mask-star-2 bg-[#FEC84B]" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                <p className="text-[14px]">(1200 Ratings)</p>
              </div>
      </div>
    </div>
  );
};

export default MyCourseCard;