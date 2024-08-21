import ChackoutNav from "./ChackoutNav";
import CheckoutFrom from "./CheckoutFrom";
import CheckOutOrder from "./CheckOutOrder";

const CheckoutPage = () => {
 return (
 <div>
   <ChackoutNav></ChackoutNav>
   <div className="flex gap-6 min-h-screen">
    <CheckoutFrom></CheckoutFrom>
    <CheckOutOrder></CheckOutOrder>
   </div>
 </div>
 );
};

export default CheckoutPage;