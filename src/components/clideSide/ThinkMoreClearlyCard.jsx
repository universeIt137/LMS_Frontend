import PropTypes from 'prop-types';
const ThinkMoreClearlyCard = ({title, discription, img}) => {
  return (
    <div>
      <div className="card flex-col-reverse md:flex-row card-side bg-base-50 shadow-md p-3">

        <div className="card-body w-full md:w-3/5 ">
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 ">
            {title}</h2>
          <p className="text-sm md:text-lg lg:text-2xl text-[#676c7d]">{discription}</p>
          
        </div>
        <figure  className="w-full md:w-2/5 h-full">
          <img  className="rounded-2xl w-full"
            src={img}
            alt="Movie" />
        </figure>
      </div>
    </div>
  );
};
ThinkMoreClearlyCard.propTypes = {
  title: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ThinkMoreClearlyCard;