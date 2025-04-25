import { Navigate, useLocation } from "react-router-dom";
import { type ReactElement } from "react";

import { RoutePath } from "@/shared/config/routeConfig";
import { useAuthStore } from "@/entities/auth";

export const RequireNotAuth = ({ children }: { children: ReactElement }) => {
  const isAuth = useAuthStore((state) => Boolean(state.authData));
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
