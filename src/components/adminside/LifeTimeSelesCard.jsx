import PropTypes from 'prop-types';
const LifeTimeSelesCard = ({ revenue, text }) => {
  return (
    <div className=" flex items-center shadow-md h-[120px]">
      <div className="flex gap-3 items-center py-5 mx-10 ">
        <div >
          <img src="https://res.cloudinary.com/dscp0w1oh/image/upload/v1725048514/szlyb7hkeowb8qvjvywl.png" alt="" />
        </div>
        <div className="space-y-1">
          <h3 className="text-[24px] font-bold">${revenue}</h3>
          <p className="text-sm text-[#334155]">{text}</p>
        </div>
      </div>
    </div>
  );
};
LifeTimeSelesCard.propTypes = {
  revenue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
};
export default LifeTimeSelesCard;