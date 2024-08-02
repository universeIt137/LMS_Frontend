import GeneralCards from "./componect/GeneralCards";
import PerformanceInsights from "./componect/PerformanceInsights";
import GeneralReport from "./GeneralReport";

const AdminHome = () => {
  return (
    <div>
      <GeneralReport></GeneralReport>
      <GeneralCards></GeneralCards>
      <PerformanceInsights></PerformanceInsights>
    </div>
  );
};

export default AdminHome;