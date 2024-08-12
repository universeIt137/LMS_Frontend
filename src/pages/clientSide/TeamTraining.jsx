import TeamCategoriesSidebar from "../../components/clideSide/TeamCategoriesSidebar";
import CourseBundleBaner from "../../components/clideSide/CourseBundleBaner";
import TeamCategoriesSearch from "../../components/clideSide/TeamCategoriesSearch";
import TeamPageContent from "../../components/clideSide/TeamPageContent";
import { Helmet } from "react-helmet-async";

const TeamTraining = () => {
  return (
    <div>
      <Helmet>
        <title>LMS | Team trainings</title>
      </Helmet>
      <div>
        <div >
          <div className='w-full'>


          </div>
          <div className='w-11/12 mx-auto '>

            <CourseBundleBaner subText={"Team"} titleText={'Team'}></CourseBundleBaner>
            <div className="flex ">
              <div>
                <TeamCategoriesSidebar></TeamCategoriesSidebar>
              </div>
              <div>
                <TeamCategoriesSearch></TeamCategoriesSearch>
                <TeamPageContent></TeamPageContent>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default TeamTraining;