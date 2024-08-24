const OrderDetails = () => {
  return (
    <div className=" flex justify-center xspace-x-4">
      <div>
        <p className="text-3xl">Order Details</p>
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
        <button className="btn btn-wide bg-[#020617] text-white hover:text-black">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default OrderDetails;