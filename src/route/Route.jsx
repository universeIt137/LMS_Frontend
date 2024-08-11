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
import TeamTraining from "../pages/clientSide/TeamTraining";
import TeamPageContent from "../components/clideSide/TeamPageContent";

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
        path: "/about",
        element: <HomePage></HomePage>
      },

      {
        path: "/course-bundle",
        element: <CourseBundle></CourseBundle>
      }

    ]

  },
  {
    path:"/team-training",
    element:<TeamTraining></TeamTraining>,
   children:[
    {
      path:"/team-training",
      element:<TeamPageContent></TeamPageContent>
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