import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/adminSide/Dashboard";
import AdminHome from "../pages/adminSide/AdminHome";
import User from "../pages/adminSide/pages/User";

 export const router = createBrowserRouter([
  {
    path: "/home ",
    element: <div>Hello world!</div>,
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