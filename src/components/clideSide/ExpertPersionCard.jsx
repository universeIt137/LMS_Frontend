import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ExpertPersionCard = ({img,name, discriptioin}) => {
  return (
    <div >
      <div className="card   pt-5 shadow-xl  h-[500px]">
        <figure className="p-5 rounded-2xl">
          <img
            src={img}
            alt="Shoes"
            className="rounded-2xl bg-no-repeat bg-cover  " />
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