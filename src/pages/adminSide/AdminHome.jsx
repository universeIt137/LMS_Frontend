
import Course from '../../components/adminside/Course';
import LifeTimeSeles from '../../components/adminside/LifeTimeSeles';
import Reviews from '../../components/adminside/Reviews';
const AdminHome = () => {
  return (
    <div className='mx-1 md:mx-3 my-14'>
      <LifeTimeSeles></LifeTimeSeles>
      <Reviews></Reviews>
      <Course></Course>
    </div>
  );
};

export default AdminHome;