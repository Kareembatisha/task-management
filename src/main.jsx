import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/LogIn/Login.jsx";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute.jsx";
import PublicRoute from "./Routes/PublicRoute/PublicRoute.jsx";
import DashBoard from "./Routes/PublicRoute/DashBoard/DashBoard.jsx";

const isAuthenticated = true; // Replace with real authentication check
const userRole = "admin";

// Conditionally create the routes based on the authentication status
const routes = isAuthenticated
  ? [
      {
        path: "/",
        element: (
          <PublicRoute isAuthenticated={isAuthenticated} userRole={userRole} />
        ),
        children: [{ index:true, element: <DashBoard /> }],
      },
    ]
  : [
      {
        path: "/",
        element: <PrivateRoute isAuthenticated={isAuthenticated} />,
        children: [
          { index: true, element: <App /> },
          { path: "login", element: <Login userRole={userRole} /> },
        ],
      },
    ];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
