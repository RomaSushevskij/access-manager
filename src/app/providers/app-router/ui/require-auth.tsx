import { Navigate, useLocation } from "react-router-dom";
import { type ReactElement } from "react";

import { RoutePath } from "@/shared/config/routeConfig";
import { useAuthStore } from "@/entities/auth";

export const RequireAuth = ({ children }: { children: ReactElement }) => {
  const isAuth = useAuthStore((state) => Boolean(state.authData));
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.sign_in} state={{ from: location }} replace />;
  }

  return children;
};
