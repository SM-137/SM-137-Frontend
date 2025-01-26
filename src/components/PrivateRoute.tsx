import { Navigate } from "react-router-dom";
import { getJwtTokenFromCookie } from "../utils/Cookie";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = getJwtTokenFromCookie();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
