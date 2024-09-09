import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute/AdminRoute.jsx";
import MemberRoute from "./Routes/MemberRoute/MemberRoute.jsx";

import Login from "./Pages/LogIn/Login.jsx";

const isAuthenticated = true;
const userRole = "admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login userRole={userRole} />,
  },
  {
    path: "admin",
    element: (
      <AdminRoute isAuthenticated={isAuthenticated} userRole={userRole} />
    ),
  },
  {
    path: "member",
    element: (
      <MemberRoute isAuthenticated={isAuthenticated} userRole={userRole} />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
