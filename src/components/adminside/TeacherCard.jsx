import { IoIosCall } from "react-icons/io";

const TeacherCard = () => {
 return (
<div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://media.licdn.com/dms/image/D5603AQGT3SBXhOLe7w/profile-displayphoto-shrink_800_800/0/1712149505841?e=1728518400&v=beta&t=bJIJS2H8mIqDw5fonkyRNwLJpt5OS1uc5lIfPc-Nzos"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Ashikur Sir</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions w-1/4">
      <button className="btn  w-full btn-primary"><IoIosCall /></button>
    </div>
  </div>
</div>
 );
};

export default TeacherCard;