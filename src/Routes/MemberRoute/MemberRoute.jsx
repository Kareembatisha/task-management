// MemberRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

const MemberRoute = ({ isAuthenticated, userRole }) => {
  return (
    <PrivateRoute isAuthenticated={isAuthenticated}>
      {userRole === "member" ? <Outlet /> : <Navigate to="/login" />}
    </PrivateRoute>
  );
};

export default MemberRoute;
