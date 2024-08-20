import PropTypes from 'prop-types';
const TopCategoriesCard = ({ img, titleText, subText }) => {
  return (
    <div className=" flex justify-center px-6 py-4 shadow-md">
      <div className="space-y-2 text-center">
        <img className="p-4 rounded-full bg-[#E0F2FE]" src={img} alt={titleText} />
        <p className="font-medium">{titleText}</p>
        <p className="text-[10px]">{subText}</p>
      </div>
    </div>
  );
};
TopCategoriesCard.propTypes = {
  img: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};
export default TopCategoriesCard;