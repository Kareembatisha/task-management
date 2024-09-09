// AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

const AdminRoute = ({ isAuthenticated, userRole }) => {
  return (
    <PrivateRoute isAuthenticated={isAuthenticated}>
      {userRole === "admin" ? <Outlet /> : <Navigate to="/login" />}
    </PrivateRoute>
  );
};

export default AdminRoute;
