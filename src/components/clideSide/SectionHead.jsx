import PropTypes from 'prop-types';
const SectionHead = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between py-7 px-5 text-center md:text-start space-y-3 md:space-y-0">
      <h2 className="text-3xl">{title}</h2>
      <p className="text-[#3B82F6] text-[14px] ">See All</p>
    </div>
  );
};
SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHead;