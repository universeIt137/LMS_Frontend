const ShopingCard = () => {
  return (
    <div className=" md:p-2 lg:p-5">
      <div className="flex gap-2 m-3 md:m-0 p-2 md:p-0 md:gap-0 shadow-lg md:shadow-none">
      <div className="flex flex-col-reverse md:flex-row  md:text-start gap-2 items-center">
        {/* img div */}
        <div className="h-full">
          <img src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724267337/yfje5ky5kfbik53mmcnc.png" alt="" />
        </div>
        {/* discription dev */}
        <div className="lg:space-y-0.5">
          <h1 className=" md:text-xl lg:text-2xl font-medium">Introduction to User Experience Design</h1>
          <p className="text-[#334155] text-[14px]">By John Doe</p>
          <div className="flex  items-center gap-2">
            <div className="rating ">
              <input type="radio" name="rating-2" className="mask mask-star-2 text-[10px] bg-[#FEC84B]" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FEC84B]"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
              <p className="text-[14px]">(250 rating)</p>
            </div>


            <p className=" md:hidden lg:text-[14px] text-[#020617]">22 Total Hours. 155 Lectures. All levels</p>
          </div>
          <div className="flex gap-2 text-[14px]">
            <p className=" text-[#3B82F6]">Save for later</p>
            <p className="text-[#DC2626]">Remove</p>
          </div>
        </div>
        <div className=" block md:hidden">
          <p className="md:text-xl  lg:text-2xl text-[#000000] font-extrabold text-end ml-3">$45.00</p>
        </div>
      </div>
      
        {/* prize drive */}
        <div className="hidden md:block">
          <p className="md:text-xl  lg:text-2xl text-[#000000] font-extrabold text-end ml-3">$45.00</p>
        </div>
      </div>
    </div>
  );
};

export default ShopingCard;