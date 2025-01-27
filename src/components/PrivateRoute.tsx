import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { getJwtTokenFromCookie } from "../utils/JWT";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = getJwtTokenFromCookie();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
