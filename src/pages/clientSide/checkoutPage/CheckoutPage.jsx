import ChackoutNav from "./ChackoutNav";
import CheckoutFrom from "./CheckoutFrom";
import CheckOutOrder from "./CheckOutOrder";

const CheckoutPage = () => {
  return (
    <div className=" my-4 md:my-10">
      <ChackoutNav></ChackoutNav>
      <div className="flex flex-col md:flex-row gap-6 min-h-screen">
        <CheckoutFrom></CheckoutFrom>
        <CheckOutOrder></CheckOutOrder>
      </div>
    </div>
  );
};

export default CheckoutPage;