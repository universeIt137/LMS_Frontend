import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExpertPersionCard = ({img,name, discriptioin}) => {
  return (
    <div >
      <div className="card bg-base-100  shadow-xl h-[450px]">
        <figure className="px-10 pt-10 rounded-3xl">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}
          </h2>
          <p>{discriptioin}</p>
          <div className="card-actions flex gap-2 justify-center ">
           <Link> <FaFacebook></FaFacebook></Link>
           <Link> <FaLinkedin></FaLinkedin></Link>
           <Link> <FaTwitter></FaTwitter></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPersionCard;