import LifeTimeSelesCard from "./LifeTimeSelesCard";
import LifeTimeSelesChart from './LifeTimeSelesChart';

const LifeTimeSeles = () => {
  return (
    <div className="flex mb-12">
      <div className="m-4">
        <LifeTimeSelesCard revenue={'1k'} text={'Life Time Courses Commission'}></LifeTimeSelesCard>
        <LifeTimeSelesCard revenue={'800.0'} text={'Life Time Received Commission'}></LifeTimeSelesCard>
        <LifeTimeSelesCard revenue={'200.00'} text={'Life Time Pending Commission'}></LifeTimeSelesCard>
      </div>
      <div>
        <LifeTimeSelesChart></LifeTimeSelesChart>
      </div>

    </div>
  );
};

export default LifeTimeSeles;