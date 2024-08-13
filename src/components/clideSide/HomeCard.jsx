import CardImage from "../../assets/image/cardImg.jpg";

const HomeCard = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div
        style={{
          backgroundImage: `url(${CardImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="card h-[455px] relative"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional dark overlay */}
        <div className="relative flex flex-col h-full justify-between p-4">
          <div className="flex justify-between items-center mt-5">
            <h2 className="px-3 py-1 text-[#0a58ca] bg-white bg-opacity-90 rounded-lg text-sm md:text-lg font-semibold">
              Responsive Design
            </h2>
            <div className="avatar">
              <div className="ring ring-primary ring-offset-base-100 w-12 rounded-full overflow-hidden">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>

          <div className="flex items-end justify-center h-full">
            <div className="bg-white bg-opacity-90 text-black px-10 py-4 mb-4 rounded-2xl shadow-lg">
              <h1 className="font-bold text-center text-lg md:text-xl">
                Color Theory for Designers
              </h1>
              <p className="text-center text-sm md:text-base">Release on: 3 July 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
