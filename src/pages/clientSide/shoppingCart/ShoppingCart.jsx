import OrderDetails from "./OrderDetails";
import ShopingCards from "./ShopingCards";
import ShopingSubManu from "./ShopingSubManu";

const ShoppingCart = () => {
  return (
    <div className="min-h-screen py-4 md:py-10">
      <ShopingSubManu></ShopingSubManu>
      <div className="flex flex-col md:flex-row">
        <ShopingCards></ShopingCards>
        <OrderDetails></OrderDetails>
      </div>
    </div>
  );
};

export default ShoppingCart;