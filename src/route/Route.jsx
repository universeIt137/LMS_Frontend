import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/adminSide/Dashboard";
import AdminHome from "../pages/adminSide/AdminHome";
import User from "../pages/adminSide/pages/User";
import HomePage from "../pages/clientSide/HomePage";
import MainLayout from "../layouts/MainLayout";

 export const router = createBrowserRouter([
 
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
    {
      path:"/",
      element:<HomePage></HomePage>
      
    },
    {
      path:"/about",
      element:<HomePage></HomePage>
    }

    ]

  },
  {
    path:"/admin",
    element:<Dashboard></Dashboard>,
    children:[{
      path:"/admin/dashboard",
      element:<AdminHome></AdminHome>
    },
   {
    path:"/admin/user",
    element:<User></User>
   }
  ]

  }
]);