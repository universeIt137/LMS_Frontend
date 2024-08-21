import OrderDetails from "./OrderDetails";
import ShopingCards from "./ShopingCards";
import ShopingSubManu from "./ShopingSubManu";

const ShoppingCart = () => {
 return (
 <div className="min-h-screen">
<ShopingSubManu></ShopingSubManu>
 <div className="flex flex-col md:flex-row">
 <ShopingCards></ShopingCards>
 <OrderDetails></OrderDetails>
 </div>
 </div>
 );
};

export default ShoppingCart;