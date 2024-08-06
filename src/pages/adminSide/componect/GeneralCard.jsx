const GeneralCard = () => {
  return (
    <div className="card bg-gradient-to-r
    h-[300px] z-0 from-indigo-500 via-purple-500 to-pink-500 image-full shadow-xl border border-white ">
  
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralCard;