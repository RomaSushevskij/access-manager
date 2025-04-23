import { type RouteProps } from "react-router";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";
import { UsersPage } from "@/pages/users-page";
import { LogsPage } from "@/pages/logs-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { SignInPage } from "@/pages/sign-in-page";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  notAuthOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <UsersPage />,
    authOnly: true,
  },
  [AppRoutes.LOGS]: {
    path: RoutePath.logs,
    element: <LogsPage />,
    authOnly: true,
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePath.sign_in,
    element: <SignInPage />,
    notAuthOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
