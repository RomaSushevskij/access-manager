import { Navigate, useLocation } from "react-router-dom";
import { type ReactElement } from "react";

import { useAuthStore } from "@/features/auth";
import { RoutePath } from "@/shared/config/routeConfig";

export const RequireAuth = ({ children }: { children: ReactElement }) => {
  const isAuth = useAuthStore((state) => Boolean(state.authData));
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.sign_in} state={{ from: location }} replace />;
  }

  return children;
};
