const ThinkMoreClearlyCard = ({title, discription, img}) => {
  return (
    <div>
      <div className="card card-side bg-base-50 shadow-md p-10">

        <div className="card-body w-3/4 ">
          <h2 className="text-6xl mb-6 ">
            {title}</h2>
          <p className="text-2xl text-[#676c7d]">{discription}</p>
          
        </div>
        <figure  className=" w-1/4 ">
          <img  className="rounded-2xl"
            src={img}
            alt="Movie" />
        </figure>
      </div>
    </div>
  );
};

export default ThinkMoreClearlyCard;