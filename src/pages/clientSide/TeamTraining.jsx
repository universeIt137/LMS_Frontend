import { Outlet } from "react-router-dom";
import ClientNavbar from "../../components/clideSide/ClientNavbar";
import NavManu from "../../components/clideSide/NavManu";
import SubMenu from "../../components/clideSide/SubMenu";
import TeamCategoriesSidebar from "../../components/clideSide/TeamCategoriesSidebar";
import ClientFooter from "../../components/clideSide/ClientFooter";
import CourseBundleBaner from "../../components/clideSide/CourseBundleBaner";
import TeamCategoriesSearch from "../../components/clideSide/TeamCategoriesSearch";

const TeamTraining = () => {
 return (
 <div>
 <div>
            <div >
          <div className='w-full'>
          <ClientNavbar></ClientNavbar>
         
          </div>
         <div className='w-11/12 mx-auto '>
         <SubMenu></SubMenu>
         <NavManu></NavManu>
         <CourseBundleBaner  subText={"Team"} titleText={'Team'}></CourseBundleBaner>
          <div className="flex "> 
            <div>
              <TeamCategoriesSidebar></TeamCategoriesSidebar>
            </div>
              <div>
                <TeamCategoriesSearch></TeamCategoriesSearch>
                <Outlet></Outlet>
              </div>
          </div>
         </div>
            
            
            <ClientFooter></ClientFooter>
        
        </div>
        </div>
 </div>
 );
};

export default TeamTraining;