import { Navigate, useLocation } from "react-router-dom";
import { type ReactElement } from "react";

import { useAuthStore } from "@/features/auth";
import { RoutePath } from "@/shared/config/routeConfig";

export const RequireNotAuth = ({ children }: { children: ReactElement }) => {
  const isAuth = useAuthStore((state) => Boolean(state.authData));
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
