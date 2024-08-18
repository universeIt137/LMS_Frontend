

import { Outlet, useLocation } from 'react-router-dom';
import ClientNavbar from '../components/clideSide/ClientNavbar';
import SubMenu from '../components/clideSide/SubMenu';
import ClientFooter from '../components/clideSide/ClientFooter';
import NavManu from '../components/clideSide/NavManu';

const MainLayout = () => {
    const isLoginPage = useLocation()?.pathname === '/login';
    const isRegisterPage = useLocation()?.pathname === '/register';
    const isHideNavBar = (isLoginPage || isRegisterPage) ? true : false;
    

    return (
        <div>
            <div>
                {
                    isHideNavBar ? '' : <div className='w-full'>
                        <ClientNavbar></ClientNavbar>
                    </div>
                }
                <div className=' w-full md:w-11/12 mx-auto '>
                    {
                        isHideNavBar ? '' : <div className='w-full'>
                            <SubMenu></SubMenu>
                        </div>
                    }

                    <NavManu></NavManu>
                    <Outlet></Outlet>
                </div>
                <ClientFooter></ClientFooter>
            </div>
        </div>
    );
};

export default MainLayout;