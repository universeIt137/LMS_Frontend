const Instructor = () => {
  return (
    <div className=" flex flex-col-reverse  md:justify-between  items-center md:h-[200px] my-10">
      <div className="space-y-1">
        <p className="text-sm">Instructor</p>
        <h2 className="text-[32px]">Ronald Richards</h2>
        <p className="text-sm">Web developer, UX/UI Designer, and Teacher</p>
        <div className="flex justify-between">
          <div>
            <p className="text-sm ">Total Students</p>
            <p className="text[24px] font-bold">1000</p>
          </div>
          <div>
            <p className="text-sm ">Reviews</p>
            <p className="text[24px] font-bold">154</p>
          </div>

        </div>
      </div>
      <div>
        <img src="https://res-console.cloudinary.com/dscp0w1oh/thumbnails/v1/image/upload/v1724693759/RWxsaXBzZV81M19ka3plazk=/drilldown" alt="" />
      </div>

    </div>
  );
};

export default Instructor;