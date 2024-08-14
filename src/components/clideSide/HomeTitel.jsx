const HomeTitle = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center ">
      <div className="md:w-2/3 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[4rem] lg:leading-[5rem]">
          <p>Start learning from </p>
          <p>the best <span className="text-[#754FFE]">platform</span></p>
        </h1>
      </div>
      <div className="md:w-1/3 flex justify-center items-center">
        <img
          className="w-32 md:w-48 lg:w-64 animate-bounce"
          src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1723548227/LMS/lv1qvcceahd2tpyws3ky.png"
          alt="Bouncing Image"
        />
      </div>
    </div>
  );
};

export default HomeTitle;
