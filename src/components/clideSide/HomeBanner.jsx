import HomeImg from "../../assets/image/home-1.png"; // Ensure this path is correct
const HomeBanner = () => {
  return (
    <div
      className="h-[60vh] md:h-[80vh] w-full bg-center z-0 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${HomeImg})`, backgroundSize: "100%" }}
    >
      <div className="flex flex-col h-full justify-between ">
        <div className="flex flex-col md:flex-row justify-between h-full md:mt-10">
          <div className="w-full md:w-1/3  md:p-6 text-center md:text-left space-y-2 md:space-x-4">

            <p className="text-sm md:text-base lg:text-lg">
              Study any topic, anytime. Explore thousands of courses for the lowest price ever!
            </p>
            <form   >
              <label className="input border border-[#754FFE] flex items-center   gap-2 focus:outline-none focus:ring-0 focus:border-none">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
                <input type="text" className="grow" placeholder="What do you want to learn" />
              </label>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
