import CardImage from "../../assets/image/cardImg.jpg"

const HomeCard = () => {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${CardImage})`,
        backgroundSize: "cover", backgroundRepeat: "no-repeat"
      }} className="card  h-[400px]" >

        <div className=" flex flex-col h-[400px]">
          <div className="flex justify-around mt-5  items-center  ">
            <h2 className=" p-2 text-[#0a58ca] bg-white rounded-lg">Responsive Design</h2>

            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>

          <div className=" flex items-end  justify-center  h-full  ">
            <div className="bg-white text-black px-10 py-3 mb-3 rounded-2xl">
              <h1 className="font-bold">Color Theory for Designers</h1>
              <p> Release on : 3 July 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;