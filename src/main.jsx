import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './components/Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:{
      path:"/home",
      element:<Home></Home>
    }
  },
]);
=======
import { RouterProvider } from 'react-router-dom'
import { router } from './route/Route.jsx'

>>>>>>> cbc05c47427d031ded44c570871461fe9592055f
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
