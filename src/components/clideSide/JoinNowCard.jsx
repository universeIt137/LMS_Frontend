const JoinNowCard = ({ title, subtitle, img, btntext }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
         className="rounded-2xl"
      >
        <div className="card  w-3/4 shadow-xl h-[320px] flex flex-col p-6 space-y-8 justify-center">
        <h2 className="card-title text-5xl text-white">{title}</h2>
        <p className="text-white">{subtitle}</p>
        <button className="btn w-36 text-sm hover:bg-[#754FFE]">{btntext}</button>
        </div>
      </div>
    </div>
  );
};

export default JoinNowCard;
