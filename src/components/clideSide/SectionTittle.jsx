
const SectionTittle = ({title, subtitle}) => {
  return (
    <div className=" space-y-4 my-10">
       <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">{title}</h1>
       <p className=" text-center ">{subtitle}</p>
    </div>
  );
};

export default SectionTittle;