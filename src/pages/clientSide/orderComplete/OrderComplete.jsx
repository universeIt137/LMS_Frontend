const OrderComplete = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <div 
          style={{ backgroundImage: `url(https://res.cloudinary.com/dscp0w1oh/image/upload/v1724277042/LMS/aik6kwraa1ihtlmrrbiu.png)` }} 
          className="bg-cover bg-no-repeat w-32 h-32 mx-auto flex items-center justify-center"
        >
          <img 
            className="w-16 h-16" 
            src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1724277421/idpjrwoypchh27pprkuz.png" 
            alt="Order complete icon" 
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">Order Complete</h1>
        <p className="text-2xl font-medium mt-2">You will receive a confirmation email soon!</p>
      </div>
    </div>
  );
};

export default OrderComplete;
