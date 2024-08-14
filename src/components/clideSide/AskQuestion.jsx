import { Link } from "react-router-dom";
import SectionTittle from './SectionTittle';


const AskQuestion = () => {
  return (
    <div className="  space-y-5 my-10 ">
      {/* AskQuestion headLine */}
      <SectionTittle title={"Frequently asked questions"} subtitle={"Have something to know? Check here if you have any questions about us"}></SectionTittle>

      <div className="w-11/12 mx-auto">
        {/* question div */}
        <div tabIndex={0} className="collapse collapse-plus border-base-500  border">
          <div className="collapse-title text-2xl py-5 font-medium hover:text-[#754FFE] list-disc ">
            <li>What is a Learning Management System (LMS)?</li>
          </div>
          <div className="collapse-content text-[#6E79A4]">
            <p> A Learning Management System is a software application or platform designed to manage and deliver online educational courses, training programs, and learning content. It provides a centralized system for instructors to create, organize, track, and assess learning materials and activities.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus border-base-300  border">
          <div className="collapse-title text-2xl py-5 font-medium hover:text-[#754FFE] list-disc ">
            <li>
            How can an LMS benefit educational institutions and organizations?

            </li>
          </div>
          <div className="collapse-content text-[#6E79A4]">
            <p> 
              An LMS offers several benefits, such as:

              Centralized access to learning materials and resources.
              Efficient administration and management of courses and learners.
              Flexibility and scalability in delivering online education or training.
              Tracking and reporting on learner progress and performance.
              Improved communication and collaboration among instructors and learners.
              Cost savings by reducing the need for physical infrastructure.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus border-base-300  border">
          <div className="collapse-title text-2xl py-5 font-medium hover:text-[#754FFE] list-disc ">
            <li>
              What are the key features of an LMS?

            </li>
          </div>
          <div className="collapse-content text-[#6E79A4]">
            <p> Common features of an LMS include course management, content creation and delivery, student enrollment and tracking, assessment and grading tools, communication and collaboration tools, reporting and analytics, and integration with other systems or tools.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-plus border-base-300  border">
          <div className="collapse-title text-2xl py-5 font-medium hover:text-[#754FFE] list-disc ">
            <li>
            Is an LMS suitable for both academic and corporate settings?
            </li>
          </div>
          <div className="collapse-content text-[#6E79A4]">
            <p> Yes, an LMS can be used in both academic and corporate environments. In academic settings, it facilitates online learning, course management, and assessment for schools, colleges, and universities. In corporate settings, it supports employee training, onboarding programs, skills development, and compliance training.</p>
          </div>
        </div>

       <div className=" mt-6">
       <Link to="/" >
        <button className="btn bg-[#754FFE] text-white text-xs px-10 py-3">See More</button>
        </Link>
       </div>
      

      </div>

    </div>
  );
};

export default AskQuestion;