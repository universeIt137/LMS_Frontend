const CheckOutOrder = () => {
  return (
    <div>
      <div className=" flex justify-center xspace-x-4">
        <div>
          <p className="text-2xl py-2">Order Details</p>
          <div>
            <img src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724267337/yfje5ky5kfbik53mmcnc.png" alt="" />
            <div>
              <p className="text-xl text-[#2563EB]">Design</p>
              <h4 className="text-lg font-bold">Introduction to User Experience Design</h4>
              <p className="text-sm">155 Lectures . 22 Total Hours</p>
              <p className="font-bold">$45.00</p>
            </div>
          </div>
          <div className="bg-[#F8FCFA] p-4 space-y-4">
            <div className="flex justify-between text-[#0F172A] ">
              <p>Price</p>
              <p className="font-medium">$300.00</p>
            </div>
            <div className="flex justify-between text-[#0F172A] ">
              <p>Discount</p>
              <p className="font-medium">-$10.00</p>
            </div>
            <div className="flex justify-between text-[#0F172A] ">
              <p>Tax</p>
              <p className="font-medium">$20.00</p>
            </div>
            <div className="flex justify-between text-[#0F172A] font-medium ">
              <p>Total</p>
              <p className="">$20.00</p>
            </div>

          </div>
          <button className="btn  bg-[#020617] text-white w-full hover:text-black mx-auto">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutOrder;