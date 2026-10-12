
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/userContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, authReady } = useAuth();
  const location = useLocation();

  if (!authReady) {
    return <p className="p-8 text-center">Loading...</p>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
