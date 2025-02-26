import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux"; // If using Redux

const ProtectedRoute = () => {
//   const user = useSelector((state) => state.auth.user); // Get user from Redux store

const allowedRoles = localStorage.getItem("role");
  if (!allowedRoles) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(allowedRoles)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
