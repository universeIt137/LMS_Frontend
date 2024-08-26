const Instructor = () => {
  return (
    
    <div className=" flex flex-col-reverse gap-6 md:gap-0  md:flex-row justify-between   my-10">
      <div className="space-y-5 w-full md:w-1/2">
        <div className="space-y-2">
          <p className="text-sm">Instructor</p>
          <div > <h2 className="text-[32px]">Ronald Richards</h2>
            <p className="text-sm">Web developer, UX/UI Designer, and Teacher</p></div>
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
        {/* about instructor div */}
        <div>
          <h2 className="text-[20px] font-medium">About Ronald Richard</h2>
          <p>Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.</p>
        </div>
        {/* Areas of Expertise */}
        <div>
          <h1 className="text-[20px] font-medium">Areas of Expertise</h1>
          <ul className="list-disc ml-10">
            <li>User Experience (UX) Design </li>
            <li>User Interface (UI) Design</li>
            <li>Information Architecture</li>
            <li>Interaction Design</li>
            <li>Visual Design</li>
            <li>Usability Testing</li>
            <li>Wireframing and Prototyping</li>
            <li>Design Thinking</li>
          </ul>
        </div>
        {/* Professional Experience */}
        <div>
          <h1 className="text-[20px] font-medium">Professional Experience</h1>
          <p>Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.</p>
        </div>


      </div>
      <div className="flex flex-col gap-2">
        <img src="https://res-console.cloudinary.com/dscp0w1oh/thumbnails/v1/image/upload/v1724693759/RWxsaXBzZV81M19ka3plazk=/drilldown" alt="" />
        <button className="btn btn-outline ">Website</button>
        <button className="btn btn-outline ">Twitter</button>
        <button className="btn btn-outline ">Youtube</button>
      </div>

    </div>
  );
};

export default Instructor;