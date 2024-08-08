

import { Outlet } from 'react-router-dom';
import ClientNavbar from '../components/clideSide/ClientNavbar';
import SubMenu from '../components/clideSide/SubMenu';
import ClientFooter from '../components/clideSide/ClientFooter';

const MainLayout = () => {
    return (
        <div>
            <div >
          <div className='w-full'>
          <ClientNavbar></ClientNavbar>
         
          </div>
         <div className='w-11/12 mx-auto '>
         <SubMenu></SubMenu>
         <Outlet></Outlet>
         </div>
            
            
            <ClientFooter></ClientFooter>
        
        </div>
        </div>
    );
};

export default MainLayout;