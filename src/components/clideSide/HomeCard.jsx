import CardImage from "../../assets/image/cardImg.jpg"

const HomeCard = () => {
    return (
        <div>
            <div className="card image-full  ">
  <figure>
    <img
      src={CardImage} />
  </figure>
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title">Responsive Design</h2>

    <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
    </div>
     
    <div className=" flex justify-start items-end h-full ">
   <h1 className="bg-white text-black">Color Theory For Designers</h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeCard;