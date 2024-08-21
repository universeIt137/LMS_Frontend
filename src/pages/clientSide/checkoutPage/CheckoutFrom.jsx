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
           <ul className="list-image-[url(https://res.cloudinary.com/dscp0w1oh/image/upload/v1724275143/teavucygmvmf7js2tq4n.png)]  ">
            <li className="text-[18px] font-bold">Credit/Debit Card</li>
           </ul>
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
      </form>
    </div>
  );
};

export default CheckoutFrom;