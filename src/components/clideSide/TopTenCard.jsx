const TopTenCard = () => {
  return (
    <div className=" max-w-[298px] p-3 rounded-2xl cardShadow border border-[#E2E8F0]">
      <img
        className="max-h-[140px] w-full object-cover rounded-lg mb-3"
        src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724145253/fy4e97pgmi4dpdjvdsnf.png" />
      <div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">
            Beginner’s Guide to Design
          </h2>
          <p className="text-[#334155] text-sm">By Ronald Richards</p>
          {/* Rating path */}
          <div className="flex items-center gap-2">
            <div className="rating">
              <input type="radio" name="rating-2" className="mask w-[20px] h-[20px] mask-star-2 bg-orange-400" />
              <input
                type="radio"
                name="rating-2"
                className="mask w-[20px] h-[20px] mask-star-2 bg-orange-400"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask w-[20px] h-[20px] mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask w-[20px] h-[20px] mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask w-[20px] h-[20px] mask-star-2 bg-orange-400" />
            </div>
            <p className="text-xs font-semibold">(12000 Rating)</p>
          </div>
          <p className="text-sm text-[#334155]">22 Total Hours. 155 Lectures. Beginner</p>
          <p className="font-semibold text-xl">$149.9</p>
        </div>
      </div>
    </div>
  );
};

export default TopTenCard;