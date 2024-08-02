import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/adminSide/Dashboard";
import Root from "../pages/clientSide/Root";


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>

  },
  {
    path:"/admin-pannel",
    element:<Dashboard></Dashboard>
  }
]);