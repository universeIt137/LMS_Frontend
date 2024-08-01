import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/adminSide/Dashboard";

 export const router = createBrowserRouter([
  {
    path: "/home ",
    element: <div>Hello world!</div>,
  },
  {
    path:"/admin-pannel",
    element:<Dashboard></Dashboard>
  }
]);