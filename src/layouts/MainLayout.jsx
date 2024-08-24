
import { Outlet } from 'react-router-dom';
import ClientNavbar from '../components/clideSide/ClientNavbar';
import ClientFooter from '../components/clideSide/ClientFooter';

const MainLayout = () => {
    return (
        <div>
            <div>

                <ClientNavbar></ClientNavbar>

                <div className='w-11/12 mx-auto'>

                    <Outlet></Outlet>
                </div>
                <ClientFooter></ClientFooter>
            </div>
        </div>
    );
};

export default MainLayout;