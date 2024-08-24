const CheckoutFrom = () => {
  return (
    <div className=" w-full md:w-3/5">
      <form className="space-y-4" >
        <div className="flex flex-col md:flex-row gap-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-[18px] font-bold ">Country</span>
            </label>
            <input type="email" placeholder="Enter Country" className="input w-full input-bordered hover:outline-none" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-[18px] font-bold ">State/Union Territory</span>
            </label>
            <input type="email" placeholder="Enter State" className="input  w-full input-bordered hover:outline-none" required />
          </div>
        </div>
        <div>
          <p className="text-[18px] font-bold">Payment Method</p>
        </div>
        <div className="flex justify-between mx-6">
        <div className="space-x-3">
            <input type="radio" id="CardName" name="fav_language" value="Credit/Debit Card" />
            <label htmlFor="CardName">Credit/Debit Card</label>
          </div>
          <img src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724274925/ten52pptcvc5gl2ly4md.png" alt="" />
        </div>
        <div >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-[14px]  ">Name of Card</span>
            </label>
            <input type="email" placeholder="Name of card" className="input w-full input-bordered hover:outline-none" required />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-[14px]  ">Card Number</span>
            </label>
            <input type="email" placeholder="Card Number" className="input w-full input-bordered hover:outline-none" required />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[14px] ">Expiry Date</span>
              </label>
              <input type="email" placeholder="Enter Date" className="input w-full input-bordered hover:outline-none" required />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-[14px] ">CVC/CVV</span>
              </label>
              <input type="email" placeholder=" Enter CVC/CVV" className="input  w-full input-bordered hover:outline-none" required />
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-6">
          <div className="space-x-3">
            <input type="radio" id="CardName" name="fav_language" value="Paypal" />
            <label htmlFor="CardName">Paypal</label>
          </div>
          <img src="https://res-console.cloudinary.com/dscp0w1oh/thumbnails/v1/image/upload/v1724475982/aW1hZ2VfMTZfbHNicHJz/drilldown" alt="paypal" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutFrom;