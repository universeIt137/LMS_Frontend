import ClientNavbar from "./ClientNavbar";
import ClientFooter from './ClientFooter';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
            <ClientNavbar></ClientNavbar>
            <Outlet></Outlet>   
            <ClientFooter></ClientFooter>
            
        
        </div>
    );
};

export default Root;