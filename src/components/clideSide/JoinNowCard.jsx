const JoinNowCard = ({ title, subtitle, img, btntext }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="rounded-2xl text-center md:text-start shadow-xl h-[320px] flex flex-col p-6 space-y-8 justify-center"
    >
      <h2 className="card-title text-2xl md:text-4xl text-white">{title}</h2>
      <p className="text-white">{subtitle}</p>
      <button className="btn w-36 text-sm text-center mx-auto md:mx-0 hover:bg-[#754FFE]">
        {btntext}
      </button>
    </div>
  );
};

export default JoinNowCard;
