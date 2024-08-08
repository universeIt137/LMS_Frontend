import React from 'react';

import { Outlet } from 'react-router-dom';
import ClientNavbar from '../components/clideSide/ClientNavbar';
import SubMenu from '../components/clideSide/SubMenu';
import ClientFooter from '../components/clideSide/ClientFooter';

const MainLayout = () => {
    return (
        <div>
            <div>
            <ClientNavbar></ClientNavbar>
            <SubMenu></SubMenu>
            <Outlet></Outlet>
            <br />
            <br />   
            
            <ClientFooter></ClientFooter>
        
        </div>
        </div>
    );
};

export default MainLayout;