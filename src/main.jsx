import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminRoute from './Routes/AdminRoute/AdminRoute.jsx'
import MemberRoute from "./Routes/MemberRoute/MemberRoute.jsx";
import AdminSignIn from './Pages/Admin/AdminSignIn/AdminSignIn.jsx'
import MemberSignIn from "./Pages/Member/MemberSignIn/MemberSignIn.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <AdminRoute />,
    children: [
      {
        path: "login",
        element: <AdminSignIn />,
      },
    ],
  },
  {
    path: "member",
    element: <MemberRoute />,
    children: [
      {
        path: "login",
        element: <MemberSignIn />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
