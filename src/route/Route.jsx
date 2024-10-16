import {
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "../pages/clientSide/HomePage";
import MainLayout from "../layouts/MainLayout";

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
import AdminLoginPage from "../pages/adminSide/adminLogin/AdminLoginPage.jsx";
import RegisterAdminPage from "../pages/adminSide/adminRegister/RegisterAdminPage.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import { getToken } from "../helper/sessionHelper.js";
import UpdateCoursePage from "../pages/adminSide/courseRelatedPage/updateCourse/UpdateCoursePage.jsx";
import CourseDetailsCreatePage from "../pages/adminSide/courseRelatedPage/courseDetailsCreate/CourseDetailsCreatePage.jsx";
import ManageCourseDetailsPage from "../pages/adminSide/manageCourseDetails/ManageCourseDetailsPage.jsx";
import GetInCoursePage from "../pages/adminSide/courseRelatedPage/getInCourse/GetInCoursePage.jsx";
import CurriculumCreatePage from './../pages/adminSide/courseRelatedPage/curriculumCreate/CurriculumCreatePage';
import UpdateCurriculumPage from './../pages/adminSide/courseRelatedPage/curriculumCreate/UpdateCurriculumPage';
import InstructorCreatePage from "../pages/adminSide/instructor/InstructorCreatePage.jsx";
import ProjectCreatePage from './../pages/adminSide/courseRelatedPage/project/ProjectCreatePage';
import UpdateGetInCoursePage from './../pages/adminSide/courseRelatedPage/updateGetInCourse/UpdateGetInCoursePage';
import UpdateProject from "../pages/adminSide/courseRelatedPage/project/UpdateProject.jsx";
import SuccessfulStudent from "../pages/clientSide/course/SuccessfulStudent.jsx";
import CreateCourseSuccessfulPage from "../pages/adminSide/courseRelatedPage/courseSuccessfulStudent/CreateCourseSuccessfulPage.jsx";
import CourseSuccessfulStudentTable from "../pages/adminSide/courseRelatedPage/courseSuccessfulStudent/CourseSuccessfulStudentTable.jsx";
import CourseSuccessfulStudentUpdatePage from "../pages/adminSide/courseRelatedPage/courseSuccessfulStudent/CourseSuccessfulStudentUpdatePage.jsx";
import CreateFeedbackPage from "../pages/adminSide/courseRelatedPage/feedback/CreateFeedbackPage.jsx";
import UpdateFeedbackPage from "../pages/adminSide/courseRelatedPage/feedback/UpdateFeedbackPage.jsx";
import ModuleCreatePage from "../pages/adminSide/courseRelatedPage/module/ModuleCreatePage.jsx";
import DashboardPage from "../pages/adminSide/dashboardRelated/DashboardPage.jsx";
import UpdateModuleForm from "../pages/adminSide/courseRelatedPage/module/UpdateModuleForm.jsx";
import ModuleDetailsForm from "../pages/adminSide/courseRelatedPage/mouduleDetails/ModuleDetailsForm.jsx";
import ManageModuleDetails from "../pages/adminSide/courseRelatedPage/mouduleDetails/ManageModuleDetails.jsx";
import UpdateModuleDetails from "../pages/adminSide/courseRelatedPage/mouduleDetails/UpdateModuleDetails.jsx";
import AssignmentManage from "../pages/adminSide/courseRelatedPage/assignment/AssignmentManage.jsx";
import RecordedForm from "../pages/adminSide/courseRelatedPage/pre-recorded/RecordedForm.jsx";
import RecordedManage from "../pages/adminSide/courseRelatedPage/pre-recorded/RecordedManage.jsx";

const token = {
  headers: {
    'Authorization': `${getToken()}`
  }
}






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
        path: "profile",
        element: <Profile></Profile>,
        children: [
          {
            path: "profile/form",
            element: <ProfileForm></ProfileForm>
          },
          {
            path: "profile/my-course",
            element: <MyCourse></MyCourse>
          },
          {
            path: 'profile/my-reviews',
            element: <MyReviews></MyReviews>
          }
        ]
      }



    ]

  },
  {
    path: "/admin-login",
    element: <AdminLoginPage></AdminLoginPage>
  },
  {
    path: "/admin-register",
    element: <RegisterAdminPage></RegisterAdminPage>
  },


  // start admin route 
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>
      },
      {
        path: "add-course",
        element: <AddCoursePage></AddCoursePage>
      },
      {
        path: "manage-courses",
        element: <ManageCoursePage></ManageCoursePage>
      },
      {
        path: "course-update/:id",
        element: <UpdateCoursePage></UpdateCoursePage>
      },
      {
        path: "course-details-create/:id",
        element: <CourseDetailsCreatePage></CourseDetailsCreatePage>
      },
      {
        path: "manage-courses-details",
        element: <ManageCourseDetailsPage></ManageCourseDetailsPage>
      },
      {
        path: "get-in-course",
        element: <GetInCoursePage></GetInCoursePage>
      },
      {
        path: "curriculum-create",
        element: <CurriculumCreatePage></CurriculumCreatePage>
      },
      {
        path: "curriculum-update/:id",
        element: <UpdateCurriculumPage></UpdateCurriculumPage>
      },
      {
        path: "instructor-create",
        element: <InstructorCreatePage></InstructorCreatePage>
      },
      {
        path: "project-create/:id",
        element: <ProjectCreatePage></ProjectCreatePage>
      },
      {
        path: "update/:id",
        element: <UpdateGetInCoursePage></UpdateGetInCoursePage>
      },
      {
        path: "project-update/:id",
        element: <UpdateProject></UpdateProject>
      },
      {
        path: "successful-course-student-create",
        element: <CreateCourseSuccessfulPage></CreateCourseSuccessfulPage>
      },
      {
        path : "course-successful-student-update/:id",
        element : <CourseSuccessfulStudentUpdatePage></CourseSuccessfulStudentUpdatePage>
      },
      {
        path: "feedback-create/:id",
        element: <CreateFeedbackPage></CreateFeedbackPage>
      },
      {
        path: "feedback-update/:id",
        element: <UpdateFeedbackPage></UpdateFeedbackPage>
      },
      {
        path: "module-create/:id",
        element: <ModuleCreatePage></ModuleCreatePage>
      },
      {
        path: "module-update/:id",
        element: <UpdateModuleForm></UpdateModuleForm>
      },
      {
        path: "module-details/:id",
        element: <ManageModuleDetails></ManageModuleDetails>
      },
      {
        path: "module-details-update/:id",
        element: <UpdateModuleDetails></UpdateModuleDetails>
      },
      {
        path: "assignment-create/:id",
        element: <AssignmentManage></AssignmentManage>
      },
      {
        path: "pre-recorded-videos-create/:id",
        element: <RecordedManage></RecordedManage>
      }


    ]
  }

]);