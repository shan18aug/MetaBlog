import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { status, loading } = useSelector((state) => state.auth);

  if (loading) {
    return null;
  }

  return status ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
