import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/adminSide/Dashboard";
import AdminHome from "../pages/adminSide/AdminHome";
import HomePage from "../pages/clientSide/HomePage";
import MainLayout from "../layouts/MainLayout";
import Students from "../pages/adminSide/pages/Students";
import Teachers from "../pages/adminSide/pages/Teachers";
import CourseBundle from "../pages/clientSide/CourseBundle";
import BootCamp from "../pages/clientSide/BootCamp";
import TeamTraining from "../pages/clientSide/TeamTraining";
import Login from "../pages/clientSide/loginpage/Login";
import Register from "../pages/clientSide/registerpage/Register";
import CoursePage from "../pages/clientSide/course/CoursePage";



export const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>

      },
      

      {
        path: "/course-bundle",
        element: <CourseBundle></CourseBundle>
      },
      {
        path: "/courseDetails",
        element: <CoursePage></CoursePage>
      },
      {
        path: "/bootCamp",
        element: <BootCamp></BootCamp>
      },
      {
        path: "/team-training",
        element: <TeamTraining></TeamTraining>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }

    ]

  },
  

  // start admin route 
  {
    path: "/admin",
    element: <Dashboard></Dashboard>,
    children: [{
      path: "/admin/dashboard",
      element: <AdminHome></AdminHome>
    },
    {
      path: "/admin/students",
      element: <Students></Students>
    },
    {
      path: "/admin/teachers",
      element: <Teachers></Teachers>
    },
    ]

  }
]);