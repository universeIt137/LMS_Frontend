const TopTenCard = () => {
  return (
    <div className="space-y-3">
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724145253/fy4e97pgmi4dpdjvdsnf.png"
            alt="Shoes" />
        </figure>
        <div className="card-body p-0.5">
          <h2 className="card-title">
            Beginner’s Guide to Design
          </h2>
          <p className="text-[#334155]">By Ronald Richards</p>
          {/* Rating path */}
          <div className="flex">
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
            <p>(12000 Raiting)</p>
          </div>
          <div className="space-y-1">
            <p className="text-[12px] text-[#334155]">22 Total Hours. 155 Lectures. Beginner</p>
            <p className="font-medium">$149.9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTenCard;