
const SectionTittle = ({title, subtitle}) => {
  return (
    <div className=" space-y-6 my-10">
       <h1 className="text-5xl font-bold text-center">{title}</h1>
       <p className=" text-center ">{subtitle}</p>
    </div>
  );
};

export default SectionTittle;