import PropTypes from 'prop-types';
const ThinkMoreClearlyCard = ({title, discription, img}) => {
  return (
    <div>
      <div className="card flex-col-reverse md:flex-row card-side bg-base-50 shadow-md p-3">

        <div className="card-body w-full md:w-3/4 ">
          <h2 className="text-4xl mb-6 ">
            {title}</h2>
          <p className="text-2xl text-[#676c7d]">{discription}</p>
          
        </div>
        <figure  className="w-full md:w-1/4 ">
          <img  className="rounded-2xl"
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