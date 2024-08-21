import PropTypes from 'prop-types';
const ClientUserCountCard = ({user,text}) => {
 return (
 <div className="my-7">
  <div className="text-center   space-y-1  border-r-2 justify-between ">
    <p className="text-2xl md:text-2xl font-semibold">{user}</p>
    <p className='text-[12px]'>{text}</p>
  </div>
 </div>
 );
};
ClientUserCountCard.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

export default ClientUserCountCard;