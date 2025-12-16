import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token exists → allow access
  if (token) {
    return children;
  }

  // If no token → redirect to signup
  return <Navigate to="/signup" />;
};

export default ProtectedRoute;
