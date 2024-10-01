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
import CourseDetailsPage from "../pages/clientSide/course/CourseDetailsPage";
import CourseCategoryPage from "../pages/clientSide/courseCatagory/CourseCategoryPage.jsx";
import ShoppingCart from "../pages/clientSide/shoppingCart/ShoppingCart.jsx";
import CheckoutPage from "../pages/clientSide/checkoutPage/CheckoutPage.jsx";
import OrderComplete from "../pages/clientSide/orderComplete/OrderComplete.jsx";
import Mentor from "../pages/clientSide/mentorPage/Mentor.jsx";
import Profile from "../pages/clientSide/profile/Profile.jsx";
import ProfileForm from "../pages/clientSide/profile/ProfileForm.jsx";
import MyCourse from "../pages/clientSide/profile/MyCourse.jsx";
import MyReviews from "../pages/clientSide/profile/MyReviews.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import AddCoursePage from "../pages/adminSide/courseRelatedPage/addCourse/AddCoursePage.jsx";
import ManageCoursePage from './../pages/adminSide/courseRelatedPage/manageCourse/ManageCoursePage';



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

        path: "/course-details",
        element: <CourseDetailsPage></CourseDetailsPage>

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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/course-category",
        element: <CourseCategoryPage></CourseCategoryPage>

      }
      ,
      {
        path: "/shopping-cart",
        element: <ShoppingCart></ShoppingCart>
      },
      {
        path: '/checkout',
        element: <CheckoutPage></CheckoutPage>
      },
      {
        path: '/order-complete',
        element: <OrderComplete></OrderComplete>

      },
      {
        path: '/mentor-page',
        element: <Mentor></Mentor>

      },
      {
        path:"profile",
        element:<Profile></Profile>,
        children:[
          {
            path:"profile/form",
            element:<ProfileForm></ProfileForm>
          },
          {
            path:"profile/my-course",
            element:<MyCourse></MyCourse>
          },
          {
            path:'profile/my-reviews',
            element:<MyReviews></MyReviews>
          }
        ]
      }



    ]

  },


  // start admin route 
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path : "add-course",
        element : <AddCoursePage></AddCoursePage>
      },
      {
        path : "manage-courses",
        element : <ManageCoursePage></ManageCoursePage>
      }
      

      ]
  }
]);